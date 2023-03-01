import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function VendorListItem(props) {
  return (
    <div>
        <ListItem disablePadding key={props.vendorId}>
          <ListItemButton
            id={props.vendorId}
            onClick={() => props.selectedVendor(props.vendorId)}
          >
            <ListItemText primary={props.vendorName} />
          </ListItemButton>
        </ListItem>
      
    </div>
  );
}
