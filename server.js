const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5500;
const fs = require('fs');

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, username: 'admin', password: 'password' },
    { id: 2, username: 'user1', password: 'password1' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, userId: user.id });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});
app.all('/login', (req, res, next) => {
    if (req.method !== 'POST') {
        res.set('Allow', 'POST');
        res.status(405).send('Method Not Allowed');
    } else {
        next();
    }
});

app.post('/addProduct', (req, res) => {
    const productData = req.body;
    const products = JSON.parse(fs.readFileSync('data.json'));
    products.push(productData);
    fs.writeFileSync('data.json', JSON.stringify(products, null, 2));
    res.send('Product added successfully!');
});

app.post('/addProperty', (req, res) => { 
    res.send('Property added successfully!');
});


app.all('/addProperty', (req, res, next) => {
    if (req.method !== 'POST') {
        res.set('Allow', 'POST');
        res.status(405).send('Method Not Allowed');
    } else {
        next();
    }
});

app.get('/products', (req, res) => {
    try {
        const products = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'An error occurred while fetching the products.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
