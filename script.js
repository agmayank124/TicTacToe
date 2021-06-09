let i = 1,
  count = 1;
const heading = document.getElementById("heading");
const play = async (element) => {
  if (count <= 9 && element.innerText==="") {
    element.innerText = `${i++ % 2 == 0 ? "O" : "X"}`;
    console.log(count);
    let result = checkWin();
    if (result === "O" || result === "X") {
      element.innerText = result;
      heading.innerText = `${result} Won`;
      reset();
    }
    count++;
  }
  if (count == 10) {
    element.innerText = `${i++ % 2 == 0 ? "O" : "X"}`;
      heading.innerText = "Draw";
    reset();
  }
};
function reset() {
  count = 1,i=1;
  for (let r = 1; r <= 9; r++) {
    const piece = document.getElementById(`piece${r}`);
    piece.innerText = "";
  }
}
function getData(num) {
  return document.getElementById("piece" + num).innerText;
}
function checkWin() {
  let combinations = [
    check(1, 2, 3),
    check(4, 5, 6),
    check(7, 8, 9),
    check(1, 4, 7),
    check(2, 5, 8),
    check(3, 6, 9),
    check(1, 5, 9),
    check(3, 5, 7),
  ];
  let rvalue = "";
  for (let i = 0; i < combinations.length; i++) {
    if (combinations[i] === "O" || combinations[i] === "X") {
      rvalue = combinations[i];
      break;
    }
  }
  return rvalue;
}
function check(first, second, third) {
  let f = getData(first);
  let s = getData(second);
  let t = getData(third);
  if (f != "" && s != "" && t != "" && f == s && f == t) return f;
  else return "";
}
