import 'package:dio/dio.dart';
import 'constants.dart' show JWTTokenNotifier, apiUrl;

class InvalidAccessToken implements Exception {}

class InvalidRefreshToken implements Exception {}

class APIClient {
  final JWTTokenNotifier jwtTokenNotifier;

  APIClient(this.jwtTokenNotifier);

  final _dio = Dio(BaseOptions(baseUrl: apiUrl));

  Dio get dio => _dio;

  Options getDefaultRequestOptions([Map<String, dynamic> headers = const {}]) {
    /*
      Return the default Options we need to use when making a request
    */
    if (jwtTokenNotifier.data['tokens'].containsKey('access')) {
      headers.putIfAbsent(
          'Authorization', () => "Bearer ${jwtTokenNotifier.data['tokens']['access']}");
    }

    return Options(
      headers: headers,

      // Ignore 400 status because the reason for it is invalid user input
      followRedirects: false,
      validateStatus: (status) {
        return status! < 500;
      },
    );
  }

  Future<Response> makeRequest(String method, String endpoint,
      {Map<String, dynamic>? headers,
      Map<String, dynamic>? queryParams,
      Map<String, dynamic>? data}) async {
    final Response response;
    final _headers = getDefaultRequestOptions(headers ?? {});
    switch (method.toUpperCase()) {
      case 'GET':
        response = await dio.get(endpoint,
            queryParameters: queryParams, options: _headers);
        break;

      case 'POST':
        response = await dio.post(endpoint,
            queryParameters: queryParams, data: data, options: _headers);
        break;

      case 'PATCH':
        response = await dio.patch(endpoint,
            queryParameters: queryParams, data: data, options: _headers);
        break;

      case 'PUT':
        response = await dio.put(endpoint,
            queryParameters: queryParams, data: data, options: _headers);
        break;

      default:
        throw Exception('Unsupported http method $method');
    }

    if (response.statusCode == 401) throw InvalidAccessToken();

    return response;
  }

  Future<String> getAccessToken(String refreshToken) async {
    Response? response;
    try {
      response = await makeRequest('post', 'auth/token/refresh/',
          data: {'refresh': refreshToken});
    } on InvalidAccessToken {
      throw InvalidRefreshToken();
    }
    return response.data['access'];
  }

  Future<Response?> requestApi(String method, String endpoint,
      {Map<String, dynamic>? headers,
      Map<String, dynamic>? queryParams,
      Map<String, dynamic>? data}) async {
    /*
      Same as requestApi but if the access token is expired generate a new access token using the refresh token.
      if the refresh token is expired promt the user to login again
    */
    Response? apiResponse;

    try {
      apiResponse = await makeRequest(method, endpoint,
          headers: headers, queryParams: queryParams, data: data);
    } on InvalidAccessToken {
      print("invalid access token"); // for debug purposes
      getAccessToken(jwtTokenNotifier.data['tokens']['refresh'])
          .then((newAccessToken) {
        jwtTokenNotifier.setTokens(
            access: newAccessToken,
            refresh: jwtTokenNotifier.data['tokens']['refresh']);
      }).catchError((error) {
        if (error.runtimeType == InvalidRefreshToken) {
          print("invalid refresh token");
          jwtTokenNotifier.setIsLoggedIn(false);
          return null;
        } else {
          throw error;
        }
      });
    }

    return apiResponse;
  }
}
