import { Router } from 'express';
const router = Router();

import { createOrganization, verOrganization } from '../Controllers/fileController'

router.route('/organizaciones/')
  .post(createOrganization);

router.route('/organizaciones/')
  .get(verOrganization);

export default router;