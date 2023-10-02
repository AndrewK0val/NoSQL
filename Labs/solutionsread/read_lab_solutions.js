// Exercise 1

db.grades.find(
  {class_id: 0,student_id:4}
).pretty()


// Exercise 2

db.grades.find(
  {$or: [
    {class_id: 23},
    {student_id:2}
  ]}
).pretty()


// Exercise 3 

db.grades.find(
   {
      student_id: 28, 
	  class_id: { $in: [ 23, 29 ] }
   }
).pretty()


// Exercise 4

db.grades.find(
   {
      student_id: 40, 
	  class_id: { $nin: [ 1,2,14,22 ] }
   }
).pretty()


// Exercise 5

db.grades.find(
   {
      class_id: 18, 
	  student_id: { $ne: 30 }
   }
).pretty()


// Exercise 6

db.grades.find(
  {
    scores: {
      $elemMatch: {
        score: { $gt: 99, $lt: 100 }
      }
    }
  }
).pretty()


// Exercise 7

db.grades.find(
  {
    scores: {
      $elemMatch: {
		  type: "exam",
          score: { $gte: 0, $lt: 40 }
      }
    }
  }
).pretty()


// Exercise 8

db.grades.find(
  {
    class_id: 22,
	scores: {
      $elemMatch: {
		  type: "exam",
          score: { $gte: 40 }
      }
    }
  },
  { _id: 0, student_id: 1}
).pretty()


// Exercise 9

db.grades.find(
  {
    scores: {
      $elemMatch: {
		  type: "quiz",
          score: { $gte: 90 }
      }
    }
  },
  { _id: 0, student_id: 1, class_id: 1}
).limit(10).pretty()


// Exercise 10

db.grades.find(
  {
    class_id: 29,
	scores: {
      $elemMatch: {
		  type: "exam",
          score: { $gte: 40 }
      }
    }
  }
).count()


// Exercise 11

db.grades.find(
  {class_id: {$in: [1, 2, 3] } },
  {_id: 0, student_id: 1, class_id: 1}
).sort( {class_id: 1} ).pretty()


// Exercise 12

db.grades.find(
  {
    class_id: 4, 
	scores: {
      $elemMatch: {
		  type: "quiz",
          score: { $lt: 40 }
      }
    }
  },
  { _id: 0, student_id: 1}
).sort( {student_id: -1} ).pretty()