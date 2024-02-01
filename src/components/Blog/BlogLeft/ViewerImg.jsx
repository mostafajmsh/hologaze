import React from "react";

export default function ViewerImg({ styles, image }) {
  return <img className={styles} src={image} alt="viewer image" />;
}
