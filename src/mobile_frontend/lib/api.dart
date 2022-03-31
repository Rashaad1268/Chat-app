import 'package:dio/dio.dart';

const apiUrl = 'http://127.0.0.1:8000/api/';

final dio = Dio(BaseOptions(baseUrl: apiUrl));

class InvalidAccessToken implements Exception {}

class InvalidRefreshToken implements Exception {}

Options getDefaultRequestOptions([Map<String, dynamic>? headers]) {
  /*
  Return the default Options we need to use when making a request
  */
  return Options(
    headers: headers,

    // Ignore 400 status because the reason for it is invalid user input
    followRedirects: false,
    validateStatus: (status) {
      return status! < 500;
    },
  );
}

Future<Response> requestApi(String method, String endpoint,
    {Map<String, dynamic>? headers,
    Map<String, dynamic>? queryParams,
    Map<String, dynamic>? data}) async {
  final Response response;
  switch (method.toUpperCase()) {
    case 'GET':
      response = await dio.get(endpoint,
          queryParameters: queryParams,
          options: getDefaultRequestOptions(headers));
      break;

    case 'POST':
      response = await dio.post(endpoint,
          queryParameters: queryParams,
          data: data,
          options: getDefaultRequestOptions(headers));
      break;

    case 'PATCH':
      response = await dio.patch(endpoint,
          queryParameters: queryParams,
          data: data,
          options: getDefaultRequestOptions(headers));
      break;

    case 'PUT':
      response = await dio.put(endpoint,
          queryParameters: queryParams,
          data: data,
          options: getDefaultRequestOptions(headers));
      break;

    default:
      throw Exception('Unsupported http method $method');
  }

  if (response.statusCode == 401) throw InvalidAccessToken();

  return response;
}

Future<String> getNewAccessToken(String refreshToken) async {
  final response = await requestApi('post', 'auth/token/refresh/',
      data: {'refresh': refreshToken});

  if (response.statusCode == 401) throw InvalidRefreshToken();

  return response.data['access'];
}

Future<Response?> requestApiAndUpdateTokens(String method, String endpoint,
    Map tokens, Function setTokens, Function setIsLoggedIn,
    {Map<String, dynamic>? headers,
    Map<String, dynamic>? queryParams,
    Map<String, dynamic>? data}) async {
  /*
  Same as requestApi but if the access token is expired generate a new access token using the refresh token.
  if the refresh token is expired promt the user to login again
  */

  try {
    final apiResponse = await requestApi(method, endpoint,
        headers: headers, queryParams: queryParams, data: data);

    return apiResponse;
  } on InvalidAccessToken {
    print("invalid access token");
    getNewAccessToken(tokens['refresh']).then((newAccessToken) {
      setTokens(access: newAccessToken);
    }).catchError((error) {
      if (error.runtimeType == InvalidRefreshToken) {
        print("invalid refresh token");
        setIsLoggedIn(false);
        return null;
      } else {
        throw error;
      }
    });
  }
}
