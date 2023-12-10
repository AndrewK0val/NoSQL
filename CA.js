
db.devices.insert({
    "device_id": "125",
    "device_name": "SmartSentry",
    "user_id": "458",
    "Sensor_details": [
        {
            "ultrasonic_trigger": ISODate("2024-01-15T14:00:00Z"),
            "person_presence_trig": true,
            "is_recognized_person": true,
            "recognized_face_id": "003",
            "associated_recording": "794"
        },
        {
            "ultrasonic_trigger": ISODate("2024-01-18T10:30:00Z"),
            "person_presence_trig": false,
            "is_recognized_person": false,
            "recognized_face_id": "",
            "associated_recording": "795"
        },
        {
            "ultrasonic_trigger": ISODate("2024-01-20T18:45:00Z"),
            "person_presence_trig": true,
            "is_recognized_person": true,
            "recognized_face_id": "004",
            "associated_recording": "796"
        },
        {
            "ultrasonic_trigger": ISODate("2024-01-22T12:15:00Z"),
            "person_presence_trig": true,
            "is_recognized_person": false,
            "recognized_face_id": "",
            "associated_recording": "797"
        },
        {
            "ultrasonic_trigger": ISODate("2024-01-25T08:00:00Z"),
            "person_presence_trig": false,
            "is_recognized_person": false,
            "recognized_face_id": "",
            "associated_recording": "798"
        }
    ],
    "Recordings": [
        {
            "recording_id": "794",
            "video_url_link": "http://example.com/video/794/key=abc123",
            "is_call": false,
            "start_time": ISODate("2024-01-15T14:05:00Z"),
            "end_time": ISODate("2024-01-15T14:30:00Z")
        },
        {
            "recording_id": "795",
            "video_url_link": "http://example.com/video/795/key=def456",
            "is_call": true,
            "start_time": ISODate("2024-01-18T11:00:00Z"),
            "end_time": ISODate("2024-01-18T11:15:00Z")
        },
        {
            "recording_id": "796",
            "video_url_link": "http://example.com/video/796/key=ghi789",
            "is_call": true,
            "start_time": ISODate("2024-01-20T19:00:00Z"),
            "end_time": ISODate("2024-01-20T19:20:00Z")
        },
        {
            "recording_id": "797",
            "video_url_link": "http://example.com/video/797/key=jkl012",
            "is_call": false,
            "start_time": ISODate("2024-01-22T12:30:00Z"),
            "end_time": ISODate("2024-01-22T12:45:00Z")
        },
        {
            "recording_id": "798",
            "video_url_link": "http://example.com/video/798/key=mno345",
            "is_call": false,
            "start_time": ISODate("2024-01-25T08:15:00Z"),
            "end_time": ISODate("2024-01-25T08:45:00Z")
        }
    ]
})

