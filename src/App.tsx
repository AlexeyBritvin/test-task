import { Component, Vue } from 'vue-property-decorator';
import Calendar from './modules/Calendar/Calendar';
import TodoList from './modules/TodoList/TodoList';

import './App.css'
import layout from './styles/layout.css?module';

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app">
        <div class={layout.row}>
          <Calendar></Calendar>
          <TodoList></TodoList>
        </div>
      </div>
    )
  }
}
