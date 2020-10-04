class MagicStone {
  constructor(name, strength, powerLevel, color, size) {
    this._name = name;
    this._powerLevel = powerLevel;
    this._strength = strength;
    this._color = color;
    this._size = size;
  }
  get name() {
    return this._name;
  }
  get powerLevel() {
    return this._powerLevel;
  }
  get color() {
    return this._color;
  }
  get size() {
    return this._size;
  }
}

let powerStone = new MagicStone("Power Stone", 100, 100, "Red", "large");
let earthStone = new MagicStone("Earth Stone", 75, 100, "Green", "Large");
let elementalStone = new MagicStone(
  "Elemental Stone",
  80,
  100,
  "Blue",
  "Medium"
);
let mindStone = new MagicStone("Magic Stone", 65, 100, "Magenta", "Small");

//assigning variables to make things easier
let targetStone = earthStone;
let stonePower = targetStone._powerLevel;
let isCharging = false;
/////////////////////////////////////////////////////////////////////////

///initial page load text value;
document.getElementById(
  "powerPercent"
).innerText = `Power Level is at ${stonePower}`;

/*
-window listener calls this action upone press
-decreases stonePower by 10
-logs it
-I used a boolean thinking it would act as a lightswitch.
  The problem is, It works as long as you don't press the button
  while it's already charging. I needed to tell the button not to create another 
  instance of a charger while it's charging. I'm stumped on why it's not working.
*/
function useStone() {
  stonePower -= 10;
  // seconds = 0;
  console.log(`HIT! Stone is at ${stonePower}%`);
  updateText();
  //isCharging is set to 'false' above
  //to me, the code shoudl only execute chargeIt() while isCharging === false
  if (isCharging === false) {
    chargeIt();
  }
}

//Only updates the HTML text box
function updateText() {
  document.getElementById(
    "powerPercent"
  ).innerText = `Power Level is at ${stonePower}`;
}

//supposed to respeat increasing the value of StonePower
//incrementally every second.
function chargeIt() {
  let charging = setInterval(function () {
    stonePower++;
    updateText();
    console.log(stonePower);
    let isCharging = true;
    console.log(isCharging);
    if (stonePower === 100) {
      console.log(`Suck it!`); //test to be sure the 'if' was working
      let isCharging = false;
      console.log(isCharging);
      clearInterval(charging);
    }
  }, 1000);
}
// myFunction();

// myFunction();
//single windowListener
//hadn't gotten far enough to assign it directly to the button
//with a case of thing. That was going to be the next step
//after the charge

window.addEventListener("click", useStone);