//insert 2 more devices
db.devices.insertMany([
    {
        "device_id": "126",
        "device_name": "SecureGuard",
        "user_id": "459",
        "Sensor_details": [
          {
            "ultrasonic_trigger": ISODate("2024-02-01T08:00:00Z"),
            "person_presence_trig": true,
            "is_recognized_person": true,
            "recognized_face_id": "005",
            "associated_recording": "799"
          },
          {
            "ultrasonic_trigger": ISODate("2024-02-05T15:30:00Z"),
            "person_presence_trig": false,
            "is_recognized_person": false,
            "recognized_face_id": "",
            "associated_recording": "800"
          },
          {
            "ultrasonic_trigger": ISODate("2024-02-10T12:45:00Z"),
            "person_presence_trig": true,
            "is_recognized_person": true,
            "recognized_face_id": "006",
            "associated_recording": "801"
          }
        ],
        "Recordings": [
          {
            "recording_id": "799",
            "video_url_link": "http://example.com/video/799/key=pqr789",
            "is_call": false,
            "start_time": ISODate("2024-02-01T08:10:00Z"),
            "end_time": ISODate("2024-02-01T08:30:00Z")
          },
          {
            "recording_id": "800",
            "video_url_link": "http://example.com/video/800/key=stu012",
            "is_call": true,
            "start_time": ISODate("2024-02-05T15:35:00Z"),
            "end_time": ISODate("2024-02-05T15:50:00Z")
          },
          {
            "recording_id": "801",
            "video_url_link": "http://example.com/video/801/key=vwx345",
            "is_call": true,
            "start_time": ISODate("2024-02-10T13:00:00Z"),
            "end_time": ISODate("2024-02-10T13:15:00Z")
          }
        ]
      },
      {
        "device_id": "127",
        "device_name": "WatchfulEye",
        "user_id": "460",
        "Sensor_details": [
          {
            "ultrasonic_trigger": ISODate("2024-02-15T17:00:00Z"),
            "person_presence_trig": true,
            "is_recognized_person": false,
            "recognized_face_id": "",
            "associated_recording": "802"
          },
          {
            "ultrasonic_trigger": ISODate("2024-02-18T09:30:00Z"),
            "person_presence_trig": true,
            "is_recognized_person": true,
            "recognized_face_id": "007",
            "associated_recording": "803"
          },
          {
            "ultrasonic_trigger": ISODate("2024-02-22T14:15:00Z"),
            "person_presence_trig": false,
            "is_recognized_person": false,
            "recognized_face_id": "",
            "associated_recording": "804"
          }
        ],
        "Recordings": [
          {
            "recording_id": "802",
            "video_url_link": "http://example.com/video/802/key=yza678",
            "is_call": false,
            "start_time": ISODate("2024-02-15T17:10:00Z"),
            "end_time": ISODate("2024-02-15T17:30:00Z")
          },
          {
            "recording_id": "803",
            "video_url_link": "http://example.com/video/803/key=bcv901",
            "is_call": true,
            "start_time": ISODate("2024-02-18T09:35:00Z"),
            "end_time": ISODate("2024-02-18T09:50:00Z")
          },
          {
            "recording_id": "804",
            "video_url_link": "http://example.com/video/804/key=def234",
            "is_call": true,
            "start_time": ISODate("2024-02-22T14:30:00Z"),
            "end_time": ISODate("2024-02-22T14:45:00Z")
          }
        ]
      }  
])


// add users
db.users.insertMany([
    {
        user_id: "001",
        user_name: "Alice Johnson",
        user_email: "alice.johnson@example.com",
        user_password_hash: "$2a$10$OVSzNkIsG4q2d9cRbUeX5Ot/4e3AHLi.1O0hMkY0g/PTpYGEmrr8K" 
    },
    {
        user_id: "002",
        user_name: "Bob Miller",
        user_email: "bob.miller@example.com",
        user_password_hash: "$2a$10$l2zHIm/LZRm3Gi3Sor.qFuKu35r0dV6GDD9JzXcLL0pF/gErfTlQG"
    },
    {
        user_id: "003",
        user_name: "Eva Martinez",
        user_email: "eva.martinez@example.com",
        user_password_hash: "$2a$10$QGkLOykeP2b9RJb1hI1G9eEh8qrrpD1o1IaZM2YzYxlS4AI6FhzFy"
    },
    {
        user_id: "004",
        user_name: "David Williams",
        user_email: "david.williams@example.com",
        user_password_hash: "$2a$10$n6vnFQgICuzYFyq4H4E4W.lFwzvJ1gmVuxA6m3ugAsp0DpgVmtCTK"
    },
    {
        user_id: "005",
        user_name: "Sophia Turner",
        user_email: "sophia.turner@example.com",
        user_password_hash: "$2a$10$A2oMReBzGQi8b3CbJz/QIenHHwA.p1ME2/BVXw1Rzj5oFYgfA4iA."
    }
])

// add notifications
db.notifications.insertMany([
    {
        notification_id: "001",
        is_recognized_person: true,
        recognized_face_id: "001",
        num_people: 1,
        is_opened: false,
        time_opened: null,
    },
    {
        notification_id: "002",
        is_recognized_person: false,
        recognized_face_id: null,
        num_people: 3,
        is_opened: true,
        time_opened: ISODate("2023-01-15T08:30:00Z"),
    },
    {
        notification_id: "003",
        is_recognized_person: true,
        recognized_face_id: "002",
        num_people: 1,
        is_opened: true,
        time_opened: ISODate("2023-01-16T12:45:00Z"),
    }
])

