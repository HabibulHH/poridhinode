const express = require("express");
const app = express();

// Dummy data representing a collection of items
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Middleware to parse JSON request body
app.use(express.json());

// Define a PUT endpoint to update an item by ID
app.put("/api/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const { name } = req.body;

  // Find the item by ID
  const itemIndex = items.findIndex((item) => item.id === itemId);

  // If item is not found, return 404 Not Found
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  // Update the item name
  items[itemIndex].name = name;
  console.log(items);
  // Send a response with the updated item
  res.json({ message: "Item updated successfully", item: items[itemIndex] });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
