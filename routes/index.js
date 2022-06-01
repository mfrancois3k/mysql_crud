const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();


router.get('/', (req, res) => res.send('This is the root!'))
router.get('/reviews', controllers.getAllItems)
router.post('/reviews', controllers.createItem)
router.put('/reviews/:id', controllers.updateItem)
router.delete('/reviews/:id', controllers.deleteItem)

module.exports = router; 