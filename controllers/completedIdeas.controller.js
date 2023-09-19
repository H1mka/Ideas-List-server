const client = require('../db');

class CompletedIdeasController {
    async getCompletedIdeas(req, res) {
        try {
            await client.connect();
            const ideasCollection = client.db().collection('completedIdeas');

            const ideas = await ideasCollection.find({}).toArray();
            res.status(200).json([...ideas]);
        } catch (e) {
            res.status(500).json('Internal Server Error');
        }
    }

    async postCompletedIdeas(req, res) {
        try {
            await client.connect();
            const ideasCollection = client.db().collection('completedIdeas');

            await ideasCollection.deleteMany({});

            await ideasCollection.insertMany(req.body, (err, result) => {
                if (err) {
                    console.error('Ошибка при выполнении insertMany:', err);
                    return;
                }
            });
            res.status(200).send('Data upload');
        } catch (e) {
            res.status(500).json('Internal Server Error');
        }
    }
}

module.exports = new CompletedIdeasController();
