import { Router } from 'express';
const router = Router();

import { indexWelcome } from '../Controllers/index.controller'

router.route('/a/')
  .get(indexWelcome);

export default router;