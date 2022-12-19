/* eslint-disable import/no-extraneous-dependencies */
import fs from 'fs';
import Beautify from 'js-beautify';
import _ from 'lodash';
import marked from 'marked';
import path from 'path';

const Promise = require('promise');

const demoDir = 'src/app/main/documentation/material-ui-components/components';
const rootDirectory = path.resolve(__dirname);
const examplesDirectory = path.resolve(rootDirectory, './components');
const pagesDirectory = path.resolve(rootDirectory, './pages');
const routesFilePath = path.resolve(rootDirectory, './MaterialUIComponentsRoutes.js');
const navigationFilePath = path.resolve(rootDirectory, './MaterialUIComponentsNavigation.js');

const demoRegexp = /^"demo": "(.*)"/;
const headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
const titleRegExp = /# (.*)[\r\n]/;
// const headerKeyValueRegExp = /(.*): (.*)/g;
const emptyRegExp = /^\s*$/;

marked.Lexer.prototype.lex = function lex(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u2424/g, '\n');
  return this.token(src, true);
};

const renderer = new marked.Renderer();

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  renderer,
});

/* const BeautifyConfig = {
    "indent_size": 2,
    "e4x"        : true,
    "js"         : {
        "allowed_file_extensions"  : ["js", "jsx", "json", "eslintrc", "jsbeautifyrc"],
        "brace_style"              : "collapse-preserve-inline",
        "break_chained_methods"    : false,
        "comma_first"              : false,
        "e4x"                      : true,
        "end_with_newline"         : false,
        "indent_char"              : " ",
        "indent_level"             : 0,
        "jslint_happy"             : false,
        "keep_array_indentation"   : false,
        "keep_function_indentation": false,
        "max_preserve_newlines"    : 0,
        "preserve_newlines"        : true,
        "space_after_anon_function": true,
        "space_before_conditional" : true,
        "space_in_empty_paren"     : false,
        "space_in_paren"           : true,
        "unescape_strings"         : false,
        "wrap_line_length"         : 120
    }
}; */

renderer.heading = (text, level) => {
  let className = '';
  switch (level) {
    case 1:
      className = 'text-44 mt-32 mb-8';
      break;
    case 2:
      className = 'text-32 mt-32 mb-8';
      break;
    case 3:
      className = 'text-24 mt-32 mb-8';
      break;
    default:
      className = 'text-16 mt-32 mb-8';
  }

  return `<Typography className="${className}" component="h${level}">${text}</Typography>\n`;
};

renderer.paragraph = (text) => {
  const className = 'mb-16';
  return `<Typography className="${className}" component="div">${text}</Typography>\n`;
};

renderer.code = (code, lang) => {
  const response = `
<FuseHighlight component="pre" className="language-${lang}">
{%% 
${code}
%%}
</FuseHighlight>
`;
  return response.replace(new RegExp('`', 'g'), '\\`').replace(new RegExp('%%', 'g'), '`');
};

renderer.codespan = (code, lang) => {
  const response = `<code>{%%${_.unescape(code)}%%}</code>`;
  return response.replace(new RegExp('%%', 'g'), '`');
};

const rmDir = (dirPath) => {
  try {
    const files = fs.readdirSync(dirPath);
    if (files.length > 0)
      files.forEach((item) => {
        const filePath = `${dirPath}/${item}`;
        if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);
        else rmDir(filePath);
      });
  } catch (e) {
    return;
  }
  fs.rmdirSync(dirPath);
};

// eslint-disable-next-line
String.prototype.allReplace = function (obj) {
  let retStr = this;
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const x in obj) {
    retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
  }
  return retStr;
};

function getContents(markdown) {
  return markdown
    .replace(headerRegExp, '') // Remove header information
    .split(/^{{|}}$/gm) // Split markdown into an array, separating demos
    .filter((content) => !emptyRegExp.test(content)); // Remove empty lines
}

function getTitle(markdownSource) {
  const matches = markdownSource.match(titleRegExp);

  return matches ? matches[1] : 'Material-UI';
}

