import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Stack from "@mui/material/Stack";
import { useAddEvent, useUpdateEvent } from "../hooks/useAgendaData";
import EditIcon from '@mui/icons-material/Edit';

const style = {
  position: 'absolute',
  top: '50%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  width: 650,
};

export default function AddNewEvent({passEvent}) {
    // For Modal popup
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {format} = require('date-fns');

    const [startTime, setStartTime] = React.useState(Date());
    const [endTime, setEndTime] = React.useState(Date());
    const [desc, setDesc] = React.useState('');

    const [events, setEvents] = React.useState([]);
    const [event, setEvent] = useState();
    const [selectedEventId, setSelectedEventId] = useState();

    const [opType, setOpType] = useState();
    const [eventIDForUpdate, setEventIDForUpdate] = useState();

useEffect(() => {
  if (passEvent){
    setOpType("update");
  }
  else
    setOpType("add");
});


const handleSubmit = (event) => {
  event.preventDefault();
}

// **************Add/ Update an Event*********************
const handleUpdateEventClick = () => {
  const saveEvent = {
    tripID : 1,
    startTime: startTime,
    endTime: endTime,
    description: desc,
    eventID: eventIDForUpdate
  }
  UpdateEvent(saveEvent);
  setOpen(false);
}

const handleAddEventClick = () => {
    const newEvent = {
        tripID : 1,
        startTime: startTime,
        endTime: endTime,
        description: desc
    }
    AddEvent(newEvent);
    setOpen(false);
}

const onSuccessAdd = (data) => {
    if (data.data) {
      setEvents(data.data);
      events.push(data.data);
      setSelectedEventId(data.data.eventID);
      setOpen(false);
    }
}

const onErrorAdd = (error) => {
    console.log(error);
}

const onSuccessUpdate = (data) => {}
const onErrorUpdate = (data) => {}

const {mutate : AddEvent} = useAddEvent(onSuccessAdd,onErrorAdd);
const {mutate : UpdateEvent} = useUpdateEvent(onSuccessUpdate,onErrorUpdate);


// ****************************************************

if (opType === "add"){
  var butType = <Button aria-label="add" onClick={handleOpen}> <AddIcon /> </Button>
}
else{
  var butType = <Button aria-label="update" onClick={() => {
    handleOpen();
    setStartTime(passEvent.startTime);
    setEndTime(passEvent.endTime);
    setDesc(passEvent.description);
    setEventIDForUpdate(passEvent.eventID);
  }}> 
  <EditIcon /> </Button>
}

if (opType ==="add"){
  var butDecide = <Button variant="contained" onClick={handleAddEventClick}>+ Add</Button>
}
else{
  var butDecide = <Button variant="contained" onClick={handleUpdateEventClick}> Save </Button>
}

return (
    <div>
      { butType }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" onSubmit={handleSubmit} sx={style}>
        {/* <Box component="form" sx={style}>  */}
            <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            elevation={5}
            >
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Start Date Time"
                            id = "startTime"
                            name = "startTime"
                            value={startTime}
                            onChange={(newStartTime) => {
                                setStartTime(`${format(newStartTime, "yyyy-MM-dd'T'HH:MM:SS.SSS'Z'")}`);
                                console.log(startTime);
                            }}
                    />
                    </LocalizationProvider>
                    <br/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        id = "endTime"
                        name = "endTime"
                        label="End Date Time"
                        value={endTime}
                        onChange={(newEndTime) => {
                            setEndTime(`${format(newEndTime, "yyyy-MM-dd'T'HH:MM:SS.SSS'Z'")}`);
                            console.log(endTime);
                        }}
                    />
                    </LocalizationProvider>
                    <br/>
                    <TextField
                        sx={{ margin: 0.1 }}
                        id="eventDesc"
                        label="Event Description"
                        variant="outlined"
                        name="eventDesc"
                        value = {desc}
                        InputLabelProps={{ shrink: event && true }}
                        onChange={(e) => {
                            setDesc(e.target.value);
                            console.log(desc);
                        }}
                    />
                    <br/>

                    <Stack direction="row" spacing={2} sx={{ margin: 0 }}>
                        { butDecide }
                    </Stack>
            </Paper>
        </Box>
      </Modal>
    </div>
  );
}
