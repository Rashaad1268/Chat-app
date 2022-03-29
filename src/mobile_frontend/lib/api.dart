import 'package:dio/dio.dart';

const apiUrl = 'http://127.0.0.1:8000/api/';

final dio = Dio(BaseOptions(baseUrl: apiUrl));

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
  switch (method.toUpperCase()) {
    case 'GET':
      return await dio.get(endpoint,
          queryParameters: queryParams,
          options: getDefaultRequestOptions(headers));

    case 'POST':
      return await dio.post(endpoint,
          queryParameters: queryParams,
          data: data,
          options: getDefaultRequestOptions(headers));

    case 'PATCH':
      return await dio.patch(endpoint,
          queryParameters: queryParams,
          data: data,
          options: getDefaultRequestOptions(headers));

    case 'PUT':
      return await dio.put(endpoint,
          queryParameters: queryParams,
          data: data,
          options: getDefaultRequestOptions(headers));

    default:
      throw Exception('Unsupported http method $method');
  }
}

Future<String> getNewAccessToken(String refreshToken) async {
  final response = await requestApi('post', 'token/verify/',
      data: {'refresh': refreshToken});
  print(response);
  return response.data['access'];
}
