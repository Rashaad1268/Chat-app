import 'package:flutter/material.dart';

Color fromListRGBO(List<dynamic> values) {
  return Color.fromARGB(values[0], values[1], values[2], values[3]);
}
