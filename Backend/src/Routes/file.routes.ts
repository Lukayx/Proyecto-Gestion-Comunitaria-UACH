import { Router } from 'express';
const router = Router();

import { createOrganization } from '../Controllers/fileController'

router.route('/perro')
  .get(createOrganization);

export default router;