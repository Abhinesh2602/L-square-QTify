import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button";
import getData from "../../Services/getData";
import Card from "../Card/Card";
import { Carousal } from "../Carousal/Carousal";

function Section({ title, type }) {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedData = await getData(type);
        setData(fetchedData);
      } catch (erorr) {
        console.log(erorr);
      }
    };
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.titles}>{title}</span>
        <Button
          variant="grid"
          onClick={(e) => setToggle((prevToggle) => !prevToggle)}
        >
          {toggle ? "Collapse All" : "Show all"}
        </Button>
      </div>
      {toggle ? (
        <>
          <div className={styles.cardGrid}>
            {data.map((item) => (
              <Card data={item} type={type} key={item.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <Carousal
            data={data}
            renderCardComponent={(data) => <Card data={data} type={type} />}
          />
        </>
      )}
      <div className={styles.line}></div>
    </div>
  );
}

export default Section;
