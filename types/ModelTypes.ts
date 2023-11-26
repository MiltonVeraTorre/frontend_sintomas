export interface DoctorInt {
    id: number;
    nombre: string;
    correo: string;
    password: string;
    pacientes: Paciente[];
    token ?: string;
  }
  
export   interface Paciente {
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
    paciente: Paciente;
  }
  
export interface Antecedente {
    id: number;
    nombre: string;
    descripcion: string;
    fecha: Date;
    pacienteId: number;
    paciente: Paciente;
  }
  
export interface TipoRegistro {
    id: number;
    nombre: string;
    cuantitativo: boolean;
    descripcion: string;
    unidad: string | null;
    pacienteId: number | null;
    paciente: Paciente | null;
    registros: Registro[];
  }
  
export  interface Registro {
    id: number;
    valor: number;
    tipoId: number;
    tipo: TipoRegistro;
    fecha: Date;
    pacienteId: number;
    paciente: Paciente;
  }
  
