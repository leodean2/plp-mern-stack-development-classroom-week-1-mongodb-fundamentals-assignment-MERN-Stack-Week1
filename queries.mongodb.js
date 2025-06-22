// queries.js

// 1. Find all books in a specific genre
const fictionBooks = db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year
const booksAfter1950 = db.books.find({ published_year: { $gt: 1950 } });

// 3. Find books by a specific author
const orwellBooks = db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book
db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 11.99 } }
);

// 5. Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" });
// 1. Find books that are both in stock and published after 2010
const recentInStock = db.books.find({ 
  in_stock: true, 
  published_year: { $gt: 2010 } 
});

// 2. Projection to return only title, author, and price
const basicBookInfo = db.books.find(
  {}, 
  { title: 1, author: 1, price: 1, _id: 0 }
);

// 3. Sorting books by price (ascending and descending)
const priceAsc = db.books.find().sort({ price: 1 });
const priceDesc = db.books.find().sort({ price: -1 });

// 4. Pagination (5 books per page)
const page1 = db.books.find().skip(0).limit(5);
const page2 = db.books.find().skip(5).limit(5);
// 1. Average price by genre
const avgPriceByGenre = db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 2. Author with most books
const prolificAuthor = db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 }
]);

// 3. Books by publication decade
const booksByDecade = db.books.aggregate([
  {
    $project: {
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);
// 1. Create index on title field
db.books.createIndex({ title: 1 });

// 2. Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. Performance comparison with explain()
// Without index
db.books.find({ title: "1984" }).explain("executionStats");

// With index
// (Run after creating the title index)
db.books.find({ title: "1984" }).explain("executionStats");