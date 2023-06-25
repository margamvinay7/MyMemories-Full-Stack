import { createStyles } from '@mui/styles';

const useStyles = (theme) => createStyles({
  media: {
    height: 0,
    paddingTop: theme.spacing(15),
    backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: theme.spacing(15),
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: theme.spacing(20),
    left: theme.spacing(20),
    color: theme.palette.getContrastText(theme.palette.white),
  },
  overlay2: {
    position: "absolute",
    top: theme.spacing(20),
    right: theme.spacing(20),
    color: theme.palette.getContrastText(theme.palette.white),
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(20),
  },
  title: {
    padding: theme.spacing(0, 16),
  },
  cardActions: {
    padding: theme.spacing(0, 16, 8, 16),
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
});

export default useStyles;
