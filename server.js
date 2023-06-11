import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "dist")));

app.use(cors());

// API endpoint for handling POST requests to "/api"
app.post("/api", (req, res) => {
  const { _API_URL } = req.body; // Destructure _API_URL from req.body
  axios
    .get(`${_API_URL}`)
    .then((response) => {
      // Process the response
      res.send(response.data);
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
    });
});

// API endpoint for handling POST requests to "/search"
app.post("/search", (req, res) => {
  const { SEARCH_API } = req.body;
  axios
    .get(`${SEARCH_API}`)
    .then((response) => {
      // Process the response
      res.send(response.data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
});

// Route for serving the index.html file in the "dist" directory for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the Express server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
