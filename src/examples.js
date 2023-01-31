const input = document.querySelector("#todo-input");
const button = document.querySelector("#add-todo");
const list = document.querySelector("#todos");

// METHOD 1
// button.onclick = function () {
//   list.innerHTML += `<li>${input.value} <button> Mark As Done </button>`;

//   const items = document.querySelectorAll("#todos li");

//   items.forEach((item) => {
//     item.onclick = function (event) {
//       console.log(event.target.classList);
//       event.target.classList.toggle("is-done");
//     };

//     // item.onclick = function () {
//     //   this.classList.toggle("is-done");
//     // };
//   });
// };

// METHOD 2
// button.onclick = function () {
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `${input.value}`;
//   listItem.onclick = function () {
//     this.classList.toggle("is-done");
//   };
//   list.appendChild(listItem);
//   input.value = "";
// };
