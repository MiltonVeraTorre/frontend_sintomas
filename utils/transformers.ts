import { UserEventInt } from "@/types/AppTypes";


export function toCalendarEvent(data: UserEventInt[]){
    return data.map((event) => ({
        title: "Registro de datos",
        start: event.fecha,
        end: event.fecha,
        allDay: true,
        resource:data
    }))
}