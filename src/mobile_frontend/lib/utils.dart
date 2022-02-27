import 'package:dio/dio.dart' as dio;
import '../constants.dart' show apiUrl;

Future<dio.Response> requestApi(String method, String endpoint,
    {Map<String, String> headers = const {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    Map<dynamic, dynamic>? data}) async {
  dio.Dio client = dio.Dio();
  String url = "$apiUrl/$endpoint/";

  switch (method.toUpperCase()) {
    case "GET":
      return await client.get(url, options: dio.Options(headers: headers));
    case "POST":
      return await client.post(url,
          data: data, options: dio.Options(headers: headers));
    case "PATCH":
      return await client.patch(url,
          data: data, options: dio.Options(headers: headers));
    case "PUT":
      return await client.put(url,
          data: data, options: dio.Options(headers: headers));
    default:
      throw Exception("Invalid http method $method");
  }
}
