import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const demos = [
  {
    title: 'Full Width',
    url: '/ui/page-layouts/carded/full-width',
  },
  {
    title: 'Full Width Tabbed',
    url: '/ui/page-layouts/carded/full-width-tabbed',
  },
  {
    title: 'Full Width 2',
    url: '/ui/page-layouts/carded/full-width-2',
  },
  {
    title: 'Full Width 2 Tabbed',
    url: '/ui/page-layouts/carded/full-width-2-tabbed',
  },
  {
    title: 'Left Sidebar',
    url: '/ui/page-layouts/carded/left-sidebar',
  },
  {
    title: 'Left Sidebar Tabbed',
    url: '/ui/page-layouts/carded/left-sidebar-tabbed',
  },
  {
    title: 'Left Sidebar 2',
    url: '/ui/page-layouts/carded/left-sidebar-2',
  },
  {
    title: 'Left Sidebar 2 Tabbed',
    url: '/ui/page-layouts/carded/left-sidebar-2-tabbed',
  },
  {
    title: 'Right Sidebar',
    url: '/ui/page-layouts/carded/right-sidebar',
  },
  {
    title: 'Right Sidebar Tabbed',
    url: '/ui/page-layouts/carded/right-sidebar-tabbed',
  },
  {
    title: 'Right Sidebar 2',
    url: '/ui/page-layouts/carded/right-sidebar-2',
  },
  {
    title: 'Right Sidebar 2 Tabbed',
    url: '/ui/page-layouts/carded/right-sidebar-2-tabbed',
  },
];

function FusePageCardedDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        FusePageCarded
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FusePageCarded</code> is the carded page layout component of the Fuse React.
      </Typography>
      <Typography className="mb-16" component="p">
        The component has layout areas to easily enter the contents of the app.
      </Typography>
      <Typography className="mb-16" component="p">
        You can extend the class names injected by the classes property
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                   <FusePageCarded
                                        classes={{
                                            root: classes.layoutRoot
                                        }}
                                        header={
                                            Header
                                        }
                                        contentToolbar={
                                            Content Toolbar
                                        }
                                        content={
                                            Content
                                        }
                                        leftSidebarHeader={
                                            Left Sidebar Header
                                        }
                                        leftSidebarContent={
                                            Left Sidebar Content
                                        }
                                        rightSidebarHeader={
                                            Right Sidebar Header
                                        }
                                        rightSidebarContent={
                                            Right Sidebar Content
                                        }
                                        ref={pageLayout}
                                        innerScroll
                                    />
                                `}
      </FuseHighlight>

      <Typography className="mt-32 mb-8" variant="h5">
        Demos
      </Typography>

      <ul>
        {demos.map((demo) => (
          <li key={demo.url} className="mb-8">
            <Link to={demo.url}>{demo.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FusePageCardedDoc;
