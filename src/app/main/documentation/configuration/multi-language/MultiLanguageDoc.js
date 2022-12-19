import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@material-ui/core/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function MultiLanguageDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-24">
        Multi Language
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React uses{' '}
        <a href="https://react.i18next.com/" target="_blank" rel="noopener noreferrer">
          <code>react-i18next</code>
        </a>{' '}
        for to support multiple languages.
      </Typography>

      <Typography
        className="mb-16 p-16 border-1 bg-yellow-50 rounded-16 text-gray-800"
        component="p"
      >
        Since not everybody need multi-language setup for their apps, we decided NOT to put
        translations everywhere. If you want to see the translations in action, visit the Mail app,
        and then change the language from the Toolbar. Mail app is the only app that has
        translations for demonstration purposes. You can look at its source code to see the usage.
      </Typography>

      <Typography className="mb-8" variant="h5">
        Usage
      </Typography>

      <Typography className="mb-16" component="p">
        In order to use the translations, create your translation file within the folder you want to
        use the translations. For example, for the Mail app, create <code>i18n/en.js</code> file
        inside the
        <code>apps/mail</code> folder.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!app/main/apps/mail/i18n/en.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        And register the language file with <code>i18next.addResourceBundle()</code> at
        <code>src/app/main/apps/mail/MailAppConfig.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!app/main/apps/mail/MailAppConfig.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        And use in a component with <code>useTranslation</code> hook as below:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                        import {useTranslation} from 'react-i18next';

                        const {t} = useTranslation('mailApp');
                    
                        return (
                            <div className="p-24">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-full"
                                    onClick={handleOpenDialog}
                                >
                                    {t('COMPOSE')}
                                </Button>
                        `}
      </FuseHighlight>

      <Typography className="mb-8" variant="h5">
        Changing Language
      </Typography>

      <Typography className="mb-16" component="p">
        You should use <code>changeLanguage</code> redux action to change language:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
                           import { changeLanguage } from 'app/store/i18nSlice';

                            .
                            .

                            dispatch(changeLanguage(lng.id));
                        `}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        Checkout example usage at
        <code>src/app/fuse-layouts/shared-components/LanguageSwitcher.js</code>
      </Typography>
    </>
  );
}

export default MultiLanguageDoc;
