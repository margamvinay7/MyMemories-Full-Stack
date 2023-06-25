import { createStyles } from "@mui/styles";

const useStyles = (theme) => createStyles({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: theme.spacing(1),
    display: "flex",
    padding: theme.spacing(1),
  },
  pagination: {
    borderRadius: 4,
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
});

export default useStyles;
