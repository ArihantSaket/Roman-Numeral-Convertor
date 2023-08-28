let input = document.querySelector(".inp");
let button = document.querySelector(".butn");
let errorMessage = document.querySelector(".error");
let output = document.querySelector(".ans");

let romanObject = {
  MC: 1100,
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

button.addEventListener("click", () => {
  inputToRoman(input.value);
  // input.value = "";
});

function inputToRoman(num) {
  let number = parseInt(num);

  if (num.trim().length == 0) {
    errorMessage.innerHTML = "Invalid Input";
    output.innerHTML = "";
    return false;
  }
  if (number > 4999 || number < 1) {
    errorMessage.innerHTML = "Input Out Of Range";
    output.innerHTML = "";
    return false;
  }
  errorMessage.innerHTML = "";
  output.innerHTML = "";

  let result = "";
  let romanValues = Object.keys(romanObject);
  romanValues.forEach((key) => {
    while (romanObject[key] <= number) {
      number -= romanObject[key];
      result += key;
    }
  });
  output.innerHTML = result;
}

let ccur = document.querySelector(".cursor");
let cur = document.querySelector(".main");

cur.addEventListener("mousemove", (dets)=>{
  ccur.style.left = dets.x+"px";
  ccur.style.top = dets.y+"px";
});