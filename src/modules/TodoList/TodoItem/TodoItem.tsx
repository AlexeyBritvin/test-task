import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '@/shims-vue';
import Todo from '../models/todo.model';

import styles from './TodoItem.css?module';

interface Props {
  todo: Todo;
}

@Component
export default class TodoItem extends VueComponent<Props> {
  @Prop() private todo!: Todo;

  render() {
    return (
      <div class={[styles.todo, this.todo.completed ? styles.completed : '']}>
        <label>
          <input type="checkbox" name="completed" v-model={this.todo.completed} />
          <span class={styles.todoText}>{this.todo.text}</span>
        </label>
      </div>
    );
  }
}