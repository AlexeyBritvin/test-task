import { Component, Prop } from 'vue-property-decorator';
import { VueComponent } from '../../../shims-vue';
import { useStore } from 'vuex-simple';
import styles from './CalendarItem.css?module'
import RootStore from '@/store/root-store';

interface Props {
  active: boolean;
  day: number;
  hasTodos: boolean;
}

@Component
export default class CalendarItem extends VueComponent<Props> {
  @Prop() private active!: boolean;
  @Prop() private day!: number;
  @Prop() private hasTodos!: boolean;

  public store = useStore<RootStore>(this.$store);

  onClick() {
    if (!this.active) {
      this.store.calendar.setActiveDay(this.day);
    }
  }

  render() {
    return (
      <li class={[styles.calendarItem, this.active ? styles.calendarItemActive : '', this.hasTodos ? styles.hasTodos : '']}
          onClick={this.onClick}
      >
        <span>{this.day}</span>
      </li>
    );
  }
}