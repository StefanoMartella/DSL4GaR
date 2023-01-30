import React from "react";
import Maintainer, { IMaintainer } from "../Maintainer";
import styles from "./styles.module.css";

const maintainers: IMaintainer[] = [
  {
    name: "Stefano",
    surname: "Martella",
    email: "stefanomartelladev@gmail.com",
    institute: "University of L'Aquila",
    img: require("@site/static/img/maintainers/stefano_martella.jpg").default,
  },
  {
    name: "Antonio",
    surname: "Bucchiarone",
    email: "bucchiarone@fbk.eu",
    institute: "Fondazione Bruno Kessler (FBK)",
    img: require("@site/static/img/maintainers/antonio_bucchiarone.jpg")
      .default,
  },
];

export default function MaintainersSection() {
  return (
    <div className={styles.container}>
      {maintainers.map((maintainer) => (
        <Maintainer
          key={`${maintainer.name}-${maintainer.surname}`}
          maintainer={maintainer}
        />
      ))}
    </div>
  );
}
