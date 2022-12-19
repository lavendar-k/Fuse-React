import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  header: {
    height: 600,
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
  badge: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
  },
  price: {
    backgroundColor: theme.palette.primary[600],
    color: theme.palette.getContrastText(theme.palette.primary[600]),
  },
}));

function PricingStyle3Page() {
  const classes = useStyles();

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <div className={clsx(classes.header, 'flex')}>
        <div className="p-24 w-full max-w-2xl mx-auto">
          <div className="text-center my-128 mx-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              <Typography color="inherit" className="font-bold text-32 md:text-52">
                Pricing Plans For Everyone!
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography color="inherit" className="text-16 opacity-75 mt-16 mx-auto max-w-512">
                The most advanced customer support tools with a simple and affordable pricing. And
                you can always try for 30 days, free!
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="-mt-192">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center flex-wrap"
          >
            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16">
                <div className="p-32 text-center">
                  <Typography className="text-32 font-semibold">Starter</Typography>
                  <Typography color="textSecondary" className="text-16 font-normal">
                    For small teams
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className={clsx(classes.price, 'flex items-end justify-center py-16 px-32')}>
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-normal">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-semibold leading-none"
                      >
                        29
                      </Typography>
                    </div>
                    <Typography color="inherit" className="mx-4 font-normal">
                      monthly per user
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited projects
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited pages
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited disk space
                    </Typography>
                    <Typography color="textSecondary">24 / 7 Free support</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">
                  <Button variant="outlined" className="w-full">
                    Get Started Free
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    7 day free trial to start
                  </Typography>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16" raised>
                <div className="p-32 text-center">
                  <Typography className="text-32 font-semibold">Pro</Typography>
                  <Typography color="textSecondary" className="text-16 font-normal">
                    For larger teams
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className={clsx(classes.price, 'flex items-end justify-center py-16 px-32')}>
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-normal">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-semibold leading-none"
                      >
                        59
                      </Typography>
                    </div>
                    <Typography color="inherit" className="mx-4 font-normal">
                      monthly per user
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited projects
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited pages
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited disk space
                    </Typography>
                    <Typography color="textSecondary">24 / 7 Free support</Typography>
                    <Typography color="textSecondary">Advanced reporting</Typography>
                    <Typography color="textSecondary">Customizable interface</Typography>
                    <Typography color="textSecondary">CRM Integration</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">
                  <Button variant="contained" color="secondary" className="w-full">
                    Get Started Free
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    30 day free trial to start
                  </Typography>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="relative rounded-16">
                <div className="p-32 text-center">
                  <Typography className="text-32 font-semibold">Enterprise</Typography>
                  <Typography color="textSecondary" className="text-16 font-normal">
                    For big teams
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className={clsx(classes.price, 'flex items-end justify-center py-16 px-32')}>
                    <div className="flex justify-center">
                      <Typography color="inherit" className="font-normal">
                        $
                      </Typography>
                      <Typography
                        color="inherit"
                        className="text-32 mx-4  tracking-tight font-semibold leading-none"
                      >
                        29
                      </Typography>
                    </div>
                    <Typography color="inherit" className="mx-4 font-normal">
                      monthly per user
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited projects
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited pages
                    </Typography>
                    <Typography color="textSecondary" className="mb-16">
                      Unlimited disk space
                    </Typography>
                    <Typography color="textSecondary">For full feature list, call us</Typography>
                  </div>
                </CardContent>

                <div className="flex flex-col items-center justify-center pb-32 px-32">
                  <Button variant="outlined" className="w-full">
                    Call Us
                  </Button>
                  <Typography color="textSecondary" className="mt-16">
                    90 day free trial to start
                  </Typography>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-medium">
              Frequently Asked Questions
            </Typography>

            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">How does free trial work?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                  augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">Can I cancel any time?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                  quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                  quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">Can I have a discount?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                  augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingStyle3Page;
