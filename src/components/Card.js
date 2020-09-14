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

  function handleDelete() {}

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" name="position">
          {props.position}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          name="companyName"
        >
          {props.companyName}
        </Typography>
      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
        <CardDetails
          position={props.position}
          companyName={props.companyName}
        />
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
