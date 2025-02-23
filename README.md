# MongoDB Aggregation Bug: Incorrect Average Age Calculation

This repository demonstrates a common error in MongoDB aggregation queries that results in incorrect average age calculations. The original query contains a flaw in its pipeline stages leading to unexpected or empty results.  The solution provides a corrected query that accurately computes the average age, grouped by city, while only considering users above 25 years of age. 

The `bug.js` file contains the erroneous query, while `bugSolution.js` presents the corrected code. This example highlights the importance of meticulous attention to detail in designing MongoDB aggregations. It demonstrates how a seemingly small mistake in specifying aggregation stages can cause significant inaccuracies.
