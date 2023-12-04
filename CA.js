db.devices.insert({
    "device_id": "123",
    "device_name": "Doorbell",
    "user_id": "456",
    "Sensor details": {
        "ultrasonic_trigger": "123",
        "person_presence_trig": "456",
        "is_recognized_person": true,
        "recognized_face_trig": "789",
        "recording_activation_type": "motion"
    },
    "Recording": {
        "recording_id": "789",
        "video_url_link": "http://example.com/video.mp4",
        "is_call": false,
        "start_time": ISODate("2023-01-01T12:00:00Z"),
        "end_time": ISODate("2023-01-01T12:30:00Z")
    }
})


db.devices.insert({
    "device_id": "123",
    "device_name": "Doorbell",
    "user_id": "456",
    "Sensor details": {
        "ultrasonic_trigger": "123",
        "person_presence_trig": "456",
        "is_recognized_person": true,
        "recognized_face_trig": "789",
        "recording_activation_type": "motion"
    },
    "Recording": {
        "recording_id": "789",
        "video_url_link": "http://example.com/video.mp4",
        "is_call": false,
        "start_time": ISODate("2023-01-01T12:00:00Z"),
        "end_time": ISODate("2023-01-01T12:30:00Z")
    }
})

db.devices.insert({ "device_id": "123", "device_name": "Doorbell", "user_id": "456", "Sensor details": { "ultrasonic_trigger": "123", "person_presence_trig": "456", "is_recognized_person": true, "recognized_face_trig": "789", "recording_activation_type": "motion" }, "Recording": { "recording_id": "789", "video_url_link": "http://example.com/video.mp4", "is_call": false, "start_time": new Date("2023-01-01T12:00:00Z"), "end_time": new Date("2023-01-01T12:30:00Z") } })

for (let i = 1; i <= 1000; i++) {
    const userId = `user_${i}`;
    const deviceName = `Doorbell_${i}`;

    db.devices.insert({"device_id": `device_${i}`, "device_name": deviceName,  "user_id": userId,  "Sensor details": {  "ultrasonic_trigger": `ultrasonic_${i}`,  "person_presence_trig": `presence_${i}`,  "is_recognized_person": i % 2 === 0,  "recognized_face_trig": `face_${i}`,  "recording_activation_type": i % 3 === 0 ? "motion" : "sound"       },        "Recording": {  "recording_id": `recording_${i}`,  "video_url_link": `http://example.com/video_${i}.mp4`,  "is_call": i % 4 === 0,  "start_time": new Date(`2023-01-${i % 30 + 1}T${i % 24}:00:00Z`), "end_time": new Date(`2023-01-${i % 30 + 1}T${(i + 2) % 24}:30:00Z`) }});
}