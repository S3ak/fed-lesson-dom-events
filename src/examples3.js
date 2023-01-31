const dropdown = document.querySelector("select");
const circlesContainer = document.querySelector("#circles-list");

dropdown.onchange = function (event) {
  console.log(event.target.value);

  const selectedValue = this.value;

  circlesContainer.innerHTML = "";

  for (let i = 1; i <= selectedValue; i++) {
    let className = "";

    if (i % 2 === 0) {
      className = "is-highlight";
    }

    circlesContainer.innerHTML += `<div class="circle ${className}">${i}</div>`;
  }
};
