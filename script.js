const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let quizResults = [];

app.post('/submit', (req, res) => {
    const { name, score } = req.body;
    quizResults.push({ name, score });
    res.status(200).send({ message: "Score saved successfully!" });
});

app.get('/results', (req, res) => {
    res.send(quizResults);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));