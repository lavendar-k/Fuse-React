import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

function FusePageCardedSidebarContent(props) {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

  const { classes } = props;

  return (
    <>
      {props.header && (
        <ThemeProvider theme={contrastTheme}>
          <div className={clsx(classes.sidebarHeader, props.variant)}>{props.header}</div>
        </ThemeProvider>
      )}

      {props.content && (
        <FuseScrollbars className={classes.sidebarContent} enable={props.innerScroll}>
          {props.content}
        </FuseScrollbars>
      )}
    </>
  );
}

export default FusePageCardedSidebarContent;
