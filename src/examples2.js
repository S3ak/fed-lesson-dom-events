// remainder operator - %
// sometimes referred to as the modulus operator

const remainder = 8 % 3;

console.log(remainder);

const table = document.querySelector("#table-body");

for (let i = 1; i <= 10; i++) {
  let className = "";

  if (i % 2 === 0) {
    className = "is-highlight";
  }

  table.innerHTML += `<tr class="${className}">
                        <td>${i}</td>
                        <td>Text content</td>
                    </tr>`;
}
