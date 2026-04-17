export function e() {
  this.clear();
}
e.prototype.clear = function () {
  this.items = [];
  this.offset = 0;
  this.size = 0;
};
e.prototype.enqueue = function (CC) {
  this.items.push(CC);
  return ++this.size;
};
e.prototype.dequeue = function () {
  if (!this.size) {
    return;
  }
  const CC = this.items[this.offset];
  2 * ++this.offset >= this.items.length && (this.items = this.items.slice(this.offset), this.offset = 0);
  this.size--;
  return CC;
};
e.prototype.peek = function () {
  if (this.size) {
    return this.items[this.offset];
  }
};
e.prototype.forEach = function (CC, yC) {
  yC = arguments.length > 1 ? yC : this;
  for (let IC = this.offset, fC = 0, ky = this.items.length; IC < ky; IC++, fC++) {
    CC.call(yC, this.items[IC], fC, this);
  }
};
e.prototype.toArray = function () {
  return this.items.slice(this.offset);
};
"undefined" !== typeof Symbol && (e.prototype[Symbol.iterator] = e.prototype.values);
e.prototype.toString = function () {
  return this.toArray().join(",");
};
e.prototype.toJSON = function () {
  return this.toArray();
};
e.prototype.inspect = function () {
  const CC = this.toArray();
  Object.defineProperty(CC, "constructor", {
    value: e,
    enumerable: !1
  });
  return CC;
};
"undefined" !== typeof Symbol && (e.prototype[Symbol.for("nodejs.util.inspect.custom")] = e.prototype.inspect);
e.from = function (CC) {
  const yC = new e();
  for (const IC of CC) {
    yC.enqueue(IC);
  }
  return yC;
};
e.of = function () {
  return e.from(arguments);
};