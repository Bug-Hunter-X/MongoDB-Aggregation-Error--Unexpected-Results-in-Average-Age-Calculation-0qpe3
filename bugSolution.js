```javascript
// Corrected aggregation pipeline
db.users.aggregate([
  {
    $match: { age: { $gt: 25 } } // Match users older than 25
  },
  {
    $group: {
      _id: "$city", // Group by city
      averageAge: { $avg: "$age" }, // Calculate average age for each city
      count: { $sum: 1 } // Count users in each city
    }
  },
  {
    $sort: { averageAge: -1 } // Sort by average age in descending order
  }
])
```