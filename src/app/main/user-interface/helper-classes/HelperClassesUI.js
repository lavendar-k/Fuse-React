import FusePageSimple from '@fuse/core/FusePageSimple';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

function HelperClassesUI() {
  return (
    <FusePageSimple
      header={
        <div className="flex flex-1 items-center justify-between p-12 md:p-24">
          <div className="flex flex-col">
            <div className="flex items-center mb-16">
              <Icon className="text-18" color="action">
                home
              </Icon>
              <Icon className="text-16" color="action">
                chevron_right
              </Icon>
              <Typography color="textSecondary" className="font-medium">
                User Interface
              </Typography>
            </div>
            <Typography variant="h6" className="text-18 sm:text-24 font-semibold">
              Helper Classes
            </Typography>
          </div>
        </div>
      }
      content={
        <div className="p-12 md:p-24 max-w-2xl">
          <div>
            <Typography className="mb-8" variant="h5">
              Styling in Material-UI
            </Typography>

            <Typography className="mb-16" component="p">
              Fuse React developed based on Material-UI as ui library.
              <a
                className="mx-4"
                href="https://material-ui-next.com/customization/css-in-js"
                target="_blank"
                rel="noopener noreferrer"
              >
                Material-UI's styling solution
              </a>
              uses JSS at its core. Therefore the Fuse React supports
              <a
                className="mx-4"
                href="http://cssinjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                JSS (CSSinJS library)
              </a>
            </Typography>
          </div>

          <div>
            <Typography className="mt-32 mb-8" variant="h5">
              Helper Classes with TailwindCSS
            </Typography>

            <Typography className="mb-16" component="p">
              We are accepting JSS advantages but we can't leave <b>helper classes</b> for fast
              development, ease of use, globally access etc. So we have used both in components.
            </Typography>

            <Typography className="mb-16" component="p">
              We are using
              <a
                className="mx-4"
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TailwindCSS
              </a>
              as an engine for generating helper classes. It's not an UI kit and it's customizable.
              You can find the config file of Tailwind with named "<b>tailwind.js</b>" under the
              root of Fuse React.
            </Typography>
          </div>
        </div>
      }
    />
  );
}

export default HelperClassesUI;
