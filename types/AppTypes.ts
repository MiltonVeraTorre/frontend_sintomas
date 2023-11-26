import { Antecedente, Nota, Registro } from "./ModelTypes"

export interface UserEventInt{
    registrosCuantitativos : UserGraphData[]
    registrosSintomas : UserGraphData[]
}
export interface UserGraphData{
    nombre: string
    registros: Registro[]
}
export interface GraficaData{
    label:string
    value:number
}