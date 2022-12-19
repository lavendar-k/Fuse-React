import FuseExample from '@fuse/core/FuseExample';
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
function AutocompleteDoc(props) {
  const classes = useStyles();
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="outlined"
          component="a"
          href="https://material-ui.com/components/autocomplete"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-44 mt-32 mb-8" component="h1">
        Autocomplete
      </Typography>
      <Typography className="description">
        The autocomplete is a normal text input enhanced by a panel of suggested options.
      </Typography>

      <Typography className="mb-16" component="div">
        The widget is useful for setting the value of a single-line textbox in one of two types of
        scenarios:
      </Typography>
      <ol>
        <li>
          The value for the textbox must be chosen from a predefined set of allowed values, e.g., a
          location field must contain a valid location name: <a href="#combo-box">combo box</a>.
        </li>
        <li>
          The textbox may contain any arbitrary value, but it is advantageous to suggest possible
          values to the user, e.g., a search field may suggest similar or previous searches to save
          the user time: <a href="#free-solo">free solo</a>.
        </li>
      </ol>
      <Typography className="mb-16" component="div">
        It&#39;s meant to be an improved version of the &quot;react-select&quot; and
        &quot;downshift&quot; packages.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Combo box
      </Typography>
      <Typography className="mb-16" component="div">
        The value must be chosen from a predefined set of allowed values.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/ComboBox.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/ComboBox.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Playground
      </Typography>
      <Typography className="mb-16" component="div">
        Each of the following examples demonstrate one feature of the Autocomplete component.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Playground.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Playground.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Country select
      </Typography>
      <Typography className="mb-16" component="div">
        Choose one of the 248 countries.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CountrySelect.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CountrySelect.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Controllable states
      </Typography>
      <Typography className="mb-16" component="div">
        The component has two states that can be controlled:
      </Typography>
      <ol>
        <li>
          the &quot;value&quot; state with the <code>value</code>/<code>onChange</code> props
          combination. This state represents the value selected by the user, for instance when
          pressing <kbd>Enter</kbd>.
        </li>
        <li>
          the &quot;input value&quot; state with the <code>inputValue</code>/
          <code>onInputChange</code> props combination. This state represents the value displayed in
          the textbox.
        </li>
      </ol>
      <blockquote>
        <Typography className="mb-16" component="div">
          ⚠️ These two state are isolated, they should be controlled independently.
        </Typography>
      </blockquote>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/ControllableStates.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/ControllableStates.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Free solo
      </Typography>
      <Typography className="mb-16" component="div">
        Set <code>freeSolo</code> to true so the textbox can contain any arbitrary value.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Search input
      </Typography>
      <Typography className="mb-16" component="div">
        The prop is designed to cover the primary use case of a <strong>search input</strong> with
        suggestions, e.g. Google search or react-autowhatever.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FreeSolo.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FreeSolo.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Creatable
      </Typography>
      <Typography className="mb-16" component="div">
        If you intend to use this mode for a <a href="#combo-box">combo box</a> like experience (an
        enhanced version of a select element) we recommend setting:
      </Typography>
      <ul>
        <li>
          <code>selectOnFocus</code> to helps the user clear the selected value.
        </li>
        <li>
          <code>clearOnBlur</code> to helps the user to enter a new value.
        </li>
        <li>
          <code>handleHomeEndKeys</code> to move focus inside the popup with the <kbd>Home</kbd> and{' '}
          <kbd>End</kbd> keys.
        </li>
        <li>
          A last option, for instance <code>Add "YOUR SEARCH"</code>.
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOption.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOption.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        You could also display a dialog when the user wants to add a new value.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOptionDialog.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FreeSoloCreateOptionDialog.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Grouped
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Grouped.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Grouped.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Disabled options
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/DisabledOptions.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/DisabledOptions.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        <code>useAutocomplete</code>
      </Typography>
      <Typography className="mb-16" component="div">
        For advanced customization use cases, we expose a headless <code>useAutocomplete()</code>{' '}
        hook. It accepts almost the same options as the Autocomplete component minus all the props
        related to the rendering of JSX. The Autocomplete component uses this hook internally.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useAutocomplete from '@material-ui/lab/useAutocomplete';
`}
      </FuseHighlight>
      <ul>
        <li>
          📦 <a href="/size-snapshot">4.5 kB gzipped</a>.
        </li>
      </ul>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/UseAutocomplete.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/UseAutocomplete.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Customized hook
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CustomizedHook.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CustomizedHook.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        Head to the <a href="#customized-autocomplete">Customized Autocomplete</a> section for a
        customization example with the <code>Autocomplete</code> component instead of the hook.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Asynchronous requests
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Asynchronous.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Asynchronous.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Google Maps place
      </Typography>
      <Typography className="mb-16" component="div">
        A customized UI for Google Maps Places Autocomplete.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/GoogleMaps.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/GoogleMaps.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        For this demo, we need to load the{' '}
        <a href="https://developers.google.com/maps/documentation/javascript/tutorial">
          Google Maps JavaScript
        </a>{' '}
        API.
      </Typography>
      <blockquote>
        <Typography className="mb-16" component="div">
          ⚠️ Before you can start using the Google Maps JavaScript API, you must sign up and create
          a billing account.
        </Typography>
      </blockquote>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Multiple values
      </Typography>
      <Typography className="mb-16" component="div">
        Also known as tags, the user is allowed to enter more than one value.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Tags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Tags.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Fixed options
      </Typography>
      <Typography className="mb-16" component="div">
        In the event that you need to lock certain tag so that they can&#39;t be removed in the
        interface, you can set the chips disabled.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/FixedTags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/FixedTags.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Checkboxes
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CheckboxesTags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CheckboxesTags.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Limit tags
      </Typography>
      <Typography className="mb-16" component="div">
        You can use the <code>limitTags</code> prop to limit the number of displayed options when
        not focused.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/LimitTags.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/LimitTags.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-16" component="div">
        Fancy smaller inputs? Use the <code>size</code> prop.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Sizes.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Sizes.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Customizations
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Custom input
      </Typography>
      <Typography className="mb-16" component="div">
        The <code>renderInput</code> prop allows you to customize the rendered input. The first
        argument of this render prop contains props that you need to forward. Pay specific attention
        to the <code>ref</code> and <code>inputProps</code> keys.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/CustomInputAutocomplete.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/CustomInputAutocomplete.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        GitHub&#39;s picker
      </Typography>
      <Typography className="mb-16" component="div">
        This demo reproduces the GitHub&#39;s label picker:
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/GitHubLabel.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/GitHubLabel.js')}
        />
      </Typography>
      <Typography className="mb-16" component="div">
        Head to the <a href="#customized-hook">Customized hook</a> section for a customization
        example with the <code>useAutocomplete</code> hook instead of the component.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Highlights
      </Typography>
      <Typography className="mb-16" component="div">
        The following demo relies on{' '}
        <a href="https://github.com/moroshko/autosuggest-highlight">autosuggest-highlight</a>, a
        small (1 kB) utility for highlighting text in autosuggest and autocomplete components.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Highlights.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Highlights.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Custom filter
      </Typography>
      <Typography className="mb-16" component="div">
        The component exposes a factory to create a filter method that can provided to the{' '}
        <code>filterOptions</code> prop. You can use it to change the default option filter
        behavior.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
`}
      </FuseHighlight>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        <code>{`createFilterOptions(config) => filterOptions`}</code>
      </Typography>
      <Typography className="text-16 mt-32 mb-8" component="h4">
        Arguments
      </Typography>
      <ol>
        <li>
          <code>config</code> (<em>Object</em> [optional]):
          <ul>
            <li>
              <code>config.ignoreAccents</code> (<em>Boolean</em> [optional]): Defaults to{' '}
              <code>true</code>. Remove diacritics.
            </li>
            <li>
              <code>config.ignoreCase</code> (<em>Boolean</em> [optional]): Defaults to{' '}
              <code>true</code>. Lowercase everything.
            </li>
            <li>
              <code>config.limit</code> (<em>Number</em> [optional]): Default to null. Limit the
              number of suggested options to be shown. For example, if <code>config.limit</code> is{' '}
              <code>100</code>, only the first <code>100</code> matching options are shown. It can
              be useful if a lot of options match and virtualization wasn&#39;t set up.
            </li>
            <li>
              <code>config.matchFrom</code> (<em>&#39;any&#39; | &#39;start&#39;</em> [optional]):
              Defaults to <code>'any'</code>.
            </li>
            <li>
              <code>config.stringify</code> (<em>Func</em> [optional]): Controls how an option is
              converted into a string so that it can be matched against the input text fragment.
            </li>
            <li>
              <code>config.trim</code> (<em>Boolean</em> [optional]): Defaults to <code>false</code>
              . Remove trailing spaces.
            </li>
          </ul>
        </li>
      </ol>
      <Typography className="text-16 mt-32 mb-8" component="h4">
        Returns
      </Typography>
      <Typography className="mb-16" component="div">
        <code>filterOptions</code>: the returned filter method can be provided directly to the{' '}
        <code>filterOptions</code> prop of the <code>Autocomplete</code> component, or the parameter
        of the same name for the hook.
      </Typography>
      <Typography className="mb-16" component="div">
        In the following demo, the options need to start with the query prefix:
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.title,
});

