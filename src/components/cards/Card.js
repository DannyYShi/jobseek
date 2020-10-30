import React from "react";
import config from '../../config'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardDetails from "./CardDetails";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles({
  root: {
    marginBottom: 10,
  },
  media: {
    height: 140,
  },
});

export default function JobCard(props) {
  const classes = useStyles();

  const deleteData = async (url = config.CARD_ENDPOINT, data = {}) => {
    console.log(data);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });

  };

  function handleDelete(id) {
    console.log(id);
    deleteData(config.CARD_ENDPOINT + parseInt(id), {
      'card_id': parseInt(id),
    })
    const newList = props.list.cards.filter((card) => card.card_id !== parseInt(id));
    console.log(newList);
    props.updateList();
    //{ ...props.list, cards: newList }, props.list.id

  }

  return (
    <Draggable draggableId={props.id.toString()} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                name="companyName"
              >
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
                jobLocation={props.jobLocation}
                jobUrl={props.jobUrl}
                jobDescription={props.jobDescription}
              />
              <Button
                size="small"
                color="primary"
                onClick={() => handleDelete(props.id.toString())}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
