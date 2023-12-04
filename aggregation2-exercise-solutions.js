// Step 1 Exercise 

// Write the code for a $group stage that groups movies by their type. Display the total of each type in ascending order (lowest to highest).

db.movies.aggregate([
  { $group: {
      _id: "$type",
      num_films_of_type: { $sum: 1 }
  } },
  { $sort: { num_films_of_type: 1 } }
])


// Step 2 Exercise 

// Create a pipeline with a $match and $group stage. The match stage should filter out any documents that don't have an IMDB rating. The group stage should group movies based on how many cast members they have and then display the total number of films for that grouping and the average IMDB rating. 

db.movies.aggregate([
  { $match: {
    "imdb.rating": { $gte: 0 }
  } },
  { $group: {
      _id: {
        cast: {
          $cond: [{ $isArray: "$cast" }, { $size: "$cast" }, 0]
        }
      },
      numFilms: { $sum: 1 },
      averageIMDB: {$avg: "$imdb.rating"}
  } },
  { $sort: { "_id.cast": -1 } }
])


// Exercises: Exercise One

// The following pipeline has a $match stage that uses a regular expression to find movies that have won one or more Oscars. Add a group stage that includes all matched documents and then calculates the standard deviation, highest, lowest, and average imdb.rating. Use the sample standard deviation expression.

db.movies.aggregate([
  { $match: {
	  awards: /Won \d{1,2} Oscars?/
  } }, 
  { $group: {
      _id: null,
      highest_rating: { $max: "$imdb.rating" },
      lowest_rating: { $min: "$imdb.rating" },
	  average_rating: { $avg: "$imdb.rating" },
	  deviation: { $stdDevSamp: "$imdb.rating" }
  } },
  { $project: {
      _id: 0,
      highest_rating: 1,
      lowest_rating: 1,
	  average_rating: 1,
	  deviation: 1
  } },
])


// Exercises: Exercise Two

// Read the following reference on JavaScript regular expressions. Then, write a pipeline that matches documents where there is a cast member with the first name "Harrison", and finds the total number of movies (hint: there are 54).

db.movies.aggregate([
  { $match: {
	  cast: /^Harrison/
  } }, 
  { $group: {
      _id: null,
      num_films: { $sum: 1 }
  } }
])