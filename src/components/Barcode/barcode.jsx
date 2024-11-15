import React, { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { searchBarcode } from "../../redux/actions/product";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid green",
  boxShadow: 24,
  p: 4,
};

function Barcode() {
  const [loading, setLoading] = React.useState(false);
  const [productData, setProductData] = React.useState({
    name: "",
    barcode: "",
    desc: "",
    category: "",
    Supplier: "",
    price:"",
  })
  const [data, setData] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  
  useEffect(() => {
    if (product.loading) {
      setLoading(true);
    } else {
      const data = product?.product?.data?.length > 0 && product?.product.data[0];
      setProductData({
        name: data.Product,
        barcode: data.Barcode,
        desc: data.Description,
        category: data.Category,
        supplier:data.Supplier,
        price:data.Price,
      })
      setLoading(false);
    }
  }, [product]);
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid size={12} justifyContent="center" alignItems="center">
        <h2 style={{ marginTop: "20px", color: "white", textAlign: "center" }}>
          Scan here!
        </h2>
      </Grid>
      <Grid size={6}>
        <CardMedia alt="green iguana">
          <BarcodeScannerComponent
            onUpdate={(err, result) => {
              if (result && result.text) {
                handleOpen();
                setData(result.text);
                dispatch(searchBarcode(result.text));
              } else {
                console.log("not found");
              }
            }}
          />
        </CardMedia>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Backdrop
              sx={(theme) => ({
                color: "#fff",
                zIndex: theme.zIndex.drawer + 1,
              })}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {productData.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             {productData.desc}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             {productData.price}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             {productData.supplier}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             {productData.category}
            </Typography>
            <Button color="primary" onClick={handleClose}>Cancel</Button>
            <Button
              variant="contained"
              onClick={() => handleViewDetails(data)}
              color="success"
            >
              View
            </Button>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  );
}

export default Barcode;
