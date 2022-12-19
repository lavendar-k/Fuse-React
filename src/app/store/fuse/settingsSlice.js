import { createTheme } from '@material-ui/core/styles';
import { getContrastRatio } from '@material-ui/core/styles/colorManipulator';
import { createSlice, createSelector } from '@reduxjs/toolkit';
import _ from '@lodash';
import {
  defaultThemes,
  mainThemeVariations,
  extendThemeWithMixins,
  mustHaveThemeOptions,
  defaultThemeOptions,
  getParsedQuerySettings,
  defaultSettings,
} from '@fuse/default-settings';
import FuseSettingsConfig from 'app/fuse-configs/settingsConfig';
import FuseThemesConfig from 'app/fuse-configs/themesConfig';
import FuseLayoutConfigs from 'app/fuse-layouts/FuseLayoutConfigs';

function getInitialSettings() {
  const defaultLayoutStyle =
    FuseSettingsConfig.layout && FuseSettingsConfig.layout.style
      ? FuseSettingsConfig.layout.style
      : 'layout1';
  const layout = {
    style: defaultLayoutStyle,
    config: FuseLayoutConfigs[defaultLayoutStyle].defaults,
  };
  return _.merge({}, defaultSettings, { layout }, FuseSettingsConfig, getParsedQuerySettings());
}

export function generateSettings(_defaultSettings, _newSettings) {
  const response = _.merge(
    {},
    _defaultSettings,
    { layout: { config: FuseLayoutConfigs[_newSettings?.layout?.style]?.defaults } },
    _newSettings
  );

  /**
   * Making theme values failsafe
   */
  Object.entries(response.theme).forEach(([key, value]) => {
    if (value !== 'mainThemeDark' && value !== 'mainThemeLight' && !FuseThemesConfig[value]) {
      response.theme[key] = 'default';
    }
  });

  return response;
}

const getThemes = (state) => state.fuse.settings.themes;
const getDirection = (state) => state.fuse.settings.current.direction;
const getMainThemeId = (state) => state.fuse.settings.current.theme.main;
const getNavbarThemeId = (state) => state.fuse.settings.current.theme.navbar;
const getToolbarThemeId = (state) => state.fuse.settings.current.theme.toolbar;
const getFooterThemeId = (state) => state.fuse.settings.current.theme.footer;

function generateMuiTheme(themes, id, direction) {
  const data = _.merge({}, defaultThemeOptions, themes[id], mustHaveThemeOptions);
  const response = createTheme(
    _.merge({}, data, {
      mixins: extendThemeWithMixins(data),
      direction,
    })
  );
  return response;
}

export const selectFuseThemeById = (id) =>
  createSelector([getThemes, getDirection], (themes, direction) =>
    generateMuiTheme(themes, id, direction)
  );

export const selectContrastMainTheme = (bgColor) => {
  function isDark(color) {
    return getContrastRatio(color, '#ffffff') >= 3;
  }
  return isDark(bgColor) ? selectMainThemeDark : selectMainThemeLight;
};

export const selectMainTheme = createSelector(
  [getThemes, getDirection, getMainThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

export const selectMainThemeDark = createSelector(
  [getThemes, getDirection],
  (themes, direction, id) => generateMuiTheme(themes, 'mainThemeDark', direction)
);
export const selectMainThemeLight = createSelector(
  [getThemes, getDirection],
  (themes, direction, id) => generateMuiTheme(themes, 'mainThemeLight', direction)
);

export const selectNavbarTheme = createSelector(
  [getThemes, getDirection, getNavbarThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

export const selectToolbarTheme = createSelector(
  [getThemes, getDirection, getToolbarThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

export const selectFooterTheme = createSelector(
  [getThemes, getDirection, getFooterThemeId],
  (themes, direction, id) => generateMuiTheme(themes, id, direction)
);

const themesObjRaw = Object.keys(FuseThemesConfig).length !== 0 ? FuseThemesConfig : defaultThemes;
const initialSettings = getInitialSettings();
const initialThemes = {
  ...themesObjRaw,
  ...mainThemeVariations(themesObjRaw[initialSettings.theme.main]),
};

const initialState = {
  initial: initialSettings,
  defaults: _.merge({}, initialSettings),
  current: _.merge({}, initialSettings),
  themes: initialThemes,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action) => {
      const current = generateSettings(state.defaults, action.payload);
      const themes =
        current.theme.main !== state.current.theme.main
          ? { ...state.themes, ...mainThemeVariations(themesObjRaw[current.theme.main]) }
          : state.themes;
      return {
        ...state,
        current,
        themes,
      };
    },
    setDefaultSettings: (state, action) => {
      const defaults = generateSettings(state.defaults, action.payload);
      const themes =
        defaults.theme.main !== state.defaults.theme.main
          ? { ...state.themes, ...mainThemeVariations(themesObjRaw[defaults.theme.main]) }
          : state.themes;
      return {
        ...state,
        defaults: _.merge({}, defaults),
        current: _.merge({}, defaults),
        themes,
      };
    },
    setInitialSettings: (state, action) => {
      return _.merge({}, initialState);
    },
    resetSettings: (state, action) => {
      const themes = {
        ...state.themes,
        ...mainThemeVariations(themesObjRaw[state.defaults.theme.main]),
      };
      return {
        ...state,
        defaults: _.merge({}, state.defaults),
        current: _.merge({}, state.defaults),
        themes,
      };
    },
  },
});

export const { resetSettings, setDefaultSettings, setInitialSettings, setSettings } =
  settingsSlice.actions;

export default settingsSlice.reducer;