//decided to put some more notifications

//add new user:
db.users.insertOne({ user_id: "006",user_name: "John Doe", user_email: "john@doe.com", user_password_hash: "$2a$10$OVSzNkIsG4q2d9cRbUeX5Ot/4e3AHLi.1O0hMkY0g/PTpYGEmrr8K"})

//add new notification
db.notifications.insertOne({
    notification_id: '010',
    is_recognized_person: true,
    recognized_face_id: '018',
    num_people: 2,
    is_opened: true,
    time_opened: ISODate("2023-01-16T12:45:00.000Z")
})

db.notifications.insertOne({    notification_id: '010',    is_recognized_person: true,    recognized_face_id: '018',    num_people: 2,    is_opened: true,    time_opened: ISODate("2023-01-16T12:45:00.000Z")})

//update operations

// update user_id

// db.devices.updateOne(
//     { _id: ObjectId("657068187301d28cb41aeb92") }, 
//     { $set: { user_id: ["003", "002", "001"] } }
// )


db.devices.updateOne( { _id: ObjectId("657068f67301d28cb41aeb93") }, { $set: { user_id: ["005", "004"] } } )

db.notifications.updateOne({"notification_id":"003"},{$set: {"is_opened": false}})

db.devices.updateOne({"device_name":"SmartSentry"},{$set: {"device_name": "VerySmartSentry"}})



// delete operations

// insert user for demo
db.users.insertOne({ user_id: "001",user_name: "Alice Johnson", user_email: "alice.johnson@example.com", user_password_hash: "$2a$10$OVSzNkIsG4q2d9cRbUeX5Ot/4e3AHLi.1O0hMkY0g/PTpYGEmrr8K"})

// delete user based on user_id
db.users.deleteOne({ user_id: "001" })
//delete user based on user_email
db.users.deleteOne({ user_email: "alice.johnson@example.com" })


// Aggregation pipelines


// cound the number of devices per user <redundant because I changed the structure to have an array of users>
db.devices.aggregate([{$group: { _id: "$user_id",totalDevices: { $sum: 1 }}}])
// count total number of users
db.users.aggregate([{$group: {_id: null,totalUsers: { $sum: 1 }}} ])



// count users assigned to each device
db.devices.aggregate([
    {
      $unwind: "$user_id"
    },
    {
      $group: {
        _id: "$_id",
        totalUsers: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 1,
        totalUsers: 1 
      }
    }
  ])

db.devices.aggregate([{ $unwind: "$user_id"}, { $group: {_id: "$_id",totalUsers: { $sum: 1 }}},    {$project: { _id: 1, totalUsers: 1}    }  ])

// aggregate by device_id rather than object id
db.devices.aggregate([
    { $unwind: "$user_id" },
    { $group: { _id: "$device_id", totalUsers: { $sum: 1 }} },
    { $project: { _id: 1, totalUsers: 1 } }
  ])

  db.devices.aggregate([   { $unwind: "$user_id" },   { $group: { _id: "$device_id", totalUsers: { $sum: 1 }} },   { $project: { _id: 1, totalUsers: 1 } } ])


// count unopened/opened notifications
  db.notifications.aggregate([
    {
       $group: {
          _id: "$is_opened",
          count: { $sum: 1 }
       }
    }
 ])

db.notifications.aggregate([ {$group: {_id: "$is_opened",count: { $sum: 1 }} }])


// Retrieve the first 3 devices along with user information:
db.devices.aggregate([
    { $limit: 3 },
    {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "user_id",
        as: "user_info"
      }
    }
  ])

db.devices.aggregate([{ $limit: 3 }, {$lookup: {from: "users",localField: "user_id",foreignField: "user_id",as: "user_info"}} ])


