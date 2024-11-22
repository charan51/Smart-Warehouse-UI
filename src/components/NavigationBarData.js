import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colors } from '@mui/material';

export const navigationBarData = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    link: '/',
  },
  {
    title: 'Stocks',
    icon: <ShoppingCartIcon/>,
    link: '/Stocks',
  },
  {
    title: 'Order Status',
    icon: <ShoppingCartIcon />,
    link: '/OrderStatus',
  },
  {
    title: 'Barcode',
    icon: <DocumentScannerIcon />,
    link: '/barcode',
  },
];