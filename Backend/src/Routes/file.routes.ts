import { Router } from 'express';
const router = Router();

import { createOrganization, verOrganization } from '../Controllers/fileController'

router.route('/api/organizaciones')
  .post(createOrganization);

router.route('/api/organizaciones')
  .get(verOrganization);

export default router;