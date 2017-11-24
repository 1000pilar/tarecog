require('dotenv').config()
console.log(process.env.PASSWORD);
var config = {
  port: process.env.PORT || 80,
  test_port: 3001,
  mongoURI: {
    development: "mongodb://nugraha:nunuhana180390!@facedetect-shard-00-00-gjnar.mongodb.net:27017,facedetect-shard-00-01-gjnar.mongodb.net:27017,facedetect-shard-00-02-gjnar.mongodb.net:27017/Fareat?ssl=true&replicaSet=FaceDetect-shard-0&authSource=admin",
    test: "mongodb://localhost/fareat_test"
  }
}

module.exports = config
