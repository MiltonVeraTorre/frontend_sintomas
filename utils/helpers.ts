
function agregarCeroDelante(valor: number) {
    return valor < 10 ? `0${valor}` : valor;
}

// Funcion encargada de formatear las fechas de los iso string en un formato para los date input
export function formatInputDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // los meses empiezan desde 0
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
}

export function formatearHora(fecha: string | null) {
    if (fecha != null) {
      const fechaNew = new Date(fecha);
      const horas = fechaNew.getHours();
      const minutos = fechaNew.getMinutes();
      const segundos = fechaNew.getSeconds();
      const horaFormateada = `${agregarCeroDelante(horas)}:${agregarCeroDelante(
        minutos
      )}`;

      return horaFormateada;
    } else {
      return "Fecha inválida";
    }
}

export function formatearFecha(fecha: string | null) {
    const opcionesPorDefecto: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };

    if (fecha != null) {
      const fechaNew = new Date(fecha);
      return fechaNew.toLocaleDateString("es-ES", opcionesPorDefecto);
    } else {
      return "Fecha inválida";
    }
  }