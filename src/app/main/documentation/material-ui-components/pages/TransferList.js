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
function TransferListDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/transfer-list"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Transfer List
      </Typography>
      <Typography className="description">
        A transfer list (or "shuttle") enables the user to move one or more list items between
        lists.
      </Typography>

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple Transfer List
      </Typography>
      <Typography className="mb-16" component="div">
        {' '}
        For completeness, this example includes buttons for &quot;move all&quot;, but not every
        transfer list needs these.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transfer-list/TransferList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transfer-list/TransferList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Enhanced Transfer List
      </Typography>
      <Typography className="mb-16" component="div">
        This example exchanges the &quot;move all&quot; buttons for a &quot;select all / select
        none&quot; checkbox, and adds a counter.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/transfer-list/SelectAllTransferList.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/transfer-list/SelectAllTransferList.js')}
        />
      </Typography>
    </>
  );
}

export default TransferListDoc;
