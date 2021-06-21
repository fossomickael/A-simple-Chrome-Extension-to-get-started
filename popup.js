let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  console.log("hello");
  changeColor.style.backgroundColor = color;
});