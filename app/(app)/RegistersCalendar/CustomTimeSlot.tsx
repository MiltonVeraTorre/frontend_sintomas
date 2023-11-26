"use client";
import moment from "moment";
moment.locale("es");


import { } from 'react-big-calendar';

interface Props{
  value:Date

}

export default function CustomTimeSlot({children}:any){
   return (
    <div>
      {children}
    </div>
   )
  //   const formattedTime = moment(value).format('H:mm');
  // return (
  //   <div className="">
  //     {formattedTime}
  //   </div>
  // );

  return <></>
}