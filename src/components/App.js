import { Component } from '../utils/component';
import * as dom from '../utils/dom';
import { Test } from './Test';

export class App extends Component {
  init() {
    this.state = { users: ['도트', '갓트'] };
  }

  template() {
    return `
    <main data-Component='content'></main>
    `;
  }

  mounted() {
    const {
      state: { users },
      addUser,
    } = this;

    const $main = dom.$('[data-component="content"]', this.target);
    console.log(users);

    new Test($main, { users, callback: addUser.bind(this) });
  }

  addUser() {
    const { users } = this.state;
    this.setState({ users: [...users, `새로운 유저 ${users.length + 1}`] });
  }
}
