import { useDebounce, usePrevious } from '@fuse/hooks';
import { Controller, useForm } from 'react-hook-form';
import FuseLayoutConfigs from '@fuse/layouts/FuseLayoutConfigs';
import _ from '@lodash';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useCallback, useMemo, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserSettings } from 'app/auth/store/userSlice';
import { setDefaultSettings } from 'app/store/fuse/settingsSlice';

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: '6px 0',
    width: '100%',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  group: {},
  formGroupTitle: {
    position: 'absolute',
    top: -10,
    left: 8,
    fontWeight: 600,
    padding: '0 4px',
    backgroundColor: theme.palette.background.paper,
  },
  formGroup: {
    position: 'relative',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 2,
    padding: '12px 12px 0 12px',
    margin: '24px 0 16px 0',
    '&:first-of-type': {
      marginTop: 16,
    },
  },
}));

function FuseSettings(props) {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);
  const themes = useSelector(({ fuse }) => fuse.settings.themes);
  const settings = useSelector(({ fuse }) => fuse.settings.current);
  const { reset, watch, control } = useForm({
    mode: 'onChange',
    defaultValues: settings,
  });
  const form = watch();
  const { form: formConfigs } = FuseLayoutConfigs[form.layout.style];
  const prevForm = usePrevious(form);
  const prevSettings = usePrevious(settings);
  const formChanged = !_.isEqual(form, prevForm);
  const settingsChanged = !_.isEqual(settings, prevSettings);
  const classes = useStyles(props);

  const handleUpdate = useDebounce((newSettings) => {
    if (user.role === 'guest') {
      dispatch(setDefaultSettings(newSettings));
    } else {
      dispatch(updateUserSettings(newSettings));
    }
  }, 300);

  useEffect(() => {
    // Skip inital changes
    if (!prevForm && !prevSettings) {
      return;
    }

    // If theme settings changed update form data
    if (settingsChanged) {
      reset(settings);
      return;
    }

    const newSettings = _.merge({}, settings, form);

    // No need to change
    if (_.isEqual(newSettings, settings)) {
      return;
    }

    // If form changed update theme settings
    if (formChanged) {
      if (settings.layout.style !== newSettings.layout.style) {
        _.set(
          newSettings,
          'layout.config',
          FuseLayoutConfigs[newSettings?.layout?.style]?.defaults
        );
      }
      handleUpdate(newSettings);
    }
  }, [
    dispatch,
    form,
    formChanged,
    handleUpdate,
    prevForm,
    prevSettings,
    reset,
    settings,
    settingsChanged,
    user,
  ]);

  const ThemeSelect = ({ value, name, handleThemeChange }) => {
    return (
      <Select
        className="w-full rounded-8 h-40 overflow-hidden my-8"
        value={value}
        onChange={handleThemeChange}
        name={name}
        variant="outlined"
        style={{
          backgroundColor: themes[value].palette.background.default,
          color: themes[value].palette.type === 'light' ? '#000000' : '#ffffff',
        }}
      >
        {Object.entries(themes)
          .filter(
            ([key, val]) =>
              !(name === 'theme.main' && (key === 'mainThemeDark' || key === 'mainThemeLight'))
          )
          .map(([key, val]) => (
            <MenuItem
              key={key}
              value={key}
              className="m-8 mt-0 rounded-lg"
              style={{
                backgroundColor: val.palette.background.default,
                color: val.palette.type === 'light' ? '#000000' : '#FFFFFF',
                border: `1px solid ${
                  val.palette.type === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
                }`,
              }}
            >
              {_.startCase(key)}
              <div
                className="flex w-full h-8 block absolute bottom-0 left-0 right-0"
                style={{
                  borderTop: `1px solid ${
                    val.palette.type === 'light'
                      ? 'rgba(0, 0, 0, 0.12)'
                      : 'rgba(255, 255, 255, 0.12)'
                  }`,
                }}
              >
                <div
                  className="w-1/4 h-8"
                  style={{
                    backgroundColor: val.palette.primary.main
                      ? val.palette.primary.main
                      : val.palette.primary[500],
                  }}
                />
                <div
                  className="w-1/4 h-8"
                  style={{
                    backgroundColor: val.palette.secondary.main
                      ? val.palette.secondary.main
                      : val.palette.secondary[500],
                  }}
                />
                <div
                  className="w-1/4 h-8"
                  style={{
                    backgroundColor: val.palette.error.main
                      ? val.palette.error.main
                      : val.palette.error[500],
                  }}
                />
                <div
                  className="w-1/4 h-8"
                  style={{ backgroundColor: val.palette.background.paper }}
                />
              </div>
            </MenuItem>
          ))}
      </Select>
    );
  };

  const getForm = useCallback(
    (_formConfigs, prefix) =>
      Object.entries(_formConfigs).map(([key, formControl]) => {
        const target = prefix ? `${prefix}.${key}` : key;
        switch (formControl.type) {
          case 'radio': {
            return (
              <Controller
                key={target}
                name={target}
                control={control}
                render={({ field }) => (
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className="text-14">
                      {formControl.title}
                    </FormLabel>
                    <RadioGroup
                      {...field}
                      aria-label={formControl.title}
                      className={classes.group}
                      row={formControl.options.length < 4}
                    >
                      {formControl.options.map((opt) => (
                        <FormControlLabel
                          key={opt.value}
                          value={opt.value}
                          control={<Radio />}
                          label={opt.name}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                )}
              />
            );
          }
          case 'switch': {
            return (
              <Controller
                key={target}
                name={target}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend" className="text-14">
                      {formControl.title}
                    </FormLabel>
                    <Switch
                      checked={value}
                      onChange={(ev) => onChange(ev.target.checked)}
                      aria-label={formControl.title}
                    />
                  </FormControl>
                )}
              />
            );
          }
          case 'number': {
            return (
              <div key={target} className={classes.formControl}>
                <Controller
                  name={target}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={formControl.title}
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  )}
                />
              </div>
            );
          }
          case 'group': {
            return (
              <div key={target} className={classes.formGroup}>
                <Typography className={classes.formGroupTitle} color="textSecondary">
                  {formControl.title}
                </Typography>

                {getForm(formControl.children, target)}
              </div>
            );
          }
          default: {
            return '';
          }
        }
      }),
    [classes.formControl, classes.formGroup, classes.formGroupTitle, classes.group, control]
  );

  return (
    <div className={classes.root}>
      <div className={classes.formGroup}>
        <Typography className={classes.formGroupTitle} color="textSecondary">
          Layout
        </Typography>

        <Controller
          name="layout.style"
          control={control}
          render={({ field }) => (
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className="text-14">
                Style
              </FormLabel>
              <RadioGroup {...field} aria-label="Layout Style" className={classes.group}>
                {Object.entries(FuseLayoutConfigs).map(([key, layout]) => (
                  <FormControlLabel
                    key={key}
                    value={key}
                    control={<Radio />}
                    label={layout.title}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          )}
        />

        {useMemo(() => getForm(formConfigs, 'layout.config'), [formConfigs, getForm])}

        <Typography className="my-16 text-12 italic" color="textSecondary">
          *Not all option combinations are available
        </Typography>
      </div>

      <div className={clsx(classes.formGroup, 'pb-16')}>
        <Typography className={classes.formGroupTitle} color="textSecondary">
          Theme
        </Typography>

        <Controller
          name="theme.main"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className="text-14">
                Main
              </FormLabel>
              <ThemeSelect value={value} handleThemeChange={onChange} name="theme.main" />
            </FormControl>
          )}
        />

        <Controller
          name="theme.navbar"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className="text-14">
                Navbar
              </FormLabel>

              <ThemeSelect value={value} handleThemeChange={onChange} name="theme.navbar" />
            </FormControl>
          )}
        />

        <Controller
          name="theme.toolbar"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className="text-14">
                Toolbar
              </FormLabel>

              <ThemeSelect value={value} handleThemeChange={onChange} name="theme.toolbar" />
            </FormControl>
          )}
        />

        <Controller
          name="theme.footer"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className="text-14">
                Footer
              </FormLabel>
              <ThemeSelect value={value} handleThemeChange={onChange} name="theme.footer" />
            </FormControl>
          )}
        />
      </div>

      <Controller
        name="customScrollbars"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className="text-14">
              Custom Scrollbars
            </FormLabel>
            <Switch
              checked={value}
              onChange={(ev) => onChange(ev.target.checked)}
              aria-label="Custom Scrollbars"
            />
          </FormControl>
        )}
      />

      <Controller
        name="direction"
        control={control}
        render={({ field }) => (
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend" className="text-14">
              Direction
            </FormLabel>
            <RadioGroup {...field} aria-label="Layout Direction" className={classes.group} row>
              <FormControlLabel key="rtl" value="rtl" control={<Radio />} label="RTL" />
              <FormControlLabel key="ltr" value="ltr" control={<Radio />} label="LTR" />
            </RadioGroup>
          </FormControl>
        )}
      />
    </div>
  );
}

export default memo(FuseSettings);
