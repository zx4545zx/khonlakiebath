import * as React from 'react';
import { useCalStore, useDialogStore } from "../store";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CustomDialog from "./CustomDialog";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function ButtonAppBar() {
  const promptpay = useCalStore((state) => state.promptpay);
  const handleClickOpen = useDialogStore((state) => state.handleClickOpen);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <CurrencyBitcoinIcon sx={{mr: "1rem"}} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              คนละกี่บาท
            </Typography>

            <Button
              color="inherit"
              onClick={handleClickOpen}
              startIcon={<AccountBalanceWalletIcon />}
              >
              { promptpay != null ? promptpay : "เพิ่มพร้อมเพย์" }
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <CustomDialog />
      </div>
    </div>
  );
}
