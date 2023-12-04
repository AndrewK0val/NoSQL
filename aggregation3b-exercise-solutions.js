// Exercise One

db.classes.aggregate([
  {
    $match: {
      "stream": "Games",
	  year: 4
    }
  },
  {
    $lookup: {
      from: "grades",
      foreignField: "class_id",
      localField: "_id",
      as: "students"
    }
  },
  { 
	$project: {
		_id: 0,
		name: 1,
		lecturer: 1,
		year: 1, 
		stream: 1, 
		"students.student_id": 1
	}
  }
]).pretty()


// Exercise Two

db.classes.aggregate([
  {
    $match: {
      year: 1
    }
  },
  {
    $lookup: {
      from: "grades",
      foreignField: "class_id",
      localField: "_id",
      as: "grades"
    }
  },
  {
    $unwind: "$grades"
  },
  {
    $unwind: "$grades.scores"
  },
  { $match: {
      "grades.scores.type": "quiz"
    }
  },
  {
    $group: {
      _id: null,
      highestYearOneQuizScore: { $max: "$grades.scores.score"}
    }
  }
])

