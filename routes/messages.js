import { Router } from 'express'
import * as messagesCtrl from '../controllers/messages.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/messaged',checkAuth,messagesCtrl.messaged)
router.get('/messages/:id',checkAuth,messagesCtrl.messages)
router.post('/new/:id',checkAuth,messagesCtrl.create )
