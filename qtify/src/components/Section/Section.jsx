import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button";
import getData from "../../Services/getData";
import Card from "../Card/Card";

function Section() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData.data);
      } catch (erorr) {
        console.log(erorr);
      }
    };
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.titles}>Top Albums</span>
        <Button variant="grid">Show all</Button>
      </div>
      <div className={styles.cardGrid}>
        {data.map((item) => (
          <Card data={item} type={"album"} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Section;
