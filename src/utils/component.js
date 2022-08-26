export class Component {
  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.state = {};
    this.init();
    this.render();
    this.setEvent();
  }

  init() {}

  setEvent() {}

  template() {}

  render() {
    this.target.innerHTML = this.template();
    this.mounted();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  mounted() {}

  addEvent(eventType, selector, callback) {
    const children = [...this.target.querySelectorAll(selector)];

    const isTarget = target =>
      children.includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
