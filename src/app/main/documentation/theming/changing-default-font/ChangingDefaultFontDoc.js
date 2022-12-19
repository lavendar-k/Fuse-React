import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function ChangingDefaultFontDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Changing default font
      </Typography>

      <Typography className="mb-16" component="p">
        There is two way to inject font-family.
      </Typography>

      <ul className="list-decimal ml-16">
        <li>
          <Typography className="mb-24">
            You can add the font link inside head of the public/index.html.
          </Typography>
          <FuseHighlight component="pre" className="language-html mb-24">
            {`
                          <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=vietnamese" rel="stylesheet">
                        `}
          </FuseHighlight>
        </li>
        <li>
          <Typography className="mb-24">
            You can install typeface font package and import like we do at src/index.js
          </Typography>
          <FuseHighlight component="pre" className="language-jsx mb-24">
            {`
                            import 'typeface-roboto';
                        `}
          </FuseHighlight>
        </li>
      </ul>

      <Typography className="mt-16 mb-8" component="p">
        You need to add <code>typography.fontFamily</code> values into the desired theme config at{' '}
        <code>src/app/fuse-configs/themesConfig</code>
      </Typography>
      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
					default    : {
					  typography: {
						fontFamily: [
							'Roboto',
							'"Helvetica"',
							'Arial',
							'sans-serif'
						].join(','),
				`}
      </FuseHighlight>

      <Typography className="mt-16 mb-8" component="p">
        There is also font-family assignment at <code>src/styles/index.css</code>
      </Typography>

      <FuseHighlight component="pre" className="language-css mb-24">
        {`
					html {
						font-size: 62.5%;
						font-family: Roboto, Helvetica Neue, Arial, sans-serif;
						background-color: #121212;
					}
				`}
      </FuseHighlight>
    </>
  );
}

export default ChangingDefaultFontDoc;
