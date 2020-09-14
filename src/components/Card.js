import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardDetails from "./CardDetails";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 10,
  },
  media: {
    height: 140,
  },
});

export default function JobCard(props) {
  const classes = useStyles();

  function handleDelete() {
    console.log();
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" name="companyName">
          {props.companyName}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          name="position"
        >
          {props.position}
        </Typography>
      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
        <CardDetails
          position={props.position}
          companyName={props.companyName}
        />
        <Button size="small" color="primary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
