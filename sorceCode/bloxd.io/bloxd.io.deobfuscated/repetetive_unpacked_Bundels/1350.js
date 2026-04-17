export class d {
  constructor() {
    this.data = [];
    this.waiters = [];
  }
  enqueue(CC) {
    this.data.push(CC);
    this.waiters.length > 0 && this.waiters.shift()();
  }
  async dequeue() {
    0 === this.data.length && (await new Promise(CC => {
      this.waiters.push(CC);
    }));
    return this.data.shift();
  }
  IC() {
    return 0 === this.data.length;
  }
  async emptyQueue() {
    this.data.length = 0;
    this.waiters.length = 0;
  }
}