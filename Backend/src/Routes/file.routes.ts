import { Router } from 'express';
const router = Router();

import { createOrganization } from '../Controllers/fileController'

router.route('/organizaciones/')
  .post(createOrganization);

// router.route('/organizaciones/')
//   .get();

export default router;