class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    const isFnExist = this.observers.find((item) => item === fn);
    if (isFnExist) return;

    this.observers.push(fn);
    console.log(`You have subscribe to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((item) => item !== fn);
    console.log(`You have unsubscribe from ${fn.name}`);
  }

  fire() {
    this.observers.forEach((fn) => {
      fn();
    });
  }
}

const click = new EventObserver();

document.getElementById('sub-s').addEventListener('click', () => {
  click.subscribe(getCurSeconds);
});
document.getElementById('unsub-s').addEventListener('click', () => {
  click.unsubscribe(getCurSeconds);
});
document.getElementById('sub-h').addEventListener('click', () => {
  click.subscribe(getCurHours);
});
document.getElementById('unsub-h').addEventListener('click', () => {
  click.unsubscribe(getCurHours);
});
document.getElementById('fire').addEventListener('click', () => {
  click.fire();
});

function getCurSeconds() {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}

function getCurHours() {
  console.log(`Current hours: ${new Date().getHours()}`);
}
