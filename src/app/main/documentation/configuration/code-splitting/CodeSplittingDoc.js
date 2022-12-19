import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function CodeSplittingDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Code Splitting
      </Typography>

      <Typography className="mb-16" component="p">
        Code-splitting your app can help you “lazy-load” just the things that are currently needed
        by the user, which can dramatically improve the performance of your app. While you haven’t
        reduced the overall amount of code in your app, you’ve avoided loading code that the user
        may never need, and reduced the amount of code needed during the initial load.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Route-based code splitting
      </Typography>

      <Typography className="mb-16" component="p">
        We are using <b>React.lazy</b> function to dynamically import component.
        <br />
        <b>FuseSuspense</b> component is created to avoid the repetition of <b>React.Suspense </b>
        component defaults, which is used in the theme layouts.
        <br />
        Check out the examples below to see dynamically or regular way of importing the components.
      </Typography>

      <div className="flex flex-wrap lg:-mx-4">
        <div className="w-full lg:w-1/2 lg:px-4">
          <Typography className="mt-32 mb-8" variant="h6">
            Lazy Loaded Component:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx my-16">
            {`
                            export const AnalyticsDashboardAppConfig = {
                                settings: {
                                    layout: {
                                        config: {}
                                    }
                                },
                                routes  : [
                                    {
                                        path     : '/apps/dashboards/analytics',
                                        component: React.lazy(() => import('./AnalyticsDashboardApp'))
                                    }
                                ]
                            };
                            `}
          </FuseHighlight>
        </div>

        <div className="w-full lg:w-1/2 lg:px-4">
          <Typography className="mt-32 mb-8" variant="h6">
            Regular Loaded Component:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx my-16">
            {`
                                    import AnalyticsDashboardApp from './AnalyticsDashboardApp';

                                    export const AnalyticsDashboardAppConfig = {
                                        settings: {
                                            layout: {
                                                config: {}
                                            }
                                        },
                                        routes  : [
                                            {
                                                path     : '/apps/dashboards/analytics',
                                                component: AnalyticsDashboardApp
                                            }
                                        ]
                                    };
                                  `}
          </FuseHighlight>
        </div>
      </div>

      <Typography className="mt-32 mb-8" variant="h5">
        Code splitting the Redux reducers (Dynamically loaded reducers)
      </Typography>

      <Typography className="mb-16" component="p">
        We created Higher Order Component <code>withReducer</code> to load redux reducer before the
        component render.
        <br />
        You just need to pass the <b>key</b> and the <b>reducer</b> to the component.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx my-16">
        {`
                              import withReducer from 'app/store/withReducer';
                              import reducer from './store';
                              .
                              .
                              export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
                            `}
      </FuseHighlight>
    </>
  );
}

export default CodeSplittingDoc;
