import { Antecedente, Nota, Registro } from "./ModelTypes"

export interface UserEventInt{
    fecha:string
    registros: Registro[]
    notas: Nota[]
    antecedentes: Antecedente[]
}