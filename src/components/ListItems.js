import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PaidIcon from '@mui/icons-material/Paid';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Budget Management
    </ListSubheader>
    <Link to="/lookups">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="LookUps" />
      </ListItemButton>
    </Link>
    <Link to="/vendors">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Vendors" />
      </ListItemButton>
    </Link>
    <Link to="/documents">
      <ListItemButton>
        <ListItemIcon>
          <DocumentScannerIcon />
        </ListItemIcon>
        <ListItemText primary="Documents" />
      </ListItemButton>
    </Link>
    <Link to="/transactions">
      <ListItemButton>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
    </Link>
    <Link to="/agenda">
      <ListItemButton>
        <ListItemIcon>
          <ViewAgendaIcon />
        </ListItemIcon>
        <ListItemText primary="Agenda" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Room Allocation
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
