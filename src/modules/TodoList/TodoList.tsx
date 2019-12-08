import { Component, Vue } from 'vue-property-decorator';
import RootStore from '@/store/root-store';
import { useStore } from 'vuex-simple';
import TodoItem from './TodoItem/TodoItem';
import Todo from './models/todo.model';

import layout from '@/styles/layout.css?module';
import styles from './TodoList.css?module';

@Component
export default class TodoList extends Vue {
  private store = useStore<RootStore>(this.$store);
  private newTodo: string = '';

  private onSubmit(event: Event) {
    event.preventDefault();
    if (this.newTodo) {
      this.addTodo();
    }
  }

  private get currentDay() {
    return this.store.calendar.activeDay;
  }

  private get todos(): Todo[] {
    return this.store.todoList.dailyTodos(this.currentDay);
  }

  private addTodo() {
    this.store.todoList.addTodo({
      todo: {
        text: this.newTodo,
        completed: false
      },
      day: this.currentDay
    });
    this.newTodo = '';
  }

  render() {
    return (
      <div class={layout.box}>
        <p class={layout.boxTitle}>События</p>
        <div>
          { this.todos.map(todo => <TodoItem todo={todo}></TodoItem>) }
        </div>
        <div class={styles.addTodo}>
          <form onSubmit={this.onSubmit}>
            <input class={styles.addTodoInput} 
                  v-model={this.newTodo} 
                  type="text" 
                  name="new-todo"
                  placeholder="Текст" 
            />
          </form>
        </div>
      </div>
    );
  }
}