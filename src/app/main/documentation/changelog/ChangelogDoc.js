import Typography from '@material-ui/core/Typography';
import ChangelogCard from './ChangelogCard';

const changelogData = [
  {
    version: '6.2.0',
    date: '2021-08-13',
    newChanges: [
      'material-ui updated to v4.12.3',
      'tailwindcss updated to v2.2.7',
      'All dependency packages updated.',
      'prettier config (.prettierrc) moved into eslint configuration file.',
      "Code formatting matched with Airbnb's style guide, eslint configuration file updated, code re-formatted.",
    ],
    fixedChanges: ["Chrome's autofill background color removed."],
  },
  {
    version: '6.1.4',
    date: '2021-06-12',
    fixedChanges: [
      'ChatPanel responsive positioning.',
      "Main Theme light or Main Theme Dark values shouldn't be listed in main theme select.",
    ],
  },
  {
    version: '6.1.3',
    date: '2021-06-03',
    fixedChanges: [
      "ChatPanel doesn't render correctly after changing the layout and reloading the page.",
    ],
  },
  {
    version: '6.1.2',
    date: '2021-06-03',
    newChanges: ['All dependency packages updated.'],
  },
  {
    version: '6.1.1',
    date: '2021-04-07',
    newChanges: ['jss, jss-plugin-extend updated to v10.6.0'],
    fixedChanges: ['Page layouts inner scroll issue.'],
  },
  {
    version: '6.1.0',
    date: '2021-04-07',
    newChanges: [
      <>
        react-hook-form migrated v6 to v7, <br />- Checkout migration guide at:{' '}
        <a
          href="https://react-hook-form.com/migrate-v6-to-v7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://react-hook-form.com/migrate-v6-to-v7
        </a>
      </>,
      'tailwindcss updated to v2.1.0',
    ],
    fixedChanges: ['Yarn2 pnp warnings resolved.'],
  },
  {
    version: '6.0.0',
    date: '2021-04-02',
    newChanges: [
      'Calendar App: react-big-calendar changed with fullCalendar/react',
      'draft-js and react-draft-wysiwyg added, an example created at mail compose form.',
      'croco added to extend webpack config.',
      'tailwindcss moved inside postcss config with croco.',
      'framer-motion added, all Animations migrated to framer-motion.',
      "Charts changed from 'react-chartjs-2' to 'react-apexcharts'",
      'All forms changed with react-hook-form, yup is used for form validation.',
      'The theme design refreshed with more modern approach.',
      'redux serializableCheck middleware disabled by default for development performance concerns.',
      'Default theme color scheme changed',
      "Default font changed to 'Poppins'",
      'All theme layouts updated, now body scroll is default.',
      'Theme vertical-layout-1 has new navigation styles (Slide, Tabbed, Tabbed dense, folded).',
      'redux-logger configuration: collapse all except errors on dev console.',
      'Unnecessary React imports removed.',
      'Notification Panel created.',
      'AdjustFontSize toolbar component created.',
      'react updated to v17.0.2',
      'react-scripts updated to v4.0.3',
      'material-ui updated to v4.11.3',
      'All dependency packages updated.',
    ],
  },
  {
    version: '5.3.1',
    date: '2021-01-15',
    newChanges: [
      'material-ui updated to v4.11.2',
      'All dependency packages updated.',
      'Minor design refinements.',
      'Reset the whole redux store when user logged out.',
      'reportWebVitals added.',
      'data Model classes changed with function versions.',
    ],
    fixedChanges: ['FuseChipSelect empty input height.'],
  },
  {
    version: '5.3.0',
    date: '2020-12-02',
    newChanges: [
      'tailwindcss updated to v2',
      'material-ui updated to v4.11.1',
      'All dependency packages updated.',
      'E-Commerce App: Removing items functionality added into the Products and Orders Table. No result message created for non existed product/order page routes.',
      'Smooth shadows: Material design shadows changed with tailwindcss classes.',
    ],
    fixedChanges: ['NotesApp dialog do not close when item removed.'],
  },
  {
    version: '5.2.1',
    date: '2020-11-19',
    fixedChanges: ['ClickAwayListener included components not work.'],
  },
  {
    version: '5.2.0',
    date: '2020-11-17',
    newChanges: [
      'react updated to v17.0.1,',
      'E-commerce App: showing loading indicator while fetching products/orders table data.',
      'NavbarFoldedToggleButton icon changed with push_pin',
      'FuseSearch: placeholder and noResults props added for localization.',
      'material ui icons updated and all variations added for to choose from.',
      'Mobile refinements: Drawer components changed with SwipeableDrawer, react-swipeable library added.',
      'Native scrollbar styles updated.',
      'tailwindcss updated to v1.9.6',
      'All dependency packages updated.',
    ],
    fixedChanges: [
      'Language change dispatching should be called in the callback of the i18n.changeLanguage',
      'firebase individual SDK import error.',
    ],
    breakingChanges: [
      'customScrollbars disabled by default due to performance reasons on development.',
      'tailwind.config.js updated.',
      'redux-toolkit immutableCheck middleware disabled by default for development performance.',
      'material ui icon fonts import location changed, checkout public/index.html',
    ],
  },
  {
    version: '5.1.0',
    date: '2020-09-09',
    newChanges: [
      'FullScreenToggle added into the theme toolbars,',
      'i18nSlice created to store current language in redux store. changeLanguage action created and used in LanguageSwitcher.js',
      'Adjustments for better responsive design',
      'tailwindcss updated to v1.8.6',
      'All dependency packages updated.',
    ],
    fixedChanges: [
      'FuseDialog and FuseMessage actions added into serializableCheck ignoredActions list.',
      'ScrumboardApp: non-existent board redirect error fixed.',
      'Formsy components missing color attribute added.',
      'theme layout footer cannot scroll on mobile.',
      'FuseSearch, FuseShortcuts cannot find translated navigation item, translation process moved into the redux store.',
    ],
  },
  {
    version: '5.0.0',
    date: '2020-07-18',
    newChanges: [
      <>
        Migrated to the{' '}
        <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer">
          Redux-toolkit
        </a>{' '}
        (Official Redux library)'
      </>,
      'Theme Color Schemes updated',
      'Color Schemes selection added into the SettingsPanel',
      'New Documentation layout created, and content updated.',
      "Default highlighting added to external links ('a.link, a:not([role=button])[target=_blank]').",
      'New Login/Register page added (LaginPage3, RegisterPage3) default login/register pages updated.',
      'Style changes applied for better theming',
      'material-ui updated to v4.11',
      'All dependency packages updated.',
    ],
    notes: (
      <>
        <Typography
          className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16"
          component="div"
        >
          Migrating to the new major version (v5.0.0) can be difficult because of redux-toolkit
          integration.
        </Typography>
        <Typography
          className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16 leading-loose"
          component="div"
        >
          Some of the benefits of the redux-toolkit,
          <ul className="list-disc ml-16">
            <li>redux-toolkit is an official redux library.</li>
            <li>The common redux dependencies included in the library</li>
            <ul className="ml-8">
              <li>"immer": "^7.0.3",</li>
              <li>"redux": "^4.0.0",</li>
              <li>"redux-thunk": "^2.3.0",</li>
              <li>"reselect": "^4.0.0"</li>
            </ul>
            <li>
              RTK resolves many of the arguments related to boilerplate and unnecessary code.
              <br />
              <ul className="ml-8">
                As mentioned in its official docs, it helps to solve three major problems people had
                with Redux:
                <li>“Configuring a Redux store is too complicated.”</li>
                <li>“I have to add a lot of packages to get Redux to do anything useful.”</li>
                <li>“Redux requires too much boilerplate code.”</li>
              </ul>
            </li>
            <li>
              It makes writing redux easier with the best practices. - Includes popular middlewares
              by default (redux-immutable-state-invariant, serializable-state-invariant-middleware
              thunk)
            </li>
            <li>
              Redux DevTools are supported by default and with a simple flag true or false - With
              the CreateSlice function, you don't always have to define action type, action, and
              reducer separately.
            </li>
            <li>It's possible to mutate state with included ImmerJS.</li>
            <li>
              With the help of another included library Reselect, the performance can be improved.
              <br />- createEntityAdapter function generates a set of prebuilt reducers and
              selectors for performing CRUD operations more easily.
            </li>
          </ul>
          <br />
          <b>With the changes, We've removed ~57 redux related files from the fuse-react.</b>
        </Typography>
      </>
    ),
  },
  {
    version: '4.1.6',
    date: '2020-05-28',
    newChanges: [
      'material-ui updated to v4.10',
      'tailwindcss updated to v1.4.6',
      'All dependency packages updated.',
    ],
    fixedChanges: ['Tooltip z-index issue.'],
  },
  {
    version: '4.1.5',
    date: '2020-04-16',
    newChanges: [
      'material-ui updated to v4.9.10',
      'react updated to v16.13.1',
      'All dependency packages updated.',
      'hide/reveal button added to password input at the login page.',
    ],
  },
  {
    version: '4.1.1',
    date: '2020-03-14',
    newChanges: ['important note added into the installation doc for to prevent yarn v2 issues.'],
    fixedChanges: ['Possible yarn, yarn2 package manager issues.'],
  },
  {
    version: '4.1.0',
    date: '2020-03-13',
    newChanges: [
      'react updated to v16.13.0',
      'react-table updated to v7, also react-table docs and Contacts App table updated.',
      'formsy-react and its HOC`s updated',
      'material-ui updated to v4.9.5',
      'All dependency packages updated.',
      'performance improvements.',
      'input autofill backgroundColor changed to transparent.',
    ],
    fixedChanges: ['FuseChipSelect error highligting.'],
  },
  {
    version: '4.0.1',
    date: '2020-02-16',
    fixedChanges: [
      'react-scripts updated to v3.4.0 which is minor release and included mostly bug fixes.',
    ],
  },
  {
    version: '4.0.0',
    date: '2020-02-10',
    newChanges: [
      'Eslint, Prettier configuration based on Airbnb javascript style guide.',
      'Yarn v2 (package-manager) support',
      '.yarnrc.yml created for to resolve dependency issues (missing dependencies etc) for PnP',
      'IDEs (Webstorm, VSCode) titled documentation created.',
      'Toggle animations setting added.',
      'Codebase improved.',
      'material-ui updated to v4.9.1',
      'All dependency packages updated.',
    ],
    fixedChanges: [
      'Mutation fixed on route settings.',
      'Circular Dependency issues.',
      'RTL FuseScrollbars issue solved.',
    ],
    breakingChanges: [
      <span>
        Bundle Size optimizations: top level imports changed with path imports:
        <a
          href="https://material-ui.com/guides/minimizing-bundle-size/#how-to-reduce-the-bundle-size"
          target="_blank"
          rel="noopener noreferrer"
        >
          #how-to-reduce-the-bundle-size
        </a>
      </span>,
      '@fuse directories re-structured (@fuse/components > @fuse/core etc.), top level imports removed from @fuse/index, import paths updated.',
      'All Import paths re-ordered.',
      'All project reformated with the eslint, prettier configuration',
      'jss-extend changed with jss-plugin-extend',
      'webpack-bundle-analyzer changed with source-map-explorer',
    ],
  },
  {
    version: '3.4.0',
    date: '2020-01-16',
    newChanges: [
      'RTL language support added.',
      'Multi language support added.',
      'All dependency packages updated.',
      'Allow everyone(guest,user) for accessing root (/) page as a landing page while whole app auth protected.',
      '"redirect the logged-in user to a specific route depending on his role" title added into the FuseAuthorization Doc.',
    ],
    fixedChanges: [
      "react-scripts reverted back to v3.2.0 : v3.3.0 doesn't work in development mode on IE or edge",
      'Scrumboard App: Board list header menu not working.',
      'Chat Panel: Toggle Button not working on mobile; ClickAwayListener changed with custom event handler.',
    ],
  },
  {
    version: '3.3.0',
    date: '2019-12-17',
    newChanges: [
      'material-ui updated to v4.8.0',
      'Default theme scheme changed.',
      'All dependency packages updated.',
    ],
    fixedChanges: [
      'E-Commerce App: reset table page when listing search results.',
      "Project Dashboard: 'scales.[x/y]Axes.categoryPercentage' is deprecated changed with 'dataset.categoryPercentage'",
    ],
  },
  {
    version: '3.2.5',
    date: '2019-11-20',
    newChanges: [
      'material-ui updated to v4.6.1',
      'react updated to v16.12.0',
      'All dependency packages updated.',
    ],
    fixedChanges: ['FusePage layout components: Drawer closes whenever click on it.'],
  },
  {
    version: '3.2.4',
    date: '2019-10-24',
    newChanges: [
      'material-ui updated to v4.5.1',
      'react updated to 16.11.0',
      'All dependency packages updated.',
      'Fake-db delay option added for testing purposes (src/@fake-db/mock.js).',
      'E-Commerce App, shows FuseLoading component while product data is loading.',
      'Contacts App Contact Dialog Mobile refinement for scroll.',
      'Calendar App Native date input changed with DateTimePicker.',
      'FuseNavigation, dense attr added for densed variation.',
    ],
    fixedChanges: [
      'NavbarMobileToggleFab Button added for to display absence of the toolbar.',
      <span>
        react-select returns null despite of empty array, workaround applied for FuseChipSelect.
        <a
          href="https://github.com/intljusticemission/react-big-calendar/issues/1387#issuecomment-531465438"
          target="_blank"
          rel="noopener noreferrer"
        >
          the related issue
        </a>
      </span>,
      'Fix for Safari: Contacts App column filter input text is not visible.',
      'Fix for Firefox: ScrumboardApp scroll issue.',
      'suppressScrollX for the navigation at layout-1 for to fix showing horizontal scroll while fold.',
      'Calendar App New Event, moment js deprecation warning - Not in a recognized ISO format',
      <span>
        Calendar App drag drop fix:
        <a
          href="https://github.com/JedWatson/react-select/issues/3632"
          target="_blank"
          rel="noopener noreferrer"
        >
          the related issue
        </a>
      </span>,
    ],
  },
  {
    version: '3.2.3',
    date: '2019-09-09',
    newChanges: [
      'material-ui updated to v4.4.1',
      'react updated to 16.9.0',
      'All dependency packages updated.',
      'FuseChipSelectFormsy Component added.',
      'Default FuseSuspense loading delay changed to 0.',
    ],
    fixedChanges: [
      'FuseHorizontalNav items minor theming issues.',
      'Minor fixes for dependency updates.',
    ],
  },
  {
    version: '3.2.2',
    date: '2019-08-09',
    newChanges: [
      'withRouterAndRef hoc added for use forwardRef with withRouter.',
      'scrollToTopOnRouteChange added to FuseScrollbars.',
      <span>
        Nested Object support added for useForm hook. <br />
        (use with attribute <code>{`name="profile.username" value={form.profile.username}`}</code>)
      </span>,
    ],
    fixedChanges: [
      'scrollToTopOnChildChange changed with scrollToTopOnRouteChange in FusePageCarded.',
      'Route component theme settings do not applied if the route is the entry path of the app.',
    ],
  },
  {
    version: '3.2.1',
    date: '2019-08-08',
    newChanges: [
      'material-ui updated to v4.3.1',
      'tailwind config updated.',
      'All dependency packages updated.',
      'Some import paths optimized.',
      'HorizontalNavigation active highlighting added for group and collapse navigation items.',
    ],
    fixedChanges: [
      'FuseLayout do not hold render until settings at the redux state is updated. This causes multiple mount of the route component which has different layout settings.',
      'Layout style issues due to browser updates.',
      'Removal of event listeners in FuseScrollbars (@stephankaag).',
    ],
  },
  {
    version: '3.2.0',
    date: '2019-07-31',
    newChanges: [
      'material-ui updated to v4.3.0',
      'tailwind config updated.',
      'All dependency packages updated.',
    ],
    fixedChanges: [
      'Academy App is not scroll correctly when the theme footer is static.',
      'Scrumboard App list name form not works.',
    ],
    breakingChanges: [
      'tailwindcss colors matched with material colors (shade values changed with hues for example: .bg-red-dark to .bg-red-700)',
    ],
  },
  {
    version: '3.1.0',
    date: '2019-06-27',
    newChanges: [
      'material-ui updated to v4.1.3',
      'react-big-calendar updated to v0.22.0',
      'Await render while auto re-login on refresh or revisit of the authenticated user. It also solves extra redirection.',
      'All dependency packages updated.',
    ],
  },
  {
    version: '3.0.1',
    date: '2019-06-18',
    newChanges: [
      'material-ui updated to v4.1.1',
      'react-redux updated to v7.1.0',
      'react-router updated to v5.0.1',
      'tailwindcss updated to v1.0.4',
      'All dependency packages updated.',
    ],
  },
  {
    version: '3.0.0',
    date: '2019-06-02',
    newChanges: [
      <span>
        All of the code migrated to
        <a
          href="https://reactjs.org/docs/hooks-intro.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          the hooks
        </a>
        (New feature of react let you use state and other React features without writing a class.)
      </span>,
      'material-ui updated to v4',
      'react-scripts updated to v3',
      'react-redux updated to v7.1 (for hooks support)',
      'tailwindcss updated to v1.0.2',
      <span>
        user.role can be array to assign multiple permission roles. For details checkout
        <a
          href="http://react-material.fusetheme.com/documentation/fuse-components/fuse-authorization"
          target="_blank"
          rel="noopener noreferrer"
        >
          FuseAuthorization Docs
        </a>
        .
      </span>,
      'All dependency packages updated.',
      'Codebase improved.',
    ],
    fixedChanges: [
      <span>
        <i>"createBrowserHistroy is not exported from history.js"</i> error on windows
        environment(rare)
      </span>,
    ],
    breakingChanges: [
      <span>
        react-loadable changed with React.suspense, React.lazy. All route configs updated with
        React.lazy
      </span>,
      'classNames() replaced with clsx().',
      <span>
        We have no longer support Internet Explorer by default. If you still need it, you can
        install
        <a
          href="https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-app-polyfill
        </a>
        for to support.
      </span>,
    ],
    notes: (
      <Typography
        className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16"
        component="div"
      >
        Migrating to the new major version (<b>v3.0.0</b>) can be difficult because of the hooks
        support and major dependency releases.
      </Typography>
    ),
  },
  {
    version: '2.2.5',
    date: '2019-03-25',
    newChanges: [
      'Dependency packages updated (react v16.8.5, react-router v5 etc).',
      'Mail, Todo apps route configs updated.',
      'Changelog page design updated.',
    ],
    fixedChanges: ['Minor text color refinement.'],
  },
  {
    version: '2.2.4',
    date: '2019-03-06',
    newChanges: [
      'Dependency packages updated (react v16.8.4 etc).',
      'setRef prop added to FuseAnimate.',
    ],
    fixedChanges: [
      'Whitelist added to purgecss config for to prevent removing dynamically created navigation classes.',
      'Layout issues on safari <= v10',
    ],
  },
  {
    version: '2.2.3',
    date: '2019-02-27',
    newChanges: [
      'Dependency packages updated (react v16.8.3 etc).',
      'purgecss added to decrease file size of the production build.',
    ],
    fixedChanges: [
      'Fuse vertical navigation collapse items don’t have to be collapsed whenever navigation updated or location path changed.',
    ],
    breakingChanges: [
      'src/styles/fuse-helpers.css renamed with src/styles/tailwind.css',
      'src/styles/fuse-helpers.tailwind.css renamed with src/styles/tailwind.base.css',
    ],
  },
  {
    version: '2.2.2',
    date: '2019-02-18',
    newChanges: [
      'Dependency packages updated (react v16.8.1, react-scripts etc).',
      'PSD files updated.',
    ],
    fixedChanges: [
      'Rendering Dom in "window.onload" function to wait all files loaded (esp css files).',
      'Theming issues (FuseCountdown, tables of Invoice pages).',
    ],
  },
  {
    version: '2.2.1',
    date: '2019-02-11',
    newChanges: [
      'Dependency packages updated (react, material-ui etc).',
      'FuseNavigation update,remove,append,prepend actions created, documentation page is updated.',
      'react-chartjs-2-defaults.js file created.',
    ],
    fixedChanges: [
      'react, react-dom are added to resolutions to prevent loading two versions of the react. +\n' +
        "the issue's main reason is auth0-lock uses react as dependency not peerDependency and they don't change it with kinda valid reason\n" +
        '(https://github.com/auth0/lock/issues/1148#issuecomment-336765301).',
      'Calendar App Header updating issue fixed.',
    ],
  },
  {
    version: '2.2.0',
    date: '2019-02-03',
    newChanges: [
      'Project Dashboard App added.',
      "External Link Item added to FuseNavigation (type:'link').",
      '"metecons" extra icon fonts added.',
      'Dependency packages updated.',
    ],
  },
  {
    version: '2.1.0',
    date: '2019-01-22',
    newChanges: ['Notes App Added.', 'Dependency packages updated.'],
    fixedChanges: [
      "dir-glob error is fixed with globby 8.0.2 via locking it's version. (This error only occurs when you use npm to install node_modules instead of yarn).",
      'FuseSearch did not hide auth protected navigation items.',
    ],
  },
  {
    version: '2.0.0',
    date: '2019-01-11',
    newChanges: [
      'New theme layout added (layout-3)',
      'Container layout mode created for layout-2 and layout-3."container" class added to relevant places.',
      'FuseSidePanel created and used in layout-3.',
      'FuseNavigation: dense variant added for horizontal layout only.',
      'FuseShortcuts: vertical variant added.',
      'FuseSearch: basic variant added (checkout layout-3)',
      'dark-material-bg.jpg changed to gradient background.',
      'IconsUI page refined.',
      'Generating source map disabled by default on production build.',
      'Navigation data refactored on the demo.',
      'Documentation updated.',
      'Dependency packages updated.',
    ],
    fixedChanges: [
      'Codebase improvements.',
      'Some IE fixes.',
      'FuseAuthorization must have state to prevent restricted route component mount when unauthorized user redirects.',
      "E-Commerce App, navigating product to new product didn't update the form state.",
      'Authentication timing issues fixed.',
    ],
    breakingChanges: [
      'Theme layouts moved out of the @fuse core files which gives developers to create or edit theme layouts easily.',
      'Project structure changed after new layout system.',
      'Theme configuration state moved from FuseTheme to redux store (fuse.settings).',
    ],
    notes: (
      <Typography
        className="text-14 p-12 border-2 rounded-16 w-full max-w-lg mt-16"
        component="div"
      >
        Migrating to the new major version (v2.0.0) can be difficult because of the project
        structure and layout system changes.
      </Typography>
    ),
  },
  {
    version: '1.2.8',
    date: '2018-11-28',
    newChanges: [
      'Academy App added.',
      'FuseSearch Component added (located at the main toolbar and searches in the navigation).',
      'FuseChipSelect documentation page added.',
      'Dependency packages updated (Material-ui etc).',
    ],
    fixedChanges: [
      'Missing input variants added to Formsy Higher Order Components.',
      'FuseChipSelect variant styles fixed.',
      'FuseNavHorizontalItem missing exact prop added.',
      "E-Commerce App, navigating product to new product didn't update the form state.",
      'Authentication timing issues fixed.',
    ],
  },
  {
    version: '1.2.7',
    date: '2018-11-18',
    newChanges: [
      'JWT support added to Regular Authentication.',
      'FuseMessage variations added (error, success, alert, info).',
      'Dependency packages updated (Material-ui etc).',
    ],
    fixedChanges: [
      'FuseMessage relocated (position changed absolute to fixed).',
      'Hide navbar button when navbar display set to false on mobile.',
      'Layout-1 folded navigation mobile fix.',
      'react-router-config react-router-dom versions matched.',
      'tabs style fix for tabbed page layouts.',
    ],
  },
  {
    version: '1.2.6',
    date: '2018-11-07',
    fixedChanges: ['Theme Layout-1 Mobile fix (!important)'],
  },
  {
    version: '1.2.5',
    date: '2018-11-06',
    newChanges: [
      'FuseDialog Component added to theme layout for easily show dialog messages via redux action.',
      'Dependency packages updated (Material-ui, react-redux etc).',
    ],
    fixedChanges: ['Layout-1 folded navigation broken in macOS safari browser.'],
  },
  {
    version: '1.2.4',
    date: '2018-10-26',
    newChanges: ['Dependency packages updated (React, Material-ui etc).'],
  },
  {
    version: '1.2.3',
    date: '2018-10-14',
    newChanges: [
      'Dependency packages updated (Redux etc).',
      'Redux developer tools disabled on production.',
    ],
    fixedChanges: [
      'Redux Developer Tools Extension fix: problem occurs if the extension is enabled on Firefox.',
    ],
  },
  {
    version: '1.2.2',
    date: '2018-10-09',
    newChanges: [
      'Initial loading time reduced with code splitting (lazy loading) components and also reducers.',
      'redux-loadable library added.',
      'FuseLoadable component created for to avoid repetition.',
      'webpack-bundle-analyzer package added to devDependencies for to analyze build.',
      'Material UI updated to v3.2.0.',
      'Dependency packages updated.',
    ],
  },
  {
    version: '1.2.1',
    date: '2018-10-04',
    newChanges: [
      'create-react-app updated to v2',
      'Material UI updated to v3.1.2',
      'Navigation active item style option added for to use square highlighting(old style).',
      'Dependency packages updated.',
      'E-commerce App data/assets updated.',
    ],
    fixedChanges: [
      'Synthetically trigger event onChange for higher-order components of formsy.',
      'Edge, Ie font icon ligature fix.',
    ],
  },
  {
    version: '1.2.0',
    date: '2018-09-25',
    newChanges: [
      "The design is modernized with Google Material Design's new specs. + Icons replaced with outlined material icons, + Main Font Family changed to Muli",
      'Scrumboard App added.',
      'Material UI updated to v3.1.1',
      'FuseChipSelect: "variant" attr added for to choose creatable or fixed multi selection.',
      'Dependency packages updated.',
      "@lodash path created to use lodash's mixins.",
      'Webkit scrollbar styles added.',
      'Auth Services(Auth0, Firebase) are revised for to easily disable.',
      'Various mobile device refinements applied.',
    ],
    fixedChanges: ['Cleaner approach for Mail App.'],
  },
  {
    version: '1.1.8',
    date: '2018-09-08',
    newChanges: [
      'E-commerce App added.',
      'FuseChipSelect Component added.',
      'Material UI updated to v3.0.2',
      'Dependency packages updated.',
    ],
  },
  {
    version: '1.1.7',
    date: '2018-08-27',
    newChanges: [
      'FuseSplashScreen added.',
      <span>
        <b>firebaseService</b> and <b>auth0Service</b> created, <b>Auth</b> component added as entry
        point for authentication.
      </span>,
      'Login, register pages updated due to adding Auth0 authentication.',
      '404 page redirection added to the routes.',
      'Material UI updated to v1.5.1',
      'Dependency packages updated.',
    ],
    breakingChanges: ['FirebaseAuth Component removed, using Auth component instead.'],
  },
  {
    version: '1.1.6',
    date: '2018-08-12',
    newChanges: [
      'Chat App added.',
      'Material UI updated to v1.4.3',
      'Dependency packages updated.',
    ],
  },
  {
    version: '1.1.5',
    date: '2018-07-18',
    newChanges: [
      'Chat Panel added.',
      'LeftSidePanel RightSidePanel Layout areas added.',
      'Navbar style refined.',
      'Material UI updated to v1.4.0',
      'Other Dependency packages updated.',
    ],
  },
  {
    version: '1.1.4',
    date: '2018-07-09',
    newChanges: [
      'Todo App added.',
      'Material UI updated to v1.3.1',
      'Other Dependency packages updated.',
    ],
  },
  {
    version: '1.1.3',
    date: '2018-06-28',
    newChanges: ['Material UI updated to v1.3.0', 'Dependency packages updated.'],
  },
  {
    version: '1.1.2',
    date: '2018-06-18',
    newChanges: ['Changing default settings with route params.', 'Dependency packages updated.'],
    fixedChanges: [
      'FuseAnimate, FuseAnimateGroup inject error.',
      'Folded Navigation extra space fixed between 960px and 1280px of window width.',
    ],
  },
  {
    version: '1.1.1',
    date: '2018-06-10',
    newChanges: [
      <span>
        <code>velocity-react</code> added as dependency, its used for fuseAnimation
      </span>,
      <span>
        <code>FuseAnimation</code> <code>FuseAnimationGroup</code> created for easily animate
        components and applied most of the pages.
      </span>,
      <span>
        <code>exact</code> property option added to navigation item for matching location exactly.
      </span>,
      'Dependency packages updated.',
    ],
  },
  {
    version: '1.1.0',
    date: '2018-06-06',
    newChanges: [
      'Layout system enhanced.',
      'New Horizontal Layout added (layout-2).',
      <span>
        <code>react-poper</code> added as dependency, its used for horizontal navigation
      </span>,
      <span>
        <code>Material UI</code> updated to v1.2.0
      </span>,
      'Dependency packages updated.',
    ],
    fixedChanges: [
      'Dialog form of Contacts App and Calendar App fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps',
      '(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).',
      'Actions and reducers of fuse navigation fixed.',
    ],
    breakingChanges: [
      'Layout and Theme settings data structure changed.',
      'If you are storing the user data at database, old saved user settings will not work with this version.',
      'Page Layouts default scroll behaviour changed to singleScroll due to new layout mechanism, additional innerScroll attribute also added.',
      'FuseSettings separated from the settings panel.',
    ],
  },
  {
    version: '1.0.5',
    date: '2018-05-29',
    newChanges: [
      <span>
        <code>Material UI</code> updated to v1.1.0
      </span>,
      'Dependency packages updated.',
    ],
    fixedChanges: [
      'Extra control added if user.data exist in Firebase Db',
      'Navigation Collapse fixed due to React 16.4.0 bugfix for getDeriveredStateFromProps',
      '(https://reactjs.org/blog/2018/05/23/react-v-16-4.html#bugfix-for-getderivedstatefromprops).',
    ],
  },
  {
    version: '1.0.4',
    date: '2018-05-22',
    newChanges: [
      <span>
        <code>Material UI</code> updated to v1.0.0
      </span>,
      'Firebase integration added as an example for authentication (Also saves user data to firebase/db).',
      'Register Page Created for Firebase.',
      'FuseMessage Component added to theme layout for easily show snackbar messages via redux action.',
    ],
    breakingChanges: [
      <span>
        <code>FuseAuth</code> renamed with FuseAuthorization
      </span>,
      'Shortcuts data storage moved under the user.data.',
    ],
  },
  {
    version: '1.0.3',
    date: '2018-05-16',
    newChanges: [
      <span>
        <code>Material UI</code> updated to v1.0.0-rc.0
      </span>,
      <span>
        <a
          href="https://github.com/mui-org/material-ui/releases/tag/v1.0.0-rc.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout the breaking changes
        </a>
      </span>,
      <span>
        <code>google-map-react</code> updated.
      </span>,
    ],
  },
  {
    version: '1.0.2',
    date: '2018-05-12',
    fixedChanges: [
      'Tailwind error on windows.',
      <span>
        missing <code>.env</code> <code>.babelrc</code> files added.
      </span>,
    ],
  },
  {
    version: '1.0.1',
    date: '2018-05-10',
    newChanges: ['All dependencies updated.'],
    fixedChanges: [
      <span>
        <code>cross-env</code> library added for absolute path across platforms.
      </span>,
    ],
  },
  {
    version: '1.0.0',
    date: '2018-04-21',
    notes: (
      <ul className="mt-24 pl-24">
        <li>
          <Typography>Initial Release</Typography>
        </li>
      </ul>
    ),
  },
];

function ChangelogDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24 font-normal">
        Changelog
      </Typography>

      {changelogData.map((item) => (
        <ChangelogCard className="mb-24" key={item.version} {...item} />
      ))}
    </>
  );
}

export const fuseReactLatestVersion = changelogData[0].version;

export default ChangelogDoc;
