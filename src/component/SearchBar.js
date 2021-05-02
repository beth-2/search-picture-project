import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#323133",
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    color: "white",
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchBar = () => {
    const[state, setState] = useState('')
  const classes = useStyles();

  console.log(`state: `, state)

  return (
    <Paper component="form" onSubmit={()=>{}} className={classes.root}>
      <InputBase 
      className={classes.input} 
      placeholder="Search"
      onChange={(e)=>setState(e.target.value)}
      value = {state}
       />

      <Divider className={classes.divider} orientation="vertical" />

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;
