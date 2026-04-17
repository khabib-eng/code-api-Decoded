var fC = require("./18.js");
var ky = require("./138.js");
const gC = {
  hat_none: {
    atlasIdx: 0,
    uOffset: 0,
    vOffset: 0
  },
  head_none: {
    atlasIdx: 1,
    uOffset: 1,
    vOffset: 0
  },
  head_0: {
    atlasIdx: 2,
    uOffset: 2,
    vOffset: 0
  },
  head_1_0: {
    atlasIdx: 3,
    uOffset: 3,
    vOffset: 0
  },
  head_1_1: {
    atlasIdx: 4,
    uOffset: 4,
    vOffset: 0
  },
  head_1_2: {
    atlasIdx: 5,
    uOffset: 5,
    vOffset: 0
  },
  head_1_3: {
    atlasIdx: 6,
    uOffset: 6,
    vOffset: 0
  },
  head_1_4: {
    atlasIdx: 7,
    uOffset: 7,
    vOffset: 0
  },
  head_2_0: {
    atlasIdx: 8,
    uOffset: 8,
    vOffset: 0
  },
  head_2_1: {
    atlasIdx: 9,
    uOffset: 9,
    vOffset: 0
  },
  head_2_2: {
    atlasIdx: 10,
    uOffset: 10,
    vOffset: 0
  },
  head_2_3: {
    atlasIdx: 11,
    uOffset: 11,
    vOffset: 0
  },
  head_2_4: {
    atlasIdx: 12,
    uOffset: 12,
    vOffset: 0
  },
  head_3_0: {
    atlasIdx: 13,
    uOffset: 13,
    vOffset: 0
  },
  head_3_1: {
    atlasIdx: 14,
    uOffset: 14,
    vOffset: 0
  },
  head_3_2: {
    atlasIdx: 15,
    uOffset: 15,
    vOffset: 0
  },
  head_3_3: {
    atlasIdx: 16,
    uOffset: 16,
    vOffset: 0
  },
  head_3_4: {
    atlasIdx: 17,
    uOffset: 17,
    vOffset: 0
  },
  head_4_0: {
    atlasIdx: 18,
    uOffset: 18,
    vOffset: 0
  },
  head_4_1: {
    atlasIdx: 19,
    uOffset: 19,
    vOffset: 0
  },
  head_4_2: {
    atlasIdx: 20,
    uOffset: 20,
    vOffset: 0
  },
  head_4_3: {
    atlasIdx: 21,
    uOffset: 21,
    vOffset: 0
  },
  head_4_4: {
    atlasIdx: 22,
    uOffset: 22,
    vOffset: 0
  },
  head_5_0: {
    atlasIdx: 23,
    uOffset: 23,
    vOffset: 0
  },
  head_5_1: {
    atlasIdx: 24,
    uOffset: 24,
    vOffset: 0
  },
  head_5_2: {
    atlasIdx: 25,
    uOffset: 25,
    vOffset: 0
  },
  head_5_3: {
    atlasIdx: 26,
    uOffset: 26,
    vOffset: 0
  },
  head_5_4: {
    atlasIdx: 27,
    uOffset: 27,
    vOffset: 0
  },
  head_6_0: {
    atlasIdx: 28,
    uOffset: 28,
    vOffset: 0
  },
  head_6_1: {
    atlasIdx: 29,
    uOffset: 29,
    vOffset: 0
  },
  head_6_2: {
    atlasIdx: 30,
    uOffset: 30,
    vOffset: 0
  },
  head_6_3: {
    atlasIdx: 31,
    uOffset: 31,
    vOffset: 0
  },
  head_6_4: {
    atlasIdx: 32,
    uOffset: 0,
    vOffset: 1
  },
  head_7_0: {
    atlasIdx: 33,
    uOffset: 1,
    vOffset: 1
  },
  head_7_1: {
    atlasIdx: 34,
    uOffset: 2,
    vOffset: 1
  },
  head_7_2: {
    atlasIdx: 35,
    uOffset: 3,
    vOffset: 1
  },
  head_7_3: {
    atlasIdx: 36,
    uOffset: 4,
    vOffset: 1
  },
  head_7_4: {
    atlasIdx: 37,
    uOffset: 5,
    vOffset: 1
  },
  head_8_0: {
    atlasIdx: 38,
    uOffset: 6,
    vOffset: 1
  },
  head_8_1: {
    atlasIdx: 39,
    uOffset: 7,
    vOffset: 1
  },
  head_8_2: {
    atlasIdx: 40,
    uOffset: 8,
    vOffset: 1
  },
  head_8_3: {
    atlasIdx: 41,
    uOffset: 9,
    vOffset: 1
  },
  head_8_4: {
    atlasIdx: 42,
    uOffset: 10,
    vOffset: 1
  },
  head_9_0: {
    atlasIdx: 43,
    uOffset: 11,
    vOffset: 1
  },
  head_9_1: {
    atlasIdx: 44,
    uOffset: 12,
    vOffset: 1
  },
  head_9_2: {
    atlasIdx: 45,
    uOffset: 13,
    vOffset: 1
  },
  head_9_3: {
    atlasIdx: 46,
    uOffset: 14,
    vOffset: 1
  },
  head_9_4: {
    atlasIdx: 47,
    uOffset: 15,
    vOffset: 1
  },
  zombie: {
    atlasIdx: 48,
    uOffset: 16,
    vOffset: 1
  },
  trader: {
    atlasIdx: 49,
    uOffset: 17,
    vOffset: 1
  },
  trader_blue: {
    atlasIdx: 50,
    uOffset: 18,
    vOffset: 1
  },
  trader_black: {
    atlasIdx: 51,
    uOffset: 19,
    vOffset: 1
  },
  wizard: {
    atlasIdx: 52,
    uOffset: 20,
    vOffset: 1
  },
  portal_mage: {
    atlasIdx: 53,
    uOffset: 21,
    vOffset: 1
  },
  piggy_banker: {
    atlasIdx: 54,
    uOffset: 22,
    vOffset: 1
  },
  farmer: {
    atlasIdx: 55,
    uOffset: 23,
    vOffset: 1
  },
  farmer_gill: {
    atlasIdx: 56,
    uOffset: 24,
    vOffset: 1
  },
  monster_hunter_lorenzo: {
    atlasIdx: 57,
    uOffset: 25,
    vOffset: 1
  },
  painter_spencer: {
    atlasIdx: 58,
    uOffset: 26,
    vOffset: 1
  },
  head_10_0: {
    atlasIdx: 59,
    uOffset: 27,
    vOffset: 1
  },
  head_10_1: {
    atlasIdx: 60,
    uOffset: 28,
    vOffset: 1
  },
  head_10_2: {
    atlasIdx: 61,
    uOffset: 29,
    vOffset: 1
  },
  head_10_3: {
    atlasIdx: 62,
    uOffset: 30,
    vOffset: 1
  },
  head_10_4: {
    atlasIdx: 63,
    uOffset: 31,
    vOffset: 1
  },
  head_10_5: {
    atlasIdx: 64,
    uOffset: 0,
    vOffset: 2
  },
  head_10_6: {
    atlasIdx: 65,
    uOffset: 1,
    vOffset: 2
  },
  head_11_0: {
    atlasIdx: 66,
    uOffset: 2,
    vOffset: 2
  },
  head_11_1: {
    atlasIdx: 67,
    uOffset: 3,
    vOffset: 2
  },
  head_11_2: {
    atlasIdx: 68,
    uOffset: 4,
    vOffset: 2
  },
  head_11_3: {
    atlasIdx: 69,
    uOffset: 5,
    vOffset: 2
  },
  head_11_4: {
    atlasIdx: 70,
    uOffset: 6,
    vOffset: 2
  },
  head_11_5: {
    atlasIdx: 71,
    uOffset: 7,
    vOffset: 2
  },
  head_11_6: {
    atlasIdx: 72,
    uOffset: 8,
    vOffset: 2
  },
  head_12_0: {
    atlasIdx: 73,
    uOffset: 9,
    vOffset: 2
  },
  head_12_1: {
    atlasIdx: 74,
    uOffset: 10,
    vOffset: 2
  },
  head_12_2: {
    atlasIdx: 75,
    uOffset: 11,
    vOffset: 2
  },
  head_12_3: {
    atlasIdx: 76,
    uOffset: 12,
    vOffset: 2
  },
  head_12_4: {
    atlasIdx: 77,
    uOffset: 13,
    vOffset: 2
  },
  head_12_5: {
    atlasIdx: 78,
    uOffset: 14,
    vOffset: 2
  },
  head_12_6: {
    atlasIdx: 79,
    uOffset: 15,
    vOffset: 2
  },
  head_13_0: {
    atlasIdx: 80,
    uOffset: 16,
    vOffset: 2
  },
  head_13_1: {
    atlasIdx: 81,
    uOffset: 17,
    vOffset: 2
  },
  head_13_2: {
    atlasIdx: 82,
    uOffset: 18,
    vOffset: 2
  },
  head_13_3: {
    atlasIdx: 83,
    uOffset: 19,
    vOffset: 2
  },
  head_13_4: {
    atlasIdx: 84,
    uOffset: 20,
    vOffset: 2
  },
  head_13_5: {
    atlasIdx: 85,
    uOffset: 21,
    vOffset: 2
  },
  head_14_0: {
    atlasIdx: 86,
    uOffset: 22,
    vOffset: 2
  },
  head_14_1: {
    atlasIdx: 87,
    uOffset: 23,
    vOffset: 2
  },
  head_14_2: {
    atlasIdx: 88,
    uOffset: 24,
    vOffset: 2
  },
  head_14_3: {
    atlasIdx: 89,
    uOffset: 25,
    vOffset: 2
  },
  head_14_4: {
    atlasIdx: 90,
    uOffset: 26,
    vOffset: 2
  },
  head_14_5: {
    atlasIdx: 91,
    uOffset: 27,
    vOffset: 2
  },
  head_15_0: {
    atlasIdx: 92,
    uOffset: 28,
    vOffset: 2
  },
  head_15_1: {
    atlasIdx: 93,
    uOffset: 29,
    vOffset: 2
  },
  head_15_2: {
    atlasIdx: 94,
    uOffset: 30,
    vOffset: 2
  },
  head_15_3: {
    atlasIdx: 95,
    uOffset: 31,
    vOffset: 2
  },
  head_15_4: {
    atlasIdx: 96,
    uOffset: 0,
    vOffset: 3
  },
  head_15_5: {
    atlasIdx: 97,
    uOffset: 1,
    vOffset: 3
  },
  body_none: {
    atlasIdx: 98,
    uOffset: 2,
    vOffset: 3
  },
  body_0_0: {
    atlasIdx: 99,
    uOffset: 3,
    vOffset: 3
  },
  body_0_1: {
    atlasIdx: 100,
    uOffset: 4,
    vOffset: 3
  },
  body_0_2: {
    atlasIdx: 101,
    uOffset: 5,
    vOffset: 3
  },
  body_0_3: {
    atlasIdx: 102,
    uOffset: 6,
    vOffset: 3
  },
  body_0_4: {
    atlasIdx: 103,
    uOffset: 7,
    vOffset: 3
  },
  body_0_5: {
    atlasIdx: 104,
    uOffset: 8,
    vOffset: 3
  },
  body_0_6: {
    atlasIdx: 105,
    uOffset: 9,
    vOffset: 3
  },
  body_0_7: {
    atlasIdx: 106,
    uOffset: 10,
    vOffset: 3
  },
  body_1_0: {
    atlasIdx: 107,
    uOffset: 11,
    vOffset: 3
  },
  body_1_1: {
    atlasIdx: 108,
    uOffset: 12,
    vOffset: 3
  },
  body_1_2: {
    atlasIdx: 109,
    uOffset: 13,
    vOffset: 3
  },
  body_1_3: {
    atlasIdx: 110,
    uOffset: 14,
    vOffset: 3
  },
  body_1_4: {
    atlasIdx: 111,
    uOffset: 15,
    vOffset: 3
  },
  body_1_5: {
    atlasIdx: 112,
    uOffset: 16,
    vOffset: 3
  },
  body_1_6: {
    atlasIdx: 113,
    uOffset: 17,
    vOffset: 3
  },
  body_1_7: {
    atlasIdx: 114,
    uOffset: 18,
    vOffset: 3
  },
  body_2_0: {
    atlasIdx: 115,
    uOffset: 19,
    vOffset: 3
  },
  body_2_1: {
    atlasIdx: 116,
    uOffset: 20,
    vOffset: 3
  },
  body_2_2: {
    atlasIdx: 117,
    uOffset: 21,
    vOffset: 3
  },
  body_2_3: {
    atlasIdx: 118,
    uOffset: 22,
    vOffset: 3
  },
  body_2_4: {
    atlasIdx: 119,
    uOffset: 23,
    vOffset: 3
  },
  body_2_5: {
    atlasIdx: 120,
    uOffset: 24,
    vOffset: 3
  },
  body_2_6: {
    atlasIdx: 121,
    uOffset: 25,
    vOffset: 3
  },
  body_2_7: {
    atlasIdx: 122,
    uOffset: 26,
    vOffset: 3
  },
  body_3_0: {
    atlasIdx: 123,
    uOffset: 27,
    vOffset: 3
  },
  body_3_1: {
    atlasIdx: 124,
    uOffset: 28,
    vOffset: 3
  },
  body_3_2: {
    atlasIdx: 125,
    uOffset: 29,
    vOffset: 3
  },
  body_3_3: {
    atlasIdx: 126,
    uOffset: 30,
    vOffset: 3
  },
  body_3_4: {
    atlasIdx: 127,
    uOffset: 31,
    vOffset: 3
  },
  body_3_5: {
    atlasIdx: 128,
    uOffset: 0,
    vOffset: 4
  },
  body_3_6: {
    atlasIdx: 129,
    uOffset: 1,
    vOffset: 4
  },
  body_3_7: {
    atlasIdx: 130,
    uOffset: 2,
    vOffset: 4
  },
  body_4_0: {
    atlasIdx: 131,
    uOffset: 3,
    vOffset: 4
  },
  body_4_1: {
    atlasIdx: 132,
    uOffset: 4,
    vOffset: 4
  },
  body_4_2: {
    atlasIdx: 133,
    uOffset: 5,
    vOffset: 4
  },
  body_4_3: {
    atlasIdx: 134,
    uOffset: 6,
    vOffset: 4
  },
  body_4_4: {
    atlasIdx: 135,
    uOffset: 7,
    vOffset: 4
  },
  body_4_5: {
    atlasIdx: 136,
    uOffset: 8,
    vOffset: 4
  },
  body_4_6: {
    atlasIdx: 137,
    uOffset: 9,
    vOffset: 4
  },
  body_4_7: {
    atlasIdx: 138,
    uOffset: 10,
    vOffset: 4
  },
  body_5_0: {
    atlasIdx: 139,
    uOffset: 11,
    vOffset: 4
  },
  body_5_1: {
    atlasIdx: 140,
    uOffset: 12,
    vOffset: 4
  },
  body_5_2: {
    atlasIdx: 141,
    uOffset: 13,
    vOffset: 4
  },
  body_5_3: {
    atlasIdx: 142,
    uOffset: 14,
    vOffset: 4
  },
  body_5_4: {
    atlasIdx: 143,
    uOffset: 15,
    vOffset: 4
  },
  body_5_5: {
    atlasIdx: 144,
    uOffset: 16,
    vOffset: 4
  },
  body_5_6: {
    atlasIdx: 145,
    uOffset: 17,
    vOffset: 4
  },
  body_5_7: {
    atlasIdx: 146,
    uOffset: 18,
    vOffset: 4
  },
  body_6_0: {
    atlasIdx: 147,
    uOffset: 19,
    vOffset: 4
  },
  body_6_1: {
    atlasIdx: 148,
    uOffset: 20,
    vOffset: 4
  },
  body_6_2: {
    atlasIdx: 149,
    uOffset: 21,
    vOffset: 4
  },
  body_6_3: {
    atlasIdx: 150,
    uOffset: 22,
    vOffset: 4
  },
  body_6_4: {
    atlasIdx: 151,
    uOffset: 23,
    vOffset: 4
  },
  body_6_5: {
    atlasIdx: 152,
    uOffset: 24,
    vOffset: 4
  },
  body_6_6: {
    atlasIdx: 153,
    uOffset: 25,
    vOffset: 4
  },
  body_6_7: {
    atlasIdx: 154,
    uOffset: 26,
    vOffset: 4
  },
  body_7_0: {
    atlasIdx: 155,
    uOffset: 27,
    vOffset: 4
  },
  body_7_1: {
    atlasIdx: 156,
    uOffset: 28,
    vOffset: 4
  },
  body_7_2: {
    atlasIdx: 157,
    uOffset: 29,
    vOffset: 4
  },
  body_7_3: {
    atlasIdx: 158,
    uOffset: 30,
    vOffset: 4
  },
  body_7_4: {
    atlasIdx: 159,
    uOffset: 31,
    vOffset: 4
  },
  body_7_5: {
    atlasIdx: 160,
    uOffset: 0,
    vOffset: 5
  },
  body_7_6: {
    atlasIdx: 161,
    uOffset: 1,
    vOffset: 5
  },
  body_7_7: {
    atlasIdx: 162,
    uOffset: 2,
    vOffset: 5
  },
  body_7_8: {
    atlasIdx: 163,
    uOffset: 3,
    vOffset: 5
  },
  body_8_0: {
    atlasIdx: 164,
    uOffset: 4,
    vOffset: 5
  },
  body_8_1: {
    atlasIdx: 165,
    uOffset: 5,
    vOffset: 5
  },
  body_8_2: {
    atlasIdx: 166,
    uOffset: 6,
    vOffset: 5
  },
  body_8_3: {
    atlasIdx: 167,
    uOffset: 7,
    vOffset: 5
  },
  body_8_4: {
    atlasIdx: 168,
    uOffset: 8,
    vOffset: 5
  },
  body_8_5: {
    atlasIdx: 169,
    uOffset: 9,
    vOffset: 5
  },
  body_8_6: {
    atlasIdx: 170,
    uOffset: 10,
    vOffset: 5
  },
  body_8_7: {
    atlasIdx: 171,
    uOffset: 11,
    vOffset: 5
  },
  body_8_8: {
    atlasIdx: 172,
    uOffset: 12,
    vOffset: 5
  },
  body_9_0: {
    atlasIdx: 173,
    uOffset: 13,
    vOffset: 5
  },
  body_9_1: {
    atlasIdx: 174,
    uOffset: 14,
    vOffset: 5
  },
  body_9_2: {
    atlasIdx: 175,
    uOffset: 15,
    vOffset: 5
  },
  body_9_3: {
    atlasIdx: 176,
    uOffset: 16,
    vOffset: 5
  },
  body_9_4: {
    atlasIdx: 177,
    uOffset: 17,
    vOffset: 5
  },
  body_9_5: {
    atlasIdx: 178,
    uOffset: 18,
    vOffset: 5
  },
  body_9_6: {
    atlasIdx: 179,
    uOffset: 19,
    vOffset: 5
  },
  body_9_7: {
    atlasIdx: 180,
    uOffset: 20,
    vOffset: 5
  },
  body_9_8: {
    atlasIdx: 181,
    uOffset: 21,
    vOffset: 5
  },
  body_10_0: {
    atlasIdx: 182,
    uOffset: 22,
    vOffset: 5
  },
  body_10_1: {
    atlasIdx: 183,
    uOffset: 23,
    vOffset: 5
  },
  body_10_2: {
    atlasIdx: 184,
    uOffset: 24,
    vOffset: 5
  },
  body_10_3: {
    atlasIdx: 185,
    uOffset: 25,
    vOffset: 5
  },
  body_10_4: {
    atlasIdx: 186,
    uOffset: 26,
    vOffset: 5
  },
  body_10_5: {
    atlasIdx: 187,
    uOffset: 27,
    vOffset: 5
  },
  body_10_6: {
    atlasIdx: 188,
    uOffset: 28,
    vOffset: 5
  },
  body_10_7: {
    atlasIdx: 189,
    uOffset: 29,
    vOffset: 5
  },
  body_10_8: {
    atlasIdx: 190,
    uOffset: 30,
    vOffset: 5
  },
  body_11_0: {
    atlasIdx: 191,
    uOffset: 31,
    vOffset: 5
  },
  body_11_1: {
    atlasIdx: 192,
    uOffset: 0,
    vOffset: 6
  },
  body_11_2: {
    atlasIdx: 193,
    uOffset: 1,
    vOffset: 6
  },
  body_11_3: {
    atlasIdx: 194,
    uOffset: 2,
    vOffset: 6
  },
  body_11_4: {
    atlasIdx: 195,
    uOffset: 3,
    vOffset: 6
  },
  body_11_5: {
    atlasIdx: 196,
    uOffset: 4,
    vOffset: 6
  },
  body_11_6: {
    atlasIdx: 197,
    uOffset: 5,
    vOffset: 6
  },
  body_12_0: {
    atlasIdx: 198,
    uOffset: 6,
    vOffset: 6
  },
  body_12_1: {
    atlasIdx: 199,
    uOffset: 7,
    vOffset: 6
  },
  body_12_2: {
    atlasIdx: 200,
    uOffset: 8,
    vOffset: 6
  },
  body_12_3: {
    atlasIdx: 201,
    uOffset: 9,
    vOffset: 6
  },
  body_12_4: {
    atlasIdx: 202,
    uOffset: 10,
    vOffset: 6
  },
  body_12_5: {
    atlasIdx: 203,
    uOffset: 11,
    vOffset: 6
  },
  body_12_6: {
    atlasIdx: 204,
    uOffset: 12,
    vOffset: 6
  },
  body_12_7: {
    atlasIdx: 205,
    uOffset: 13,
    vOffset: 6
  },
  body_12_8: {
    atlasIdx: 206,
    uOffset: 14,
    vOffset: 6
  },
  body_13_0: {
    atlasIdx: 207,
    uOffset: 15,
    vOffset: 6
  },
  body_13_1: {
    atlasIdx: 208,
    uOffset: 16,
    vOffset: 6
  },
  body_13_2: {
    atlasIdx: 209,
    uOffset: 17,
    vOffset: 6
  },
  body_13_3: {
    atlasIdx: 210,
    uOffset: 18,
    vOffset: 6
  },
  body_13_4: {
    atlasIdx: 211,
    uOffset: 19,
    vOffset: 6
  },
  body_13_5: {
    atlasIdx: 212,
    uOffset: 20,
    vOffset: 6
  },
  body_13_6: {
    atlasIdx: 213,
    uOffset: 21,
    vOffset: 6
  },
  body_13_7: {
    atlasIdx: 214,
    uOffset: 22,
    vOffset: 6
  },
  body_13_8: {
    atlasIdx: 215,
    uOffset: 23,
    vOffset: 6
  },
  body_14_0: {
    atlasIdx: 216,
    uOffset: 24,
    vOffset: 6
  },
  body_14_1: {
    atlasIdx: 217,
    uOffset: 25,
    vOffset: 6
  },
  body_14_2: {
    atlasIdx: 218,
    uOffset: 26,
    vOffset: 6
  },
  body_14_3: {
    atlasIdx: 219,
    uOffset: 27,
    vOffset: 6
  },
  body_14_4: {
    atlasIdx: 220,
    uOffset: 28,
    vOffset: 6
  },
  body_14_5: {
    atlasIdx: 221,
    uOffset: 29,
    vOffset: 6
  },
  body_14_6: {
    atlasIdx: 222,
    uOffset: 30,
    vOffset: 6
  },
  body_14_7: {
    atlasIdx: 223,
    uOffset: 31,
    vOffset: 6
  },
  body_14_8: {
    atlasIdx: 224,
    uOffset: 0,
    vOffset: 7
  },
  body_15_0: {
    atlasIdx: 225,
    uOffset: 1,
    vOffset: 7
  },
  body_15_1: {
    atlasIdx: 226,
    uOffset: 2,
    vOffset: 7
  },
  body_15_2: {
    atlasIdx: 227,
    uOffset: 3,
    vOffset: 7
  },
  body_15_3: {
    atlasIdx: 228,
    uOffset: 4,
    vOffset: 7
  },
  body_15_4: {
    atlasIdx: 229,
    uOffset: 5,
    vOffset: 7
  },
  body_16_0: {
    atlasIdx: 230,
    uOffset: 6,
    vOffset: 7
  },
  body_16_1: {
    atlasIdx: 231,
    uOffset: 7,
    vOffset: 7
  },
  body_16_2: {
    atlasIdx: 232,
    uOffset: 8,
    vOffset: 7
  },
  body_16_3: {
    atlasIdx: 233,
    uOffset: 9,
    vOffset: 7
  },
  body_16_4: {
    atlasIdx: 234,
    uOffset: 10,
    vOffset: 7
  },
  body_16_5: {
    atlasIdx: 235,
    uOffset: 11,
    vOffset: 7
  },
  body_17_0: {
    atlasIdx: 236,
    uOffset: 12,
    vOffset: 7
  },
  body_17_1: {
    atlasIdx: 237,
    uOffset: 13,
    vOffset: 7
  },
  body_17_2: {
    atlasIdx: 238,
    uOffset: 14,
    vOffset: 7
  },
  body_17_3: {
    atlasIdx: 239,
    uOffset: 15,
    vOffset: 7
  },
  body_17_4: {
    atlasIdx: 240,
    uOffset: 16,
    vOffset: 7
  },
  body_18_0: {
    atlasIdx: 241,
    uOffset: 17,
    vOffset: 7
  },
  body_18_1: {
    atlasIdx: 242,
    uOffset: 18,
    vOffset: 7
  },
  body_18_2: {
    atlasIdx: 243,
    uOffset: 19,
    vOffset: 7
  },
  body_18_3: {
    atlasIdx: 244,
    uOffset: 20,
    vOffset: 7
  },
  body_18_4: {
    atlasIdx: 245,
    uOffset: 21,
    vOffset: 7
  },
  body_18_5: {
    atlasIdx: 246,
    uOffset: 22,
    vOffset: 7
  },
  legs_none: {
    atlasIdx: 247,
    uOffset: 23,
    vOffset: 7
  },
  legs_0_0: {
    atlasIdx: 248,
    uOffset: 24,
    vOffset: 7
  },
  legs_0_1: {
    atlasIdx: 249,
    uOffset: 25,
    vOffset: 7
  },
  legs_0_2: {
    atlasIdx: 250,
    uOffset: 26,
    vOffset: 7
  },
  legs_0_3: {
    atlasIdx: 251,
    uOffset: 27,
    vOffset: 7
  },
  legs_0_4: {
    atlasIdx: 252,
    uOffset: 28,
    vOffset: 7
  },
  legs_1_0: {
    atlasIdx: 253,
    uOffset: 29,
    vOffset: 7
  },
  legs_1_1: {
    atlasIdx: 254,
    uOffset: 30,
    vOffset: 7
  },
  legs_1_2: {
    atlasIdx: 255,
    uOffset: 31,
    vOffset: 7
  },
  legs_1_3: {
    atlasIdx: 256,
    uOffset: 0,
    vOffset: 8
  },
  legs_1_4: {
    atlasIdx: 257,
    uOffset: 1,
    vOffset: 8
  },
  legs_2_0: {
    atlasIdx: 258,
    uOffset: 2,
    vOffset: 8
  },
  legs_2_1: {
    atlasIdx: 259,
    uOffset: 3,
    vOffset: 8
  },
  legs_2_2: {
    atlasIdx: 260,
    uOffset: 4,
    vOffset: 8
  },
  legs_2_3: {
    atlasIdx: 261,
    uOffset: 5,
    vOffset: 8
  },
  legs_2_4: {
    atlasIdx: 262,
    uOffset: 6,
    vOffset: 8
  },
  legs_3_0: {
    atlasIdx: 263,
    uOffset: 7,
    vOffset: 8
  },
  legs_3_1: {
    atlasIdx: 264,
    uOffset: 8,
    vOffset: 8
  },
  legs_3_2: {
    atlasIdx: 265,
    uOffset: 9,
    vOffset: 8
  },
  legs_3_3: {
    atlasIdx: 266,
    uOffset: 10,
    vOffset: 8
  },
  legs_3_4: {
    atlasIdx: 267,
    uOffset: 11,
    vOffset: 8
  },
  legs_3_5: {
    atlasIdx: 268,
    uOffset: 12,
    vOffset: 8
  },
  legs_3_6: {
    atlasIdx: 269,
    uOffset: 13,
    vOffset: 8
  },
  legs_4_0: {
    atlasIdx: 270,
    uOffset: 14,
    vOffset: 8
  },
  legs_4_1: {
    atlasIdx: 271,
    uOffset: 15,
    vOffset: 8
  },
  legs_4_2: {
    atlasIdx: 272,
    uOffset: 16,
    vOffset: 8
  },
  legs_4_3: {
    atlasIdx: 273,
    uOffset: 17,
    vOffset: 8
  },
  legs_4_4: {
    atlasIdx: 274,
    uOffset: 18,
    vOffset: 8
  },
  legs_4_5: {
    atlasIdx: 275,
    uOffset: 19,
    vOffset: 8
  },
  legs_4_6: {
    atlasIdx: 276,
    uOffset: 20,
    vOffset: 8
  },
  legs_5_0: {
    atlasIdx: 277,
    uOffset: 21,
    vOffset: 8
  },
  legs_5_1: {
    atlasIdx: 278,
    uOffset: 22,
    vOffset: 8
  },
  legs_5_2: {
    atlasIdx: 279,
    uOffset: 23,
    vOffset: 8
  },
  legs_5_3: {
    atlasIdx: 280,
    uOffset: 24,
    vOffset: 8
  },
  legs_5_4: {
    atlasIdx: 281,
    uOffset: 25,
    vOffset: 8
  },
  legs_5_5: {
    atlasIdx: 282,
    uOffset: 26,
    vOffset: 8
  },
  legs_5_6: {
    atlasIdx: 283,
    uOffset: 27,
    vOffset: 8
  },
  legs_6_0: {
    atlasIdx: 284,
    uOffset: 28,
    vOffset: 8
  },
  legs_6_1: {
    atlasIdx: 285,
    uOffset: 29,
    vOffset: 8
  },
  legs_6_2: {
    atlasIdx: 286,
    uOffset: 30,
    vOffset: 8
  },
  legs_6_3: {
    atlasIdx: 287,
    uOffset: 31,
    vOffset: 8
  },
  legs_6_4: {
    atlasIdx: 288,
    uOffset: 0,
    vOffset: 9
  },
  legs_6_5: {
    atlasIdx: 289,
    uOffset: 1,
    vOffset: 9
  },
  legs_6_6: {
    atlasIdx: 290,
    uOffset: 2,
    vOffset: 9
  },
  legs_7_0: {
    atlasIdx: 291,
    uOffset: 3,
    vOffset: 9
  },
  legs_7_1: {
    atlasIdx: 292,
    uOffset: 4,
    vOffset: 9
  },
  legs_7_2: {
    atlasIdx: 293,
    uOffset: 5,
    vOffset: 9
  },
  legs_7_3: {
    atlasIdx: 294,
    uOffset: 6,
    vOffset: 9
  },
  legs_7_4: {
    atlasIdx: 295,
    uOffset: 7,
    vOffset: 9
  },
  legs_7_5: {
    atlasIdx: 296,
    uOffset: 8,
    vOffset: 9
  },
  legs_7_6: {
    atlasIdx: 297,
    uOffset: 9,
    vOffset: 9
  },
  legs_8_0: {
    atlasIdx: 298,
    uOffset: 10,
    vOffset: 9
  },
  legs_8_1: {
    atlasIdx: 299,
    uOffset: 11,
    vOffset: 9
  },
  legs_8_2: {
    atlasIdx: 300,
    uOffset: 12,
    vOffset: 9
  },
  legs_8_3: {
    atlasIdx: 301,
    uOffset: 13,
    vOffset: 9
  },
  legs_8_4: {
    atlasIdx: 302,
    uOffset: 14,
    vOffset: 9
  },
  legs_8_5: {
    atlasIdx: 303,
    uOffset: 15,
    vOffset: 9
  },
  legs_8_6: {
    atlasIdx: 304,
    uOffset: 16,
    vOffset: 9
  },
  legs_9_0: {
    atlasIdx: 305,
    uOffset: 17,
    vOffset: 9
  },
  legs_9_1: {
    atlasIdx: 306,
    uOffset: 18,
    vOffset: 9
  },
  legs_9_2: {
    atlasIdx: 307,
    uOffset: 19,
    vOffset: 9
  },
  legs_9_3: {
    atlasIdx: 308,
    uOffset: 20,
    vOffset: 9
  },
  legs_9_4: {
    atlasIdx: 309,
    uOffset: 21,
    vOffset: 9
  },
  legs_9_5: {
    atlasIdx: 310,
    uOffset: 22,
    vOffset: 9
  },
  legs_9_6: {
    atlasIdx: 311,
    uOffset: 23,
    vOffset: 9
  },
  legs_10_0: {
    atlasIdx: 312,
    uOffset: 24,
    vOffset: 9
  },
  legs_10_1: {
    atlasIdx: 313,
    uOffset: 25,
    vOffset: 9
  },
  legs_10_2: {
    atlasIdx: 314,
    uOffset: 26,
    vOffset: 9
  },
  legs_10_3: {
    atlasIdx: 315,
    uOffset: 27,
    vOffset: 9
  },
  legs_10_4: {
    atlasIdx: 316,
    uOffset: 28,
    vOffset: 9
  },
  legs_10_5: {
    atlasIdx: 317,
    uOffset: 29,
    vOffset: 9
  },
  legs_10_6: {
    atlasIdx: 318,
    uOffset: 30,
    vOffset: 9
  },
  legs_11_0: {
    atlasIdx: 319,
    uOffset: 31,
    vOffset: 9
  },
  legs_11_1: {
    atlasIdx: 320,
    uOffset: 0,
    vOffset: 10
  },
  legs_11_2: {
    atlasIdx: 321,
    uOffset: 1,
    vOffset: 10
  },
  legs_11_3: {
    atlasIdx: 322,
    uOffset: 2,
    vOffset: 10
  },
  legs_11_4: {
    atlasIdx: 323,
    uOffset: 3,
    vOffset: 10
  },
  legs_12_0: {
    atlasIdx: 324,
    uOffset: 4,
    vOffset: 10
  },
  legs_12_1: {
    atlasIdx: 325,
    uOffset: 5,
    vOffset: 10
  },
  legs_12_2: {
    atlasIdx: 326,
    uOffset: 6,
    vOffset: 10
  },
  legs_12_3: {
    atlasIdx: 327,
    uOffset: 7,
    vOffset: 10
  },
  legs_12_4: {
    atlasIdx: 328,
    uOffset: 8,
    vOffset: 10
  },
  legs_12_5: {
    atlasIdx: 329,
    uOffset: 9,
    vOffset: 10
  },
  legs_13_0: {
    atlasIdx: 330,
    uOffset: 10,
    vOffset: 10
  },
  legs_13_1: {
    atlasIdx: 331,
    uOffset: 11,
    vOffset: 10
  },
  legs_13_2: {
    atlasIdx: 332,
    uOffset: 12,
    vOffset: 10
  },
  legs_13_3: {
    atlasIdx: 333,
    uOffset: 13,
    vOffset: 10
  },
  legs_13_4: {
    atlasIdx: 334,
    uOffset: 14,
    vOffset: 10
  },
  legs_14_0: {
    atlasIdx: 335,
    uOffset: 15,
    vOffset: 10
  },
  legs_14_1: {
    atlasIdx: 336,
    uOffset: 16,
    vOffset: 10
  },
  legs_14_2: {
    atlasIdx: 337,
    uOffset: 17,
    vOffset: 10
  },
  legs_14_3: {
    atlasIdx: 338,
    uOffset: 18,
    vOffset: 10
  },
  legs_14_4: {
    atlasIdx: 339,
    uOffset: 19,
    vOffset: 10
  },
  legs_14_5: {
    atlasIdx: 340,
    uOffset: 20,
    vOffset: 10
  },
  shoes_none: {
    atlasIdx: 341,
    uOffset: 21,
    vOffset: 10
  },
  shoes_0_0: {
    atlasIdx: 342,
    uOffset: 22,
    vOffset: 10
  },
  shoes_0_1: {
    atlasIdx: 343,
    uOffset: 23,
    vOffset: 10
  },
  shoes_0_2: {
    atlasIdx: 344,
    uOffset: 24,
    vOffset: 10
  },
  shoes_1_0: {
    atlasIdx: 345,
    uOffset: 25,
    vOffset: 10
  },
  shoes_1_1: {
    atlasIdx: 346,
    uOffset: 26,
    vOffset: 10
  },
  shoes_1_2: {
    atlasIdx: 347,
    uOffset: 27,
    vOffset: 10
  },
  shoes_2_0: {
    atlasIdx: 348,
    uOffset: 28,
    vOffset: 10
  },
  shoes_2_1: {
    atlasIdx: 349,
    uOffset: 29,
    vOffset: 10
  },
  shoes_2_2: {
    atlasIdx: 350,
    uOffset: 30,
    vOffset: 10
  },
  shoes_4_0: {
    atlasIdx: 351,
    uOffset: 31,
    vOffset: 10
  },
  shoes_4_1: {
    atlasIdx: 352,
    uOffset: 0,
    vOffset: 11
  },
  shoes_4_2: {
    atlasIdx: 353,
    uOffset: 1,
    vOffset: 11
  },
  shoes_4_3: {
    atlasIdx: 354,
    uOffset: 2,
    vOffset: 11
  },
  shoes_4_4: {
    atlasIdx: 355,
    uOffset: 3,
    vOffset: 11
  },
  shoes_4_5: {
    atlasIdx: 356,
    uOffset: 4,
    vOffset: 11
  },
  shoes_5_0: {
    atlasIdx: 357,
    uOffset: 5,
    vOffset: 11
  },
  shoes_5_1: {
    atlasIdx: 358,
    uOffset: 6,
    vOffset: 11
  },
  shoes_5_2: {
    atlasIdx: 359,
    uOffset: 7,
    vOffset: 11
  },
  shoes_5_3: {
    atlasIdx: 360,
    uOffset: 8,
    vOffset: 11
  },
  shoes_5_4: {
    atlasIdx: 361,
    uOffset: 9,
    vOffset: 11
  },
  shoes_5_5: {
    atlasIdx: 362,
    uOffset: 10,
    vOffset: 11
  },
  shoes_6_0: {
    atlasIdx: 363,
    uOffset: 11,
    vOffset: 11
  },
  shoes_6_1: {
    atlasIdx: 364,
    uOffset: 12,
    vOffset: 11
  },
  shoes_6_2: {
    atlasIdx: 365,
    uOffset: 13,
    vOffset: 11
  },
  shoes_6_3: {
    atlasIdx: 366,
    uOffset: 14,
    vOffset: 11
  },
  shoes_6_4: {
    atlasIdx: 367,
    uOffset: 15,
    vOffset: 11
  },
  shoes_6_5: {
    atlasIdx: 368,
    uOffset: 16,
    vOffset: 11
  },
  shoes_6_6: {
    atlasIdx: 369,
    uOffset: 17,
    vOffset: 11
  },
  shoes_9_0: {
    atlasIdx: 370,
    uOffset: 18,
    vOffset: 11
  },
  shoes_9_1: {
    atlasIdx: 371,
    uOffset: 19,
    vOffset: 11
  },
  shoes_9_2: {
    atlasIdx: 372,
    uOffset: 20,
    vOffset: 11
  },
  shoes_9_3: {
    atlasIdx: 373,
    uOffset: 21,
    vOffset: 11
  },
  shoes_9_4: {
    atlasIdx: 374,
    uOffset: 22,
    vOffset: 11
  },
  shoes_9_5: {
    atlasIdx: 375,
    uOffset: 23,
    vOffset: 11
  },
  shoes_12_0: {
    atlasIdx: 376,
    uOffset: 24,
    vOffset: 11
  },
  shoes_12_1: {
    atlasIdx: 377,
    uOffset: 25,
    vOffset: 11
  },
  shoes_12_2: {
    atlasIdx: 378,
    uOffset: 26,
    vOffset: 11
  },
  shoes_12_3: {
    atlasIdx: 379,
    uOffset: 27,
    vOffset: 11
  },
  shoes_12_4: {
    atlasIdx: 380,
    uOffset: 28,
    vOffset: 11
  },
  shoes_12_5: {
    atlasIdx: 381,
    uOffset: 29,
    vOffset: 11
  },
  eyebrows_none: {
    atlasIdx: 382,
    uOffset: 30,
    vOffset: 11
  },
  eyebrows_0: {
    atlasIdx: 383,
    uOffset: 31,
    vOffset: 11
  },
  eyebrows_1_0: {
    atlasIdx: 384,
    uOffset: 0,
    vOffset: 12
  },
  eyebrows_1_1: {
    atlasIdx: 385,
    uOffset: 1,
    vOffset: 12
  },
  eyebrows_1_2: {
    atlasIdx: 386,
    uOffset: 2,
    vOffset: 12
  },
  eyebrows_1_3: {
    atlasIdx: 387,
    uOffset: 3,
    vOffset: 12
  },
  eyebrows_1_4: {
    atlasIdx: 388,
    uOffset: 4,
    vOffset: 12
  },
  eyebrows_2_0: {
    atlasIdx: 389,
    uOffset: 5,
    vOffset: 12
  },
  eyebrows_2_1: {
    atlasIdx: 390,
    uOffset: 6,
    vOffset: 12
  },
  eyebrows_2_2: {
    atlasIdx: 391,
    uOffset: 7,
    vOffset: 12
  },
  eyebrows_2_3: {
    atlasIdx: 392,
    uOffset: 8,
    vOffset: 12
  },
  eyebrows_2_4: {
    atlasIdx: 393,
    uOffset: 9,
    vOffset: 12
  },
  eyebrows_3_0: {
    atlasIdx: 394,
    uOffset: 10,
    vOffset: 12
  },
  eyebrows_3_1: {
    atlasIdx: 395,
    uOffset: 11,
    vOffset: 12
  },
  eyebrows_3_2: {
    atlasIdx: 396,
    uOffset: 12,
    vOffset: 12
  },
  eyebrows_3_3: {
    atlasIdx: 397,
    uOffset: 13,
    vOffset: 12
  },
  eyebrows_3_4: {
    atlasIdx: 398,
    uOffset: 14,
    vOffset: 12
  },
  eyes_none: {
    atlasIdx: 399,
    uOffset: 15,
    vOffset: 12
  },
  eyes_0_0: {
    atlasIdx: 400,
    uOffset: 16,
    vOffset: 12
  },
  eyes_0_1: {
    atlasIdx: 401,
    uOffset: 17,
    vOffset: 12
  },
  eyes_0_2: {
    atlasIdx: 402,
    uOffset: 18,
    vOffset: 12
  },
  eyes_0_3: {
    atlasIdx: 403,
    uOffset: 19,
    vOffset: 12
  },
  eyes_0_4: {
    atlasIdx: 404,
    uOffset: 20,
    vOffset: 12
  },
  eyes_1_0: {
    atlasIdx: 405,
    uOffset: 21,
    vOffset: 12
  },
  eyes_1_1: {
    atlasIdx: 406,
    uOffset: 22,
    vOffset: 12
  },
  eyes_1_2: {
    atlasIdx: 407,
    uOffset: 23,
    vOffset: 12
  },
  eyes_1_3: {
    atlasIdx: 408,
    uOffset: 24,
    vOffset: 12
  },
  eyes_1_4: {
    atlasIdx: 409,
    uOffset: 25,
    vOffset: 12
  },
  eyes_2_0: {
    atlasIdx: 410,
    uOffset: 26,
    vOffset: 12
  },
  eyes_2_1: {
    atlasIdx: 411,
    uOffset: 27,
    vOffset: 12
  },
  eyes_2_2: {
    atlasIdx: 412,
    uOffset: 28,
    vOffset: 12
  },
  eyes_2_3: {
    atlasIdx: 413,
    uOffset: 29,
    vOffset: 12
  },
  eyes_2_4: {
    atlasIdx: 414,
    uOffset: 30,
    vOffset: 12
  },
  eyes_3_0: {
    atlasIdx: 415,
    uOffset: 31,
    vOffset: 12
  },
  eyes_3_1: {
    atlasIdx: 416,
    uOffset: 0,
    vOffset: 13
  },
  eyes_3_2: {
    atlasIdx: 417,
    uOffset: 1,
    vOffset: 13
  },
  eyes_3_3: {
    atlasIdx: 418,
    uOffset: 2,
    vOffset: 13
  },
  eyes_3_4: {
    atlasIdx: 419,
    uOffset: 3,
    vOffset: 13
  },
  eyes_4_0: {
    atlasIdx: 420,
    uOffset: 4,
    vOffset: 13
  },
  eyes_4_1: {
    atlasIdx: 421,
    uOffset: 5,
    vOffset: 13
  },
  eyes_4_2: {
    atlasIdx: 422,
    uOffset: 6,
    vOffset: 13
  },
  eyes_4_3: {
    atlasIdx: 423,
    uOffset: 7,
    vOffset: 13
  },
  eyes_4_4: {
    atlasIdx: 424,
    uOffset: 8,
    vOffset: 13
  },
  eyes_5_0: {
    atlasIdx: 425,
    uOffset: 9,
    vOffset: 13
  },
  eyes_5_1: {
    atlasIdx: 426,
    uOffset: 10,
    vOffset: 13
  },
  eyes_5_2: {
    atlasIdx: 427,
    uOffset: 11,
    vOffset: 13
  },
  eyes_5_3: {
    atlasIdx: 428,
    uOffset: 12,
    vOffset: 13
  },
  eyes_5_4: {
    atlasIdx: 429,
    uOffset: 13,
    vOffset: 13
  },
  eyes_6_0: {
    atlasIdx: 430,
    uOffset: 14,
    vOffset: 13
  },
  eyes_6_1: {
    atlasIdx: 431,
    uOffset: 15,
    vOffset: 13
  },
  eyes_6_2: {
    atlasIdx: 432,
    uOffset: 16,
    vOffset: 13
  },
  eyes_6_3: {
    atlasIdx: 433,
    uOffset: 17,
    vOffset: 13
  },
  eyes_6_4: {
    atlasIdx: 434,
    uOffset: 18,
    vOffset: 13
  },
  eyes_7_0: {
    atlasIdx: 435,
    uOffset: 19,
    vOffset: 13
  },
  eyes_7_1: {
    atlasIdx: 436,
    uOffset: 20,
    vOffset: 13
  },
  eyes_7_2: {
    atlasIdx: 437,
    uOffset: 21,
    vOffset: 13
  },
  eyes_7_3: {
    atlasIdx: 438,
    uOffset: 22,
    vOffset: 13
  },
  eyes_7_4: {
    atlasIdx: 439,
    uOffset: 23,
    vOffset: 13
  },
  eyes_8_0: {
    atlasIdx: 440,
    uOffset: 24,
    vOffset: 13
  },
  eyes_8_1: {
    atlasIdx: 441,
    uOffset: 25,
    vOffset: 13
  },
  eyes_8_2: {
    atlasIdx: 442,
    uOffset: 26,
    vOffset: 13
  },
  eyes_8_3: {
    atlasIdx: 443,
    uOffset: 27,
    vOffset: 13
  },
  eyes_8_4: {
    atlasIdx: 444,
    uOffset: 28,
    vOffset: 13
  },
  eyes_9_0: {
    atlasIdx: 445,
    uOffset: 29,
    vOffset: 13
  },
  eyes_9_1: {
    atlasIdx: 446,
    uOffset: 30,
    vOffset: 13
  },
  eyes_9_2: {
    atlasIdx: 447,
    uOffset: 31,
    vOffset: 13
  },
  eyes_9_3: {
    atlasIdx: 448,
    uOffset: 0,
    vOffset: 14
  },
  eyes_9_4: {
    atlasIdx: 449,
    uOffset: 1,
    vOffset: 14
  },
  skin_none: {
    atlasIdx: 450,
    uOffset: 2,
    vOffset: 14
  },
  skin_0_0: {
    atlasIdx: 451,
    uOffset: 3,
    vOffset: 14
  },
  skin_0_1: {
    atlasIdx: 452,
    uOffset: 4,
    vOffset: 14
  },
  skin_0_2: {
    atlasIdx: 453,
    uOffset: 5,
    vOffset: 14
  },
  skin_0_3: {
    atlasIdx: 454,
    uOffset: 6,
    vOffset: 14
  },
  skin_0_4: {
    atlasIdx: 455,
    uOffset: 7,
    vOffset: 14
  },
  skin_0_5: {
    atlasIdx: 456,
    uOffset: 8,
    vOffset: 14
  },
  skin_0_6: {
    atlasIdx: 457,
    uOffset: 9,
    vOffset: 14
  },
  skin_0_7: {
    atlasIdx: 458,
    uOffset: 10,
    vOffset: 14
  },
  skin_0_8: {
    atlasIdx: 459,
    uOffset: 11,
    vOffset: 14
  },
  skin_0_9: {
    atlasIdx: 460,
    uOffset: 12,
    vOffset: 14
  },
  skin_0_10: {
    atlasIdx: 461,
    uOffset: 13,
    vOffset: 14
  },
  skin_0_11: {
    atlasIdx: 462,
    uOffset: 14,
    vOffset: 14
  },
  skin_0_12: {
    atlasIdx: 463,
    uOffset: 15,
    vOffset: 14
  },
  skin_0_13: {
    atlasIdx: 464,
    uOffset: 16,
    vOffset: 14
  },
  skin_0_14: {
    atlasIdx: 465,
    uOffset: 17,
    vOffset: 14
  },
  skin_0_15: {
    atlasIdx: 466,
    uOffset: 18,
    vOffset: 14
  },
  skin_0_16: {
    atlasIdx: 467,
    uOffset: 19,
    vOffset: 14
  },
  skin_0_17: {
    atlasIdx: 468,
    uOffset: 20,
    vOffset: 14
  },
  skin_0_18: {
    atlasIdx: 469,
    uOffset: 21,
    vOffset: 14
  },
  skin_0_19: {
    atlasIdx: 470,
    uOffset: 22,
    vOffset: 14
  },
  skin_0_20: {
    atlasIdx: 471,
    uOffset: 23,
    vOffset: 14
  },
  skin_0_21: {
    atlasIdx: 472,
    uOffset: 24,
    vOffset: 14
  },
  skin_0_22: {
    atlasIdx: 473,
    uOffset: 25,
    vOffset: 14
  },
  skin_0_23: {
    atlasIdx: 474,
    uOffset: 26,
    vOffset: 14
  },
  skin_preview: {
    atlasIdx: 475,
    uOffset: 27,
    vOffset: 14
  },
  skin_preview_body: {
    atlasIdx: 476,
    uOffset: 28,
    vOffset: 14
  },
  skin_preview_shoes: {
    atlasIdx: 477,
    uOffset: 29,
    vOffset: 14
  },
  skin_preview_head: {
    atlasIdx: 478,
    uOffset: 30,
    vOffset: 14
  },
  skin_preview_legs: {
    atlasIdx: 479,
    uOffset: 31,
    vOffset: 14
  },
  skin_1_0: {
    atlasIdx: 480,
    uOffset: 0,
    vOffset: 15
  },
  skin_1_1: {
    atlasIdx: 481,
    uOffset: 1,
    vOffset: 15
  },
  skin_1_2: {
    atlasIdx: 482,
    uOffset: 2,
    vOffset: 15
  },
  skin_1_3: {
    atlasIdx: 483,
    uOffset: 3,
    vOffset: 15
  },
  skin_1_4: {
    atlasIdx: 484,
    uOffset: 4,
    vOffset: 15
  }
};
export const f = 32;
var my = require("./1723.js");
export const c = {
  "LegLeft|Armour": 0,
  "LegRight|Armour": 0,
  "GauntletLeft|Armour": 0,
  "GauntletRight|Armour": 0,
  "Body|Armour": 0,
  "Helmet|Armour": 0,
  "BootsLeft|Armour": 0,
  "BootsRight|Armour": 0
};
function iy(CC, yC, IC, ky, gC) {
  let AC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
  const XC = my.b[yC].colourGroups[ky].colours;
  const iy = {};
  for (const my in XC) {
    iy["".concat(CC, "_").concat(my)] = {
      cosmeticPack: yC,
      colourGroup: ky,
      texture: AC ? void 0 : "".concat(CC),
      previewTex: "".concat(CC, "_").concat(my, "_preview"),
      overlayColour: XC[my].rbg,
      clientIdx: 100 * IC + XC[my].order,
      attachments: gC ? gC.map(CC => (0, fC.d)((0, fC.d)({}, CC), {}, {
        overlayColour: XC[my].rbg
      })) : void 0
    };
  }
  return iy;
}
export const h = {
  hat: (0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)({
    hat_none: {
      cosmeticPack: "default",
      texture: "hat_none",
      previewTex: "hat_none_preview",
      clientIdx: 0
    }
  }, iy("hat_0", "y2k", 1, "hat", [{
    modelGlb: "y2k_set_1_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)), iy("hat_1", "y2k", 2, "hat", [{
    modelGlb: "y2k_set_2_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)), iy("hat_2", "y2k", 3, "hat", [{
    modelGlb: "y2k_set_4_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)), iy("hat_13", "spring", 4, "animalSuit", [{
    modelGlb: "spring_set_1_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh"
  }], !0)), iy("hat_14", "spring", 5, "hat", [{
    modelGlb: "spring_set_2_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)), iy("hat_15", "spring", 6, "hat", [{
    modelGlb: "spring_set_3_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)), iy("hat_16", "spring", 7, "flowerHat", [{
    modelGlb: "spring_set_4_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh"
  }], !0)), iy("hat_17", "astro", 8, "alienSkins", [{
    modelGlb: "astro_set_1_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)), iy("hat_18", "astro", 9, "body_astronauts", [{
    modelGlb: "astro_set_2_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)), iy("hat_19", "astro", 10, "alienSkins", [{
    modelGlb: "astro_set_3_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh"
  }], !0)), iy("hat_20", "astro", 11, "body_astronauts", [{
    modelGlb: "astro_set_4_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }], !0)),
  head: (0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)({
    head_none: {
      cosmeticPack: "development",
      texture: "head_none"
    },
    head_0: {
      cosmeticPack: "default",
      texture: "head_0",
      previewTex: "head_0_preview",
      clientIdx: 900
    }
  }, iy("head_1", "default", 1, "head")), iy("head_2", "default", 2, "head")), iy("head_3", "default", 3, "head")), iy("head_4", "default", 5, "head")), iy("head_5", "default", 4, "head")), iy("head_6", "default", 6, "head")), iy("head_7", "default", 7, "head")), iy("head_8", "default", 8, "head")), iy("head_9", "default", 0, "head")), {}, {
    zombie: {
      cosmeticPack: "npc",
      texture: "zombie"
    },
    trader: {
      cosmeticPack: "npc",
      texture: "trader"
    },
    trader_blue: {
      cosmeticPack: "npc",
      texture: "trader_blue",
      attachments: [{
        modelGlb: "trader_cowl_blue",
        modelNode: "LegLeft|Attachable",
        destNode: "LegLeftMesh"
      }, {
        modelGlb: "trader_cowl_blue",
        modelNode: "LegRight|Attachable",
        destNode: "LegRightMesh"
      }, {
        modelGlb: "trader_cowl_blue",
        modelNode: "ArmLeft|Attachable",
        destNode: "ArmLeftMesh"
      }, {
        modelGlb: "trader_cowl_blue",
        modelNode: "ArmRight|Attachable",
        destNode: "ArmRightMesh"
      }, {
        modelGlb: "trader_cowl_blue",
        modelNode: "Body|Attachable",
        destNode: "TorsoNode"
      }, {
        modelGlb: "trader_cowl_blue",
        modelNode: "Head|Attachable",
        destNode: "HeadMesh"
      }]
    },
    trader_black: {
      cosmeticPack: "npc",
      texture: "trader_black",
      attachments: [{
        modelGlb: "trader_cowl_black",
        modelNode: "LegLeft|Attachable",
        destNode: "LegLeftMesh"
      }, {
        modelGlb: "trader_cowl_black",
        modelNode: "LegRight|Attachable",
        destNode: "LegRightMesh"
      }, {
        modelGlb: "trader_cowl_black",
        modelNode: "ArmLeft|Attachable",
        destNode: "ArmLeftMesh"
      }, {
        modelGlb: "trader_cowl_black",
        modelNode: "ArmRight|Attachable",
        destNode: "ArmRightMesh"
      }, {
        modelGlb: "trader_cowl_black",
        modelNode: "Body|Attachable",
        destNode: "TorsoNode"
      }, {
        modelGlb: "trader_cowl_black",
        modelNode: "Head|Attachable",
        destNode: "HeadMesh"
      }]
    },
    wizard: {
      cosmeticPack: "npc",
      texture: "wizard"
    },
    portal_mage: {
      cosmeticPack: "npc",
      texture: "portal_mage",
      attachments: [{
        modelGlb: "portal_mage_hat",
        modelNode: "LegLeftMesh",
        destNode: "LegLeftMesh"
      }, {
        modelGlb: "portal_mage_hat",
        modelNode: "LegRightMesh",
        destNode: "LegRightMesh"
      }, {
        modelGlb: "portal_mage_hat",
        modelNode: "ArmLeftMesh",
        destNode: "ArmLeftMesh"
      }, {
        modelGlb: "portal_mage_hat",
        modelNode: "ArmRightMesh",
        destNode: "ArmRightMesh"
      }, {
        modelGlb: "portal_mage_hat",
        modelNode: "BodyMesh",
        destNode: "TorsoNode"
      }, {
        modelGlb: "portal_mage_hat",
        modelNode: "HeadMesh",
        destNode: "HeadMesh"
      }]
    },
    piggy_banker: {
      cosmeticPack: "npc",
      texture: "piggy_banker",
      attachments: [{
        modelGlb: "piggy_banker_head",
        modelNode: "BodyMesh",
        destNode: "TorsoNode"
      }, {
        modelGlb: "piggy_banker_head",
        modelNode: "HeadMesh",
        destNode: "HeadMesh"
      }]
    },
    farmer: {
      cosmeticPack: "npc",
      texture: "farmer",
      attachments: [{
        modelGlb: "farmer_head",
        modelNode: "BodyMesh",
        destNode: "TorsoNode"
      }, {
        modelGlb: "farmer_head",
        modelNode: "HeadMesh",
        destNode: "HeadMesh"
      }, {
        modelGlb: "farmer_head",
        modelNode: "ArmLeftMesh",
        destNode: "ArmLeftMesh"
      }, {
        modelGlb: "farmer_head",
        modelNode: "ArmRightMesh",
        destNode: "ArmRightMesh"
      }]
    },
    farmer_gill: {
      cosmeticPack: "npc",
      texture: "farmer_gill",
      attachments: [{
        modelGlb: "farmer_gill_attachable",
        modelNode: "HeadMesh",
        destNode: "HeadMesh"
      }, {
        modelGlb: "farmer_gill_attachable",
        modelNode: "ArmLeftMesh",
        destNode: "ArmLeftMesh"
      }, {
        modelGlb: "farmer_gill_attachable",
        modelNode: "ArmRightMesh",
        destNode: "ArmRightMesh"
      }, {
        modelGlb: "farmer_gill_attachable",
        modelNode: "LegRightMesh",
        destNode: "LegLeftMesh"
      }, {
        modelGlb: "farmer_gill_attachable",
        modelNode: "LegRightMesh",
        destNode: "LegRightMesh"
      }]
    },
    monster_hunter_lorenzo: {
      cosmeticPack: "npc",
      texture: "monster_hunter_lorenzo",
      attachments: [{
        modelGlb: "monster_hunter_lorenzo_attachable",
        modelNode: "BodyMesh",
        destNode: "TorsoNode"
      }, {
        modelGlb: "monster_hunter_lorenzo_attachable",
        modelNode: "ArmRightMesh",
        destNode: "ArmRightMesh"
      }, {
        modelGlb: "monster_hunter_lorenzo_attachable",
        modelNode: "LegLeftMesh",
        destNode: "LegLeftMesh"
      }, {
        modelGlb: "monster_hunter_lorenzo_attachable",
        modelNode: "LegRightMesh",
        destNode: "LegRightMesh"
      }]
    },
    painter_spencer: {
      cosmeticPack: "npc",
      texture: "painter_spencer",
      attachments: [{
        modelGlb: "painter_spencer_attachable",
        modelNode: "HeadMesh",
        destNode: "HeadMesh"
      }]
    },
    chef: {
      cosmeticPack: "npc",
      attachments: [{
        modelGlb: "chef_attachables",
        modelNode: "BodyMesh",
        destNode: "TorsoNode"
      }, {
        modelGlb: "chef_attachables",
        modelNode: "HeadMesh",
        destNode: "HeadMesh"
      }]
    }
  }, iy("head_10", "y2k", 10, "head", [{
    modelGlb: "y2k_set_2_attachable",
    modelNode: "HeadMesh_hair",
    destNode: "HeadMesh"
  }])), iy("head_11", "y2k", 11, "head", [{
    modelGlb: "y2k_set_3_attachable",
    modelNode: "HeadMesh",
    destNode: "HeadMesh"
  }])), iy("head_12", "y2k", 12, "head")), iy("head_13", "spring", 13, "head", [{
    modelGlb: "spring_set_2_attachable",
    modelNode: "HeadMesh_hair",
    destNode: "HeadMesh"
  }])), iy("head_14", "spring", 14, "head", [{
    modelGlb: "spring_set_4_attachable",
    modelNode: "HeadMesh_hair",
    destNode: "HeadMesh"
  }])), iy("head_15", "astro", 15, "head", [{
    modelGlb: "astro_set_3_attachable",
    modelNode: "HeadMesh_hair",
    destNode: "HeadMesh",
    hideOnArmourPartsEquip: ["Helmet"]
  }])),
  back: (0, fC.d)((0, fC.d)({
    back_none: {
      cosmeticPack: "default",
      previewTex: "back_none_preview",
      clientIdx: 0
    }
  }, iy("back_0", "spring", 1, "animalSuit", [{
    modelGlb: "spring_set_1_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode"
  }], !0)), iy("back_1", "astro", 2, "body_astronauts", [{
    modelGlb: "astro_set_4_attachable",
    modelNode: "BodyMesh_backpack",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Chestplate"]
  }], !0)),
  body: (0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)({
    body_none: {
      cosmeticPack: "development",
      texture: "body_none"
    }
  }, iy("body_0", "default", 0, "body")), iy("body_1", "default", 1, "body")), iy("body_2", "default", 5, "body")), iy("body_3", "default", 4, "body")), iy("body_4", "default", 2, "body")), iy("body_5", "default", 6, "body")), iy("body_6", "default", 3, "body")), iy("body_7", "y2k", 7, "body")), iy("body_8", "y2k", 8, "body")), iy("body_9", "y2k", 9, "body", [{
    modelGlb: "y2k_set_3_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "y2k_set_3_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh"
  }, {
    modelGlb: "y2k_set_3_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh"
  }])), iy("body_10", "y2k", 10, "body", [{
    modelGlb: "y2k_set_4_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh"
  }, {
    modelGlb: "y2k_set_4_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh"
  }])), iy("body_11", "spring", 11, "animalSuit", [{
    modelGlb: "spring_set_1_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh"
  }, {
    modelGlb: "spring_set_1_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh"
  }])), iy("body_12", "spring", 12, "body", [{
    modelGlb: "spring_set_2_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Chestplate"]
  }])), iy("body_13", "spring", 13, "body", [{
    modelGlb: "spring_set_3_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "spring_set_3_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }])), iy("body_14", "spring", 14, "body", [{
    modelGlb: "spring_set_4_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "spring_set_4_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "spring_set_4_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }])), iy("body_15", "astro", 15, "body_aliens")), iy("body_16", "astro", 16, "body_astronauts", [{
    modelGlb: "astro_set_2_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "astro_set_2_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "astro_set_2_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }])), iy("body_17", "astro", 17, "body_aliens", [{
    modelGlb: "astro_set_3_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh"
  }, {
    modelGlb: "astro_set_3_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh"
  }])), iy("body_18", "astro", 18, "body_astronauts", [{
    modelGlb: "astro_set_4_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "astro_set_4_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }, {
    modelGlb: "astro_set_4_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh",
    hideOnArmourPartsEquip: ["Chestplate"]
  }])),
  legs: (0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)({
    legs_none: {
      cosmeticPack: "development",
      texture: "legs_none"
    }
  }, iy("legs_0", "default", 0, "legs")), iy("legs_1", "default", 1, "legs")), iy("legs_2", "default", 2, "legs")), iy("legs_3", "y2k", 3, "legs", [{
    modelGlb: "y2k_set_1_attachable",
    modelNode: "LegLeftMesh",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }, {
    modelGlb: "y2k_set_1_attachable",
    modelNode: "LegRightMesh",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_4", "y2k", 4, "legs", [{
    modelGlb: "y2k_set_2_attachable",
    modelNode: "LegLeftMesh",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }, {
    modelGlb: "y2k_set_2_attachable",
    modelNode: "LegRightMesh",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_5", "y2k", 5, "legs")), iy("legs_6", "y2k", 6, "legs", [{
    modelGlb: "y2k_set_4_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Leggings"]
  }, {
    modelGlb: "y2k_set_4_attachable",
    modelNode: "LegLeftMesh",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }, {
    modelGlb: "y2k_set_4_attachable",
    modelNode: "LegRightMesh",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_7", "spring", 7, "animalSuit")), iy("legs_8", "spring", 8, "legs")), iy("legs_9", "spring", 9, "legs", [{
    modelGlb: "spring_set_3_attachable",
    modelNode: "BodyMesh",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_10", "spring", 10, "legs", [{
    modelGlb: "spring_set_4_attachable",
    modelNode: "LegLeftMesh",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }, {
    modelGlb: "spring_set_4_attachable",
    modelNode: "LegRightMesh",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_11", "astro", 11, "body_aliens", [{
    modelGlb: "astro_set_1_attachable",
    modelNode: "BodyMesh_legs",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_12", "astro", 12, "body_astronauts", [{
    modelGlb: "astro_set_2_attachable",
    modelNode: "BodyMesh_legs",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_13", "astro", 13, "body_aliens", [{
    modelGlb: "astro_set_3_attachable",
    modelNode: "BodyMesh_legs",
    destNode: "TorsoNode",
    hideOnArmourPartsEquip: ["Leggings"]
  }])), iy("legs_14", "astro", 14, "body_astronauts")),
  shoes: (0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)({
    shoes_none: {
      cosmeticPack: "development",
      texture: "shoes_none"
    }
  }, iy("shoes_0", "default", 0, "shoes")), iy("shoes_1", "default", 1, "shoes")), iy("shoes_2", "default", 2, "shoes")), iy("shoes_3", "y2k", 3, "shoes", [{
    modelGlb: "y2k_set_1_attachable",
    modelNode: "LegLeftMesh_foot",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "y2k_set_1_attachable",
    modelNode: "LegRightMesh_foot",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }], !0)), iy("shoes_4", "y2k", 4, "shoes", [{
    modelGlb: "y2k_set_2_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "y2k_set_2_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }])), iy("shoes_5", "y2k", 5, "shoes")), iy("shoes_6", "spring", 6, "animalSuit", [{
    modelGlb: "spring_set_1_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "spring_set_1_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }])), iy("shoes_7", "spring", 7, "shoes", [{
    modelGlb: "spring_set_2_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "spring_set_2_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }], !0)), iy("shoes_8", "spring", 8, "shoes", [{
    modelGlb: "spring_set_3_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "spring_set_3_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }], !0)), iy("shoes_9", "spring", 9, "shoes", [{
    modelGlb: "spring_set_4_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "spring_set_4_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }])), iy("shoes_10", "astro", 10, "body_astronauts", [{
    modelGlb: "astro_set_1_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "astro_set_1_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }], !0)), iy("shoes_11", "astro", 11, "body_astronauts", [{
    modelGlb: "astro_set_2_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "astro_set_2_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }], !0)), iy("shoes_12", "astro", 12, "body_astronauts", [{
    modelGlb: "astro_set_3_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "astro_set_3_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }])), iy("shoes_13", "astro", 13, "body_astronauts", [{
    modelGlb: "astro_set_4_attachable",
    modelNode: "LegLeftMesh_feet",
    destNode: "LegLeftMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }, {
    modelGlb: "astro_set_4_attachable",
    modelNode: "LegRightMesh_feet",
    destNode: "LegRightMesh",
    hideOnArmourPartsEquip: ["Boots"]
  }], !0)),
  eyebrows: (0, fC.d)((0, fC.d)((0, fC.d)({
    eyebrows_none: {
      cosmeticPack: "development",
      texture: "eyebrows_none"
    },
    eyebrows_0: {
      cosmeticPack: "default",
      texture: "eyebrows_0",
      previewTex: "eyebrows_0_preview",
      clientIdx: 300
    }
  }, iy("eyebrows_1", "default", 1, "head")), iy("eyebrows_2", "default", 0, "head")), iy("eyebrows_3", "default", 2, "head")),
  eyes: (0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)((0, fC.d)({
    eyes_none: {
      cosmeticPack: "development",
      texture: "eyes_none"
    }
  }, iy("eyes_0", "default", 0, "eyes")), iy("eyes_1", "default", 8, "eyes")), iy("eyes_2", "default", 2, "eyes")), iy("eyes_3", "default", 9, "eyes")), iy("eyes_4", "default", 5, "eyes")), iy("eyes_5", "default", 7, "eyes")), iy("eyes_6", "default", 6, "eyes")), iy("eyes_7", "default", 3, "eyes")), iy("eyes_8", "default", 1, "eyes")), iy("eyes_9", "default", 4, "eyes")),
  skin: (0, fC.d)((0, fC.d)({
    skin_none: {
      cosmeticPack: "development",
      texture: "skin_none"
    }
  }, iy("skin_0", "default", 0, "skin")), {}, {
    skin_preview: {
      cosmeticPack: "development",
      texture: "skin_preview"
    },
    skin_preview_body: {
      cosmeticPack: "development",
      texture: "skin_preview_body"
    },
    skin_preview_shoes: {
      cosmeticPack: "development",
      texture: "skin_preview_shoes"
    },
    skin_preview_head: {
      cosmeticPack: "development",
      texture: "skin_preview_head"
    },
    skin_preview_legs: {
      cosmeticPack: "development",
      texture: "skin_preview_legs"
    }
  }, iy("skin_1", "astro", 1, "alienSkins", [{
    modelGlb: "astro_set_1_attachable",
    modelNode: "ArmLeftMesh",
    destNode: "ArmLeftMesh"
  }, {
    modelGlb: "astro_set_1_attachable",
    modelNode: "ArmRightMesh",
    destNode: "ArmRightMesh"
  }])),
  cape: Object.fromEntries(Object.entries(ky.i).map(CC => {
    let [yC, IC] = CC;
    return [yC, {
      cosmeticPack: "superRank",
      texture: "cape_".concat(yC),
      previewTex: "cape_".concat(yC, "_preview")
    }];
  })),
  nameColour: Object.fromEntries(Object.keys(ky.q).map(CC => [CC, {
    cosmeticPack: "superRank"
  }]))
};
let YC = 0;
for (const GC in h) {
  if ("cape" === GC || "nameColour" === GC) {
    continue;
  }
  const CC = h[GC];
  for (const yC in CC) {
    const IC = gC[yC];
    IC && (CC[yC].atlasIdx = IC.atlasIdx, CC[yC].uOffset = IC.uOffset, CC[yC].vOffset = IC.vOffset);
    CC[yC].idx = YC++;
  }
}
export function l(CC) {
  const yC = CC.split("_");
  return 3 === yC.length ? [yC[1], yC[2]] : null;
}
export function p(CC, yC) {
  var IC;
  var fC;
  return null !== (IC = null === (fC = h[CC]) || void 0 === fC ? void 0 : fC[yC]) && void 0 !== IC ? IC : null;
}