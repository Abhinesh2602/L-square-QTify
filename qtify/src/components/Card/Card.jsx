import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";

function Card({ data, type }) {
  if (type === "album" || type === "newAlbums") {
    const { id, title, description, songs, follows, image, slug } = data;

    return (
      <Tooltip title={`${songs?.length} Songs`} placement="top" arrow>
        <div className={styles.cardWrapper}>
          <div className={styles.cardBox}>
            <img className={styles.cardImage} src={image} alt={title} />
            <div className={styles.banner}>
              <Chip
                label={`${follows} Follows`}
                className={styles.chip}
                size="small"
              />
            </div>
          </div>
          <span className={styles.title}>{title}</span>
        </div>
      </Tooltip>
    );
  } else {
    return (
      <>
        <h4>{data.title}</h4>
        <p>{data.artists}</p>
        <p>
          <strong>Genre:</strong> {data.genre.label}
        </p>
        <p>
          <strong>Likes:</strong> {data.likes}
        </p>
      </>
    );
  }
}

export default Card;
