const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // 1. Select all prices
  const prices = document.querySelectorAll(".prices, .price"); // in case your test uses .price
  let total = 0;

  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // 2. Get the table
  const table = document.querySelector("table");

  // 3. Remove old total row if present
  const oldTotal = document.querySelector(".total-row");
  if (oldTotal) oldTotal.remove();

  // 4. Create a new row
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.id = "ans";  // ✅ Important for Cypress test
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
