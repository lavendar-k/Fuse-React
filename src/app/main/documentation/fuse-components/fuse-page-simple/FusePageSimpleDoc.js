import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const demos = [
  {
    id: 'full-width',
    title: 'Full Width',
    type: 'item',
    url: '/ui/page-layouts/simple/full-width',
  },
  {
    id: 'left-sidebar',
    title: 'Left Sidebar',
    type: 'item',
    url: '/ui/page-layouts/simple/left-sidebar',
  },
  {
    id: 'left-sidebar-2',
    title: 'Left Sidebar 2',
    type: 'item',
    url: '/ui/page-layouts/simple/left-sidebar-2',
  },
  {
    id: 'left-sidebar-3',
    title: 'Left Sidebar 3',
    type: 'item',
    url: '/ui/page-layouts/simple/left-sidebar-3',
  },
  {
    id: 'right-sidebar',
    title: 'Right Sidebar',
    type: 'item',
    url: '/ui/page-layouts/simple/right-sidebar',
  },
  {
    id: 'right-sidebar-2',
    title: 'Right Sidebar 2',
    type: 'item',
    url: '/ui/page-layouts/simple/right-sidebar-2',
  },
  {
    id: 'right-sidebar-3',
    title: 'Right Sidebar 3',
    type: 'item',
    url: '/ui/page-layouts/simple/right-sidebar-3',
  },
  {
    id: 'tabbed',
    title: 'Tabbed',
    type: 'item',
    url: '/ui/page-layouts/simple/tabbed',
  },
];

function FusePageSimpleDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        FusePageSimple
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FusePageSimple</code> is the simple page layout component of the Fuse React.
      </Typography>
      <Typography className="mb-16" component="p">
        The component has layout areas to easily enter the contents of the app.
      </Typography>
      <Typography className="mb-16" component="p">
        You can extend the class names injected by the classes property
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                   <FusePageSimple
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
                                        sidebarInner
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

export default FusePageSimpleDoc;
