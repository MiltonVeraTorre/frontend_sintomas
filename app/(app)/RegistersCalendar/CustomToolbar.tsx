"use client";

import moment from "moment";
import React from "react";

import { ToolbarProps } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import "moment/locale/es";
import { useDispatch } from "react-redux";


moment.locale("es");

export default function CustomToolbar({
  onNavigate,
  onView,
  label,
}: ToolbarProps) {

  //const dispatch = useDispatch()

  return (
    <div className="flex justify-between items-center  py-4">
      
      <span className="text-xl capitalize">{label}</span>
      <div>
        <button
          className="bg-gray-300 px-2 py-1 mr-2 rounded-md"
          onClick={() => onNavigate("PREV")}
        >
          Anterior
        </button>
        <button
          className="ring-blue-500 ring-1 text-blue-500 font-bold px-2 py-1 rounded-md"
          onClick={() => onNavigate("TODAY")}
        >
          Hoy
        </button>
        <button
          className="bg-gray-300 px-2 py-1 ml-2 rounded-md"
          onClick={() => onNavigate("NEXT")}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
