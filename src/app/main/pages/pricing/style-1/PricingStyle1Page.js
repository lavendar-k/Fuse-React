import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
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
}));

function PricingStyle1Page() {
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
              <Card className="rounded-16">
                <div className={clsx('px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    BASIC
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary">
                      $
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-72 mx-4 tracking-tight font-semibold leading-none">
                        4
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / month
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">10</span>
                      Projects
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">10</span>
                      Pages
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">100</span>
                      Mb Disk Space
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button variant="outlined" className="w-128">
                    Buy Now
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16" raised>
                <div className={clsx('flex items-center justify-between px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    STANDART
                  </Typography>
                  <Typography variant="caption" color="inherit" className="font-normal">
                    Save 15%
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary">
                      $
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-72 mx-4 tracking-tight font-semibold leading-none">
                        8
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / month
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">20</span>
                      Projects
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">20</span>
                      Pages
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">200</span>
                      Mb Disk Space
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button variant="contained" color="secondary" className="w-128">
                    Buy Now
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16">
                <div className={clsx('px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    ADVANCED
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary" className="font-normal">
                      $
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-72 mx-4 tracking-tight font-semibold leading-none">
                        12
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / month
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">40</span>
                      Projects
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">40</span>
                      Pages
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">500</span>
                      Mb Disk Space
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button variant="outlined" className="w-128">
                    Buy Now
                  </Button>
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

export default PricingStyle1Page;
