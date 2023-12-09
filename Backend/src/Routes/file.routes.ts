import { Router } from 'express';
const router = Router();

import { createOrganization } from '../Controllers/fileController'

router.route('/organizaciones')
  .get(createOrganization);

export default router;