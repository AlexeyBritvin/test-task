import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld';
const logo = require('./assets/logo.png')

import './App.css'

@Component
export default class App extends Vue {
  private message: string = 'Welcome to Your Vue.js + TypeScript App';

  render() {
    return (
      <div id="app">
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg={this.message} />
      </div>
    )
  }
}
