import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import { Box, Modal,Paper  } from "@mui/material";
import Grid from '@mui/material/Grid2';

export default function StockCard({ data, modalTrigger }) {
  
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={modalTrigger} >MORE INFO</Button>
      </CardActions>
    </Card>
  );
}
