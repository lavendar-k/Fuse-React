import { ThemeProvider } from '@material-ui/core/styles';
import { memo, useEffect, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';

const useEnhancedEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function FuseTheme(props) {
  const direction = useSelector(({ fuse }) => fuse.settings.defaults.direction);
  const mainTheme = useSelector(selectMainTheme);

  useEnhancedEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  // console.warn('FuseTheme:: rendered',mainTheme);
  return <ThemeProvider theme={mainTheme}>{props.children}</ThemeProvider>;
}

export default memo(FuseTheme);
