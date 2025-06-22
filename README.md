# MongoDB Bookstore Project - README


## 📚 Project Overview
A Node.js application demonstrating MongoDB fundamentals including CRUD operations, advanced queries, aggregation pipelines, and indexing using a bookstore database example.

## 🛠️ Prerequisites
* Node.js (v14 or later)

* MongoDB (local instance or Atlas account)

* npm (comes with Node.js)

## 🚀 Setup Instructions
### 1. **Clone the repository**
   ```
   git clone <repository-url>
      cd mongodb-bookstore
   ```
### 2. **Install dependencies**  
```npm install mongodb```
### 3. Set up MongoDB
#### Option A: Local MongoDB 
```
# Start MongoDB service (macOS/Linux)
brew services start mongodb-community  # For Homebrew
# or
sudo systemctl start mongod            # For Linux

# Verify it's running
mongosh
```
#### Option B: MongoDB Atlas
* Create free cluster at MongoDB Atlas

* Update connection string in insert_books.js
### 4. Populate the database
```
node insert_books.js
```
### 📂 Project Structure
```
mongodb-bookstore/
├── insert_books.js       # Script to populate sample book data
├── queries.js            # Example CRUD and aggregation queries
├── README.md             # This file
└── package.json          # Node.js project file
```
### 💻 Usage Examples
#### Basic CRUD Operations (in queries.js)
```
// Find all fiction books
db.books.find({ genre: "Fiction" });

// Update a book's price
db.books.updateOne(
  { title: "The Great Gatsby" }, 
  { $set: { price: 11.99 } }
);
```
#### Advanced Queries
```
// Books published after 1950, in stock
db.books.find({ 
  published_year: { $gt: 1950 },
  in_stock: true
});

// Pagination (page 2, 5 items per page)
db.books.find().skip(5).limit(5);
```
#### Aggregation Pipelines
```
// Average price by genre
db.books.aggregate([
  { $group: { 
    _id: "$genre", 
    avgPrice: { $avg: "$price" } 
  }}
]);
```
#### 📊 Indexing Examples
```
// Create indexes
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: 1 });

// Check query performance
db.books.find({ title: "1984" }).explain("executionStats");
```
#### 🔍 Sample Data
The database contains 12 books with:
* Title, author, genre.
* Publication year, price.
* Stock status, page count, publisher.
#### Example book:
```
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian",
  "published_year": 1949,
  "price": 10.99,
  "in_stock": true,
  "pages": 328,
  "publisher": "Secker & Warburg"
}
```
### 📝 License
This project is open-source and available under the MIT License.
### 🙋 Support
For issues or questions, please open an issue in the repository.

