import { createStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

const useStyles = (theme) => createStyles({
  mainContainer: {
    borderRadius: theme.spacing(15),
    margin: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  heading: {
    color: theme.palette.getContrastText(deepPurple[500]),
    textDecoration: "none",
  },
  image: {
    marginLeft: theme.spacing(15),
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("sm")]: {
    appBar: {
      padding: "10px 20px",
    },
    heading: {
      display: "none",
    },
    userName: {
      display: "none",
    },
    image: {
      marginLeft: "5px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "160px",
    },
  },

  actionDiv: {
    textAlign: "center",
  },
});

export default useStyles;
