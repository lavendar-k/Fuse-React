import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseHighlight from '@fuse/core/FuseHighlight';
import Card from '@material-ui/core/Card';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useEffect, useRef, useState } from 'react';

const EFFECTS = [
  'fade',
  'flipX',
  'flipY',
  'flipBounceX',
  'flipBounceY',
  'swoop',
  'whirl',
  'shrink',
  'expand',
  'bounce',
  'bounceUp',
  'bounceDown',
  'bounceLeft',
  'bounceRight',
  'slideUp',
  'slideDown',
  'slideLeft',
  'slideRight',
  'slideUpBig',
  'slideDownBig',
  'slideLeftBig',
  'slideRightBig',
  'perspectiveUp',
  'perspectiveDown',
  'perspectiveLeft',
  'perspectiveRight',
];

const initialAnimation = {
  translateX: [0, '100%'],
  opacity: [1, 0],
};

const useStyles = makeStyles({
  layoutRoot: {},
  box: {
    width: 128,
    height: 128,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 16,
  },
});

function FuseAnimateDoc() {
  const classes = useStyles();
  const [selectedEffect, setSelectedEffect] = useState('fade');
  const [customAnimation, setCustomAnimation] = useState(initialAnimation);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCustomAnimation(customAnimation ? null : initialAnimation);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  function handleChange(event) {
    setSelectedEffect(event.target.value);
  }

  return (
    <>
      <Typography variant="h4" className="mb-24">
        Fuse Animate
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseAnimate</code> is a container component that uses <code>VelocityComponent</code>{' '}
        of <code>velocity-react</code> library.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Predefined Effects Usage
      </Typography>

      <Typography className="mb-16" component="p">
        You can use predefined animation effects.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                <FuseAnimate
                                    animation="transition.${selectedEffect}In"
                                    duration={400}
                                    delay={400}
                                >
                                     <Card className={classes.box}>
                                        <Typography>
                                        {selectedEffect}
                                        </Typography>
                                    </Card>
                                </FuseAnimate>
                             `}
      </FuseHighlight>

      <div className="flex flex-wrap p-48">
        <div className="flex w-full sm:w-1/2 p-24 justify-center">
          <FormControl className="w-256">
            <InputLabel htmlFor="effect-helper">Select Effect</InputLabel>
            <Select
              value={selectedEffect}
              onChange={handleChange}
              input={<Input name="effect" id="effect-helper" />}
            >
              {EFFECTS.map((effect) => (
                <MenuItem key={effect} value={effect}>
                  transition.{effect}In
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="flex w-full sm:w-1/2 items-center justify-center">
          <FuseAnimate
            animation={selectedEffect && `transition.${selectedEffect}In`}
            duration={400}
            delay={400}
          >
            <Card className={classes.box}>
              <Typography>{selectedEffect}</Typography>
            </Card>
          </FuseAnimate>
        </div>
      </div>

      <Typography className="mt-32 mb-8" variant="h5">
        Custom Effects Usage
      </Typography>

      <Typography className="mb-16" component="p">
        You can create custom effects.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                                <FuseAnimate
                                    animation={{
                                        translateX: [0, '100%'],
                                        opacity   : [1, 0]
                                    }}
                                    duration={400}
                                    delay={400}
                                >
                                    <Card className={classes.box}>
                                        <Typography>
                                            Slide left and fade in
                                        </Typography>
                                    </Card>
                                </FuseAnimate>
                             `}
      </FuseHighlight>

      <div className="p-24 flex items-center justify-center">
        <FuseAnimate animation={customAnimation} duration={400} delay={400}>
          <Card className={classes.box}>
            <Typography>Slide left and fade in</Typography>
          </Card>
        </FuseAnimate>
      </div>

      <Typography className="mb-16" component="p">
        For more information checkout the
        <a
          href="https://github.com/google-fabric/velocity-react"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-8"
        >
          velocity-react
        </a>
        .
      </Typography>
    </>
  );
}

export default FuseAnimateDoc;
