//let isFlying = false;
const airplane = {
  takeOff: (obj) => {
    obj.isFlying = true;
  },
  land: (obj) => {
    obj.isFlying = false;
  },
};

const su30 = { isFlying: false, __proto__: airplane };
const boeing = { isFlying: false, __proto__: airplane };
const concord = { isFlying: false, __proto__: airplane };

su30.takeOff(su30);
console.log("su30:", su30.isFlying);
boeing.takeOff(boeing);
boeing.land(boeing);
console.log("boeing:", boeing.isFlying);
concord.takeOff(concord);
concord.land(concord);
console.log("concord:", concord.isFlying);
