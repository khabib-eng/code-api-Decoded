var v = require("./37.js").integer;
var js = require("./39.js");
var js2 = require("./47.js");
function f(p, p2) {
  var vLN0 = 0;
  for (var vLN02 = 0; vLN02 < p.length; vLN02++) {
    vLN0 += Math.pow(p[vLN02] - p2[vLN02], 2);
  }
  return vLN0;
}
function f2(p3, p4) {
  if (typeof p3.distanceFunction === "function") {
    throw new Error("PoissonDiskSampling: Tried to instantiate the fixed density implementation with a distanceFunction");
  }
  this.shape = p3.shape;
  this.minDistance = p3.minDistance;
  this.maxDistance = p3.maxDistance || p3.minDistance * 2;
  this.maxTries = Math.ceil(Math.max(1, p3.tries || 30));
  this.rng = p4 || Math.random;
  this.dimension = this.shape.length;
  this.squaredMinDistance = this.minDistance * this.minDistance;
  this.minDistancePlusEpsilon = this.minDistance + 2e-14;
  this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon);
  this.cellSize = this.minDistance / Math.sqrt(this.dimension);
  this.neighbourhood = js2(this.dimension);
  this.currentPoint = null;
  this.processList = [];
  this.samplePoints = [];
  this.gridShape = [];
  for (var vLN03 = 0; vLN03 < this.dimension; vLN03++) {
    this.gridShape.push(Math.ceil(this.shape[vLN03] / this.cellSize));
  }
  this.grid = v(this.gridShape);
}
f2.prototype.shape = null;
f2.prototype.dimension = null;
f2.prototype.minDistance = null;
f2.prototype.maxDistance = null;
f2.prototype.minDistancePlusEpsilon = null;
f2.prototype.squaredMinDistance = null;
f2.prototype.deltaDistance = null;
f2.prototype.cellSize = null;
f2.prototype.maxTries = null;
f2.prototype.rng = null;
f2.prototype.neighbourhood = null;
f2.prototype.currentPoint = null;
f2.prototype.processList = null;
f2.prototype.samplePoints = null;
f2.prototype.gridShape = null;
f2.prototype.grid = null;
f2.prototype.addRandomPoint = function () {
  var v2 = new Array(this.dimension);
  for (var vLN04 = 0; vLN04 < this.dimension; vLN04++) {
    v2[vLN04] = this.rng() * this.shape[vLN04];
  }
  return this.directAddPoint(v2);
};
f2.prototype.addPoint = function (p5) {
  var v3;
  var v4 = true;
  if (p5.length === this.dimension) {
    for (v3 = 0; v3 < this.dimension && v4; v3++) {
      v4 = p5[v3] >= 0 && p5[v3] <= this.shape[v3];
    }
  } else {
    v4 = false;
  }
  if (v4) {
    return this.directAddPoint(p5);
  } else {
    return null;
  }
};
f2.prototype.directAddPoint = function (p6) {
  var v5;
  var vLN05 = 0;
  var v6 = this.grid.stride;
  this.processList.push(p6);
  this.samplePoints.push(p6);
  v5 = 0;
  for (; v5 < this.dimension; v5++) {
    vLN05 += (p6[v5] / this.cellSize | 0) * v6[v5];
  }
  this.grid.data[vLN05] = this.samplePoints.length;
  return p6;
};
f2.prototype.inNeighbourhood = function (p7) {
  var v7;
  var v8;
  var v9;
  var v10;
  var v11 = this.dimension;
  var v12 = this.grid.stride;
  for (v7 = 0; v7 < this.neighbourhood.length; v7++) {
    v8 = 0;
    v9 = 0;
    for (; v9 < v11; v9++) {
      if ((v10 = (p7[v9] / this.cellSize | 0) + this.neighbourhood[v7][v9]) < 0 || v10 >= this.gridShape[v9]) {
        v8 = -1;
        break;
      }
      v8 += v10 * v12[v9];
    }
    if (v8 !== -1 && this.grid.data[v8] !== 0 && f(p7, this.samplePoints[this.grid.data[v8] - 1]) < this.squaredMinDistance) {
      return true;
    }
  }
  return false;
};
f2.prototype.next = function () {
  var v13;
  var v14;
  var v15;
  var v16;
  var v17;
  var v18;
  var v19;
  for (; this.processList.length > 0;) {
    if (this.currentPoint === null) {
      this.currentPoint = this.processList.shift();
    }
    v16 = this.currentPoint;
    v13 = 0;
    for (; v13 < this.maxTries; v13++) {
      v18 = true;
      v15 = this.minDistancePlusEpsilon + this.deltaDistance * this.rng();
      if (this.dimension === 2) {
        v14 = this.rng() * Math.PI * 2;
        v17 = [Math.cos(v14), Math.sin(v14)];
      } else {
        v17 = js(this.dimension, this.rng);
      }
      v19 = 0;
      for (; v18 && v19 < this.dimension; v19++) {
        v17[v19] = v16[v19] + v17[v19] * v15;
        v18 = v17[v19] >= 0 && v17[v19] < this.shape[v19];
      }
      if (v18 && !this.inNeighbourhood(v17)) {
        return this.directAddPoint(v17);
      }
    }
    if (v13 === this.maxTries) {
      this.currentPoint = null;
    }
  }
  return null;
};
f2.prototype.fill = function () {
  for (this.samplePoints.length === 0 && this.addRandomPoint(); this.next(););
  return this.samplePoints;
};
f2.prototype.getAllPoints = function () {
  return this.samplePoints;
};
f2.prototype.getAllPointsWithDistance = function () {
  throw new Error("PoissonDiskSampling: getAllPointsWithDistance() is not available in fixed-density implementation");
};
f2.prototype.reset = function () {
  var v20 = this.grid.data;
  var vLN06 = 0;
  for (vLN06 = 0; vLN06 < v20.length; vLN06++) {
    v20[vLN06] = 0;
  }
  this.samplePoints = [];
  this.currentPoint = null;
  this.processList.length = 0;
};
module.exports = f2;