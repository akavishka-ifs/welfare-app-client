import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from '@mui/material/FormHelperText';


import VendorListItem from "./VendorList";
import { useTranslation } from 'react-i18next';
import { useGetAllVendors, useAddVendor, useUpdateVendor, useDeleteVendor } from "../hooks/useVendorsData";
import { useGetAllCategoryItems } from "../hooks/useBudgetCategoryItemData";

export default function Vendors() {
  const { t, i18n } = useTranslation();

  const [vendors, setVendors] = useState([]);
  const [vendor, setVendor] = useState();
  const [selectedVendorId, setselectedVendorId] = useState();
  const [categoryItems, setcategoryItems] = useState([]);
  const [selectedCategoryItem , setselectedCategoryItem] = useState();
  const [lang, setlang] = useState('EN');

  const onSuccessLoadCategoryItems = (data) => {
    console.log('Fetched Budget Categories Successfully');  
    console.log(data.data);
    setcategoryItems(data.data);
  }

  const onErrorLoadCategoryItems = (error) => {
    console.log(error);
  }

  const { data : CategoryItemLoadingdata, isError : CategoryItemLoadingisError, error : CategoryItemLoadingError} = useGetAllCategoryItems(onSuccessLoadCategoryItems, onErrorLoadCategoryItems);

  const onSuccess = (data) => {
    console.log('Fetched Vendors Successfully!');
    if (data.data.length > 0) {
      setVendors(data.data);
      setVendor(data.data[0]);
      setselectedVendorId(data.data[0].vendorId);

      /* categoryItems.forEach((c) => {
        if(c.budgetItemId === vendor.budgetCategoryItemId){
          console.log('setting the category Item for the selected vendor');
          setselectedCategoryItem(c.budgetItemName);
        }
      }); */
    }
    console.log('selectedCategoryItem : ', selectedCategoryItem);
  };

  const onError = (error) => {
    console.log(error)
  };

  const { data, isError, error} = useGetAllVendors(onSuccess, onError);

  const onSuccessAdd = (data) => {
    if (data.data) {
      setVendor(data.data);
      vendors.push(data.data);
      setselectedVendorId(data.data.vendorId);
    }

  }

  const onSuccessUpdate = (data) => {
    setVendors(vendors.map(v => {
      if (v.vendorId === data.data.vendorId) {
        return { ...v, balancePayment : data.data.balancePayment,
          budgetCategoryId : data.data.budgetCategoryId,
          budgetCategoryItemId : data.data.budgetCategoryItemId,
          contactName : data.data.contactName,
          email : data.data.email,
          name : data.data.name,
          payedAmount : data.data.payedAmount,
          phone : data.data.phone,
          totalCost : data.data.totalCost,
          vendorSelected : data.data.vendorSelected };

      } else {
        // No changes
        return v;
      }
    }));
    setVendor(data.data);
    setselectedVendorId(data.data.vendorId);
    
    console.log('After getting the updated from DB : ',data.data);
    
  }


  const onSuccessDelete = () => {
    vendors.pop(vendor);
    if (vendors.length > 0) {
      setVendor(vendors[0]);
      setselectedVendorId(vendors[0].vendorId);
    }
  }
  
  const onErrorAdd = (error) => {
    console.log(error);
  }

  const onErrorUpdate = (error) => {
    console.log(error);
  }

  const onErrorDelete = (error) => {
    console.log(error);
  }


  //isFetchhing and refetch callback handlers can be used to bind loading of queries to click events

  const {mutate : AddVendor} = useAddVendor(onSuccessAdd,onErrorAdd);
  const {mutate : UpdateVendor} = useUpdateVendor(onSuccessUpdate,onErrorUpdate);
  const {mutate : DeleteVendor} = useDeleteVendor(onSuccessDelete,onErrorDelete);

  useEffect(() => {
    console.log('selectedCategoryItem : ', selectedCategoryItem);
    const selectedVendor = vendors.filter(
      (v) => v.vendorId === selectedVendorId
    )[0];
    setVendor(selectedVendor);
    
  /*  categoryItems.map((c) => {
      if(c.budgetItemId === vendor.budgetCategoryItemId){
        setselectedCategoryItem(c.budgetItemName);
        console.log('changing to categoryitem to : ',c.budgetItemName);
      }
    });  */

  }, [selectedVendorId]);

  const onValueChange = (e) => {
    /* if(e.target.name === "budgetCategoryItemId"){
      categoryItems.map((v) => {
        if(v.budgetItemName === e.target.value){
          console.log('mapping the correct value : ', v.budgetItemId);
          setVendor({...vendor, budgetCategoryItemId : v.budgetItemId});
          e.target.value = v.budgetItemId;
        }  
      });
    } */
    setVendor({ ...vendor, [e.target.name] : e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Vendor before updating : ',vendor);
    UpdateVendor(vendor);
  };

  const handleLangChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setlang(event.target.value);
  } 
  
  const handleAddVendorClick = () => {
    const newVendor = {
      balancePayment : 0,
      budgetCategoryId : 1,
      budgetCategoryItemId : '',
      contactName : '',
      email : '',
      name : 'Vendor_1',
      payedAmount : 0,
      phone : '',
      totalCost : 0,
      vendorSelected : false
    };

    AddVendor(newVendor);
  }

  const handleDeleteVendorClick = () => {
    DeleteVendor(vendor);
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return vendor && (
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
                <FormControl sx={{ m: 1, }} size="small">
                  <Select
                    value={lang}
                    onChange={handleLangChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    defaultValue={'en'}
                    displayEmpty ={false}
                  >
                    <MenuItem value={'en'}>EN </MenuItem>
                    <MenuItem value={'fr'}>FR</MenuItem>
                    <MenuItem value={'ja'}>JP</MenuItem>
                  </Select>
                <FormHelperText>Preferred Language</FormHelperText>
              </FormControl>
              </Stack>
            </Grid>
            
            <Grid item xs={4} sx={{ border: 0, p: 2 }}>
              <List>
                {vendors.map((v) => (
                  <VendorListItem
                    key = {v.vendorId}
                    selectedVendor={setselectedVendorId}
                    vendorName={v.name}
                    vendorId={v.vendorId}
                  />
                ))}
              </List>
            </Grid>
            <Grid item xs={8} sx={{ border: 0, p: 2 }}>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  sx={{ margin: 2 }}
                  id="vendorname"
                  label={t('VENDORS.FILEDS.NAME')}
                  name="name"
                  variant="outlined"
                  value={vendor && vendor.name}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <FormControl sx={{ m: 2, minWidth: 250 }}>
                  <InputLabel id="budgetCategoryItemIdlabel">
                  {t('VENDORS.FILEDS.BUDGET_CATEGORY_ITEM')}
                  </InputLabel>
                  <Select
                    defaultValue="1"
                    labelId="budgetCategoryItemIdlabel"
                    id="budgetCategoryItemId"
                    label={t('VENDORS.FILEDS.BUDGET_CATEGORY_ITEM')}
                    name="budgetCategoryItemId"
                    onChange={(e) => onValueChange(e)}
                    value = {vendor && vendor.budgetCategoryItemId}
                  >
                  {
                    categoryItems && categoryItems.map((item) => {
                    return (<MenuItem key={item.budgetItemId} value={item.budgetItemName}>{item.budgetItemName}</MenuItem>);
                  })
                  }
                  </Select>
                </FormControl>
                <TextField
                  sx={{ margin: 2 }}
                  id="phone"
                  label={t('VENDORS.FILEDS.HOTLINE')}
                  variant="outlined"
                  name="phone"
                  value={vendor && vendor.phone}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="email"
                  label={t('VENDORS.FILEDS.EMAIL')}
                  variant="outlined"
                  name="email"
                  value={vendor && vendor.email}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="contactName"
                  label={t('VENDORS.FILEDS.CONTACT_PERSON_NAME')}
                  variant="outlined"
                  name="contactName"
                  value={vendor && vendor.contactName}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="totalCost"
                  label={t('VENDORS.FILEDS.TOTAL_COST')}
                  variant="outlined"
                  name="totalCost"
                  value={vendor && vendor.totalCost}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="balancePayment"
                  InputProps={{
                    readOnly: true,
                  }}
                  label={t('VENDORS.FILEDS.REMAINING_BALANCE')}
                  variant="outlined"
                  name="balancePayment"
                  value={vendor && vendor.balancePayment}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <TextField
                  sx={{ margin: 2 }}
                  id="payedAmount"
                  InputProps={{
                    readOnly: true,
                  }}
                  label={t('VENDORS.FILEDS.PAID_TOTAL')}
                  variant="outlined"
                  name="payedAmount"
                  value={vendor && vendor.payedAmount}
                  InputLabelProps={{ shrink: vendor && true }}
                  onChange={(e) => onValueChange(e)}
                />
                <Stack direction="row" spacing={2} sx={{ margin: 2 }}>
                  <Button variant="outlined" onClick={handleAddVendorClick}>+{t('VENDORS.ACTIONS.ADD')}</Button>
                  <Button variant="outlined" type="submit">
                  {t('VENDORS.ACTIONS.SAVE')}
                  </Button>
                  <Button variant="outlined" onClick={handleDeleteVendorClick}>{t('VENDORS.ACTIONS.DELETE')}</Button>
                  
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Box>
  );
}
