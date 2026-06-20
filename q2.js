const cart = [
  { productId: 101, name: "Laptop", price: 55000, quantity: 1, category: "Electronics" },
  { productId: 102, name: "Mouse", price: 700, quantity: 2, category: "Accessories" },
  { productId: 103, name: "Keyboard", price: 1500, quantity: 1, category: "Accessories" },
  { productId: 104, name: "Monitor", price: 12000, quantity: 0, category: "Electronics" },
  { productId: 105, name: "USB Cable", price: 300, quantity: 3, category: "Accessories" },
  { productId: 106, name: "Office Chair", price: 6500, quantity: 1, category: "Furniture" }
];

const availableProducts = cart.filter(product => product.quantity > 0);

const billItems = availableProducts.map(product => ({
  name: product.name,
  quantity: product.quantity,
  price: product.price,
  itemTotal: product.price * product.quantity,
  category: product.category
}));

const subtotal = billItems.reduce((sum, item) => sum + item.itemTotal, 0);

const discount = subtotal > 50000 ? subtotal * 0.10 : 0;

const gst = (subtotal - discount) * 0.18;

const finalPayableAmount = subtotal - discount + gst;

const categoryTotal = billItems.reduce((total, item) => {
  total[item.category] = (total[item.category] || 0) + item.itemTotal;
  return total;
}, {});

console.log("Final Bill:");

billItems.forEach(({ name, quantity, price, itemTotal }) => {
  console.log(`${name} | Quantity: ${quantity} | Price: ₹${price} | Total: ₹${itemTotal}`);
});

console.log(`\nSubtotal: ₹${subtotal}`);
console.log(`Discount: ₹${discount}`);
console.log(`GST 18%: ₹${gst}`);
console.log(`Final Payable Amount: ₹${finalPayableAmount}`);

console.log("\nCategory-wise Total:");
for (let category in categoryTotal) {
  console.log(`${category}: ₹${categoryTotal[category]}`);
}