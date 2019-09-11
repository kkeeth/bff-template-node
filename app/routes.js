const Express = require('express')
const router = Express.Router()

const getController = require('./controllers/get')
const postController = require('./controllers/post')
const patchController = require('./controllers/patch')
const deleteController = require('./controllers/delete')

// Health check endpoint for ELB
router.get('/health', (req, res) => res.send('status ok'))

// get
router.get('/get', getController)

// post
router.post('/post', postController)

// update
router.patch('/update', patchController)

// delete
router.delete('/delete', deleteController)

module.exports = router
