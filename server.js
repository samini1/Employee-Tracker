// const express = require('express');
// const PORT = process.env.PORT || 3001;
// const app = express();
const mysql = require('mysql2')

//creates connection to 'employee' database



app.use(express.urlencoded( {extended: false }));
app.use(express.json());

//connect to MySQL database

app.get('/', (req, res) => {
    res.json({
        message: 'Hello'
    });
});

//default response for unsupported requests; place last
app.use((req, res) => {
    res.status(404).end();
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})