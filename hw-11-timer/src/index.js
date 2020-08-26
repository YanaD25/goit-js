import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    this.timer();
  }

  timer() {
    const timerDate = this.getTime();
    const refs = {
      timerRef: document.querySelector(this.selector),
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };

    refs.days.innerHTML = timerDate.days;
    refs.hours.innerHTML = timerDate.hours;
    refs.mins.innerHTML = timerDate.mins;
    refs.secs.innerHTML = timerDate.secs;
  }

  getTime() {
    const targetDate = Date.parse(this.targetDate);
    const time = targetDate - Date.now();
    const intervalId = setInterval(this.timer.bind(this), 1000);
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    if (time <= 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
    return {
      time,
      days,
      hours,
      mins,
      secs,
    };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const newSchoolYear = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep 10 2020'),
});

newSchoolYear.start();
