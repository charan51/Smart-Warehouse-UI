import { navigationBarData } from "./NavigationBarData";
import { useState } from "react";
import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from "react-router-dom";

function NavigationBar()
{
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch(newValue) {
      case 0:
        navigate("/dashboard");
      case 3:
          navigate("/barcode");
    }
  };

  //Later change it with map values
  return (
    <Tabs value={value} onChange={handleChange} orientation="vertical" sx={{ borderRight: 1, borderColor: 'divider', width:'100%' }}>
      <Tab icon={navigationBarData[0].icon} label={navigationBarData[0].title} />
      <Tab icon={navigationBarData[1].icon} label={navigationBarData[1].title} />
      <Tab icon={navigationBarData[2].icon} label={navigationBarData[2].title} />
      <Tab icon={navigationBarData[3].icon} label={navigationBarData[3].title} />
    </Tabs> 
  );
}

export default NavigationBar