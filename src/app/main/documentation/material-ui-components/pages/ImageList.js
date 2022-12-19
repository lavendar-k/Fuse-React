import FuseExample from '@fuse/core/FuseExample';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */
const useStyles = makeStyles((theme) => ({
  layoutRoot: {
    '& .description': {
      marginBottom: 16,
    },
  },
}));
function ImageListDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/image-list"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Image list
      </Typography>
      <Typography className="description">
        Image lists display a collection of images in an organized image.
      </Typography>

      <Typography className="mb-16" component="div">
        Image lists represent a collection of items in a repeated pattern. They help improve the
        visual comprehension of the content they hold.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Basic image list
      </Typography>
      <Typography className="mb-16" component="div">
        A simple example of a scrollable image <code>ImageList</code>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/BasicImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/BasicImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Image list with titlebars
      </Typography>
      <Typography className="mb-16" component="div">
        This example demonstrates the use of the <code>ImageListItemBar</code> to add an overlay to
        each <code>ImageListItem</code>. The overlay can accommodate a <code>title</code>,{' '}
        <code>subtitle</code> and secondary action - in this example an <code>IconButton</code>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/TitlebarImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/TitlebarImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Single line image list
      </Typography>
      <Typography className="mb-16" component="div">
        This example demonstrates a horizontal scrollable single-line image list of images.
        Horizontally scrolling image lists are discouraged because the scrolling interferes with
        typical reading patterns, affecting comprehension. One notable exception is a
        horizontally-scrolling, single-line image list of images, such as a gallery.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/SingleLineImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/SingleLineImageList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Advanced image list
      </Typography>
      <Typography className="mb-16" component="div">
        This example demonstrates &quot;featured&quot; items, using the <code>rows</code> and{' '}
        <code>cols</code> props to adjust the size of the item, and the <code>gap</code> prop to
        adjust the spacing. The items have a customized titlebar, positioned at the top, and with a
        custom gradient <code>titleBackground</code>. The secondary action <code>IconButton</code>{' '}
        is positioned on the left.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/image-list/AdvancedImageList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/image-list/AdvancedImageList.js')}
        />
      </Typography>
    </>
  );
}

export default ImageListDoc;
