var v = require("./37.js").array;
var js = require("./39.js");
var js2 = require("./47.js");
function f(p, p2) {
  var vLN0 = 0;
  for (var vLN02 = 0; vLN02 < p.length; vLN02++) {
    vLN0 += Math.pow(p[vLN02] - p2[vLN02], 2);
  }
  return Math.sqrt(vLN0);
}
function f2(p3, p4) {
  if (typeof p3.distanceFunction !== "function") {
    throw new Error("PoissonDiskSampling: Tried to instantiate the variable density implementation without a distanceFunction");
  }
  this.shape = p3.shape;
  this.minDistance = p3.minDistance;
  this.maxDistance = p3.maxDistance || p3.minDistance * 2;
  this.maxTries = Math.ceil(Math.max(1, p3.tries || 30));
  this.distanceFunction = p3.distanceFunction;
  this.bias = Math.max(0, Math.min(1, p3.bias || 0));
  this.rng = p4 || Math.random;
  this.dimension = this.shape.length;
  this.minDistancePlusEpsilon = this.minDistance + 2e-14;
  this.deltaDistance = Math.max(0, this.maxDistance - this.minDistancePlusEpsilon);
  this.cellSize = this.maxDistance / Math.sqrt(this.dimension);
  this.neighbourhood = js2(this.dimension);
  this.currentPoint = null;
  this.currentDistance = 0;
  this.processList = [];
  this.samplePoints = [];
  this.sampleDistance = [];
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
f2.prototype.deltaDistance = null;
f2.prototype.cellSize = null;
f2.prototype.maxTries = null;
f2.prototype.distanceFunction = null;
f2.prototype.bias = null;
f2.prototype.rng = null;
f2.prototype.neighbourhood = null;
f2.prototype.currentPoint = null;
f2.prototype.currentDistance = null;
f2.prototype.processList = null;
f2.prototype.samplePoints = null;
f2.prototype.sampleDistance = null;
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
  var v7 = this.samplePoints.length;
  this.processList.push(v7);
  this.samplePoints.push(p6);
  this.sampleDistance.push(this.distanceFunction(p6));
  v5 = 0;
  for (; v5 < this.dimension; v5++) {
    vLN05 += (p6[v5] / this.cellSize | 0) * v6[v5];
  }
  this.grid.data[vLN05].push(v7);
  return p6;
};
f2.prototype.inNeighbourhood = function (p7) {
  var v8;
  var v9;
  var v10;
  var v11;
  var v12;
  var v13;
  var v14 = this.dimension;
  var v15 = this.grid.stride;
  var v16 = this.distanceFunction(p7);
  for (v8 = 0; v8 < this.neighbourhood.length; v8++) {
    v9 = 0;
    v10 = 0;
    for (; v10 < v14; v10++) {
      if ((v11 = (p7[v10] / this.cellSize | 0) + this.neighbourhood[v8][v10]) < 0 || v11 >= this.gridShape[v10]) {
        v9 = -1;
        break;
      }
      v9 += v11 * v15[v10];
    }
    if (v9 !== -1 && this.grid.data[v9].length > 0) {
      for (var vLN06 = 0; vLN06 < this.grid.data[v9].length; vLN06++) {
        v12 = this.samplePoints[this.grid.data[v9][vLN06]];
        v13 = this.sampleDistance[this.grid.data[v9][vLN06]];
        var v17 = Math.min(v13, v16);
        var v18 = v17 + (Math.max(v13, v16) - v17) * this.bias;
        if (f(p7, v12) < this.minDistance + this.deltaDistance * v18) {
          return true;
        }
      }
    }
  }
  return false;
};
f2.prototype.next = function () {
  var v19;
  var v20;
  var v21;
  var v22;
  var v23;
  var v24;
  var v25;
  var v26;
  for (; this.processList.length > 0;) {
    if (this.currentPoint === null) {
      var v27 = this.processList.shift();
      this.currentPoint = this.samplePoints[v27];
      this.currentDistance = this.sampleDistance[v27];
    }
    v22 = this.currentPoint;
    v23 = this.currentDistance;
    v19 = 0;
    for (; v19 < this.maxTries; v19++) {
      v25 = true;
      v21 = this.minDistancePlusEpsilon + this.deltaDistance * (v23 + (1 - v23) * this.bias);
      if (this.dimension === 2) {
        v20 = this.rng() * Math.PI * 2;
        v24 = [Math.cos(v20), Math.sin(v20)];
      } else {
        v24 = js(this.dimension, this.rng);
      }
      v26 = 0;
      for (; v25 && v26 < this.dimension; v26++) {
        v24[v26] = v22[v26] + v24[v26] * v21;
        v25 = v24[v26] >= 0 && v24[v26] < this.shape[v26];
      }
      if (v25 && !this.inNeighbourhood(v24)) {
        return this.directAddPoint(v24);
      }
    }
    if (v19 === this.maxTries) {
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
  var v28;
  var v29 = new Array(this.samplePoints.length);
  var vLN07 = 0;
  var vLN08 = 0;
  for (vLN07 = 0; vLN07 < this.samplePoints.length; vLN07++) {
    v28 = new Array(this.dimension + 1);
    vLN08 = 0;
    for (; vLN08 < this.dimension; vLN08++) {
      v28[vLN08] = this.samplePoints[vLN07][vLN08];
    }
    v28[this.dimension] = this.sampleDistance[vLN07];
    v29[vLN07] = v28;
  }
  return v29;
};
f2.prototype.reset = function () {
  var v30 = this.grid.data;
  var vLN09 = 0;
  for (vLN09 = 0; vLN09 < v30.length; vLN09++) {
    v30[vLN09] = [];
  }
  this.samplePoints = [];
  this.currentPoint = null;
  this.processList.length = 0;
};
module.exports = f2;