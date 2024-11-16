import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Modal,Paper  } from "@mui/material";
import Grid from '@mui/material/Grid2';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function StockModal({ data, handelOpen, onClose, isOpen }) {

  const cardData = [
    {
      title: data.stock,
      content: "Available",
      secondaryTitle: "Stock Count:",
    },
    {
      title: data["warehouse.name"],
      content: data["warehouse.address"],
      secondaryTitle: "Warehouse Details : ",
    },
    {
      title: data["supplier.name"],
      content: data["supplier.address"],
      secondaryTitle: "Supplier Details : ",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setOpen(true);
  },[handelOpen])
  return (
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card}>
              <Paper elevation={3} style={{ padding: "16px", backgroundColor: "#ffffff" }}>
                <Typography variant="h5">{card.secondaryTitle}</Typography>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2">{card.content}</Typography>
              </Paper>
            </Grid>
          ))}
        </Box>
      </Modal>
  );
}
