import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FuseHighlight from '@fuse/core/FuseHighlight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { useEffect, useRef, useState } from 'react';

const initialList = [
  'List Item 1',
  'List Item 2',
  'List Item 3',
  'List Item 4',
  'List Item 5',
  'List Item 6',
  'List Item 7',
  'List Item 8',
  'List Item 9',
  'List Item 10',
  'List Item 11',
  'List Item 12',
  'List Item 13',
  'List Item 14',
  'List Item 15',
];

function FuseAnimateGroupDoc() {
  const [list, setList] = useState(initialList);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setList(list.length !== 0 ? [] : initialList);
    }, 2000);
    return () => {
      clearInterval(intervalRef.current);
    };
  });

  return (
    <>
      <Typography variant="h4" className="mb-24">
        FuseAnimateGroup
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseAnimateGroup</code> is a container component which uses
        <code>VelocityTransitionGroup</code> of <code>velocity-react</code>
        library. Delegates to the React TransitionGroup addon.
      </Typography>

      <Typography className="mt-32 mb-8" variant="h5">
        Sample Usage
      </Typography>

      <div className="flex flex-wrap p-48 items-start">
        <div className="flex w-full sm:w-1/2 p-24 justify-center">
          <List>
            <FuseAnimateGroup
              enter={{
                animation: 'transition.slideUpBigIn',
              }}
              leave={{
                animation: 'transition.slideUpBigOut',
              }}
            >
              {list.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </FuseAnimateGroup>
          </List>
        </div>

        <div className="flex w-full sm:w-1/2 p-24 justify-center">
          <FuseHighlight component="pre" className="language-jsx">
            {`
                                     <List>
                                        <FuseAnimateGroup
                                            enter={{
                                                animation: "transition.slideUpBigIn"
                                            }}
                                            leave={{
                                                animation: "transition.slideUpBigOut"
                                            }}
                                        >
                                            {
                                                list.map((item) => (
                                                        <ListItem key={item}>
                                                            {item}
                                                        </ListItem>
                                                    )
                                                )
                                            }
                                        </FuseAnimateGroup>
                                    </List>
                                    `}
          </FuseHighlight>
        </div>
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

export default FuseAnimateGroupDoc;
