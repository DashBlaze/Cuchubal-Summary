function calcularRondas(participantes) {
    return participantes * 2;
}

function obtenerFrecuenciaDias(frecuencia) {
    switch(frecuencia) {
        case 'diaria':
            return 1;
        case 'semanal':
            return 7;
        case 'mensual':
            return 30;
        default:
            return 0;
    }
}

function calcularFechaGanador(fechaInicio, frecuenciaDias, rondas) {
    const fecha = new Date(fechaInicio);
    const diasPorRonda = frecuenciaDias * 2;
    const fechaGanador = new Date(fecha.setDate(fecha.getDate() + diasPorRonda));
    return fechaGanador.toISOString().split('T')[0];
}

function crearCuchubal() {
    const nombre = document.getElementById('nombre').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const monto = document.getElementById('monto').value;
    const frecuencia = document.getElementById('frecuencia').value;
    const participantes = parseInt(document.getElementById('participantes').value);

    if (participantes < 1) {
        alert("El número de participantes debe ser al menos 1.");
        return;
    }

    const rondas = calcularRondas(participantes);
    const frecuenciaDias = obtenerFrecuenciaDias(frecuencia);
    const fechaGanador = calcularFechaGanador(fechaInicio, frecuenciaDias, rondas);

    const mensaje = `
        <h2>Resumen del Cuchubal</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Fecha de Inicio:</strong> ${fechaInicio}</p>
        <p><strong>Monto:</strong> $${monto}</p>
        <p><strong>Frecuencia:</strong> ${frecuencia}</p>
        <p><strong>Número de Participantes:</strong> ${participantes}</p>
        <p><strong>Total de Rondas:</strong> ${rondas}</p>
        <p><strong>Estado:</strong> Pendiente</p>
        <p><strong>Próximo Ganador Será Elegido el:</strong> ${fechaGanador}</p>
    `;

    document.getElementById('result').innerHTML = mensaje;
}

function establecerMinFechaInicio() {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + 3);
    const fechaFormateada = fecha.toISOString().split('T')[0];
    document.getElementById('fechaInicio').setAttribute('min', fechaFormateada);
}

function mostrarUsuarioAleatorio() {
    const participantes = parseInt(document.getElementById('participantes').value);
    if (participantes < 1) {
        alert("Por favor, ingresa un número válido de participantes.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * participantes) + 1;
    const usuarioAleatorio = `Usuario ${indiceAleatorio}`;

    const resultado = `
        <h2>Ganador Aleatorio</h2>
        <p><strong>Nombre:</strong> ${usuarioAleatorio}</p>
    `;

    document.getElementById('usuarioAleatorioResult').innerHTML = resultado;
}
