const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserResumeData = require("./models/userResumeSchema.js");
const app = express();

app.use(cors());
require("dotenv").config();

// mongoose
//   .connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connected");
//   });

mongoose.connect("mongodb://127.0.0.1:27017/resume",{ useNewUrlParser: true,useUnifiedTopology: true  })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB");
    });

app.use(express.json());

// set the data to DB

app.post("/api", async (req, res) => {
  const data = await UserResumeData.create(req.body);
  res.send({ success: true, resumeData: data });
});

// app.get("/api/ge", async (req,res)=>{
//   const data = await UserResumeData.find({});
//   res.send({ success: true, resumeData: data });
// })

app.get("/api/:id", async (req, res) => {
  const data = await UserResumeData.findById(req.params.id);
  res.send({ success: true, resumeData: data });
});


app.listen(process.env.PORT || 9999, () => {
  console.log(
    `server is listening at port ${process.env.PORT} in ${process.env.NODE_ENV} environment`
  );
});
