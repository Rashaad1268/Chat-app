import 'package:bloc/bloc.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

enum MessageEvent { set, create, edit, delete }


class MessageBloc extends Bloc<MessageEvent, Map<String, List<Map>>> {
  MessageBloc(Map<String, List<Map>> initialState) : super(initialState);

  Map<String, List<Map>> get initialState => {};

  Stream<Map<String, List<Map>>> mapEventToState(Map<String, List<Map>> currentState, MessageEvent event) async* {
    switch (event) {
      case MessageEvent.set:
        yield {};
        break;
      default:
    }
  }
}
