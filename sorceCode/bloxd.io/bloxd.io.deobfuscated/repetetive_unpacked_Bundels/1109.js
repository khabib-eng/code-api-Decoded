var fC = require("./18.js");
var ky = require("./105.js");
var gC = require("./1117.js");
var AC = require("./1121.js");
const my = {
  colorGradients: [{
    timeFraction: 0,
    minColor: [0, 0, 0, 1],
    maxColor: [0, 0, 0, 1]
  }],
  blendMode: AC.e.OneOne
};
const XC = {
  Speed: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [0, 249, 255, 1],
      maxColor: [0, 184, 255, 1]
    }, {
      timeFraction: .4,
      minColor: [0, 249, 255, 1],
      maxColor: [0, 184, 255, 1]
    }, {
      timeFraction: 1,
      minColor: [155, 255, 255, 0],
      maxColor: [155, 255, 255, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "Damage Reduction": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [21, 26, 255, 1],
      maxColor: [26, 31, 255, 1]
    }, {
      timeFraction: .4,
      minColor: [21, 26, 255, 1],
      maxColor: [26, 31, 255, 1]
    }, {
      timeFraction: 1,
      minColor: [155, 155, 255, 0],
      maxColor: [155, 155, 255, 0]
    }],
    blendMode: AC.e.OneOne
  },
  Damage: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [165, 0, 167, 1],
      maxColor: [158, 0, 162, 1]
    }, {
      timeFraction: .4,
      minColor: [165, 0, 167, 1],
      maxColor: [158, 0, 162, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 155, 255, 0],
      maxColor: [255, 155, 255, 0]
    }],
    blendMode: AC.e.OneOne
  },
  Invisible: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [69, 69, 69, 1],
      maxColor: [96, 96, 96, 1]
    }, {
      timeFraction: .5,
      minColor: [69, 69, 69, 1],
      maxColor: [96, 96, 96, 1]
    }, {
      timeFraction: 1,
      minColor: [155, 155, 155, .6],
      maxColor: [155, 155, 155, .6]
    }],
    blendMode: AC.e.MultiplyAdd
  },
  "Jump Boost": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [0, 105, 59, 1],
      maxColor: [0, 94, 53, 1]
    }, {
      timeFraction: .4,
      minColor: [0, 105, 59, 1],
      maxColor: [0, 94, 53, 1]
    }, {
      timeFraction: 1,
      minColor: [155, 200, 155, 0],
      maxColor: [155, 200, 155, 0]
    }],
    blendMode: AC.e.OneOne
  },
  Knockback: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [168, 45, 0, 1],
      maxColor: [200, 45, 0, 1]
    }, {
      timeFraction: .4,
      minColor: [168, 45, 0, 1],
      maxColor: [200, 45, 0, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 255, 155, 0],
      maxColor: [255, 255, 155, 0]
    }],
    blendMode: AC.e.OneOne
  },
  Poisoned: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [0, 200, 0, 1],
      maxColor: [0, 200, 0, 1]
    }, {
      timeFraction: .5,
      minColor: [0, 100, 0, 1],
      maxColor: [0, 100, 0, 1]
    }, {
      timeFraction: 1,
      minColor: [155, 200, 155, .6],
      maxColor: [155, 200, 155, .6]
    }],
    blendMode: AC.e.MultiplyAdd
  },
  Slowness: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [89, 72, 94, 1],
      maxColor: [70, 56, 74, 1]
    }, {
      timeFraction: .5,
      minColor: [89, 72, 94, 1],
      maxColor: [70, 56, 74, 1]
    }, {
      timeFraction: 1,
      minColor: [89, 72, 94, .6],
      maxColor: [70, 56, 74, .6]
    }],
    blendMode: AC.e.MultiplyAdd
  },
  Weakness: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [122, 33, 33, 1],
      maxColor: [107, 28, 28, 1]
    }, {
      timeFraction: .5,
      minColor: [122, 33, 33, 1],
      maxColor: [107, 28, 28, 1]
    }, {
      timeFraction: 1,
      minColor: [122, 33, 33, .6],
      maxColor: [107, 28, 28, .6]
    }],
    blendMode: AC.e.MultiplyAdd
  },
  Cleansed: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [219, 210, 180, 1],
      maxColor: [207, 198, 169, 1]
    }, {
      timeFraction: .4,
      minColor: [219, 210, 180, 1],
      maxColor: [207, 198, 169, 1]
    }, {
      timeFraction: 1,
      minColor: [219, 210, 180, 0],
      maxColor: [207, 198, 169, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "Instant Damage": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [69, 22, 27, 1],
      maxColor: [51, 16, 19, 1]
    }, {
      timeFraction: .5,
      minColor: [69, 22, 27, 1],
      maxColor: [51, 16, 19, 1]
    }, {
      timeFraction: 1,
      minColor: [69, 22, 27, .6],
      maxColor: [51, 16, 19, .6]
    }],
    blendMode: AC.e.MultiplyAdd
  },
  "Health Regen": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [255, 0, 65, 1],
      maxColor: [255, 0, 85, 1]
    }, {
      timeFraction: .4,
      minColor: [255, 0, 65, 1],
      maxColor: [255, 0, 85, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 155, 155, 0],
      maxColor: [255, 155, 155, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "Instant Health": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [222, 0, 163, 1],
      maxColor: [223, 0, 144, 1]
    }, {
      timeFraction: .4,
      minColor: [222, 0, 163, 1],
      maxColor: [223, 0, 144, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 155, 155, 0],
      maxColor: [255, 155, 155, 0]
    }],
    blendMode: AC.e.OneOne
  },
  Haste: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [35, 0, 116, 1],
      maxColor: [65, 0, 136, 1]
    }, {
      timeFraction: .4,
      minColor: [35, 0, 116, 1],
      maxColor: [65, 0, 136, 1]
    }, {
      timeFraction: 1,
      minColor: [155, 155, 155, 0],
      maxColor: [155, 155, 155, 0]
    }],
    blendMode: AC.e.OneOne
  },
  Shield: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [255, 185, 20, 1],
      maxColor: [255, 211, 25, 1]
    }, {
      timeFraction: .4,
      minColor: [255, 185, 20, 1],
      maxColor: [255, 211, 25, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 255, 155, 0],
      maxColor: [255, 255, 155, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "Double Jump": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [255, 215, 70, 1],
      maxColor: [255, 245, 75, 1]
    }, {
      timeFraction: .4,
      minColor: [255, 215, 70, 1],
      maxColor: [255, 245, 75, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 240, 180, 0],
      maxColor: [255, 240, 180, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "Heat Resistance": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [215, 0, 20, 1],
      maxColor: [255, 0, 25, 1]
    }, {
      timeFraction: .4,
      minColor: [215, 0, 20, 1],
      maxColor: [255, 0, 25, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 0, 0, 0],
      maxColor: [255, 0, 0, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "X-Ray Vision": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [240, 65, 0, 1],
      maxColor: [255, 110, 15, 1]
    }, {
      timeFraction: .4,
      minColor: [240, 65, 0, 1],
      maxColor: [255, 110, 15, 1]
    }, {
      timeFraction: 1,
      minColor: [255, 115, 10, 0],
      maxColor: [255, 115, 10, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "Mining Yield": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [140, 40, 65, 1],
      maxColor: [150, 55, 75, 1]
    }, {
      timeFraction: .4,
      minColor: [140, 40, 65, 1],
      maxColor: [150, 55, 75, 1]
    }, {
      timeFraction: 1,
      minColor: [150, 50, 75, 0],
      maxColor: [150, 50, 75, 0]
    }],
    blendMode: AC.e.OneOne
  },
  "Brain Rot": {
    colorGradients: [{
      timeFraction: 0,
      minColor: [0, 135, 45, 1],
      maxColor: [0, 155, 55, 1]
    }, {
      timeFraction: .4,
      minColor: [0, 135, 45, 1],
      maxColor: [0, 155, 55, 1]
    }, {
      timeFraction: 1,
      minColor: [0, 155, 55, 1],
      maxColor: [0, 155, 55, 1]
    }],
    blendMode: AC.e.OneOne
  },
  Thief: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [92, 100, 106, 1],
      maxColor: [70, 76, 81, 1]
    }, {
      timeFraction: .4,
      minColor: [92, 100, 106, 1],
      maxColor: [70, 76, 81, 1]
    }, {
      timeFraction: 1,
      minColor: [50, 54, 64, 1],
      maxColor: [29, 31, 26, 1]
    }],
    blendMode: AC.e.OneOne
  },
  Aura: {
    colorGradients: [{
      timeFraction: 0,
      minColor: [10, 150, 15, 1],
      maxColor: [15, 200, 150, 1]
    }, {
      timeFraction: .4,
      minColor: [10, 150, 15, 1],
      maxColor: [15, 200, 150, 1]
    }, {
      timeFraction: 1,
      minColor: [10, 150, 15, 0],
      maxColor: [15, 200, 150, 0]
    }],
    blendMode: AC.e.OneOne
  },
  Blindness: my,
  "Wall Climbing": my,
  "Air Walk": my,
  Pickpocketer: my,
  Lifesteal: my,
  Bounciness: my,
  Poopy: my
};
const iy = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "soul_0",
  minLifeTime: .4,
  maxLifeTime: .8,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .2,
  maxSize: .4,
  manualEmitCount: 40,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [0, 135, 45, 1],
    maxColor: [0, 155, 55, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 30,
  blendMode: AC.e.OneOne
};
const LC = {
  dir1: [-1, .05, -1],
  dir2: [1, .05, 1],
  texture: "critical_hit",
  minLifeTime: .2,
  maxLifeTime: .4,
  minEmitPower: 20,
  maxEmitPower: 25,
  minSize: .15,
  maxSize: .3,
  manualEmitCount: 75,
  gravity: [0, 30, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [220, 220, 220, 0],
    maxColor: [255, 255, 255, 0]
  }, {
    timeFraction: .95,
    minColor: [20, 20, 20, 0],
    maxColor: [30, 30, 30, 0]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .5,
    factor2: .5
  }, {
    timeFraction: 1,
    factor: .1,
    factor2: .1
  }],
  hideDist: 60,
  blendMode: AC.e.OneOne
};
const YC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "square_particle",
  minLifeTime: .1,
  maxLifeTime: .75,
  minEmitPower: 6,
  maxEmitPower: 8,
  minSize: .05,
  maxSize: .1,
  manualEmitCount: 300,
  gravity: [0, 50, 0],
  velocityGradients: [{
    timeFraction: 0,
    factor: .07,
    factor2: .5
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .15
  }],
  hideDist: 70
};
const bC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "square_particle",
  minLifeTime: .06,
  maxLifeTime: .6,
  minEmitPower: 8,
  maxEmitPower: 12,
  minSize: .08,
  maxSize: .16,
  manualEmitCount: 300,
  gravity: [0, 10, 0],
  velocityGradients: [{
    timeFraction: 0,
    factor: .7,
    factor2: .35
  }, {
    timeFraction: 1,
    factor: .1,
    factor2: .15
  }],
  hideDist: 70
};
const rC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "glint",
  minLifeTime: .4,
  maxLifeTime: .6,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .15,
  maxSize: .3,
  manualEmitCount: 25,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [139, 69, 19, 1],
    maxColor: [160, 82, 45, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 10,
  blendMode: AC.e.OneOne
};
const GC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "glint",
  minLifeTime: .4,
  maxLifeTime: .6,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .15,
  maxSize: .3,
  manualEmitCount: 25,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [0, 200, 50, 1],
    maxColor: [0, 255, 100, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 10,
  blendMode: AC.e.OneOne
};
const eC = {
  dir1: [-.5, 1, -.5],
  dir2: [.5, 1, .5],
  texture: "square_particle",
  minLifeTime: .3,
  maxLifeTime: .5,
  minEmitPower: 30,
  maxEmitPower: 35,
  minSize: .04,
  maxSize: .08,
  manualEmitCount: 200,
  gravity: [0, -80, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [255, 185, 20, 1],
    maxColor: [255, 205, 25, 1]
  }, {
    timeFraction: .2,
    minColor: [255, 185, 20, 1],
    maxColor: [255, 205, 25, 1]
  }, {
    timeFraction: .7,
    minColor: [168, 45, 0, 1],
    maxColor: [200, 45, 0, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .07,
    factor2: .5
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .15
  }],
  hideDist: 70,
  blendMode: AC.e.OneOne
};
const OC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "soul_0",
  minLifeTime: .8,
  maxLifeTime: 1.2,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .2,
  maxSize: .4,
  manualEmitCount: 30,
  gravity: [0, 0, 0],
  colorGradients: [],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 30,
  blendMode: AC.e.OneOne
};
const SC = {
  grey: {
    timeFraction: 0,
    minColor: [80, 80, 80, 1],
    maxColor: [160, 160, 160, 1]
  },
  green: {
    timeFraction: 0,
    minColor: [0, 200, 50, 1],
    maxColor: [0, 255, 100, 1]
  },
  yellow: {
    timeFraction: 0,
    minColor: [200, 200, 0, 1],
    maxColor: [255, 255, 0, 1]
  },
  red: {
    timeFraction: 0,
    minColor: [200, 10, 0, 1],
    maxColor: [255, 20, 0, 1]
  }
};
const TC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "glint",
  minLifeTime: .25,
  maxLifeTime: .5,
  minEmitPower: 5,
  maxEmitPower: 10,
  minSize: .2,
  maxSize: .3,
  manualEmitCount: 5,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [16, 100, 16, 0],
    maxColor: [30, 150, 30, 0]
  }, {
    timeFraction: 1,
    minColor: [16, 100, 16, 0],
    maxColor: [30, 150, 30, 0]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .15,
    factor2: .075
  }, {
    timeFraction: 1,
    factor: .15,
    factor2: .075
  }],
  hideDist: 50,
  blendMode: AC.e.OneOne
};
const NC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "heart",
  minLifeTime: .8,
  maxLifeTime: 1.2,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .2,
  maxSize: .4,
  manualEmitCount: 20,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [200, 10, 0, 1],
    maxColor: [255, 20, 0, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 20,
  blendMode: AC.e.Standard
};
const sC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "effect_5",
  minLifeTime: .4,
  maxLifeTime: .8,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .1,
  maxSize: .2,
  manualEmitCount: 15,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [235, 225, 255, 1],
    maxColor: [245, 235, 255, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 20,
  blendMode: AC.e.Standard
};
const jy = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "critical_hit",
  minLifeTime: .8,
  maxLifeTime: 1.2,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .16,
  maxSize: .2,
  manualEmitCount: 30,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [190, 125, 75, 1],
    maxColor: [149, 83, 50, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 20,
  blendMode: AC.e.Standard
};
const qC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "heart",
  minLifeTime: .8,
  maxLifeTime: 1.2,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .08,
  maxSize: .12,
  manualEmitCount: 20,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [200, 50, 50, 1],
    maxColor: [250, 75, 75, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 20,
  blendMode: AC.e.Standard
};
const KC = NC;
const pC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "glint",
  minLifeTime: .4,
  maxLifeTime: .6,
  minEmitPower: 1,
  maxEmitPower: 1.5,
  minSize: .15,
  maxSize: .3,
  manualEmitCount: 25,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [144, 222, 16, 1],
    maxColor: [201, 222, 16, 1]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .1,
    factor2: .1
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 10,
  blendMode: AC.e.OneOne
};
const wC = {
  dir1: [-1, .05, -1],
  dir2: [1, .15, 1],
  texture: "effect_5",
  minLifeTime: .4,
  maxLifeTime: .8,
  minEmitPower: 15,
  maxEmitPower: 20,
  minSize: .15,
  maxSize: .3,
  manualEmitCount: 100,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: .5,
    minColor: [220, 220, 220, 0],
    maxColor: [255, 255, 255, 0]
  }, {
    timeFraction: .95,
    minColor: [144, 222, 16, 0],
    maxColor: [201, 222, 16, 0]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .5,
    factor2: .5
  }, {
    timeFraction: 1,
    factor: .1,
    factor2: .1
  }],
  blendMode: AC.e.OneOne,
  hideDist: 60
};
const HC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  texture: "critical_hit",
  minLifeTime: .25,
  maxLifeTime: .5,
  minEmitPower: 5,
  maxEmitPower: 10,
  minSize: .15,
  maxSize: .3,
  manualEmitCount: 25,
  gravity: [0, 0, 0],
  colorGradients: [{
    timeFraction: 0,
    minColor: [220, 220, 220, 0],
    maxColor: [255, 255, 255, 0]
  }, {
    timeFraction: .5,
    minColor: [220, 220, 220, 0],
    maxColor: [255, 255, 255, 0]
  }, {
    timeFraction: 1,
    minColor: [20, 20, 20, 0],
    maxColor: [30, 30, 30, 0]
  }],
  velocityGradients: [{
    timeFraction: 0,
    factor: .15,
    factor2: .075
  }, {
    timeFraction: 1,
    factor: .15,
    factor2: .075
  }],
  hideDist: 80,
  blendMode: AC.e.OneOne
};
const aC = (0, fC.d)((0, fC.d)({}, HC), {}, {
  texture: "soul_0"
});
const cC = {
  dir1: [-1, -1, -1],
  dir2: [1, 1, 1],
  manualEmitCount: 300,
  texture: "generic_2",
  minLifeTime: .1,
  maxLifeTime: .3,
  minEmitPower: 12,
  maxEmitPower: 15,
  minSize: .6,
  maxSize: .8,
  gravity: [0, 0, 0],
  velocityGradients: [{
    timeFraction: 0,
    factor: 2,
    factor2: 2
  }, {
    timeFraction: 1,
    factor: .5,
    factor2: .5
  }],
  hideDist: 120,
  blendMode: AC.e.Standard
};
const UC = (0, fC.d)((0, fC.d)({}, cC), {}, {
  manualEmitCount: 75
});
const EC = {
  Default: [{
    timeFraction: 0,
    minColor: [255, 255, 255, 1],
    maxColor: [227, 227, 227, 1]
  }, {
    timeFraction: .6,
    minColor: [255, 255, 255, 1],
    maxColor: [227, 227, 227, 1]
  }, {
    timeFraction: 1,
    minColor: [50, 50, 50, 1],
    maxColor: [120, 120, 120, 1]
  }],
  Yellow: VC({
    minColor: [253, 212, 78, 1],
    maxColor: [248, 195, 35, 1]
  }),
  White: VC({
    minColor: [250, 250, 250, 1],
    maxColor: [166, 191, 191, 1]
  }),
  Red: VC({
    minColor: [196, 48, 40, 1],
    maxColor: [155, 36, 33, 1]
  }),
  Purple: VC({
    minColor: [153, 51, 205, 1],
    maxColor: [118, 39, 168, 1]
  }),
  Pink: VC({
    minColor: [254, 175, 202, 1],
    maxColor: [242, 136, 168, 1]
  }),
  Orange: VC({
    minColor: [253, 151, 65, 1],
    maxColor: [240, 113, 16, 1]
  }),
  Magenta: VC({
    minColor: [210, 96, 198, 1],
    maxColor: [186, 65, 175, 1]
  }),
  Lime: VC({
    minColor: [143, 215, 33, 1],
    maxColor: [109, 182, 24, 1]
  }),
  "Light Gray": VC({
    minColor: [164, 164, 160, 1],
    maxColor: [139, 140, 132, 1]
  }),
  "Light Blue": VC({
    minColor: [88, 202, 233, 1],
    maxColor: [55, 174, 215, 1]
  }),
  Green: VC({
    minColor: [114, 142, 40, 1],
    maxColor: [82, 106, 28, 1]
  }),
  Gray: VC({
    minColor: [92, 100, 106, 1],
    maxColor: [70, 76, 81, 1]
  }),
  Cyan: VC({
    minColor: [30, 177, 178, 1],
    maxColor: [21, 135, 143, 1]
  }),
  Brown: VC({
    minColor: [141, 92, 51, 1],
    maxColor: [111, 69, 39, 1]
  }),
  Blue: VC({
    minColor: [65, 75, 176, 1],
    maxColor: [52, 54, 154, 1]
  }),
  Black: VC({
    minColor: [50, 54, 64, 1],
    maxColor: [29, 31, 26, 1]
  })
};
function VC(CC) {
  return [{
    timeFraction: 0,
    minColor: [255, 255, 255, 1],
    maxColor: [227, 227, 227, 1]
  }, (0, fC.d)({
    timeFraction: .4
  }, CC), (0, fC.d)({
    timeFraction: 1
  }, CC)];
}
const WC = {
  [ky.i.MobFoodType.Superliked]: [{
    timeFraction: 0,
    minColor: [200, 10, 200, 1],
    maxColor: [255, 20, 255, 1]
  }],
  [ky.i.MobFoodType.Liked]: [{
    timeFraction: 0,
    minColor: [10, 200, 0, 1],
    maxColor: [10, 255, 0, 1]
  }],
  [ky.i.MobFoodType.Neutral]: [{
    timeFraction: 0,
    minColor: [240, 200, 0, 1],
    maxColor: [255, 220, 0, 1]
  }],
  [ky.i.MobFoodType.Disliked]: [{
    timeFraction: 0,
    minColor: [75, 75, 75, 1],
    maxColor: [100, 100, 100, 1]
  }]
};
ky.i.MobFoodType.Superliked;
ky.i.MobFoodType.Liked;
ky.i.MobFoodType.Neutral;
ky.i.MobFoodType.Disliked;
export const d = (0, fC.d)((0, fC.d)({
  brainRot: iy,
  stomp: LC,
  fertiliser: rC,
  bonemeal: GC,
  mobTameSuccess: NC,
  mobTameFailure: sC,
  mobCatch: jy,
  spawnCaughtMob: KC,
  mobFeedDefault: qC,
  mobFeedSuperliked: (0, fC.d)((0, fC.d)({}, qC), {}, {
    colorGradients: WC[ky.i.MobFoodType.Superliked]
  }),
  mobFeedLike: (0, fC.d)((0, fC.d)({}, qC), {}, {
    colorGradients: WC[ky.i.MobFoodType.Liked]
  }),
  mobFeedNeutral: (0, fC.d)((0, fC.d)({}, qC), {}, {
    colorGradients: WC[ky.i.MobFoodType.Neutral]
  }),
  mobFeedDisliked: (0, fC.d)((0, fC.d)({}, qC), {}, {
    colorGradients: WC[ky.i.MobFoodType.Disliked]
  }),
  mobDeath: HC,
  mobDeathSoul: aC,
  boardShopSuccess: pC,
  mobSpawnerBlockFail: (0, fC.d)((0, fC.d)({}, OC), {}, {
    colorGradients: [SC.grey]
  }),
  mobSpawnerBlockPassive: (0, fC.d)((0, fC.d)({}, OC), {}, {
    colorGradients: [SC.green]
  }),
  mobSpawnerBlockNeutral: (0, fC.d)((0, fC.d)({}, OC), {}, {
    colorGradients: [SC.yellow]
  }),
  mobSpawnerBlockHostile: (0, fC.d)((0, fC.d)({}, OC), {}, {
    colorGradients: [SC.red]
  }),
  mobSpawnOrb: wC,
  aura: TC
}, ky.nc.reduce((CC, yC) => {
  CC["".concat((0, ky.Zd)(yC), "FirecrackerSmall")] = (0, fC.d)((0, fC.d)({}, UC), {}, {
    colorGradients: EC[yC]
  });
  CC["".concat((0, ky.Zd)(yC), "FirecrackerLarge")] = (0, fC.d)((0, fC.d)({}, cC), {}, {
    colorGradients: EC[yC]
  });
  return CC;
}, {})), {}, {
  defaultFirecrackerSmall: (0, fC.d)((0, fC.d)({}, UC), {}, {
    colorGradients: EC.Default
  }),
  defaultFirecrackerLarge: (0, fC.d)((0, fC.d)({}, cC), {}, {
    colorGradients: EC.Default
  }),
  mango: eC
}, gC.b.reduce((CC, yC) => {
  CC["".concat((0, ky.Zd)(yC), "Inner")] = (0, fC.d)((0, fC.d)({}, YC), XC[yC]);
  CC["".concat((0, ky.Zd)(yC), "Outer")] = (0, fC.d)((0, fC.d)({}, bC), XC[yC]);
  return CC;
}, {}));
export const c = Object.keys(d);