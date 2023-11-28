let rasm1 = document.getElementById("rasm1");
let rasm2 = document.getElementById("rasm2");
let rasm3 = document.getElementById("rasm3");
let left = document.getElementById("arrowLeft");
let right = document.getElementById("arrowRight");

let almash1 = function (ortadagirasm) {
  let temp = rasm1.src;
  rasm1.src = rasm2.src;
  rasm2.src = rasm3.src;
  rasm3.src = temp;
  ortadagirasm.style.transform = "scale(1.1)";
  setTimeout(function () {
    uchinchiRasm.style.transform = "scale(1)";
  }, 500);
};
let almash2 = function (ortadagirasm) {
  let temp = rasm1.src;
  rasm1.src = rasm3.src;
  rasm3.src = rasm2.src;
  rasm2.src = temp;
  ortadagirasm.style.transform = "scale(1.1)";
  setTimeout(function () {
    uchinchiRasm.style.transform = "scale(1)";
  }, 500);
};

left.addEventListener("click", almash1);
right.addEventListener("click", almash2);

function buy() {
  let paragraph = document.getElementById("payme");

  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
  paragraph.style.transform =
    paragraph.style.transform === "translate(-50%, -50%) scale(1.1)"
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(1.1)";
}
