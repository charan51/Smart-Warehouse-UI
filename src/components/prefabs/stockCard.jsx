import  React, {useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import { Box, Modal,Paper  } from "@mui/material";
import StockModal from "./stockModal";
export default function StockCard({ data, modalTrigger }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Card >
      <CardMedia
        component="img"
        height="140"
        />
      <CardContent  style={{"height": "200px"}}> 
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
         {data.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpenModal} >MORE INFO</Button>
      </CardActions> 
      <StockModal onClose={handleCloseModal} isOpen={isModalOpen} data={data}/>
    </Card>
  );
}