function getHtmlCode(markdownSource) {
  let contentsArr = getContents(markdownSource);
  contentsArr = contentsArr.map((content, index) => {
    const match = content.match(demoRegexp);
    if (match) {
      const demoOptions = JSON.parse(`{${content}}`);
      const name = demoOptions.demo;
      const iframe = !!demoOptions.iframe;
      const importPath = name.replace(
        'pages/components/',
        'app/main/documentation/material-ui-components/components/'
      );
      return `\n<FuseExample
                    className="my-24"
                    iframe={${iframe}}
                    component="{require('${importPath}').default}" 
                    raw="{require('!raw-loader!${importPath}')}"
                    />`;
    }
    return content;
  });
  const response = marked(contentsArr.join(''))
    .replace(new RegExp('"{', 'g'), '{')
    .replace(new RegExp('}"', 'g'), '}')
    .replace(new RegExp('(<\\s*\\/?\\s*)p(\\s*([^>]*)?\\s*>)', 'g'), '$1Typography$2')
    .replace(new RegExp('class=', 'g'), 'className=')
    .replace(new RegExp('<img([^>]+)(\\s*[^\\/])>', 'gm'), '$1/>')
    .replace(new RegExp('<br>', 'g'), '<br/>')
    .replace(new RegExp('/static/', 'g'), '/material-ui-static/');
  return response;
}

function readDir(dir) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, list) => {
      if (err) {
        reject(err);
      }
      resolve({
        dir,
        list,
      });
    });
  });
}

function writePages(dir, list) {
  const pages = [];
  return new Promise((resolve, reject) => {
    list.forEach((file) => {
      file = path.resolve(dir, file);
      pages.push(path.basename(file));
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          writePage(file);
        }
      });
    });
    resolve(pages);
  });
}

function writePage(file) {
  const markdownSource = fs.readFileSync(`${file}/${path.basename(file)}.md`, 'utf8');
  const fileName = _.upperFirst(_.camelCase(path.basename(file)));
  const htmlCode = getHtmlCode(markdownSource);
  const title = getTitle(markdownSource);

  const contentJSX = `
                <>
					<div className="flex flex-1 flex-grow-0 items-center justify-end">
					  <Button 
							className="normal-case"
							variant="outlined" 
							component="a" 
							href="https://material-ui.com/components/${path.basename(file)}" 
							target="_blank"
							role="button"
							>
							<Icon>link</Icon>
							<span className="mx-4">Reference</span>
						</Button>
					</div>
                     ${htmlCode}
                </>
    `;

  // contentJSX = Beautify(contentJSX, BeautifyConfig);

  const content = `import FuseExample from '@fuse/core/FuseExample';
                   import FuseHighlight from '@fuse/core/FuseHighlight';
                   import Button from '@material-ui/core/Button';
                   import Icon from '@material-ui/core/Icon';
                   import Typography from '@material-ui/core/Typography';
                   import {makeStyles} from '@material-ui/core/styles';
                   /* eslint import/no-webpack-loader-syntax: off */
                   /* eslint import/extensions: off */
                   /* eslint no-unused-vars: off */
                   /* eslint-disable jsx-a11y/accessible-emoji */
                   const useStyles = makeStyles(theme=>({
                       layoutRoot: {
                           '& .description':{
                                   marginBottom:16
                           }
                       }
                   }));
                   function ${fileName}Doc(props) {
                     const classes = useStyles();
                     return (
                       ${contentJSX}
                     );
                   }
                   
                   export default ${fileName}Doc;
                   `;

  // content = Beautify(content, BeautifyConfig);

  fs.writeFileSync(path.resolve(pagesDirectory, `${fileName}.js`), content);
}

function writeRouteFile(pages) {
  // const importPath = "import %s from 'app/main/documentation/material-ui-components/pages/%s';";
  // const imports = pages.map((page) => {
  //   const componentName = _.upperFirst(_.camelCase(page));
  //   return importPath.replace(/%s/g, componentName, componentName);
  // });

  const routeObject =
    "{ path     : '/documentation/material-ui-components/%s', component: lazy(() => import('app/main/documentation/material-ui-components/pages/%p'))}";
  const routes = pages.map((page) => {
    const componentName = _.upperFirst(_.camelCase(page));

    return routeObject.allReplace({
      '%s': page,
      '%p': componentName,
    });
  });
  const content = Beautify(
    `
		import { lazy } from 'react';

        const MaterialUIComponentsRoutes =  [${routes.join()}];
        
        export default MaterialUIComponentsRoutes;
        
        `
  );

  fs.writeFileSync(path.resolve(routesFilePath), content);
}

