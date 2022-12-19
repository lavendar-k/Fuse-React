import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

function InstallationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Installation
      </Typography>

      <Typography className="mb-8" variant="h5">
        Prerequisites
      </Typography>

      <Typography className="mb-16" component="p">
        This section will give you some information about what tools you will need.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h6">
        Node.js
      </Typography>

      <Typography className="mb-16" component="p">
        To install and use Fuse React, you will need{' '}
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">
          Node.js
        </a>{' '}
        installed on your computer. We won't get into too much detail about Node.js as it's out of
        the scope of this documentation. Also, you won't need to use Node.js, it's only required for
        the development process.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h6">
        Yarn - Package Manager
      </Typography>
      <Typography className="mb-16" component="p">
        Fuse React uses{' '}
        <a href="https://yarnpkg.com" target="_blank" rel="noreferrer noopener">
          Yarn
        </a>{' '}
        package manager to install and manage 3rd party components and libraries.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Installation
      </Typography>

      <Typography className="mt-32 mb-8" variant="h6">
        A. Installing Prerequisites
      </Typography>

      <Typography className="my-16" component="div">
        <ol>
          <li className="mb-16">
            Download and install <b>at least LTS</b> or the latest version of{' '}
            <a href="https://nodejs.org/" target="_blank" rel="noreferrer noopener">
              Node.js
            </a>{' '}
            from its web site.
          </li>
          <li className="mb-16">
            Download and install the latest{' '}
            <a href="https://yarnpkg.com" target="_blank" rel="noreferrer noopener">
              Yarn (v1)
            </a>{' '}
            with the directions at their web site.
          </li>
        </ol>
      </Typography>

      <div className="my-24 px-12 py-8 border-1 border-red rounded-16">
        <Typography className="mb-8 font-500 text-16 text-red">Important:</Typography>
        <Typography className="" component="div">
          If you are planning to use <b>yarn v2</b> and use it with{' '}
          <a
            href="https://yarnpkg.com/getting-started/install#per-project-install"
            target="_blank"
            rel="noopener noreferrer"
          >
            Per-project install method
          </a>{' '}
          instead of the globally install method.
          <br /> After running <code>yarn set version berry</code>
          <br />
          This line:
          <code>yarnPath: ".yarn/releases/yarn-berry.js"</code>
          <br />
          will be added into the <code>.yarnrc.yml</code> file.
          <br />
          Currently, it is replacing all of the contents so make sure original
          <code>.yarnrc.yml</code> contents is in place,
          <br />
          if not recover the contents and add <code>
            yarnPath: ".yarn/releases/yarn-berry.js"
          </code>{' '}
          at the top.
        </Typography>
      </div>

      <Typography className="mt-32 mb-8" variant="h6">
        B. Installing Fuse React
      </Typography>

      <Typography className="my-16" component="div">
        <ol>
          <li className="mb-16">
            Unzip the zip file that you have downloaded from Themeforest. Inside the zip file, you
            will find the Skeleton Project <b>(Fuse-react-x.x.x-skeleton.zip)</b> along with the
            Demo Project <b>(Fuse-react-x.x.x-demo.zip)</b>, PSD designs and a readme file.
          </li>
          <li className="mb-16">
            Extract the contents of the zip file <b>(Fuse-react-x.x.x-skeleton.zip)</b> into a
            folder that you will work within. For this documentation, we will refer that as "your
            work folder".
          </li>
          <li className="mb-16">
            Open your favorite console application (Terminal, Command Prompt, etc.), navigate into
            your work folder, run the following command, and wait for it to finish:
            <FuseHighlight component="pre" className="language-bash my-16">
              {`
                                      yarn
                                    `}
            </FuseHighlight>
            This command will install all the required Node.js modules into the node_modules
            directory inside your work folder.
            <Typography className="mt-16" component="p">
              And now, you are ready to run the Fuse React for the first time.
            </Typography>
          </li>
        </ol>
      </Typography>
    </>
  );
}

export default InstallationDoc;
