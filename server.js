const express = require('express');
const cors = require('cors');
const ideasListRouter = require('./routes/ideasList.routes');
const completedIdeasRouter = require('./routes/completedIdeas.routes');

require('dotenv').config();

const PORT = process.env.PORT || 5001;
console.log('PORT', process.env.PORT);

const app = express();

try {
    app.use(express.json());
    app.use(cors());
    app.use('', ideasListRouter);
    app.use('', completedIdeasRouter);

    app.listen(PORT, () => {
        console.log(`Server starting on PORT ${PORT}`);
    });
} catch (e) {
    console.log(e);
}
