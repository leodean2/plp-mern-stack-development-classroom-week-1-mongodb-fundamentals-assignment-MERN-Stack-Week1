# MongoDB Bookstore Project - README
=

## 📚 Project Overview
A Node.js application demonstrating MongoDB fundamentals including CRUD operations, advanced queries, aggregation pipelines, and indexing using a bookstore database example.

## 🛠️ Prerequisites
* Node.js (v14 or later)

* MongoDB (local instance or Atlas account)

* npm (comes with Node.js)

🚀 Setup Instructions
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
