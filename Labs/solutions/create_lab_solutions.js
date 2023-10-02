// Step 3, Exercise One

db.grades.insertOne( 
	{  
	  "student_id" : 50, 
	  "class_id" : 28, 
	  "scores" : [ 
		{ "type" : "exam", "score" : 58.6 }, 
		{ "type" : "quiz", "score" : 22.4 }, 
		{ "type" : "homework", "score" : 74.2 }, 
		{ "type" : "homework", "score" : 68.3 }, 
		{ "type" : "homework", "score" : 17.9 } 
	  ] 
	}
)

// Step 4, Exercise Two

db.grades.insertMany( 
	[
		{  
		  "student_id" : 50, 
		  "class_id" : 2, 
		  "scores" : [ 
			{ "type" : "exam", "score" : 58.6 }, 
			{ "type" : "quiz", "score" : 18.9 }, 
			{ "type" : "homework", "score" : 58.7 }, 
			{ "type" : "homework", "score" : 68.7 }, 
			{ "type" : "homework", "score" : 17.8 } 
		  ] 
		},
		{  
		  "student_id" : 50, 
		  "class_id" : 15, 
		  "scores" : [ 
			{ "type" : "exam", "score" : 55.4 }, 
			{ "type" : "quiz", "score" : 18.7 }, 
			{ "type" : "homework", "score" : 59.5 }, 
			{ "type" : "homework", "score" : 82.1 }, 
			{ "type" : "homework", "score" : 16.8 } 
		  ] 
		}
	]
)