<Autocomplete filterOptions={filterOptions} />
`}
      </FuseHighlight>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Filter.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Filter.js')}
        />
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        Advanced
      </Typography>
      <Typography className="mb-16" component="div">
        For richer filtering mechanisms, like fuzzy matching, it&#39;s recommended to look at{' '}
        <a href="https://github.com/kentcdodds/match-sorter">match-sorter</a>. For instance:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import matchSorter from 'match-sorter';

const filterOptions = (options, { inputValue }) =>
  matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Virtualization
      </Typography>
      <Typography className="mb-16" component="div">
        Search within 10,000 randomly generated options. The list is virtualized thanks to{' '}
        <a href="https://github.com/bvaughn/react-window">react-window</a>.
      </Typography>
      <Typography className="mb-16" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require('app/main/documentation/material-ui-components/components/autocomplete/Virtualize.js')
              .default
          }
          raw={require('!raw-loader!app/main/documentation/material-ui-components/components/autocomplete/Virtualize.js')}
        />
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Limitations
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        autocomplete/autofill
      </Typography>
      <Typography className="mb-16" component="div">
        The browsers have heuristics to help the users fill the form inputs. However, it can harm
        the UX of the component.
      </Typography>
      <Typography className="mb-16" component="div">
        By default, the component disable the <strong>autocomplete</strong> feature (remembering
        what the user has typed for a given field in a previous session) with the{' '}
        <code>autoComplete="off"</code> attribute.
      </Typography>
      <Typography className="mb-16" component="div">
        However, in addition to remembering past entered values, the browser might also propose{' '}
        <strong>autofill</strong> suggestions (saved login, address, or payment details). In the
        event you want the avoid autofill, you can try the following:
      </Typography>
      <ul>
        <li>
          <Typography className="mb-16" component="div">
            Name the input without leaking any information the browser can use. e.g.{' '}
            <code>id="field1"</code> instead of <code>id="country"</code>. If you leave the id
            empty, the component uses a random id.
          </Typography>
        </li>
        <li>
          <Typography className="mb-16" component="div">
            Set <code>autoComplete="new-password"</code>:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx">
            {` 
<TextField
  {...params}
  inputProps={{
    ...params.inputProps,
    autoComplete: 'new-password',

/>
`}
          </FuseHighlight>
        </li>
      </ul>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        iOS VoiceOver
      </Typography>
      <Typography className="mb-16" component="div">
        VoiceOver on iOS Safari doesn&#39;t support the <code>aria-owns</code> attribute very well.
        You can work around the issue with the <code>disablePortal</code> prop.
      </Typography>
      <Typography className="text-24 mt-32 mb-8" component="h3">
        ListboxComponent
      </Typography>
      <Typography className="mb-16" component="div">
        If you provide a custom <code>ListboxComponent</code> prop, you need to make sure that the
        intended scroll container has the <code>role</code> attribute set to <code>listbox</code>.
        This ensures the correct behavior of the scroll, for example when using the keyboard to
        navigate.
      </Typography>
      <Typography className="text-32 mt-32 mb-8" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-16" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#combobox">
          https://www.w3.org/TR/wai-aria-practices/#combobox
        </a>
        )
      </Typography>
      <Typography className="mb-16" component="div">
        We encourage the usage of a label for the textbox. The component implements the WAI-ARIA
        authoring practices.
      </Typography>
    </>
  );
}

export default AutocompleteDoc;
