// Exercise One

db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { "$gt": 0 },
    }
  },
  {
    $unwind: "$cast"
  },
  {
    $group: {
      "_id": "$cast",
      average: { $avg: "$imdb.rating" },
      numFilms: { $sum: 1 }
    }
  },
  { $sort: { "numFilms": -1 } },
  { $limit: 1 }
])

// Exercise Two

db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { "$gt": 0 },
    }
  },
  {
    $unwind: "$cast"
  },
  {
    $group: {
      "_id": "$cast",
      average: { $avg: "$imdb.rating" },
      numFilms: { $sum: 1 }
    }
  },
  { $sort: { "numFilms": -1 } },
  { $limit: 10 },
  { $out: "mostProlificActors"}
])