import { forwardRef } from 'react';
import * as PropTypes from 'prop-types';
import FuseHighlight from '@fuse/core/FuseHighlight/FuseHighlight';

const HighlightedCode = forwardRef(function HighlightedCode(props, ref) {
  const { code, language, ...other } = props;

  return (
    <FuseHighlight component="pre" className={`language-${language || 'jsx'}`} ref={ref} {...other}>
      {code}
    </FuseHighlight>
  );
});

HighlightedCode.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default HighlightedCode;
