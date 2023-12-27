const calculateTotalSpentByCategory = (transactions) => {
  let totalPrice = 0;
  let categoryFound = false;
  let enteredCategory = "Food";

  transactions.forEach((elem) => {
    const { category, price } = elem;
    if (category === enteredCategory) {
      totalPrice = totalPrice + price;
      categoryFound = true;
    }
  });

  if (!categoryFound) {
    console.log(enteredCategory,"Is Not Found");
  } else {
    console.log("Total price of", enteredCategory,"₹",totalPrice);
  }
};

transactions = [
  { category: "Drink", itemName: "Coke", price: 20, timestamp: "12-Jun-2022" },
  { category: "Food", itemName: "Burger", price: 50, timestamp: "12-Jun-2022" },
  { category: "Drink", itemName: "Fanta", price: 25, timestamp: "12-Jun-2022" },
  { category: "Drink", itemName: "Sprite", price: 35, timestamp: "12-Jun-2022"},
  { category: "Food", itemName: "Pasta", price: 75, timestamp: "12-Jun-2022" },
];

calculateTotalSpentByCategory(transactions);

