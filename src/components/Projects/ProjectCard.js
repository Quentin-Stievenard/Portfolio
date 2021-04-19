import "./ProjectCard.css";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "bootstrap";

let uniqueID = 0;

export default function ProjectCard({
  image,
  title,
  texte,
  longDescription,
  imgProjet,
}) {
  const [componentID] = useState(uniqueID++);
  return (
    <div>
      <div
        type="button"
        data-toggle="modal"
        data-target={`#modal-${componentID}`}
      >
        <Card className="project-card">
          <CardActionArea>
            <img src={image} alt={title} className="MuiCardMedia-root" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {texte}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div
        className="modal fade"
        id={`modal-${componentID}`}
        tabindex="-1"
        role="dialog"
        aria-labelledby={`modal-${componentID}`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={imgProjet} alt={title} className="card-img"></img>
              {longDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
