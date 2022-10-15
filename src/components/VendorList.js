import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function VendorList(props) {
  const vendorList = [
    {
      balance: "1200",
      budgetcategoryitemselect: "Snacks for the Bus",
      contactnumber: "0112899099",
      contactpersonname: "Mr.Anurudda",
      designation: "Manager",
      email: "anna@gmail.com",
      paidtotal: "",
      totalcost: "3000",
      vendorname: "FAB",
      vendorId: 1,
      vendorselected: "on",
    },
    {
      balance: "50000",
      budgetcategoryitemselect: "Bus",
      contactnumber: "0112899094",
      contactpersonname: "Mr.Anuruddika",
      designation: "Manager",
      email: "annaaa@gmail.com",
      paidtotal: "50000",
      totalcost: "100000",
      vendorname: "D.S.Gunasekara",
      vendorId: 2,
      vendorselected: "on",
    },
    {
      balance: "",
      budgetcategoryitemselect: "Liquor",
      contactnumber: "0112897099",
      contactpersonname: "Mr.Mewan",
      designation: "Manager",
      email: "anna9099@gmail.com",
      paidtotal: "",
      totalcost: "10000",
      vendorname: "Ariyapala Wine Stores",
      vendorId: 3,
      vendorselected: "on",
    },
    {
      balance: "",
      budgetcategoryitemselect: "Room Reservation",
      contactnumber: "0112199099",
      contactpersonname: "Mr.Janik",
      designation: "Asst-Manager",
      email: "anna2ew2w@gmail.com",
      paidtotal: "",
      totalcost: "100000",
      vendorname: "Shangrilla Hambantota",
      vendorId: 4,
      vendorselected: "on",
    },
  ];
  const [vendors, setVendors] = useState(vendorList);
  const selectVendor = (vendorId) => {
    const selectedVendor = vendors.filter(v => v.vendorId === vendorId)[0];
    props.setVendor(selectedVendor);
  };
  return (
    <div>
      {vendors.map((v) => (
        <ListItem disablePadding key={v.vendorId}>
          <ListItemButton
            id={v.vendorId}
            onClick={() => selectVendor(v.vendorId)}
          >
            <ListItemText primary={v.vendorname} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
}
