import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router();

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/userProfile', checkAuth, profilesCtrl.userProfile)
router.get('/', checkAuth, profilesCtrl.index)

// update profile info
router.put('/userProfile', checkAuth, profilesCtrl.updateProfile)