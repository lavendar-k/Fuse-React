import FuseHighlight from '@fuse/core/FuseHighlight';
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
function BoxDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/box"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Box
      </Typography>
      <Typography className="description">
        The Box component serves as a wrapper component for most of the CSS utility needs.
      </Typography>

      <Typography className="mb-16" component="div">
        The Box component packages{' '}
        <a href="/system/basics/#all-inclusive">all the style functions</a> that are exposed in{' '}
        <code>@material-ui/system</code>. It&#39;s created using the{' '}
        <a href="/styles/api/#styled-style-function-component">
          <code>styled()</code>
        </a>{' '}
        function of <code>@material-ui/core/styles</code>.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example
      </Typography>
      <Typography className="mb-16" component="div">
        <a href="/system/palette/">The palette</a> style function.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Overriding Material-UI components
      </Typography>
      <Typography className="mb-16" component="div">
        The Box component wraps your component. It creates a new DOM element, a{' '}
        <code>{`<div>`}</code> by default that can be changed with the <code>component</code>{' '}
        property. Let&#39;s say you want to use a <code>{`<span>`}</code> instead:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Box component="span" m={1}>
  <Button />
</Box>
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        This works great when the changes can be isolated to a new DOM element. For instance, you
        can change the margin this way.
      </Typography>
      <Typography className="mb-16" component="div">
        However, sometimes you have to target the underlying DOM element. For instance, you want to
        change the text color of the button. The Button component defines its own color. CSS
        inheritance doesn&#39;t help. To workaround the problem, you have two options:
      </Typography>
      <ol>
        <li>
          Use{' '}
          <a href="https://reactjs.org/docs/react-api.html#cloneelement">
            <code>React.cloneElement()</code>
          </a>
        </li>
      </ol>
      <Typography className="mb-16" component="div">
        The Box component has a <code>clone</code> property to enable the usage of the clone element
        method of React.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Box color="text.primary" clone>
  <Button />
</Box>
`}
      </FuseHighlight>
      <ol start="2">
        <li>Use render props</li>
      </ol>
      <Typography className="mb-16" component="div">
        The Box children accepts a render props function. You can pull out the{' '}
        <code>className</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Box color="text.primary">
  {props => <Button {...props} />}
</Box>
`}
      </FuseHighlight>
      <blockquote>
        <Typography className="mb-16" component="div">
          ⚠️ The CSS specificity relies on the import order. If you want the guarantee that the
          wrapped component&#39;s style will be overridden, you need to import the Box last.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        API
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import Box from '@material-ui/core/Box';
`}
      </FuseHighlight>
      <table>
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Type</th>
            <th align="left">Default</th>
            <th align="left">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="left">
              <span className="prop-name required">children&nbsp;*</span>
            </td>
            <td align="left">
              <span className="prop-type">
                union:&nbsp;node&nbsp;&#124;
                <br />
                &nbsp;func
                <br />
              </span>
            </td>
            <td align="left" />
            <td align="left">Box render function or node.</td>
          </tr>
          <tr>
            <td align="left">
              <span className="prop-name">clone</span>
            </td>
            <td align="left">
              <span className="prop-type">bool</span>
            </td>
            <td align="left">
              <span className="prop-default">false</span>
            </td>
            <td align="left">
              If <code>true</code>, the box will recycle its children DOM element. It&#39;s using{' '}
              <code>React.cloneElement</code> internally.
            </td>
          </tr>
          <tr>
            <td align="left">
              <span className="prop-name">component</span>
            </td>
            <td align="left">
              <span className="prop-type">
                union:&nbsp;string&nbsp;&#124;
                <br />
                &nbsp;func&nbsp;&#124;
                <br />
                &nbsp;object
                <br />
              </span>
            </td>
            <td align="left">
              <span className="prop-default">&#39;div&#39;</span>
            </td>
            <td align="left">
              The component used for the root node. Either a string to use a DOM element or a
              component.
            </td>
          </tr>
        </tbody>
      </table>
      <Typography className="mb-16" component="div">
        Any other properties supplied will be used by{' '}
        <a href="/system/basics/#all-inclusive">the style functions</a> or spread to the root
        element.
      </Typography>
    </>
  );
}

export default BoxDoc;
