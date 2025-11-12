// Create a new router 
const express = require("express");
const router = express.Router();

// Define our data regarding the shop's drinks
var shopData = {
  shopName: "Cherry & Chill Liquors",
  productCategories: [
    "Beers 🍺",
    "Fine Wines 🍷",
    "Classy Martinis 🍸",
    "Fresh Mojitos 🍃",
    "Soft Drinks 🥤",
    "Warm & Cozy Drinks ☕",
    "Late-night Snacks 🍟",
    "Cherry & Chill Signature 🍒"
  ],
  shops: [
    { name: "Marylebone branch",  manager: "Diana Vermont",   address: "Marylebone Station, London NW1 6JJ" },
    { name: "Aldgate branch",  manager: "Lorenzo Amiri",  address: "Whitechapel Road, Aldgate East, London E1 1EW" },
    { name: "Shoreditch branch", manager: "Youssef Castille",   address: "Shoreditch High Street, Hackney, London E1 6PQ" }
  ]
};

// Handle the main routes
router.get("/", (req, res) => {
  res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
  res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
  res.render("search.ejs", shopData);
});

// Search results (GET query string)
router.get("/search_result", (req, res) => {
  const { search_text, category } = req.query;
  res.render("search_result.ejs", {
    shopName: shopData.shopName,
    searchText: search_text,
    category: category
  });
});

// Registration pages
router.get("/register", (req, res) => {
  res.render("registration.ejs", shopData);
});

router.post("/registered", (req, res) => {
  const { first, last, username, email } = req.body;
  res.render("registration_result.ejs", {
    shopName: shopData.shopName,
    first,
    last,
    username,
    email
  });
});

// Survey pages
router.get("/survey", (req, res) => {
  res.render("survey.ejs", {
    shopName: shopData.shopName,
    productCategories: shopData.productCategories
  });
});

router.post("/survey_submitted", (req, res) => {
  const { first, last, email, age, category, mood, isStudent } = req.body;
  const student = isStudent ? "Yes" : "No";
  res.render("survey_result.ejs", {
    shopName: shopData.shopName,
    first,
    last,
    email,
    age,
    category,
    mood,
    student
  });
});

// Export the router object so index.js can access it
module.exports = router;
