const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Step 2: creating middleware here.


// Step 1: create route here.


app.listen(PORT, () => console.log(`Server started @ http://localhost:${PORT}`));