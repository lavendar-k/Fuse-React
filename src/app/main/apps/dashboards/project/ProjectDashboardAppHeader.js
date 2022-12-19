import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import { getProjects, selectProjects } from './store/projectsSlice';
import { selectWidgets } from './store/widgetsSlice';

const useStyles = makeStyles((theme) => ({
  selectedProject: {
    background: lighten(theme.palette.primary.dark, 0.1),
    color: theme.palette.primary.contrastText,
    borderRadius: '16px 0 0 0',
  },
  projectMenuButton: {
    background: lighten(theme.palette.primary.dark, 0.1),
    color: theme.palette.primary.contrastText,
    borderRadius: '0 16px 0 0',
    marginLeft: 1,
  },
}));

function ProjectDashboardAppHeader(props) {
  const { pageLayout } = props;
  const classes = useStyles(props);

  const dispatch = useDispatch();
  const widgets = useSelector(selectWidgets);
  const projects = useSelector(selectProjects);
  const user = useSelector(({ auth }) => auth.user);

  const [selectedProject, setSelectedProject] = useState({
    id: 1,
    menuEl: null,
  });

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  function handleChangeProject(id) {
    setSelectedProject({
      id,
      menuEl: null,
    });
  }

  function handleOpenProjectMenu(event) {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: event.currentTarget,
    });
  }

  function handleCloseProjectMenu() {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: null,
    });
  }

  if (_.isEmpty(projects)) {
    return null;
  }

  return (
    <div className="flex flex-col justify-between flex-1 min-w-0 px-24 pt-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center min-w-0">
          {user.data.photoURL ? (
            <Avatar
              className="w-52 h-52 sm:w-64 sm:h-64"
              alt="user photo"
              src={user.data.photoURL}
            />
          ) : (
            <Avatar className="w-52 h-52 sm:w-64 sm:h-64">{user.data.displayName[0]}</Avatar>
          )}
          <div className="mx-12 min-w-0">
            <Typography className="text-18 sm:text-24 md:text-32 font-bold leading-none mb-8 tracking-tight">
              Welcome back, {user.data.displayName}!
            </Typography>

            <div className="flex items-center opacity-60 truncate">
              <Icon className="text-14 sm:text-24">notifications</Icon>
              <Typography className="text-12 sm:text-14 font-medium mx-4 truncate">
                You have 2 new messages and 15 new tasks
              </Typography>
            </div>
          </div>
        </div>
        <Hidden lgUp>
          <IconButton
            onClick={(ev) => pageLayout.current.toggleRightSidebar()}
            aria-label="open left sidebar"
            color="inherit"
          >
            <Icon>menu</Icon>
          </IconButton>
        </Hidden>
      </div>
      <div className="flex items-end">
        <div className="flex items-center">
          <div
            className={clsx(
              classes.selectedProject,
              'flex items-center h-40 px-16 text-13 sm:text-16'
            )}
          >
            {_.find(projects, ['id', selectedProject.id]).name}
          </div>
          <IconButton
            className={clsx(classes.projectMenuButton, 'h-40 w-40 p-0')}
            aria-owns={selectedProject.menuEl ? 'project-menu' : undefined}
            aria-haspopup="true"
            onClick={handleOpenProjectMenu}
          >
            <Icon>more_horiz</Icon>
          </IconButton>
          <Menu
            id="project-menu"
            anchorEl={selectedProject.menuEl}
            open={Boolean(selectedProject.menuEl)}
            onClose={handleCloseProjectMenu}
          >
            {projects &&
              projects.map((project) => (
                <MenuItem
                  key={project.id}
                  onClick={(ev) => {
                    handleChangeProject(project.id);
                  }}
                >
                  {project.name}
                </MenuItem>
              ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default ProjectDashboardAppHeader;
