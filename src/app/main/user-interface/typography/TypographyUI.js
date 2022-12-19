import FuseHighlight from '@fuse/core/FuseHighlight';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

function TypographyUI() {
  return (
    <FusePageSimple
      header={
        <div className="flex flex-1 items-center justify-between p-12 md:p-24">
          <div className="flex flex-col">
            <div className="flex items-center mb-16">
              <Icon className="text-18" color="action">
                home
              </Icon>
              <Icon className="text-16" color="action">
                chevron_right
              </Icon>
              <Typography color="textSecondary" className="font-medium">
                User Interface
              </Typography>
            </div>
            <Typography variant="h6" className="text-18 sm:text-24 font-semibold">
              Typography
            </Typography>
          </div>

          <Button
            variant="outlined"
            component="a"
            href="https://material-ui-next.com/style/typography/"
            target="_blank"
            role="button"
          >
            <Icon>link</Icon>
            <span className="mx-4 hidden sm:flex">Reference</span>
          </Button>
        </div>
      }
      content={
        <div className="p-12 md:p-24 max-w-2xl">
          <Card className="shadow">
            <CardContent>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h1">Display 4</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h1">Display 4</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h2">Display 3</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h2">Display 3</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h3">Display 2</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h3">Display 2</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h4">Display 1</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h4">Display 1</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h5">Headline</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                          <Typography variant="h5">Headline</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="h6">Title</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography variant="h6">Title</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="subtitle1">Subheading</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                             <Typography variant="subtitle1">Subheading</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="body1">Body 2</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                            <Typography variant="body1">Body 2</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="body2">Body 1</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                            <Typography variant="body2">Body 1</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="caption">Caption</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                            <Typography variant="caption">Caption</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography gutterBottom noWrap>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                           <Typography noWrap>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
              <div className="flex flex-wrap mb-16">
                <div className="flex w-full sm:w-1/2">
                  <Typography variant="button">Button</Typography>
                </div>
                <div className="flex w-full sm:w-1/2">
                  <FuseHighlight component="pre" className="language-html w-full">
                    {`
                                             <Typography variant="button">Button</Typography>
                                        `}
                  </FuseHighlight>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      }
    />
  );
}

export default TypographyUI;
