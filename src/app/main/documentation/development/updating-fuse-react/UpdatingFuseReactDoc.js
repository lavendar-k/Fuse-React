import Typography from '@material-ui/core/Typography';

function UpdatingFuseReactDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Updating Fuse React
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React isn’t an end product or an extension so there is no easy way to update the
        project. Due to the nature of apps, we cannot give any set instructions for updating Fuse
        React. It heavily depends on your project and it's up to you to update your code. However,
        there are a couple points that we want to put forward which might help you to keep Fuse
        React updated:
      </Typography>

      <Typography className="my-16" component="div">
        <ol>
          <li className="mb-16">
            The most important one is not to touch the /@fuse directory but sometimes that is going
            to be inevitable and in those cases, try to keep the modifications minimal.
          </li>
          <li className="mb-16">
            Usually React and Material UI libraries do some breaking changes and force our hands to
            change things. In those cases, it's always good to check their official Changelogs to
            see what they did. Usually they provide clear instructions and even helper tools to
            update your code.
          </li>
          <li className="mb-16">
            Before starting your new project,{' '}
            <a
              href="http://support.withinpixels.com/github"
              target="_blank"
              rel="noreferrer noopener"
            >
              join our Github repo
            </a>
            , fork it and build your app on top of that fork. This way, in the future, you can
            easily merge or compare the changes from the main repo onto your fork. This will require
            merging a lot of changes manually, but it's the best way to keep the Fuse React updated.
          </li>
        </ol>
      </Typography>
    </>
  );
}

export default UpdatingFuseReactDoc;
