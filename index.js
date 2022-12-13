const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());

// cross site verification
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


const port = 5000;
app.listen(port, () => {
  console.log("server is running on port", port);
});

