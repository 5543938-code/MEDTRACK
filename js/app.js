/* =========================================================
   MEDTRACK
   Sistema de gestión de equipos médicos
   ========================================================= */


/* =========================================================
   1. DATOS INICIALES
   ========================================================= */

const equiposIniciales = [

    {
        id: "EQ-0001",
        nombre: "Desfibrilador",
        fabricante: "Philips",
        modelo: "HeartStart",
        serie: "SN123456",
        categoria: "Cardiología",
        departamento: "Urgencias",
        ubicacion: "Sala 2",
        estado: "Operativo",
        adquisicion: "2024-03-15",
        ultimoMantenimiento: "2026-09-15",
        proximoMantenimiento: "2027-09-15",
        descripcion:
            "Desfibrilador destinado a situaciones de emergencia.",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0002",
        nombre: "Monitor multiparamétrico",
        fabricante: "GE Healthcare",
        modelo: "Carescape B450",
        serie: "SN234567",
        categoria: "Monitorización",
        departamento: "UCI",
        ubicacion: "Box 4",
        estado: "Operativo",
        adquisicion: "2023-06-10",
        ultimoMantenimiento: "2026-06-10",
        proximoMantenimiento: "2026-12-10",
        descripcion:
            "Monitor para seguimiento de constantes vitales.",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0003",
        nombre: "Bomba de infusión",
        fabricante: "B. Braun",
        modelo: "Infusomat",
        serie: "SN345678",
        categoria: "Infusión",
        departamento: "Planta 2",
        ubicacion: "Habitación 205",
        estado: "Mantenimiento",
        adquisicion: "2022-11-20",
        ultimoMantenimiento: "2026-05-20",
        proximoMantenimiento: "2026-11-20",
        descripcion:
            "Bomba de infusión para administración controlada.",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0004",
        nombre: "Electrocardiógrafo",
        fabricante: "Schiller",
        modelo: "AT-102",
        serie: "SN456789",
        categoria: "Cardiología",
        departamento: "Consultas",
        ubicacion: "Consulta 5",
        estado: "Operativo",
        adquisicion: "2024-01-15",
        ultimoMantenimiento: "2026-01-15",
        proximoMantenimiento: "2027-01-15",
        descripcion:
            "Equipo para realización de electrocardiogramas.",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0005",
        nombre: "Máquina de anestesia",
        fabricante: "GE Healthcare",
        modelo: "Aestevia",
        serie: "M0019PN2350053",
        categoria: "Anestesia",
        departamento: "REA",
        ubicacion: "Sala 9",
        estado: "Averiado",
        adquisicion: "2006-10-05",
        ultimoMantenimiento: "2026-12-06",
        proximoMantenimiento: "",
        descripcion:
            "Componente / Part Number M0019PN2350053 para equipos de anestesia y módulos de monitorización críticos Datex-Ohmeda.",
        mantenimientos: [
            {
                fecha: "2026-12-06",
                tipo: "Preventivo",
                descripcion: "Revisión del módulo de gases"
            }
        ],
        incidencias: []
    },

    {
        id: "EQ-0006",
        nombre: "MR850ALU",
        fabricante: "Fisher y Paykel",
        modelo: "FYP 850",
        serie: "19-6000954-190",
        categoria: "Respiratorio",
        departamento: "Neumología",
        ubicacion: "Planta 7, Pasillo derecha, Habitación 1.",
        estado: "Mantenimiento",
        adquisicion: "2020-11-15",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "Humificador Respiratorio",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0007",
        nombre: "Base Humificadora",
        fabricante: "General Electric",
        modelo: "Hydraltis 9500FM",
        serie: "22026",
        categoria: "Respiratorio",
        departamento: "Neumología",
        ubicacion: "Planta 7, Pasillo derecha, Habitación 2",
        estado: "Operativo",
        adquisicion: "1993-04-15",
        ultimoMantenimiento: "2027-10-06",
        proximoMantenimiento: "",
        descripcion: "Base Humificadora",
        mantenimientos: [
            {
                fecha: "2027-10-06",
                tipo: "Preventivo",
                descripcion: "Revisión de fusibles y batería"
            }
        ],
        incidencias: []
    },

    {
        id: "EQ-0008",
        nombre: "Colimador",
        fabricante: "Philips",
        modelo: "No",
        serie: "22027",
        categoria: "Radiología",
        departamento: "Departamento de Rayos",
        ubicacion: "Planta 4, Radiología, Sala 3",
        estado: "Averiado",
        adquisicion: "1994-08-18",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "Parte de máquina de rayos.",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0009",
        nombre: "Monitor de constantes vitales",
        fabricante: "Philips",
        modelo: "EDAN",
        serie: "301190-M12303910007-01",
        categoria: "Monitorización",
        departamento: "UCI",
        ubicacion: "Planta 2, sala 3",
        estado: "Operativo",
        adquisicion: "2002-09-15",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "Muestra ECG, SpO2, PANI...",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0010",
        nombre: "Desinfector",
        fabricante: "WEBECO GMBH",
        modelo: "Matachana",
        serie: "E-23679",
        categoria: "Limpieza",
        departamento: "Farmacia",
        ubicacion: "Planta 3, Sala 5",
        estado: "Operativo",
        adquisicion: "2007-05-15",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion:
            "Máquina de desinfección de equipos quirúrgicos.",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0011",
        nombre: "DESFIBRILADOR",
        fabricante: "Philips",
        modelo: "HEARTSTREAM",
        serie: "1001047002",
        categoria: "Cardiología",
        departamento: "Urgencias",
        ubicacion: "Planta Baja, Sala 1",
        estado: "Operativo",
        adquisicion: "2006-01-25",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "Equipo DESA",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0012",
        nombre: "Monitor de constantes vitales",
        fabricante: "Philips",
        modelo: "Sure Signs VS2",
        serie: "12057191",
        categoria: "Monitorización",
        departamento: "Urgencias",
        ubicacion: "Planta 1, Pasillo Izquierda, Sala 3",
        estado: "Operativo",
        adquisicion: "2011-08-04",
        ultimoMantenimiento: "2026-11-06",
        proximoMantenimiento: "",
        descripcion: "",
        mantenimientos: [
            {
                fecha: "2026-11-06",
                tipo: "Preventivo",
                descripcion: "Revisión periódica anual"
            }
        ],
        incidencias: []
    },

    {
        id: "EQ-0013",
        nombre: "Respirador Mecánico",
        fabricante: "Brear Medical",
        modelo: "Vivo 40",
        serie: "345502",
        categoria: "Respiratorio",
        departamento: "UCI",
        ubicacion: "Planta 2, Quirófano 3",
        estado: "Averiado",
        adquisicion: "2009-05-12",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "",
        mantenimientos: [],
        incidencias: [
            {
                fecha: "2026-10-06",
                descripcion:
                    "Fallo en la manguera de la toma de oxígeno.",
                estado: "Pendiente"
            }
        ]
    },

    {
        id: "EQ-0014",
        nombre: "Equipo Endoscopia",
        fabricante: "Philips",
        modelo: "BV Libra",
        serie: "1691",
        categoria: "Digestivo",
        departamento: "Gastro",
        ubicacion: "Planta 3, Sala Endoscopias, Habitación 3",
        estado: "Averiado",
        adquisicion: "2015-05-15",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "Equipo de Endoscopias",
        mantenimientos: [],
        incidencias: [
            {
                fecha: "2026-10-06",
                descripcion:
                    "Fallo en algunos cables de endoscopia. Muy poca luz.",
                estado: "Pendiente"
            }
        ]
    },

    {
        id: "EQ-0015",
        nombre: "Monitor de Arco Quirúrgico",
        fabricante: "Siemens",
        modelo: "SONOLINE Sienna",
        serie: "59421556",
        categoria: "Monitores",
        departamento: "Radiología",
        ubicacion: "Planta 1, Sala de rayos.",
        estado: "Operativo",
        adquisicion: "1999-04-12",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "Monitor de Arco Quirúrgico.",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0016",
        nombre: "Energy",
        fabricante: "Newmed",
        modelo: "ENERGY 18",
        serie: "ENE1810066",
        categoria: "Desinfección",
        departamento: "Farmacia",
        ubicacion: "Sala 3",
        estado: "Operativo",
        adquisicion: "2009-06-15",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0017",
        nombre: "OLYMPUS",
        fabricante: "Olympus Optical",
        modelo: "CLV-160",
        serie: "7225637",
        categoria: "Oftalmología",
        departamento: "Almacén",
        ubicacion: "Planta -1, Depósito",
        estado: "Operativo",
        adquisicion: "2007-10-05",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "",
        mantenimientos: [],
        incidencias: []
    },

    {
        id: "EQ-0018",
        nombre: "Máquina de Diálisis",
        fabricante: "GAMBRO DASCO",
        modelo: "INTEGRA",
        serie: "799183",
        categoria: "Hemodiálisis",
        departamento: "Nefrología",
        ubicacion: "Sala 0, Planta Baja, Habitación 12",
        estado: "Operativo",
        adquisicion: "2009-06-12",
        ultimoMantenimiento: "",
        proximoMantenimiento: "",
        descripcion: "",
        mantenimientos: [],
        incidencias: []
    }

];


