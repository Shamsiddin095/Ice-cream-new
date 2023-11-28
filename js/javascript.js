window.onload = loadInputData;

var imageStates = {};

// Input ma'lumotlarini saqlash
function saveInputData(input) {
  const boxId = input.closest(".box").id;
  const inputData = JSON.parse(localStorage.getItem("inputData")) || {};
  inputData[boxId] = input.value;
  localStorage.setItem("inputData", JSON.stringify(inputData));
}

// Input ma'lumotlarini yuklash
function loadInputData() {
  const savedInputData = JSON.parse(localStorage.getItem("inputData")) || {};

  for (const boxId in savedInputData) {
    const input = document.getElementById(boxId)?.querySelector("input");
    if (input) input.value = savedInputData[boxId];
  }
}

// Content ma'lumotlarini saqlash va ko'rsatish
function saveAndShowContent(boxId) {
  const contentBox = document
    .getElementById(boxId)
    ?.querySelector(".contentBox");
  const content = contentBox?.innerText;

  const contentData = JSON.parse(localStorage.getItem("contentData")) || {};
  contentData[boxId] = content;
  localStorage.setItem("contentData", JSON.stringify(contentData));
}

// Contentni togg'lash
function toggleContent(boxId) {
  const contentBox = document
    .getElementById(boxId)
    ?.querySelector(".contentBox");
  if (!contentBox) return;

  const currentDisplay = contentBox.style.display;
  contentBox.style.display = currentDisplay === "none" ? "block" : "none";

  saveInputData(document.getElementById(boxId)?.querySelector("input"));

  contentBox.parentNode.removeChild(contentBox);
}

// Boxlarni filtratsiya qilish
function filterBoxes() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const boxes = document.querySelectorAll(".box");

  const highlightedBoxes = Array.from(boxes).filter((box) => {
    const content = box.querySelector("span")?.innerText.toLowerCase();
    return content.includes(searchInput);
  });

  boxes.forEach((box) => {
    box.classList.remove("highlight");
    box.style.display = highlightedBoxes.includes(box)
      ? "inline-block"
      : "none";
  });

  saveInputData(document.activeElement);
}

window.onload = function () {
  loadInputData();
  setupButton("button1");
  setupButton("button2");
  setupButton("button3");
  setupButton("button4");
  // setupButton("button5");
  // setupButton("button6");
  // setupButton("button7");
  // setupButton("button8");
  // setupButton("button9");
  // setupButton("button10");
  // setupButton("button11");
  // setupButton("button12");
  // setupButton("button13");
  // setupButton("button14");
  // setupButton("button15");
  // setupButton("button16");
  // setupButton("button17");
  // setupButton("button18");
  // setupButton("button19");
  // setupButton("button20");
  // setupButton("button21");
  // setupButton("button22");
  // setupButton("button23");
  // setupButton("button24");
  setupImage("img1");
  setupImage("img2");
  setupImage("img3");
  setupImage("img4");
  // setupImage("img5");
  // setupImage("img6");
  // setupImage("img7");
  // setupImage("img8");
  // setupImage("img9");
  // setupImage("img10");
  // setupImage("img11");
  // setupImage("img12");
  // setupImage("img13");
  // setupImage("img14");
  // setupImage("img15");
  // setupImage("img16");
  // setupImage("img17");
  // setupImage("img18");
  // setupImage("img19");
  // setupImage("img20");
  // setupImage("img21");
  // setupImage("img23");
  // setupImage("img24");
};

// Buttonni tuzish
function setupButton(buttonId) {
  var isChanged = localStorage.getItem("isChanged_" + buttonId) === "true";
  var buttonText = isChanged ? "Save" : "Done";
  var button = document.getElementById(buttonId);

  button.textContent = buttonText;

  if (isChanged) {
    button.classList.add("changed");
  }

  button.addEventListener("click", function () {
    this.classList.toggle("changed");
    localStorage.setItem(
      "isChanged_" + buttonId,
      this.classList.contains("changed")
    );
    this.textContent = this.classList.contains("changed") ? "Save" : "Done";
  });
}

// Rasmni tuzish
function setupImage(imgId) {
  imageStates[imgId] = localStorage.getItem("imageState_" + imgId) === "true";
  var imgElement = document.getElementById(imgId);

  if (imgElement) {
    imgElement.style.display = imageStates[imgId] ? "block" : "none";
  }
}

// Rasmni togg'lash
function toggleImage(imgId) {
  var imgElement = document.getElementById(imgId);
  if (imgElement) {
    imageStates[imgId] = !imageStates[imgId];
    imgElement.style.display = imageStates[imgId] ? "block" : "none";
    localStorage.setItem("imageState_" + imgId, imageStates[imgId].toString());
  }
}

// Opacityni togg'lash
function toggleOpacity(imgId) {
  var imgElement = document.getElementById(imgId);
  if (imgElement) {
    imgElement.classList.toggle("opacityimg");
  }
}
