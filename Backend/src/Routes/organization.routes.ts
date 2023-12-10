import { Router } from 'express';
const router = Router();

import { uploadOrganizations, getNameOrganizations } from '../Controllers/organizationController'

router.route('/api/organizaciones')
  .post(uploadOrganizations);

router.route('/api/organizaciones')
  .get(getNameOrganizations);

export default router;