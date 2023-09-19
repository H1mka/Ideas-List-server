const Router = require('express');
const router = new Router();
const completedController = require('../controllers/completedIdeas.controller');

router.get('/getCompletedIdeas', completedController.getCompletedIdeas);
router.post('/postCompletedIdeas', completedController.postCompletedIdeas);

module.exports = router;
