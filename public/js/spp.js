/* jshint esversion:6 */
const Counter = {
  rootElement: '#app',
  count: 0,
  start: function () {
    this.cacheDOM();
    this.bindAdd();
    this.bindSub();
    this.render();
  },
  cacheDOM: function () {
    this.root = document.querySelector('#app');
    this.add = document.querySelector('#inc');
    this.sub = document.querySelector('#dec');
    this.output = document.querySelector('#output');
  },
  bindAdd: function () {
    this.add.addEventListener('click', () => {
      this.count += 1;
      this.render();
    });
  },
  bindSub: function () {
    this.sub.addEventListener('click', () => {
      this.count -= 1;
      this.render();
    });
  },
  render: function () {
    this.output.textContent = this.count;
  }
};

Counter.start();
