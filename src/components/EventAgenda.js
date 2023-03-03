import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddNewEvent from './AddNewEvent';
import Box from '@mui/material/Box';
import { useGetAllEvents, useDeleteEvent } from "../hooks/useAgendaData";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Button from '@mui/material/Button';
const {format} = require('date-fns');

interface Column {
    // id: 'eventID' | 'startTime' | 'endTime' | 'event' | 'delete' ;
    id: 'startTime' | 'endTime' | 'event';
    label: string;
    minWidth?: number;
    align?: 'right';
  }

const columns: Column[] = [
    // { id: 'eventID', label: 'Event ID', minWidth: 80 },
    { id: 'startTime', label: 'Starts', minWidth: 220 },
    { id: 'endTime', label: 'Ends', minWidth: 220 },
    {
      id: 'description',
      label: 'Event',
      minWidth: 380,
    }
];

export default function EventAgenda(eveID) {
        const [page, setPage] = React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);

        const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        };

        const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        }

        // ***************Fetch All Events*************************

        const [events, setEvents] = React.useState([]);
        const [event, setEvent] = useState();
        const [selectedEventId, setSelectedEventId] = useState();

        const handleDeleteEventClick = (selectedEventId) => {
            const selectedEvent = events.find(
                (e) => e.eventID === selectedEventId
            );
            DeleteEvent(selectedEvent);
        }

        const onSuccess = (data) => {
            console.log('Fetched Events Successfully!');
            if (data.data.length > 0) {
                setEvents(data.data);
                if (events.length > 0) {
                    setEvent(events[0]);
                    setSelectedEventId(events[0].eventID);
                }

                events.map((event) => {
                    event.startTime = (format(new Date(event.startTime), 'p, dd/MM/yyyy'));
                    event.endTime = (format(new Date(event.endTime), 'p, dd/MM/yyyy'));

                    setEvent(event);
                    console.log(event);
                })
            }
        };

        const onError = (error) => {
            console.log(error)
        };

        const { data, isError, error} = useGetAllEvents(onSuccess, onError);

        // **************Delete Event*****************

        const onSuccessDelete = () => {
            events.pop(event);
            if (events.length > 0) {
              setEvent(events);
              setSelectedEventId(event.eventID);
            }
        }

        const onErrorDelete = (error) => {
            console.log(error);
        }

        const {mutate : DeleteEvent} = useDeleteEvent(onSuccessDelete,onErrorDelete);

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
            <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            elevation={5}
            >
            <div>
            <TableContainer sx={{ maxHeight: 440 }}>
            <table stickyHeader aria-label="sticky table">
                <TableHead>
                <TableRow>
                    <TableCell align="left" colSpan={3}></TableCell>
                    <TableCell align="right" colSpan={1}>
                        <AddNewEvent/>
                    </TableCell>
                </TableRow>
                <TableRow>
                     {columns.map((column) => (
                     <TableCell
                         key={column.id}
                         align={column.align}
                         style={{ top: 57, minWidth: column.minWidth }}
                     >
                         {column.label}
                     </TableCell>
                     ))}
                 </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
                <tbody>
                {
                    events
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((event) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={event.eventID}>
                                {columns.map((column) => {
                                    const value = event[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {value}
                                        </TableCell>
                                    );
                                })}
                                <AddNewEvent passEvent={event}/>
                                <Button id={event.eventID} onClick={() => {
                                        handleDeleteEventClick(event.eventID);
                                    }}>
                                    <DeleteRoundedIcon/>
                                </Button>
                            </TableRow>
                        )})
                }
                </tbody>
            </table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={events.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </div>
            </Paper>
            </Box>
        )};