/* =========================================================
   2. CARGA DE DATOS
   ========================================================= */

/*
   Esta versión permite controlar los datos iniciales.

   Cuando cambiemos esta versión, MEDTRACK volverá
   a cargar los datos definidos en equiposIniciales.

   Actualmente utilizamos la versión 2.0 porque
   hemos incorporado los 18 equipos iniciales.
*/

const VERSION_DATOS = "2.0";

const CLAVE_EQUIPOS = "medtrack_equipos";

const CLAVE_VERSION = "medtrack_version";


function cargarEquipos() {

    const versionGuardada =
        localStorage.getItem(
            CLAVE_VERSION
        );


    const datosGuardados =
        localStorage.getItem(
            CLAVE_EQUIPOS
        );


    let equiposGuardados = null;


    /*
       Intentamos leer los datos guardados.
       Si están dañados, utilizamos los datos iniciales.
    */

    try {

        equiposGuardados =
            datosGuardados
                ? JSON.parse(
                    datosGuardados
                )
                : null;

    } catch (error) {

        equiposGuardados = null;

    }


    /*
       Si no existen datos válidos o la versión
       ha cambiado, cargamos los datos iniciales.
    */

    if (
        !Array.isArray(equiposGuardados)
        ||
        versionGuardada !== VERSION_DATOS
    ) {

        const datosIniciales =
            JSON.parse(
                JSON.stringify(
                    equiposIniciales
                )
            );


        localStorage.setItem(
            CLAVE_VERSION,
            VERSION_DATOS
        );


        localStorage.setItem(
            CLAVE_EQUIPOS,
            JSON.stringify(
                datosIniciales
            )
        );


        return datosIniciales;

    }


    return equiposGuardados;

}


let equipos =
    cargarEquipos();


/* =========================================================
   3. GUARDAR DATOS
   ========================================================= */

function guardarEquipos() {

    localStorage.setItem(
        CLAVE_EQUIPOS,
        JSON.stringify(
            equipos
        )
    );

}


/* =========================================================
   4. UTILIDADES
   ========================================================= */

