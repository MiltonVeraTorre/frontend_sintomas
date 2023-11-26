"use client";

import moment from "moment";
import React from "react";

import {

  HeaderProps,

} from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";

import "moment/locale/es";

moment.locale("es");

export default function CustomHeader({ date, label }:HeaderProps){
    const momentDate = moment(date);
    return (
      <div className="flex flex-col items-center h-28">
        <div className="uppercase">{momentDate.format("ddd")}</div>
        <div className="font-bold text-2xl">{momentDate.format("DD")}</div>
      </div>
    );
  };