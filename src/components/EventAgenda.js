import React, { useState, useEffect } from 'react';
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
import {AppContext} from '../contexts/AppContext';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import { useTranslation } from 'react-i18next';
import TimezoneSelect from 'react-timezone-select';
import { utcToZonedTime  } from 'date-fns-tz';
import format from 'date-fns/format';

// localization
import { enUS } from 'date-fns/locale';
import de from 'date-fns/locale/de';
import enGB from 'date-fns/locale/en-GB';
import zhCN from 'date-fns/locale/zh-CN';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import { TextField } from '@mui/material';
// import { Description } from '@mui/icons-material';
// import { parse } from 'date-fns';

interface Column {
    // id: 'eventID' | 'startTime' | 'endTime' | 'event' | 'delete' ;
    // id: 'startTime' | 'endTime' | 'event';
    id: 'startTime' | 'endTime' | 'event';
    label: string;
    minWidth?: number;
    align?: 'right';
  }

const columns = [
    // { id: 'eventID', label: 'Event ID', minWidth: 80 },
    { id: 'convertedStartTime', label: 'EVENT_AGENDA.FILEDS.FROM', minWidth: 220 },
    { id: 'convertedEndTime', label: 'EVENT_AGENDA.FILEDS.TO', minWidth: 220 },
    {
      id: 'description',
      label: 'EVENT_AGENDA.FILEDS.EVENT',
      minWidth: 380,
    }
];

// localization
const locales = { 'en-us': enUS, 'en-gb': enGB, 'zh-cn': zhCN, 'de': de };


// const locales = { 'en-us': undefined, 'en-gb': enGB, 'zh-cn': zhCN, de };
// type LocaleKey = keyof typeof locales;

