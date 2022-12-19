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
function CardsDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/cards"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Card
      </Typography>
      <Typography className="description">
        Cards contain content and actions about a single subject.
      </Typography>

      <Typography className="mb-16" component="div">
        <a href="https://material.io/design/components/cards.html">Cards</a> are surfaces that
        display content and actions on a single topic.
      </Typography>
      <Typography className="mb-16" component="div">
        They should be easy to scan for relevant and actionable information. Elements, like text and
        images, should be placed on them in a way that clearly indicates hierarchy.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Simple Card
      </Typography>
      <Typography className="mb-16" component="div">
        Although cards can support multiple actions, UI controls, and an overflow menu, use
        restraint and remember that cards are entry points to more complex and detailed information.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/SimpleCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/SimpleCard.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Outlined Card
      </Typography>
      <Typography className="mb-16" component="div">
        Set <code>variant="outlined"</code> to render an outlined card.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/OutlinedCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/OutlinedCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Complex Interaction
      </Typography>
      <Typography className="mb-16" component="div">
        On desktop, card content can expand. (Click the downward chevron to view the recipe.)
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/RecipeReviewCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/RecipeReviewCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Media
      </Typography>
      <Typography className="mb-16" component="div">
        Example of a card using an image to reinforce the content.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/MediaCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/MediaCard.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        By default, we use the combination of a <code>{`<div>`}</code> element and a{' '}
        <em>background image</em> to display the media. It can be problematic in some situations.
        For instance, you might want to display a video or a responsive image. Use the{' '}
        <code>component</code> property for these use cases:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/ImgMediaCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/ImgMediaCard.js')}
        />
      </Typography>
      <blockquote>
        <Typography className="mb-16" component="div">
          ⚠️ When <code>component="img"</code>, CardMedia relies on <code>object-fit</code> for
          centering the image. It&#39;s not supported by IE 11.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        UI Controls
      </Typography>
      <Typography className="mb-16" component="div">
        Supplemental actions within the card are explicitly called out using icons, text, and UI
        controls, typically placed at the bottom of the card.
      </Typography>
      <Typography className="mb-16" component="div">
        Here&#39;s an example of a media control card.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/cards/MediaControlCard.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/cards/MediaControlCard.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customization
      </Typography>
      <Typography className="mb-16" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/components/card">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
    </>
  );
}

export default CardsDoc;
