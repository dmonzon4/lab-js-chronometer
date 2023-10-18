class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        if (printTimeCallback) {
          printTimeCallback();
        }
      }, 1000); // 1000 milliseconds = 1 second
    }
  }

  getMinutes() {
    // ... your code goes here
    
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

