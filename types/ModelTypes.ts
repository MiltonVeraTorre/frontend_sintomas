export interface DoctorInt {
    id: number;
    nombre: string;
    correo: string;
    password: string;
    pacientes: PacienteInt[];
    token ?: string;
  }
  
export interface PacienteInt {
    id: number;
    nombre: string;
    apellido: string;
    nacimiento: Date;
    genero: string;
    correo: string;
    telefono: string;
    password: string;
    doctorId: number | null;
    doctor: DoctorInt | null;

  }

export interface Nota {
    id: number;
    fecha: Date;
    nota: string;
    pacienteId: number;
    paciente: PacienteInt;
  }
  
export interface Antecedente {
    id: number;
    nombre: string;
    descripcion: string;
    fecha: Date;
    pacienteId: number;
    paciente: PacienteInt;
  }
  
export interface TipoRegistro {
    id: number;
    nombre: string;
    cuantitativo: boolean;
    descripcion: string;
    unidad: string | null;
    pacienteId: number | null;
    paciente: PacienteInt | null;
    registros: Registro[];
  }
  
export  interface Registro {
    id: number;
    valor: number;
    tipoId: number;
    tipo: TipoRegistro;
    fecha: Date;
    pacienteId: number;
    paciente: PacienteInt;
  }
  
