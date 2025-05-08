const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.static('public'));
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;
    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : 'Infinity'; break;
        default: result = 'Invalid';
    }

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Calculator server running on http://localhost:${PORT}`);
});

