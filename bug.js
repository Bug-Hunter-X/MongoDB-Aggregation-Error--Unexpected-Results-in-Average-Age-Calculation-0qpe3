```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $match: { age: { $gt: 25 } } // Find users older than 25
  },
  {
    $group: {
      _id: "$city", // Group by city
      averageAge: { $avg: "$age" }, // Calculate average age per city
      totalUsers: { $sum: 1 } // Count users per city
    }
  },
  {
    $sort: { averageAge: -1 } // Sort by average age in descending order
  }
])
```