import { State, Mutation, Getter } from 'vuex-simple';
import Todo from '../models/todo.model';

export interface TodoListState {
  [day: number]: Todo[];
}

export default class TodoListStore {
  @State()
  public todos: TodoListState;

  constructor(todos: TodoListState) {
    this.todos = todos;
  }

  @Mutation()
  addTodo(param: {todo: Todo, day: number}) {
    const {day, todo} = param;
    if (this.todos.hasOwnProperty(day)) {
      this.todos[day].push(todo);
    } else {
      this.todos[day] = [todo];
    }
  }

  @Getter()
  public get dailyTodos() {
    return (day: number) => {
      return this.todos[day] || [];
    }
  }
}