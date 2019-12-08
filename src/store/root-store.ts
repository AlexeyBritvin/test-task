import { Module } from 'vuex-simple';
import CalendarStore from '@/modules/Calendar/store/CalendarStore';
import TodoListStore, { TodoListState } from '@/modules/TodoList/store/TodoListStore';

const todos: TodoListState = {
  3: [{
    text: 'Buy a bread',
    completed: false
  }, {
    text: 'Visit my doctor',
    completed: false
  }],
  19: [{
    text: 'Buy tickets to Prague',
    completed: false
  }]
}

export default class RootStore {
  @Module()
  public calendar = new CalendarStore(new Date().getDate());

  @Module()
  public todoList= new TodoListStore(todos);
}