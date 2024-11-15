import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Modal,Paper  } from "@mui/material";
import Grid from '@mui/material/Grid2';
export default function StockModal({ data, handelOpen }) {

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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
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
