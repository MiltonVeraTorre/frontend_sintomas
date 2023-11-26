"use client"

import {useState,useEffect} from 'react'

import "moment/locale/es";
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment';
import CustomHeader from './RegistersCalendar/CustomHeader';
import CustomToolbar from './RegistersCalendar/CustomToolbar';
moment.locale("es");


// Funcion que crea el localizador que es necesario para el calendario
const localizer = momentLocalizer(moment);

// Personalización al español
const messages = {
    today: "Hoy",
    back: "Atrás",
    next: "Siguiente",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
  };

export default function RegistersCalendar() {
 
  return (
    <div className='h-70vh mx-4'>
      
        <Calendar
        localizer={localizer}
        events={[]}
        startAccessor={"start"}
        endAccessor={"end"}
        style={{ height: "100%" }}
        defaultView="week"
        views={["week", "day","month"]}
        messages={messages}

        //onSelectEvent={(e) => handleSelectedEvent(e)}

        min={moment("07:00:00", "HH:mm:ss").toDate()} // 7 de la mañana
        max={moment("22:00:00", "HH:mm:ss").toDate()} // 10 de la noche
        components={{
          header: CustomHeader, // Header de semana personalizado
          toolbar: CustomToolbar,

        }}
        
      />
      
      
    </div>
  )
}
