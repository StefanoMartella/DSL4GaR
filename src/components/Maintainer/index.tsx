import styles from "./styles.module.css";
import React from "react";

export interface IMaintainer {
  name: string;
  surname: string;
  email: string;
  institute: string;
  img: string;
}

type Props = {
  maintainer: IMaintainer;
};

export default function Maintainer({ maintainer }: Props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={maintainer.img} />
      <div className={styles.infoContainer}>
        <h3 className={styles.nameSurname}>
          {maintainer.name} {maintainer.surname}
        </h3>
        <span>{maintainer.institute}</span>
        <span className={styles.email}>
          <a href={`mailto:${maintainer.email}`}>{maintainer.email}</a>
        </span>
      </div>
    </div>
  );
}
