import {
  Box,
  Card,
  Button,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function DetailedView({ selectedProduct }) {
  const [activeTab, setActiveTab] = useState(0);
  const [info, setInfo] = useState([]);
  const [quaterStockIN, setQuaterStockIN] = useState([]);
  const [quaterStockOUT, setQuaterStockOUT] = useState([]);
  const onStockInButtonPressed = () => {
    setActiveTab(0);
  };
  const onStockOutButtonPressed = () => {
    setActiveTab(1);
  };
  React.useEffect(() => {
    if (selectedProduct) {
      setInfo([
        {
          title: selectedProduct["warehouse.name"],
          content: selectedProduct["warehouse.address"],
          secondaryTitle: "Warehouse",
        },
        {
          title: selectedProduct["supplier.name"],
          content: selectedProduct["supplier.address"],
          secondaryTitle: "Supplier",
        },
      ]);
      setQuaterData(selectedProduct);
    }
  }, [selectedProduct]);
  const setQuaterData = (data) => {
    let sumStockIn = 0;
    let sumStockOut = 0;
    let counter = 0;
    for (let i = 0; i < data.stockIN.length; i++) {
      if (counter < 3) {
        counter++;
      } else {
        counter = 0;
        quaterStockIN.push(sumStockIn);
        setQuaterStockIN([...quaterStockIN, sumStockIn]);
        setQuaterStockOUT([...quaterStockIN, sumStockOut]);
        sumStockIn = 0;
        sumStockOut = 0;
      }
      sumStockIn += data.stockIN[i];
      sumStockOut += data.stockOut[i];
    }
  };
  console.log(quaterStockIN);
  const xLabels = [
    "Jan",
    "Feb",
    "March",
    "April",
    "June",
    "July",
    "Aug",
    "sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const QuaterLabels = ["Q1", "Q2", "Q3", "Q4"];
  return (
    <Stack
      sx={{
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      direction="column"
      useFlexGap
    >
      {/* First Item */}
      <Item>
        <BarChart
          height={290}
          series={[
            {
              data:
                selectedProduct?.stockIN?.length > 0
                  ? selectedProduct?.stockIN
                  : [],
              label: "Stock In",
              id: "pvId",
            },
            {
              data:
                selectedProduct?.stockOut?.length > 0
                  ? selectedProduct?.stockOut
                  : [],
              label: "Stock Out",
              id: "uvId",
            },
          ]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Item>

      {/* Second and Third Items in a Horizontal Row */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item style={{ width: "50%" }}>
          <BarChart
            series={[
              {
                data:
                  selectedProduct?.stockIN?.length > 0
                    ? selectedProduct?.stockIN
                    : [],
                label: "Stock In",
                id: "pvId",
              },
              {
                data:
                  selectedProduct?.stockOut?.length > 0
                    ? selectedProduct?.stockOut
                    : [],
                label: "Stock Out",
                id: "uvId",
              },
            ]}
            xAxis={[{ data: QuaterLabels, scaleType: "band" }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </Item>
       
        <Item style={{ width: "50%" }}>
        <h3>Warehouse Details</h3>
          {info.map((card) => (
            <>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      {card.secondaryTitle === "Warehouse" ? (
                        <WarehouseIcon />
                      ) : (
                        <LocalShippingIcon />
                      )}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={card.title} secondary={card.content} />
                </ListItem>
                <iframe height={80} src={`https://www.google.com/maps?q=${card.content}&output=embed`}></iframe>
              </List>
             
            </>
          ))}
        </Item>
      </Stack>
    </Stack>
  );
}

export default DetailedView;
