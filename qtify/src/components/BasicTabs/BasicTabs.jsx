import React, { Children, useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import getGenres from "../../Services/getGenres";
import Styles from "./BasicTabs.modules.css";
import { Carousal } from "../Carousal/Carousal";

export const BasicTabs = ({ setLabel }) => {
  const [genres, setGenres] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const fetchedGenre = await getGenres();
        console.log(fetchedGenre.data);
        setGenres(fetchedGenre.data);
      } catch (error) {
        console.log(Error);
      }
    };
    fetchGenre();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const label = newValue === 0 ? "All" : genres[newValue - 1].label;
    setLabel(label);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="transparent"
        >
          <Tab
            key={0}
            label={"All"}
            sx={{
              color: "white",
              "&.Mui-selected": {
                color: "white",
                borderBottom: "2px solid #34C94B",
              },
            }}
          />
          {genres.map((genre) => (
            <Tab
              key={genre.key}
              label={genre.label}
              sx={{
                color: "white",
                "&.Mui-selected": {
                  color: "white",
                  borderBottom: "2px solid #34C94B",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
};
