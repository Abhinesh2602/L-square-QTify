import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button";
import getData from "../../Services/getData";
import Card from "../Card/Card";
import { Carousal } from "../Carousal/Carousal";
import { BasicTabs } from "../BasicTabs/BasicTabs";

function Section({ title, type }) {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [label, setLabel] = useState("All");

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

  if (type === "songs") {
    let filteredData = [];

    if (label === "All") filteredData = data;
    else {
      filteredData = data.filter((data) => data.genre.label === label);
    }

    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <span className={styles.titles}>{title}</span>
        </div>
        <BasicTabs setLabel={setLabel}></BasicTabs>
        <Carousal
          data={filteredData}
          renderCardComponent={(data) => <Card data={data} type={type} />}
        />
        <div className={styles.line}></div>
      </div>
    );
  }

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
