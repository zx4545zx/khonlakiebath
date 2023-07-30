import React, { useState } from "react";
import ComboBox from "../components/ComboBox";
import BasicTable from "../components/BasicTable";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import nameData from "../data/name.json";
import priceData from "../data/price.json";
import { useNavStore, useCalStore } from "../store";

const Home = () => {
  const dis = useCalStore((state) => state.dis);
  const setDis = useCalStore((state) => state.setDis);
  const pushList = useCalStore((state) => state.pushList);

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  return (
    <div className="page">
      <div>
        <ComboBox data={nameData} label="ชื่อ" value={name} setValue={setName} />
        <ComboBox data={priceData} label="ราคา" value={price} setValue={setPrice} />
        <Button
          variant="contained"
          sx={{ width: "100%", mb: "1rem" }}
          color="success"
          startIcon={<AddIcon />}
          onClick={() => pushList({name: name || "-", price: price || 0})}
          >
          เพิ่มรายการ
        </Button>
        <TextField
          id="outlined-number"
          label="ส่วนลด"
          type="number"
          value={dis}
          sx={{ width: "100%", mb: "1rem" }}
          onChange={(e) => setDis(e.target.value)}
        />
        <Divider sx={{ width: "100%", mb: "1rem" }} />

        <div>
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
