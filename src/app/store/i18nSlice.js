import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18n';
import { setDefaultSettings } from './fuse/settingsSlice';

export const changeLanguage = (languageId) => (dispatch, getState) => {
  const { direction } = getState().fuse.settings.defaults;

  const newLangDirection = i18n.dir(languageId);

  /*
    If necessary, change theme direction
     */
  if (newLangDirection !== direction) {
    dispatch(setDefaultSettings({ direction: newLangDirection }));
  }

  /*
    Change Language
     */
  return i18n.changeLanguage(languageId).then(() => {
    dispatch(i18nSlice.actions.languageChanged(languageId));
  });
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState: {
    language: i18n.options.lng,
  },
  reducers: {
    languageChanged: (state, action) => {
      state.language = action.payload;
    },
  },
});

export default i18nSlice.reducer;
