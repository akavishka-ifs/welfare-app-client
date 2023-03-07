import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";


import { useGetAllVendors, useAddVendor, useUpdateVendor, useDeleteVendor } from "../hooks/useVendorsData";
import { useGetAllCategoryItems } from "../hooks/useBudgetCategoryItemData";
import { useTranslation } from 'react-i18next';
import { useGetAllTransactions, useAddTransactions } from "../hooks/useTransactionsData";

const columns = [
  { field: "id", headerName: "TransactionId", width: 100 },
  {
    field: "vendorname",
    headerName: "Vendor Name",
    width: 150,
    editable: false,
  },
  {
    field: "expensename",
    headerName: "Expense Name",
    width: 150,
    editable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 100,
    editable: false,
  },
  {
    field: "paymentdate",
    headerName: "Payment Date",
    type: "date",
    width: 100,
    editable: false,
  },
];

export default function Transactions() {

  const { t, i18n } = useTranslation();

  const [vendors, setVendors] = useState([]);
  const [balanceRemaining, setbalanceRemaining] = useState();
  const [budgetCategoryItems, setbudgetCategoryItems] = useState([]);
  const [Transactions, setTransactions] = useState([]);
  const [reshapedTransactions, setreshapedTransactions] = useState([]);
  const [Transaction, setTransaction] = useState();
  const [selectedOption, setSelectedOption] = useState("none");
  const [lang, setlang] = useState('EN');

  const onSuccessVendors = (data) => {
    console.log('Fetched Vendors Successfully!');
    if (data.data.length > 0) {
      setVendors(data.data);
    }
    
  };

  
  const onErrorVendors = (error) => {
    console.log(error);
  }

  const onSuccessItems = (data) => {
    console.log('Fetched Budget Items Successfully!');
    if (data.data.length > 0) {
      setbudgetCategoryItems(data.data);
    }
  };

  
  const onErrorItems = (error) => {
    console.log(error);
  }

  const onSuccess = (data) => {
    console.log('Fetched Transactions Successfully!');
    if (data.data.length > 0) {

      setTransactions(data.data);
      const reshapedTrns = Transactions.map((t) => {
        return({
          id : t.transactionID,
          amount : t.transactionAmount,
          paymentdate : t.transactionDate,
          expensename : t.budgetItemName,
          vendorname : t.vendorName,
        });
      });
      setreshapedTransactions(reshapedTrns);    
    }
    
};

  const onError = (error) => {
    console.log(error)
  };

  const {data1, isError1, error1} = useGetAllVendors(onSuccessVendors,onErrorVendors);
  const {data2, isError2, error2} = useGetAllCategoryItems(onSuccessItems,onErrorItems);
  const { data, isError, error} = useGetAllTransactions(onSuccess, onError);

  const onSuccessAdd = (data) => {
    if (data.data) {
      setTransaction(data.data);
      setreshapedTransactions([...reshapedTransactions , {
        id : data.data.transactionID,
        expensename : data.data.budgetItemName,
        amount : data.data.transactionAmount,
        vendorname : data.data.vendorName,
        paymentdate : data.data.transactionDate
      }])
    }
  }

  const onErrorAdd = (error) => {
    console.log(error);
  }



  //isFetchhing and refetch callback handlers can be used to bind loading of queries to click events

  const {mutate : AddTransactions} = useAddTransactions(onSuccessAdd,onErrorAdd);
  const {mutate : fetchTransactions} = useGetAllTransactions(onSuccess,onError);

  const onValueChange = (e) => {
    if(e.target.name === "vendorId")
    {
      setSelectedOption(e.target.value);
      vendors.map(v => {
        if(v.name === e.target.value){
          e.target.value = v.vendorId;
          setbalanceRemaining(v.BalancePayment);
        }
      })
    }
    if(e.target.name === "budgetItemId")
    {
      budgetCategoryItems.map(v => {
        if(v.budgetItemName === e.target.value){
          e.target.value = v.budgetItemId;
        }
      })
    }
    setTransaction({ ...Transaction, [e.target.name]: e.target.value });
  };

  const handleAddTransactionClick = () => {
    let vendorname;
    let itemname;

    vendors.map(v => {
      if(v.vendorId === Transaction.vendorId){
        vendorname = v.name;
      }
    }) 

    budgetCategoryItems.map(v => {
      if(v.budgetItemId === Transaction.budgetItemId){
        itemname = v.budgetItemName;
      }
    }) 

    const newTransaction = {
      VendorId : Transaction.vendorId,
      BudgetItemId : Transaction.budgetItemId,
      TransactionAmount : Transaction.TransactionAmount,
      TransactionDate : new Date(),
      VendorName : vendorname,
      BudgetItemName :  itemname
    }
    AddTransactions(newTransaction);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 1000,
          marginBottom: 3,
        },
      }}
    >
      <Grid item xs={16}>
        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column" }}
          elevation={5}
        >
          <Grid container spacing={2} sx={{ p: 2 }} columns={12}>
            <Grid item xs={12} sx={{ border: 0, p: 0 }}>
              <Stack direction="row" spacing={2} sx={{ margin: 0 }}>
                <Button variant="outlined" onClick={handleAddTransactionClick}>+Add</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} sx={{ border: 0, p: 2 }}>
              <Box component="form">
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="budgetcategoryitemselectlabel">
                    Budget Category Item
                  </InputLabel>
                  <Select
                    labelId="budgetcategoryitemselectlabel"
                    id="budgetcategoryitemselect"
                    label="Budget Category Item"
                    name="budgetItemId"
                    onChange={(e) => onValueChange(e)}
                  >
                  {budgetCategoryItems?.map(option => {
                    return (
                      <MenuItem value={option.budgetItemName}>
                        {option.budgetItemName}
                      </MenuItem>
                    );
                  })}
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="vendorselectlabel">Vendor</InputLabel>
                  <Select
                    labelId="vendorselectlabel"
                    id="vendorselect"
                    label="Vendor"
                    name="vendorId"
                    value={selectedOption}
                    onChange={(e) => onValueChange(e)}
                  >
                            {vendors?.map(option => {
          return (
            <MenuItem value={option.name}>
              {option.name}
            </MenuItem>
          );
      })}
                  </Select>
                </FormControl>
                <TextField
                  sx={{ margin: 2 }}
                  id="balance"
                  InputProps={{
                    readOnly: true,
                  }}
                  label="Balance Remaining"
                  variant="outlined"
                  value={balanceRemaining}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="amount"
                  name="TransactionAmount"
                  InputProps={{
                    readOnly: false,
                  }}
                  label="Payment Amount"
                  variant="outlined"
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  id="fromdate"
                  label="From Date"
                  type="date"
                  defaultValue="2022-10-06"
                  sx={{ margin: 2, width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="todate"
                  label="To Date"
                  type="date"
                  defaultValue="2022-10-06"
                  sx={{ margin: 2, width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Box sx={{ height: 400, width: "100%" }}>
                  <DataGrid
                    rows={reshapedTransactions}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                  />
                </Box>
                <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
                  <Button variant="outlined">Print</Button>
                  <Button variant="outlined">Filter</Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}
