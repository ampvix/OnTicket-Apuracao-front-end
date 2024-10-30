import { useState} from "react";
import FullCalendar from "@fullcalendar/react";
import ptBR from "@fullcalendar/core/locales/pt-br";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/header/header";
import {tokens} from "../../theme";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected: any ) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    }

    const handleEventClick = (selected: any) => {
        if ( window.confirm(`Are you sure you want to delete this event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    }

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box component="div" flex="1 1 20%" sx={{ backgroundColor: colors.primary[400], p: "15px", borderRadius: "4px" }}>
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event: { id: string; title: string; start: Date }) => (
                            <ListItem key={event.id} sx={{ backgroundColor: colors.greenAccent[500], margin: "10px", borderRadius: "2px" }}>
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric"
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin]}
                        headerToolbar={{
                            left: "prev, next today",
                            center: "title",
                            right: "dayGridMonth, timeGridWeek,timeGridDay, listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={events => setCurrentEvents(events)}
                        initialEvents={[
                            {id: "1234", title: "All Day Event", start: "2024-01-01"},
                            {id: "1235", title: "Timed Event"  , start: "2024-01-07"},
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
