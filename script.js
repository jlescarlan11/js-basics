// // your JavaScript file
// const container = document.querySelector("#container");

// const content = document.createElement("div");
// content.classList.add("content");
// content.textContent = "This is the glorious text-content!";

// const content1 = document.createElement("p");
// content1.classList.add("content");

// container.appendChild(content);

// the JavaScript file
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    alert(button.id);
  });
});