function escaparHTML(texto) {

    if (
        texto === null ||
        texto === undefined
    ) {

        return "";

    }


    return String(texto)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function obtenerEquipo(id) {

    return equipos.find(
        equipo =>
            equipo.id === id
    );

}


function formatearFecha(fecha) {

    if (!fecha) {

        return "No indicada";

    }


    const partes =
        fecha.split("-");


    if (
        partes.length !== 3
    ) {

        return fecha;

    }


    return `${partes[2]}/${partes[1]}/${partes[0]}`;

}


function obtenerClaseEstado(estado) {

    if (
        estado === "Operativo"
    ) {

        return "status-green";

    }


    if (
        estado === "Mantenimiento"
    ) {

        return "status-orange";

    }


    if (
        estado === "Averiado"
    ) {

        return "status-red";

    }


    return "";

}


function obtenerIconoEstado(estado) {

    if (
        estado === "Operativo"
    ) {

        return "🟢";

    }


    if (
        estado === "Mantenimiento"
    ) {

        return "🟠";

    }


    if (
        estado === "Averiado"
    ) {

        return "🔴";

    }


    return "⚪";

}


/* =========================================================
   5. NAVEGACIÓN
   ========================================================= */

function mostrarPagina(pagina) {

    document
        .querySelectorAll(".page")
        .forEach(
            elemento => {

                elemento.classList.remove(
                    "active"
                );

            }
        );


    const destino =
        document.getElementById(
            pagina
        );


    if (!destino) {

        console.warn(
            "No existe la página:",
            pagina
        );

        return;

    }


    destino.classList.add(
        "active"
    );


    if (
        pagina === "inicio"
    ) {

        actualizarDashboard();

        mostrarProximosMantenimientos();

    }


    if (
        pagina === "inventario"
    ) {

        prepararFiltros();

        mostrarInventario();

    }


    if (
        pagina === "mantenimiento"
    ) {

        mostrarTodosLosMantenimientos();

    }


    if (
        pagina === "incidencias"
    ) {

        mostrarTodasLasIncidencias();

    }


    if (
        pagina === "calendario"
    ) {

        renderizarCalendario();

    }


    if (
        pagina === "estadisticas"
    ) {

        mostrarEstadisticas();

    }

}


/* =========================================================
   6. INVENTARIO
   ========================================================= */

function mostrarInventario() {

    const contenedor =
        document.getElementById(
            "tablaInventario"
        );


    if (!contenedor) {

        return;

    }


    const buscador =
        document.getElementById(
            "buscador"
        );


    const filtroEstado =
        document.getElementById(
            "filtroEstado"
        );


    const filtroCategoria =
        document.getElementById(
            "filtroCategoria"
        );


    const texto =
        buscador
            ? buscador.value
                .trim()
                .toLowerCase()
            : "";


    const estado =
        filtroEstado
            ? filtroEstado.value
            : "";


    const categoria =
        filtroCategoria
            ? filtroCategoria.value
            : "";


    const resultados =
        equipos.filter(
            equipo => {

                const nombre =
                    String(
                        equipo.nombre || ""
                    ).toLowerCase();


                const id =
                    String(
                        equipo.id || ""
                    ).toLowerCase();


                const fabricante =
                    String(
                        equipo.fabricante || ""
                    ).toLowerCase();


                const modelo =
                    String(
                        equipo.modelo || ""
                    ).toLowerCase();


                const serie =
                    String(
                        equipo.serie || ""
                    ).toLowerCase();


                const ubicacion =
                    String(
                        equipo.ubicacion || ""
                    ).toLowerCase();


                const coincideTexto =

                    nombre.includes(
                        texto
                    )

                    ||

                    id.includes(
                        texto
                    )

                    ||

                    fabricante.includes(
                        texto
                    )

                    ||

                    modelo.includes(
                        texto
                    )

                    ||

                    serie.includes(
                        texto
                    )

                    ||

                    ubicacion.includes(
                        texto
                    );


                const coincideEstado =

                    estado === ""
                    ||
                    equipo.estado === estado;


                const coincideCategoria =

                    categoria === ""
                    ||
                    equipo.categoria === categoria;


                return (
                    coincideTexto &&
                    coincideEstado &&
                    coincideCategoria
                );

            }
        );


    if (
        resultados.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="empty-state">

                <strong>
                    No se encontraron equipos.
                </strong>

                <p>
                    Prueba con otro término de búsqueda
                    o modifica los filtros.
                </p>

            </div>

        `;

        return;

    }


    let html = `

        <div class="table-container">

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Equipo</th>

                        <th>Fabricante</th>

                        <th>Ubicación</th>

                        <th>Próximo mantenimiento</th>

                        <th>Estado</th>

                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

    `;


    resultados.forEach(
        equipo => {

            const claseEstado =
                obtenerClaseEstado(
                    equipo.estado
                );


            const iconoEstado =
                obtenerIconoEstado(
                    equipo.estado
                );


            html += `

                <tr>

                    <td>

                        <strong>
                            ${escaparHTML(
                                equipo.id
                            )}
                        </strong>

                    </td>


                    <td>

                        <strong>
                            ${escaparHTML(
                                equipo.nombre
                            )}
                        </strong>

                        <small class="table-secondary">

                            ${escaparHTML(
                                equipo.modelo
                            )}

                        </small>

                    </td>


                    <td>

                        ${escaparHTML(
                            equipo.fabricante
                        )}

                    </td>


                    <td>

                        ${escaparHTML(
                            equipo.ubicacion
                        )}

                    </td>


                    <td>

                        ${
                            equipo.proximoMantenimiento
                                ? formatearFecha(
                                    equipo.proximoMantenimiento
                                )
                                : "No programado"
                        }

                    </td>


                    <td>

                        <span
                            class="status ${claseEstado}"
                        >

                            ${iconoEstado}

                            ${escaparHTML(
                                equipo.estado
                            )}

                        </span>

                    </td>


                    <td>

                        <div class="table-actions">

                            <button
                                type="button"
                                class="small-btn"
                                onclick="verEquipo('${equipo.id}')"
                            >

                                Ver

                            </button>


                            <button
                                type="button"
                                class="small-btn"
                                onclick="generarQR('${equipo.id}')"
                            >

                                QR

                            </button>

                        </div>

                    </td>

                </tr>

            `;

        }
    );


    html += `

                </tbody>

            </table>

        </div>


        <p class="result-count">

            Mostrando
            ${resultados.length}
            de
            ${equipos.length}
            equipos.

        </p>

    `;


    contenedor.innerHTML =
        html;

}


/* =========================================================
   7. FILTROS
   ========================================================= */

function prepararFiltros() {

    const selector =
        document.getElementById(
            "filtroCategoria"
        );


    if (!selector) {

        return;

    }


    const categorias =
        [
            ...new Set(
                equipos
                    .map(
                        equipo =>
                            equipo.categoria
                    )
                    .filter(Boolean)
            )
        ]
        .sort(
            (a, b) =>
                a.localeCompare(
                    b,
                    "es"
                )
        );


    const valorActual =
        selector.value;


    selector.innerHTML = `

        <option value="">
            Todas las categorías
        </option>

    `;


    categorias.forEach(
        categoria => {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                categoria;


            option.textContent =
                categoria;


            selector.appendChild(
                option
            );

        }
    );


    selector.value =
        valorActual;

}


/* =========================================================
   8. FORMULARIO DE NUEVO EQUIPO
   ========================================================= */

function mostrarFormularioEquipo() {

    limpiarFormularioEquipo();


    mostrarPagina(
        "formularioEquipo"
    );

}


function limpiarFormularioEquipo() {

    const ids = [

        "nombreEquipo",
        "fabricanteEquipo",
        "modeloEquipo",
        "serieEquipo",
        "categoriaEquipo",
        "departamentoEquipo",
        "ubicacionEquipo",
        "adquisicionEquipo",
        "descripcionEquipo"

    ];


    ids.forEach(
        id => {

            const elemento =
                document.getElementById(
                    id
                );


            if (elemento) {

                elemento.value =
                    "";

            }

        }
    );

}


function generarNuevoID() {

    let numero =
        equipos.length + 1;


    let id =
        "EQ-" +
        String(
            numero
        ).padStart(
            4,
            "0"
        );


    while (
        equipos.some(
            equipo =>
                equipo.id === id
        )
    ) {

        numero++;


        id =
            "EQ-" +
            String(
                numero
            ).padStart(
                4,
                "0"
            );

    }


    return id;

}


function guardarNuevoEquipo() {

    const nombre =
        obtenerValor(
            "nombreEquipo"
        );


    const fabricante =
        obtenerValor(
            "fabricanteEquipo"
        );


    const modelo =
        obtenerValor(
            "modeloEquipo"
        );


    const serie =
        obtenerValor(
            "serieEquipo"
        );


    const categoria =
        obtenerValor(
            "categoriaEquipo"
        );


    const departamento =
        obtenerValor(
            "departamentoEquipo"
        );


    const ubicacion =
        obtenerValor(
            "ubicacionEquipo"
        );


    const adquisicion =
        obtenerValor(
            "adquisicionEquipo"
        );


    const descripcion =
        obtenerValor(
            "descripcionEquipo"
        );


    if (
        !nombre ||
        !fabricante ||
        !modelo ||
        !serie ||
        !categoria ||
        !departamento ||
        !ubicacion
    ) {

        alert(
            "Completa todos los campos obligatorios marcados con *."
        );

        return;

    }


    const serieNormalizada =
        serie.toLowerCase();


    const serieExiste =
        equipos.some(
            equipo =>
                String(
                    equipo.serie || ""
                )
                .toLowerCase() ===
                serieNormalizada
        );


    if (serieExiste) {

        alert(
            "Ya existe un equipo registrado con ese número de serie."
        );

        return;

    }


    const id =
        generarNuevoID();


    const nuevoEquipo = {

        id: id,

        nombre: nombre,

        fabricante: fabricante,

        modelo: modelo,

        serie: serie,

        categoria: categoria,

        departamento: departamento,

        ubicacion: ubicacion,

        adquisicion: adquisicion,

        estado: "Operativo",

        ultimoMantenimiento: "",

        proximoMantenimiento: "",

        descripcion: descripcion,

        mantenimientos: [],

        incidencias: []

    };


    equipos.push(
        nuevoEquipo
    );


    guardarEquipos();


    actualizarDashboard();

    prepararFiltros();


    alert(
        `Equipo ${id} registrado correctamente.`
    );


    mostrarPagina(
        "inventario"
    );

}


function obtenerValor(id) {

    const elemento =
        document.getElementById(
            id
        );


    if (!elemento) {

        return "";

    }


    return elemento.value.trim();

}


/* =========================================================
   9. FICHA DEL EQUIPO
   ========================================================= */

function verEquipo(id) {

    const equipo =
        obtenerEquipo(
            id
        );


    if (!equipo) {

        alert(
            "No se encontró el equipo."
        );

        return;

    }


    const contenedor =
        document.getElementById(
            "contenidoEquipo"
        );


    if (!contenedor) {

        return;

    }


    const claseEstado =
        obtenerClaseEstado(
            equipo.estado
        );


    const iconoEstado =
        obtenerIconoEstado(
            equipo.estado
        );


    contenedor.innerHTML = `

        <button
            type="button"
            class="secondary-btn"
            onclick="mostrarPagina('inventario')"
        >

            ← Volver al inventario

        </button>


        <div class="equipment-detail">


            <div class="equipment-header">

                <div>

                    <span class="equipment-id">

                        ${escaparHTML(
                            equipo.id
                        )}

                    </span>


                    <h1>

                        ${escaparHTML(
                            equipo.nombre
                        )}

                    </h1>


                    <p>

                        ${escaparHTML(
                            equipo.fabricante
                        )}

                        ·

                        ${escaparHTML(
                            equipo.modelo
                        )}

                    </p>

                </div>


                <span
                    class="status ${claseEstado}"
                >

                    ${iconoEstado}

                    ${escaparHTML(
                        equipo.estado
                    )}

                </span>

            </div>


            <div class="info-grid">


                <div class="info-box">

                    <span>
                        Fabricante
                    </span>

                    <strong>

                        ${escaparHTML(
                            equipo.fabricante
                        )}

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Modelo
                    </span>

                    <strong>

                        ${escaparHTML(
                            equipo.modelo
                        )}

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Número de serie
                    </span>

                    <strong>

                        ${escaparHTML(
                            equipo.serie
                        )}

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Categoría
                    </span>

                    <strong>

                        ${escaparHTML(
                            equipo.categoria
                        )}

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Departamento
                    </span>

                    <strong>

                        ${escaparHTML(
                            equipo.departamento
                        )}

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Ubicación
                    </span>

                    <strong>

                        ${escaparHTML(
                            equipo.ubicacion
                        )}

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Adquisición
                    </span>

                    <strong>

                        ${formatearFecha(
                            equipo.adquisicion
                        )}

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Último mantenimiento
                    </span>

                    <strong>

                        ${
                            equipo.ultimoMantenimiento
                                ? formatearFecha(
                                    equipo.ultimoMantenimiento
                                )
                                : "No registrado"
                        }

                    </strong>

                </div>


                <div class="info-box">

                    <span>
                        Próximo mantenimiento
                    </span>

                    <strong>

                        ${
                            equipo.proximoMantenimiento
                                ? formatearFecha(
                                    equipo.proximoMantenimiento
                                )
                                : "No programado"
                        }

                    </strong>

                </div>

            </div>


            <div class="detail-section">

                <h2>
                    Descripción
                </h2>


                <p>

                    ${
                        escaparHTML(
                            equipo.descripcion ||
                            "Sin descripción."
                        )
                    }

                </p>

            </div>


            <div class="detail-actions">


                <button
                    type="button"
                    class="primary-btn"
                    onclick="mostrarMantenimiento('${equipo.id}')"
                >

                    🔧 Registrar mantenimiento

                </button>


                <button
                    type="button"
                    class="primary-btn"
                    onclick="mostrarIncidencias('${equipo.id}')"
                >

                    ⚠️ Registrar incidencia

                </button>


                <button
                    type="button"
                    class="primary-btn"
                    onclick="generarQR('${equipo.id}')"
                >

                    📱 Generar QR

                </button>


                <button
                    type="button"
                    class="secondary-btn"
                    onclick="cambiarEstadoEquipo('${equipo.id}')"
                >

                    🔄 Cambiar estado

                </button>


                <button
                    type="button"
                    class="danger-btn"
                    onclick="eliminarEquipo('${equipo.id}')"
                >

                    🗑️ Eliminar equipo

                </button>

            </div>


            <div class="detail-section">

                <h2>
                    Historial de mantenimiento
                </h2>


                <div>

                    ${mostrarHistorialHTML(
                        equipo
                    )}

                </div>

            </div>


            <div class="detail-section">

                <h2>
                    Incidencias
                </h2>


                <div>

                    ${mostrarIncidenciasHTML(
                        equipo
                    )}

                </div>

            </div>

        </div>

    `;


    mostrarPagina(
        "detalleEquipo"
    );

}


/* =========================================================
   10. HISTORIAL DE MANTENIMIENTO
   ========================================================= */

function mostrarHistorialHTML(equipo) {

    if (
        !equipo.mantenimientos ||
        equipo.mantenimientos.length === 0
    ) {

        return `

            <div class="empty-state">

                No hay mantenimientos registrados.

            </div>

        `;

    }


    return equipo.mantenimientos
        .slice()
        .sort(
            (a, b) =>
                String(
                    b.fecha || ""
                ).localeCompare(
                    String(
                        a.fecha || ""
                    )
                )
        )
        .map(
            mantenimiento => `

                <div class="maintenance-item">

                    <div>

                        <strong>

                            ${formatearFecha(
                                mantenimiento.fecha
                            )}

                        </strong>


                        <span>

                            ${escaparHTML(
                                mantenimiento.tipo
                            )}

                        </span>

                    </div>


                    <p>

                        ${
                            escaparHTML(
                                mantenimiento.descripcion ||
                                "Sin descripción."
                            )
                        }

                    </p>

                </div>

            `
        )
        .join("");

}


/* =========================================================
   11. REGISTRAR MANTENIMIENTO
   ========================================================= */

function mostrarMantenimiento(id) {

    const equipo =
        obtenerEquipo(
            id
        );


    if (!equipo) {

        return;

    }


    const fecha =
        prompt(
            "Fecha del mantenimiento (AAAA-MM-DD):",
            obtenerFechaActual()
        );


    if (!fecha) {

        return;

    }


    if (
        !/^\d{4}-\d{2}-\d{2}$/.test(
            fecha
        )
    ) {

        alert(
            "Introduce la fecha con el formato AAAA-MM-DD."
        );

        return;

    }


    const tipo =
        prompt(
            "Tipo de mantenimiento:",
            "Preventivo"
        );


    if (!tipo) {

        return;

    }


    const descripcion =
        prompt(
            "Descripción del mantenimiento:"
        );


    if (
        !Array.isArray(
            equipo.mantenimientos
        )
    ) {

        equipo.mantenimientos = [];

    }


    equipo.mantenimientos.push({

        fecha: fecha,

        tipo: tipo,

        descripcion:
            descripcion || ""

    });


    equipo.ultimoMantenimiento =
        fecha;


    /*
       Después de registrar un mantenimiento,
       el equipo vuelve a estado operativo.
    */

    equipo.estado =
        "Operativo";


    guardarEquipos();


    actualizarDashboard();


    mostrarTodosLosMantenimientos();


    verEquipo(
        id
    );


    alert(
        "Mantenimiento registrado correctamente."
    );

}


/* =========================================================
   12. INCIDENCIAS
   ========================================================= */

function mostrarIncidencias(id) {

    const equipo =
        obtenerEquipo(
            id
        );


    if (!equipo) {

        return;

    }


    const descripcion =
        prompt(
            "Describe la incidencia:"
        );


    if (!descripcion) {

        return;

    }


    if (
        !Array.isArray(
            equipo.incidencias
        )
    ) {

        equipo.incidencias = [];

    }


    equipo.incidencias.push({

        fecha:
            obtenerFechaActual(),

        descripcion:
            descripcion,

        estado:
            "Pendiente"

    });


    equipo.estado =
        "Averiado";


    guardarEquipos();


    actualizarDashboard();


    verEquipo(
        id
    );


    alert(
        "Incidencia registrada y equipo marcado como averiado."
    );

}


/* =========================================================
   13. MOSTRAR INCIDENCIAS EN LA FICHA
   ========================================================= */

function mostrarIncidenciasHTML(equipo) {

    if (
        !equipo.incidencias ||
        equipo.incidencias.length === 0
    ) {

        return `

            <div class="empty-state">

                No hay incidencias registradas.

            </div>

        `;

    }


    return equipo.incidencias
        .slice()
        .reverse()
        .map(
            incidencia => `

                <div class="incident-item">

                    <div>

                        <strong>

                            ${formatearFecha(
                                incidencia.fecha
                            )}

                        </strong>


                        <span
                            class="status status-red"
                        >

                            ${escaparHTML(
                                incidencia.estado
                            )}

                        </span>

                    </div>


                    <p>

                        ${escaparHTML(
                            incidencia.descripcion
                        )}

                    </p>

                </div>

            `
        )
        .join("");

}


/* =========================================================
   14. CAMBIAR ESTADO
   ========================================================= */

function cambiarEstadoEquipo(id) {

    const equipo =
        obtenerEquipo(
            id
        );


    if (!equipo) {

        return;

    }


    const nuevoEstado =
        prompt(

            "Escribe el nuevo estado:\n\n" +

            "Operativo\n" +

            "Mantenimiento\n" +

            "Averiado",

            equipo.estado

        );


    if (!nuevoEstado) {

        return;

    }


    const estadosPermitidos = [

        "Operativo",

        "Mantenimiento",

        "Averiado"

    ];


    if (
        !estadosPermitidos.includes(
            nuevoEstado
        )
    ) {

        alert(
            "Estado no válido."
        );

        return;

    }


    equipo.estado =
        nuevoEstado;


    guardarEquipos();


    actualizarDashboard();


    verEquipo(
        id
    );

}


/* =========================================================
   15. ELIMINAR EQUIPO
   ========================================================= */

function eliminarEquipo(id) {

    const equipo =
        obtenerEquipo(
            id
        );


    if (!equipo) {

        return;

    }


    const confirmar =
        confirm(
            `¿Seguro que quieres eliminar ${equipo.nombre} (${equipo.id})?`
        );


    if (!confirmar) {

        return;

    }


    equipos =
        equipos.filter(
            elemento =>
                elemento.id !== id
        );


    guardarEquipos();


    actualizarDashboard();


    prepararFiltros();


    mostrarPagina(
        "inventario"
    );


    alert(
        "Equipo eliminado correctamente."
    );

}


/* =========================================================
   16. QR
   ========================================================= */

function generarQR(id) {

    const equipo =
        obtenerEquipo(
            id
        );


    if (!equipo) {

        return;

    }


    const contenedor =
        document.getElementById(
            "qrcode"
        );


    if (!contenedor) {

        return;

    }


    if (
        typeof QRCode ===
        "undefined"
    ) {

        alert(
            "No se ha podido cargar la librería QR."
        );

        return;

    }


    contenedor.innerHTML =
        "";


    const direccion =
        window.location.href.split("?")[0]
        +
        "?equipo="
        +
        encodeURIComponent(
            equipo.id
        );


    new QRCode(
        contenedor,
        {

            text:
                direccion,

            width:
                220,

            height:
                220

        }
    );


    const textoQR =
        document.getElementById(
            "qrEquipo"
        );


    if (textoQR) {

        textoQR.innerHTML = `

            <strong>

                ${escaparHTML(
                    equipo.id
                )}

            </strong>

            ·

            ${escaparHTML(
                equipo.nombre
            )}

        `;

    }


    mostrarPagina(
        "qr"
    );

}


/* =========================================================
   17. DETECTAR QR
   ========================================================= */

function comprobarQR() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const id =
        parametros.get(
            "equipo"
        );


    if (!id) {

        return;

    }


    const equipo =
        obtenerEquipo(
            id
        );


    if (!equipo) {

        return;

    }


    setTimeout(
        () => {

            verEquipo(
                id
            );

        },
        300
    );

}


/* =========================================================
   18. DASHBOARD
   ========================================================= */

function actualizarDashboard() {

    const total =
        equipos.length;


    const operativos =
        equipos.filter(
            equipo =>
                equipo.estado ===
                "Operativo"
        ).length;


    const mantenimiento =
        equipos.filter(
            equipo =>
                equipo.estado ===
                "Mantenimiento"
        ).length;


    const averiados =
        equipos.filter(
            equipo =>
                equipo.estado ===
                "Averiado"
        ).length;


    actualizarElemento(
        "totalEquipos",
        total
    );


    actualizarElemento(
        "equiposOperativos",
        operativos
    );


    actualizarElemento(
        "equiposMantenimiento",
        mantenimiento
    );


    actualizarElemento(
        "equiposAveriados",
        averiados
    );


    mostrarProximosMantenimientos();

}


/* =========================================================
   19. PRÓXIMOS MANTENIMIENTOS
   ========================================================= */

function mostrarProximosMantenimientos() {

    const contenedor =
        document.getElementById(
            "proximosMantenimientos"
        );


    if (!contenedor) {

        return;

    }


    const programados =
        equipos
            .filter(
                equipo =>
                    equipo.proximoMantenimiento
            )
            .sort(
                (a, b) =>
                    String(
                        a.proximoMantenimiento
                    ).localeCompare(
                        String(
                            b.proximoMantenimiento
                        )
                    )
            )
            .slice(
                0,
                5
            );


    if (
        programados.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="empty-state">

                No hay mantenimientos programados.

            </div>

        `;

        return;

    }


    contenedor.innerHTML =
        programados
            .map(
                equipo => `

                    <div class="upcoming-item">

                        <div>

                            <strong>

                                ${escaparHTML(
                                    equipo.nombre
                                )}

                            </strong>


                            <span>

                                ${escaparHTML(
                                    equipo.id
                                )}

                            </span>

                        </div>


                        <div>

                            <strong>

                                ${formatearFecha(
                                    equipo.proximoMantenimiento
                                )}

                            </strong>


                            <span>

                                ${escaparHTML(
                                    equipo.ubicacion
                                )}

                            </span>

                        </div>

                    </div>

                `
            )
            .join("");

}


/* =========================================================
   20. TODOS LOS MANTENIMIENTOS
   ========================================================= */

function mostrarTodosLosMantenimientos() {

    const contenedor =
        document.getElementById(
            "listaMantenimientos"
        );


    if (!contenedor) {

        return;

    }


    const mantenimientos = [];


    equipos.forEach(
        equipo => {

            if (
                Array.isArray(
                    equipo.mantenimientos
                )
                &&
                equipo.mantenimientos.length
            ) {

                equipo.mantenimientos.forEach(
                    mantenimiento => {

                        mantenimientos.push({

                            ...mantenimiento,

                            equipoId:
                                equipo.id,

                            equipoNombre:
                                equipo.nombre

                        });

                    }
                );

            }

        }
    );


    mantenimientos.sort(
        (a, b) =>
            String(
                b.fecha || ""
            ).localeCompare(
                String(
                    a.fecha || ""
                )
            )
    );


    if (
        mantenimientos.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="empty-state">

                No hay mantenimientos registrados todavía.

            </div>

        `;

        return;

    }


    contenedor.innerHTML =
        mantenimientos
            .map(
                mantenimiento => `

                    <div class="maintenance-card">

                        <div>

                            <span class="eyebrow">

                                ${escaparHTML(
                                    mantenimiento.equipoId
                                )}

                            </span>


                            <h3>

                                ${escaparHTML(
                                    mantenimiento.equipoNombre
                                )}

                            </h3>

                        </div>


                        <div class="maintenance-info">

                            <strong>

                                ${formatearFecha(
                                    mantenimiento.fecha
                                )}

                            </strong>


                            <span>

                                ${escaparHTML(
                                    mantenimiento.tipo
                                )}

                            </span>

                        </div>


                        <p>

                            ${
                                escaparHTML(
                                    mantenimiento.descripcion ||
                                    "Sin descripción."
                                )
                            }

                        </p>

                    </div>

                `
            )
            .join("");

}


/* =========================================================
   21. TODAS LAS INCIDENCIAS
   ========================================================= */

function mostrarTodasLasIncidencias() {

    const contenedor =
        document.getElementById(
            "listaIncidencias"
        );


    if (!contenedor) {

        return;

    }


    const incidencias = [];


    equipos.forEach(
        equipo => {

            if (
                Array.isArray(
                    equipo.incidencias
                )
                &&
                equipo.incidencias.length
            ) {

                equipo.incidencias.forEach(
                    incidencia => {

                        incidencias.push({

                            ...incidencia,

                            equipoId:
                                equipo.id,

                            equipoNombre:
                                equipo.nombre

                        });

                    }
                );

            }

        }
    );


    incidencias.sort(
        (a, b) =>
            String(
                b.fecha || ""
            ).localeCompare(
                String(
                    a.fecha || ""
                )
            )
    );


    if (
        incidencias.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="empty-state">

                No hay incidencias registradas.

            </div>

        `;

        return;

    }


    contenedor.innerHTML =
        incidencias
            .map(
                incidencia => `

                    <div class="incident-card">

                        <div>

                            <span class="eyebrow">

                                ${escaparHTML(
                                    incidencia.equipoId
                                )}

                            </span>


                            <h3>

                                ${escaparHTML(
                                    incidencia.equipoNombre
                                )}

                            </h3>

                        </div>


                        <span class="status status-red">

                            ${escaparHTML(
                                incidencia.estado
                            )}

                        </span>


                        <p>

                            ${escaparHTML(
                                incidencia.descripcion
                            )}

                        </p>


                        <small>

                            Registrada el

                            ${formatearFecha(
                                incidencia.fecha
                            )}

                        </small>

                    </div>

                `
            )
            .join("");

}


/* =========================================================
   22. ESTADÍSTICAS
   ========================================================= */

function mostrarEstadisticas() {

    mostrarEstadisticasEstado();

    mostrarEstadisticasCategoria();

}


function mostrarEstadisticasEstado() {

    const contenedor =
        document.getElementById(
            "estadisticasEstado"
        );


    if (!contenedor) {

        return;

    }


    const estados = [

        {
            nombre:
                "Operativo",

            clase:
                "status-green"
        },

        {
            nombre:
                "Mantenimiento",

            clase:
                "status-orange"
        },

        {
            nombre:
                "Averiado",

            clase:
                "status-red"
        }

    ];


    contenedor.innerHTML =
        estados
            .map(
                estado => {

                    const cantidad =
                        equipos.filter(
                            equipo =>
                                equipo.estado ===
                                estado.nombre
                        ).length;


                    const porcentaje =
                        equipos.length
                            ? Math.round(
                                (
                                    cantidad /
                                    equipos.length
                                ) * 100
                            )
                            : 0;


                    return `

                        <div class="stat-row">

                            <div>

                                <strong>

                                    ${estado.nombre}

                                </strong>


                                <span>

                                    ${cantidad}
                                    equipos

                                </span>

                            </div>


                            <strong>

                                ${porcentaje}%

                            </strong>

                        </div>


                        <div class="progress">

                            <div
                                class="progress-bar"
                                style="width: ${porcentaje}%"
                            >
                            </div>

                        </div>

                    `;

                }
            )
            .join("");

}


function mostrarEstadisticasCategoria() {

    const contenedor =
        document.getElementById(
            "estadisticasCategoria"
        );


    if (!contenedor) {

        return;

    }


    const categorias = {};


    equipos.forEach(
        equipo => {

            const categoria =
                equipo.categoria ||
                "Sin categoría";


            if (
                !categorias[categoria]
            ) {

                categorias[categoria] =
                    0;

            }


            categorias[categoria]++;

        }
    );


    const ordenadas =
        Object.entries(
            categorias
        )
        .sort(
            (a, b) =>
                b[1] - a[1]
        );


    if (
        ordenadas.length === 0
    ) {

        contenedor.innerHTML = `

            <div class="empty-state">

                No hay categorías disponibles.

            </div>

        `;

        return;

    }


    contenedor.innerHTML =
        ordenadas
            .map(
                (
                    [
                        categoria,
                        cantidad
                    ]
                ) => `

                    <div class="stat-row">

                        <div>

                            <strong>

                                ${escaparHTML(
                                    categoria
                                )}

                            </strong>


                            <span>

                                ${cantidad}
                                equipos

                            </span>

                        </div>


                        <strong>

                            ${cantidad}

                        </strong>

                    </div>

                `
            )
            .join("");

}


/* =========================================================
   23. CALENDARIO
   ========================================================= */

let fechaCalendario =
    new Date();


function cambiarMes(direccion) {

    fechaCalendario.setMonth(
        fechaCalendario.getMonth() +
        direccion
    );


    renderizarCalendario();

}


function renderizarCalendario() {

    const titulo =
        document.getElementById(
            "mesCalendario"
        );


    const contenedor =
        document.getElementById(
            "calendarioContenido"
        );


    if (
        !titulo ||
        !contenedor
    ) {

        return;

    }


    const año =
        fechaCalendario.getFullYear();


    const mes =
        fechaCalendario.getMonth();


    const nombreMes =
        fechaCalendario.toLocaleDateString(
            "es-ES",
            {
                month:
                    "long",

                year:
                    "numeric"
            }
        );


    titulo.textContent =
        nombreMes
            .charAt(0)
            .toUpperCase()
        +
        nombreMes.slice(1);


    const primerDia =
        new Date(
            año,
            mes,
            1
        );


    const ultimoDia =
        new Date(
            año,
            mes + 1,
            0
        );


    const diasMes =
        ultimoDia.getDate();


    let inicio =
        primerDia.getDay();


    /*
       Convertimos domingo=0
       a lunes=0.
    */

    inicio =
        inicio === 0
            ? 6
            : inicio - 1;


    let html =
        "";


    const diasSemana = [

        "Lun",
        "Mar",
        "Mié",
        "Jue",
        "Vie",
        "Sáb",
        "Dom"

    ];


    diasSemana.forEach(
        dia => {

            html += `

                <div class="calendar-day-name">

                    ${dia}

                </div>

            `;

        }
    );


    for (
        let i = 0;
        i < inicio;
        i++
    ) {

        html += `

            <div class="calendar-empty"></div>

        `;

    }


    for (
        let dia = 1;
        dia <= diasMes;
        dia++
    ) {

        const fecha =
            `${año}-${String(
                mes + 1
            ).padStart(
                2,
                "0"
            )}-${String(
                dia
            ).padStart(
                2,
                "0"
            )}`;


        const equiposEseDia =
            equipos.filter(
                equipo =>
                    equipo.proximoMantenimiento ===
                    fecha
            );


        const hoy =
            new Date();


        const esHoy =

            hoy.getFullYear() ===
            año

            &&

            hoy.getMonth() ===
            mes

            &&

            hoy.getDate() ===
            dia;


        html += `

            <div
                class="calendar-day ${
                    esHoy
                        ? "today"
                        : ""
                }"
            >

                <strong>

                    ${dia}

                </strong>


                ${
                    equiposEseDia.length
                        ? `

                            <span class="calendar-event">

                                🔧
                                ${equiposEseDia.length}

                            </span>

                          `
                        : ""
                }

            </div>

        `;

    }


    contenedor.innerHTML =
        html;

}


/* =========================================================
   24. UTILIDADES GENERALES
   ========================================================= */

function actualizarElemento(
    id,
    valor
) {

    const elemento =
        document.getElementById(
            id
        );


    if (elemento) {

        elemento.textContent =
            valor;

    }

}


function obtenerFechaActual() {

    const hoy =
        new Date();


    const año =
        hoy.getFullYear();


    const mes =
        String(
            hoy.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const dia =
        String(
            hoy.getDate()
        ).padStart(
            2,
            "0"
        );


    return `${año}-${mes}-${dia}`;

}


/* =========================================================
   25. INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        actualizarDashboard();

        prepararFiltros();

        mostrarInventario();

        renderizarCalendario();

        comprobarQR();

    }
);