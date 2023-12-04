// Step 3 Exercise 

// Using $match and $count, find the number of planets with a gravity greater than Earth's gravity (which is 9.8) 

db.solarSystem.aggregate([{
  $match: { "gravity.value": { "$gt": 9.8} }
}, {
  $count: "gravity greater than earth"
}]);


// Step 4 Exercise One

// Use $project to create a new field called moons and assign it the value from the numberOfMoons property. You should also display the name of the celestial body, but not the _id field.
// Note: you can use db.solarSystem.findOne() to show one document in the collection in order to examine its structure

db.solarSystem.aggregate([{
  $project: {_id:0, name:1, moons: "$numberOfMoons"}
}])


// Step 4 Exercise Two

// Use $project to display the names of the celestial bodies along with a new field called orbit_length. This field should combine the values from the orbitalPeriod "value" and "units" subfields. 
// Hint: you will need to make use of two new operators, $concat and $toString

db.solarSystem.aggregate([{
  $project: {
    _id:0,
    name:1,
    orbit_length: { $concat: [{$toString: "$orbitalPeriod.value"}, " ", "$orbitalPeriod.units" ]}
  }
}])


// Step 5 Exercise 

// The following aggregation finds planets with a longer orbit than Earth's and projects the fields "name" and "orbit_length". Add a $limit stage that limits the results to three documents, and sort those in descending order (longest orbit first).

db.solarSystem.aggregate([{
  $match: { "orbitalPeriod.value": { "$gt": 1} }
  },
  {
  $project: {
    _id:0,
    name:1,
    orbit_length: { $concat: [{$toString: "$orbitalPeriod.value"}, " ", "$orbitalPeriod.units" ]}
  }
},
{ $limit: 3 },
{ $sort: { "orbit_length": -1 } }
])


// Aggregation Pipeline Exercise
/* 
We want to examine our *movies* collection to find a movie to watch. We are looking for a fairly recent, highly-rated and family-friendly movie, so it should meet the following criteria:

- has an IMDB rating
- year is from 2010 onwards
- the genres should **not** be Crime or Horror
- it should be rated G or PG

In our results, we want to show the following fields:

- title
- year
- genres
- imdb.rating (but it should display as "rating")

We only want to see the top 5 movies and we want to see the highest-rated movie first. */

db.movies.aggregate([
{ $match: {
		"imdb.rating": { $gte: 0 },
		"year": { $gte: 2010 }, 
		"genres": { $nin: ["Crime", "Horror"] },
		"rated": { $in: ["G", "PG"] }
} },
{ $project: {
	"_id": 0,
	"title": 1,
	"year": 1,
	"genres": 1,
	"rating": "$imdb.rating"
} },
{ $sort: { "rating": -1 } },
{ $limit: 5 }
])