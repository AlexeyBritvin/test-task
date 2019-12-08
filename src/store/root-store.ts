import { State, Module } from 'vuex-simple';
import CalendarStore from '@/modules/Calendar/store/CalendarStore';

export default class RootStore {
  @State()
  public todos = [];

  @Module()
  public calendar = new CalendarStore(new Date().getDate());
}