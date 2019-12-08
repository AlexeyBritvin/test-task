import { Component, Vue } from 'vue-property-decorator';
import CalendarItem from './CalendarItem/CalendarItem';
import RootStore from '@/store/root-store';
import { useStore } from 'vuex-simple';

import styles from './Calendar.css?module';
import layout from '@/styles/layout.css?module';

@Component
export default class Calendar extends Vue {
  private labels: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  private date = new Date();
  private store = useStore<RootStore>(this.$store);

  private get numberOfDays(): number {
    const year = this.date.getFullYear();
    const month = this.date.getMonth();
    
    return new Date(year, month + 1, 0).getDate();
  }

  private get arrayOfDays(): number[] {
    const arr = [];

    for (let i = 1; i <= this.numberOfDays; i++) {
      arr.push(i);
    }

    return arr;
  }

  private get title(): string {
    const month = this.date.toLocaleString('ru', { month: 'long' });
    const year = this.date.getFullYear();
    const [first, ...rest] = month.split('');
    const capitalMonth = [first.toUpperCase(), ...rest].join('');
    return `${capitalMonth} ${year}`;
  }

  private get currentDay(): number {
    return this.store.calendar.activeDay;
  }

  private hasTodos(day: number): boolean {
    const { todos } = this.store.todoList;
    return Boolean(todos[day]);
  }

  render() {
    return (
      <div class={layout.box}>
        <p class={layout.boxTitle}>{this.title}</p>
        <ul class={styles.grid}>
          { this.labels.map(label => <li class={[styles.gridItem, styles.calendarLabel]}><span>{label}</span></li>) }
        </ul>
        <ul class={styles.grid}>
          { this.arrayOfDays.map(day => {
              return (
                <CalendarItem day={day} 
                              active={day === this.currentDay}
                              hasTodos={this.hasTodos(day)}
                ></CalendarItem>
              );
            })
          }
        </ul>
      </div>
    );
  }
}