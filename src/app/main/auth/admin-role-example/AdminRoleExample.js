import FuseHighlight from '@fuse/core/FuseHighlight';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'app/auth/store/userSlice';

const useStyles = makeStyles((theme) => ({
  layoutRoot: {},
}));

function AdminRoleExample(props) {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <FusePageSimple
      classes={{
        root: classes.layoutRoot,
      }}
      header={
        <div className="flex flex-1 items-center justify-between p-24">
          <Typography className="h2">Admin: Auth role example page</Typography>
          <Button variant="contained" onClick={(ev) => dispatch(logoutUser())}>
            <Icon>exit_to_app</Icon>
            <span className="mx-4">Logout</span>
          </Button>
        </div>
      }
      content={
        <div className="p-24">
          <Typography className="mb-24">
            You can see this page because you have logged in and have permission. Otherwise you
            should be redirected to login page.
          </Typography>

          <Typography className="mb-24">This is the page's config file:</Typography>

          <FuseHighlight component="pre" className="language-js">
            {`
                            import {authRoles} from 'auth';
                            import AdminRoleExample from 'app/main/auth/admin-role-example/AdminRoleExample';

                            export const AdminRoleExampleConfig = {
                                settings: {
                                    layout: {
                                        config: {}
                                    }
                                },
                                auth    : authRoles.admin,//['admin']
                                routes  : [
                                    {
                                        path     : '/auth/admin-role-example',
                                        component: AdminRoleExample
                                    }
                                ]
                            };
                            `}
          </FuseHighlight>

          <Typography className="my-24">
            You can also hide the navigation item/collapse/group with user roles by giving auth
            property.
          </Typography>

          <FuseHighlight component="pre" className="language-json">
            {`
                                export const fuseNavigationConfig = [
                                   {
                                        'id'   : 'only-admin-navigation-item',
                                        'title': 'Nav item only for Admin',
                                        'type' : 'item',
                                        'auth' : authRoles.admin,//['admin']
                                        'url'  : '/auth/admin-role-example',
                                        'icon' : 'verified_user'
                                    }
                                ];
                            `}
          </FuseHighlight>
        </div>
      }
    />
  );
}

export default AdminRoleExample;
