import { Component } from '@/utils/component';
import * as dom from '@/utils/dom';

export class Test extends Component {
  template() {
    const { users } = this.props;
    const userList = users.map(user => `<li>${user}</li>`).join('');

    return `
      <ul>${userList}</ul>
      <button>추가</button>
      `;
  }

  setEvent() {
    const { callback } = this.props;
    this.addEvent('click', 'button', callback);
  }
}
