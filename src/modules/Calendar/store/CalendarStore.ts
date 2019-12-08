import { State, Mutation } from 'vuex-simple';

export default class CalendarStore {
  @State()
  public activeDay: number;

  constructor(day: number) {
    this.activeDay = day;
  }

  @Mutation()
  public setActiveDay(day: number) {
    this.activeDay = day;
  }
}