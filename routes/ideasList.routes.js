const Router = require('express');
const router = new Router();
const ideasListController = require('../controllers/ideasList.controller');

router.get('/getIdeasList', ideasListController.getIdeasList);
router.post('/postIdeasList', ideasListController.postIdeasList);

module.exports = router;
