import { authRoles } from 'app/auth';
import AdminRoleExample from './AdminRoleExample';

const AdminRoleExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin, // ['admin']
  routes: [
    {
      path: '/auth/admin-role-example',
      component: AdminRoleExample,
    },
  ],
};

export default AdminRoleExampleConfig;