function writeNavigationFile(pages) {
  const navigationObject =
    "{ 'id'   : '%id', 'title': '%title', 'type' : 'item', 'url'  : '/documentation/material-ui-components/%url' }";
  const navigation = pages.map((page) => {
    const componentName = _.startCase(page);
    return navigationObject.allReplace({
      '%id': _.camelCase(page),
      '%title': componentName,
      '%url': page,
    });
  });
  const content = Beautify(
    `
        const MaterialUIComponentsNavigation =  {
													id: 'material-ui-components',
													title: 'Material UI Components',
													type: 'collapse',
													icon: 'layers',
													children: [${navigation.join()}]
												};
												
        export default MaterialUIComponentsNavigation;
        
        `
  );
  fs.writeFileSync(path.resolve(navigationFilePath), content);
}

/* function walkSync(dir, filelist = [])
{
    return new Promise(function (resolve, reject) {
        fs.readdirSync(dir).forEach(file => {
            const dirFile = path.join(dir, file);
            try
            {
                filelist = walkSync(dirFile, filelist);
            } catch ( err )
            {
                if ( err.code === 'ENOTDIR' || err.code === 'EBUSY' ) filelist = [...filelist, dirFile];
                else reject(err);
            }
        });
        resolve({
            dir,
            filelist
        });
    });
} */

function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, (err, list) => {
    if (err) {
      return done(err);
    }

    let pending = list.length;

    if (!pending) {
      return done(null, results);
    }

    list.forEach((file) => {
      file = path.resolve(dir, file);

      fs.stat(file, (_err, stat) => {
        // If directorute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          // results.push(file);

          filewalker(file, (__err, res) => {
            results = results.concat(res);
            // eslint-disable-next-line no-plusplus
            if (!--pending) {
              done(null, results);
            }
          });
        } else {
          results.push(file);

          // eslint-disable-next-line no-plusplus
          if (!--pending) {
            done(null, results);
          }
        }
      });
    });

    return null;
  });
}

function replaceInExamples() {
  filewalker(demoDir, (err, list) => {
    if (err) {
      throw err;
    }
    list.forEach((file) => {
      const fileSource = fs.readFileSync(file, 'utf8');
      const result = fileSource
        .replace(
          new RegExp('docs/src/modules/utils/compose', 'g'),
          'app/main/documentation/material-ui-components/compose'
        )
        .replace(
          new RegExp('docs/src/modules/components/MarkdownElement', 'g'),
          'app/main/documentation/material-ui-components/utils/MarkdownElement'
        )
        .replace(
          new RegExp('docs/src/modules/components/HighlightedCode', 'g'),
          'app/main/documentation/material-ui-components/utils/HighlightedCode'
        )
        .replace(new RegExp('/static/', 'g'), '/material-ui-static/');
      fs.writeFileSync(file, result, 'utf8', (_err) => {
        if (_err) {
          return console.log(_err);
        }
        return null;
      });
    });
  });
}

function removeExcludedComponents() {
  const excludedComponents = [
    path.resolve(examplesDirectory, './breakpoints'),
    path.resolve(examplesDirectory, './use-media-query'),
    path.resolve(examplesDirectory, './about-the-lab'),
    path.resolve(examplesDirectory, './rating'),
    path.resolve(examplesDirectory, './speed-dial'),
    path.resolve(examplesDirectory, './toggle-button'),
    path.resolve(examplesDirectory, './skeleton'),
    path.resolve(examplesDirectory, './material-icons'),
    path.resolve(examplesDirectory, './tree-view'),
    path.resolve(examplesDirectory, './icons'),
  ];

  excludedComponents.forEach((_path) => rmDir(_path));
}

function build(dir) {
  fs.unlink(path.resolve(examplesDirectory, './.eslintrc.js'), (err) => {});

  removeExcludedComponents();

  replaceInExamples();

  rmDir(pagesDirectory);

  fs.mkdirSync(pagesDirectory);

  readDir(examplesDirectory).then(({ dir: _dir, list }) => {
    writePages(_dir, list).then((pages) => {
      writeRouteFile(pages);
      writeNavigationFile(pages);
    });
  });
}

build();
