import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function RoutingDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Routing
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React routing system based on{' '}
        <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
          react-router
        </a>{' '}
        and its package{' '}
        <a
          href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-router-config
        </a>
        .
      </Typography>

      <Typography className="mb-16" component="p">
        For the modular approach and route based Fuse settings, we are using config files and
        generate routes from those files.
      </Typography>

      <Typography className="mb-16" component="p">
        For example, have a look at the code below
        <code>MailAppConfig.js</code>. You can override all settings for a particular route as{' '}
        <code>/apps/mail</code> for this example.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-32">
        {`
                            import MailApp from './MailApp';
                            import {Redirect} from 'react-router-dom';

                            export const MailAppConfig = {
                                settings: {
                                    layout          : {
                                        style : 'layout1',
                                        config: {
                                            scroll : 'content',
                                            navbar : {
                                                display : true,
                                                folded  : false,
                                                position: 'left'
                                            },
                                            toolbar: {
                                                display : true,
                                                style   : 'fixed',
                                                position: 'below'
                                            },
                                            footer : {
                                                display : true,
                                                style   : 'fixed',
                                                position: 'below'
                                            },
                                            mode   : 'fullwidth'
                                        }
                                    },
                                    customScrollbars: true,
                                    theme           : {
                                        main   : 'default',
                                        navbar : 'mainThemeDark',
                                        toolbar: 'mainThemeLight',
                                        footer : 'mainThemeDark'
                                    }
                                },
                                routes  : [
                                    {
                                        path     : '/apps/mail/label/:labelHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail/filter/:filterHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail/:folderHandle/:mailId?',
                                        component: MailApp
                                    },
                                    {
                                        path     : '/apps/mail',
                                        component: () => <Redirect to="/apps/mail/inbox"/>
                                    }
                                ]
                            };
                            `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        Then we import and generate routes from that file in <code>fuse-configs/routesConfig</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-32">
        {`
                                import {appsRoutes} from 'app/main/apps/mail/MailAppConfig.js';
                                import FuseUtils from '@fuse/utils';
                                import {Redirect} from 'react-router-dom';

                                const routeConfigs = [
                                    MailAppConfig
                                ];

                                export const routes = [
                                    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
                                    {
                                        path     : '/',
                                        component: () => <Redirect to="/pages/errors/error-404"/>
                                    }
                                ];
                            `}
      </FuseHighlight>
    </>
  );
}

export default RoutingDoc;