export default function EventAgenda(props) {
    
        const [selectedTimezone, setSelectedTimezone] = useState({});
        // const [locale, setLocale] = React.useState<LocaleKey>('en-us');
        const [locale, setLocale] = React.useState("en-us");
        
        const { t, i18n } = useTranslation();

        const { events } = React.useContext(AppContext);
        const { setEvents } = React.useContext(AppContext);
        const {lang, setlang} = React.useContext(AppContext);

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

        const [event, setEvent] = useState();
        const [selectedEventId, setSelectedEventId] = useState();
        const [eventIdforDelete, setEventIdforDelete] = useState();


        useEffect(() => {
            handleChangeTimeZone();
            }, [selectedTimezone]
        );

        useEffect(() => {
            handleChangeTimeZone();
        }, [locale]
        );

        // useEffect(() => {
        //     console.log('Default/ Selected Timezone:');
        //     console.log({selectedTimezone});
        // })

        const handleDeleteEventClick = (eventIdforDelete) => {
            const selectedEvent = events.find(
                (e) => e.eventID === eventIdforDelete
            );
            setEventIdforDelete(eventIdforDelete);
            console.log(eventIdforDelete);
            DeleteEvent(selectedEvent);
        }

        const onSuccess = (data) => {
            console.log('Fetched Events Successfully!');

            if (data.data.length > 0) {
                setEvents(data.data);

                setEvents((events) => {
                    console.log(events);
                    handleChangeTimeZone();
                })
            }
        };

        const onError = (error) => {
            console.log(error)
        };

        const { data, isError, error} = useGetAllEvents(onSuccess, onError);

        // **************Delete Event*****************

        const onSuccessDelete = (data) => {
            console.log(data);
            setEvents(events.filter(e => e.eventID !== data.data.eventID));
        }

        const onErrorDelete = (error) => {
            console.log(error);
        }

        const {mutate : DeleteEvent} = useDeleteEvent(onSuccessDelete,onErrorDelete);

        // Localization
        const handleLangChange = (event) => {
            i18n.changeLanguage(event.target.value);
            setlang(event.target.value);
        }

        const dateConvertor = (datetime) => {
            const date = new Date(datetime);
            const timeZone = selectedTimezone.value;
            const zonedDate = utcToZonedTime(date, timeZone);

            console.log(zonedDate);

            // const pattern = 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)'
            const pattern = "yyyy-M-d HH:mm"
            const output = format(zonedDate, pattern, { timeZone: selectedTimezone.value })

            // console.log(format(zonedDate, 'd.M.yyyy HH:mm:ss.SSS \'GMT\' XXX (z)', { timeZone: selectedTimezone.value }));
            return output;
        }
        
        const handleChangeTimeZone = () => {

            console.log(events);
            var localeVal = getLocaleValue();
            console.log(localeVal);

            const convertedEvents =
                events.map((e) => {
                    const start = dateConvertor(e.startTime);
                    const ends = dateConvertor(e.endTime);

                    return {...e, 
                        convertedStartTime : format(new Date(start), "Pp", {
                            locale: localeVal
                        }) ,
                        convertedEndTime : format(new Date(ends), "Pp", {
                            locale: localeVal
                        })
                    }
                }
            )
            console.log(convertedEvents);
            setEvents(convertedEvents);
            console.log(events);
        }

        const getLocaleValue = () => {
            const localeValueCheck = {locale};
            console.log(localeValueCheck.locale);
                    
            if (localeValueCheck) {
                        var localeVal;
                        console.log(localeValueCheck.locale);

                        if (localeValueCheck.locale == "en-us")
                            localeVal = enUS
                        if (localeValueCheck.locale == "en-gb")
                            localeVal = enGB
                        if (localeValueCheck.locale == "zh-cn")
                            localeVal = zhCN
                        if (localeValueCheck.locale == "de")
                            localeVal = de
                    }
            else{
                localeVal = enUS;
            }

                    console.log(localeVal);
                    return localeVal;
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
            <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
            elevation={5}
            >
            <div>
            <TableContainer sx={{ maxHeight: 440 }}>
            <table stickyHeader aria-label="sticky table">
                <TableHead>
                <TableRow>
                    <TableCell align="left" colSpan={1}>
                    <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Preferred Language
                        </InputLabel>
                        <NativeSelect
                        defaultValue={'en'}
                        inputProps={{
                            name: 'PreferredLanguage',
                            id: 'uncontrolled-native',
                        }}
                        onChange= {handleLangChange}
                        >
                        <option value={'en'}>EN </option>
                        <option value={'fr'}>FR</option>
                        <option value={'ja'}>JP</option>
                        </NativeSelect>
                    </FormControl>
                    </TableCell>
                    <TableCell>
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={locales[locale]}
                        >
                        <Stack spacing={2} sx={{ width: 250 }}>
                            <ToggleButtonGroup
                            value={locale}
                            exclusive
                            fullWidth
                            size="small"
                            onChange={(x, newLocale) => {
                                setLocale(newLocale);
                            }}
                            >
                            {Object.keys(locales).map((localeItem) => (
                                <ToggleButton key={localeItem} value={localeItem}>
                                {localeItem}
                                </ToggleButton>
                            ))}
                            </ToggleButtonGroup>
                        </Stack>
                        </LocalizationProvider>
                    </TableCell>
                    <TableCell align="left" colSpan={1}>
                    <blockquote>Select your TimeZone</blockquote>
                    <div className="select-wrapper">
                        <TimezoneSelect
                        value={selectedTimezone}
                        onChange={(newTimeZone) => {
                            setSelectedTimezone(newTimeZone);
                            // console.log(selectedTimezone);
                        }}
                        />
                    </div>
                </TableCell>

                <TableCell align="right" colSpan={1}>
                        <AddNewEvent convertFormatDate = {handleChangeTimeZone}/>
                    </TableCell>
                </TableRow>
                <TableRow>
                     {columns.map((column) => (
                     <TableCell
                         key={column.id}
                         align={column.align}
                         style={{ top: 57, minWidth: column.minWidth }}
                     >
                         {t(column.label)}
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
                                <AddNewEvent passEvent={event} convertFormatDate={handleChangeTimeZone}/>
                                <Button id={event.eventID} onClick={() => {
                                        handleDeleteEventClick(event.eventID);
                                        console.log(event.eventID);
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
