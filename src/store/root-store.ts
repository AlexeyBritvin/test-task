import { State } from 'vuex-simple';

export default class RootStore {
  @State()
  public todos = [];
}