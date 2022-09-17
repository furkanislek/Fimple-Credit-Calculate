import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { PaymentPlanContext } from "../App";
import "../App.css"

const paymentTableHeaders = [
  "Taksit No",
  "Taksit Tutarı",
  "Ana Para",
  "Kalan Ana Para",
  "Kar Tutarı",
  "KKDF",
  "BSMV",
]; //tablo header'ları

const PaymentPlan = () => {
  const [open, setOpen] = useState(false); //popup open close
  const paymentPlanInfo = useContext(PaymentPlanContext); // ödeme bilgilerini içeren context.

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    paymentPlanInfo !== null && (
      <div>
        <Button id="paymentBtn" variant="outlined" onClick={handleClickOpen}>
          Ödeme Planını Göster
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth={"lg"}
          fullWidth
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            Ödeme Planı
          </DialogTitle>
          <DialogContent dividers>
            <table className="tableForm">
              <thead className="tableThead">
                <tr key={Math.random()}>
                  {paymentTableHeaders.map((header, index) => {
                    return <th key={index}>{header}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {paymentPlanInfo.bsmvAmounts.map((bsmvAmount, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td key={Math.random()}>{index + 1}</td>
                        <td key={Math.random()}>
                          {paymentPlanInfo.installmentAmount}
                        </td>
                        <td key={Math.random()}>
                          {paymentPlanInfo.monthlyCreditAmountsWithoutTaxAndInterest[
                            index
                          ].toFixed(2)}
                        </td>
                        <td key={Math.random()}>
                          {paymentPlanInfo.monthlyCreditAmountsAfterPayment[
                            index
                          ].toFixed(2)}
                        </td>
                        <td key={Math.random()}>
                          {paymentPlanInfo.interestAmounts[index].toFixed(2)}
                        </td>
                        <td key={Math.random()}>
                          {paymentPlanInfo.kkdfAmounts[index].toFixed(2)}
                        </td>
                        <td key={Math.random()}>
                          {paymentPlanInfo.bsmvAmounts[index].toFixed(2)}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </DialogContent>
          <DialogActions>
            <Button
              style={{
                color: "#622b34",
                fontWeight: "600",
                boxShadow: "10px",
                backgroundColor: "rgb(248, 218, 218)",
                borderColor: "#421e24",
                borderRadius: "10px",
                border: "1px solid ",
              }}
              autoFocus
              onClick={handleClose}
            >
              Kapat
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  );
};

export { PaymentPlan };
