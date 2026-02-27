var textoExportacion = "";

const catalogoApellidosNacionales = ["Hernández", "García", "Martínez", "López", "González", "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz", "Flores", "Gómez", "Morales", "Vázquez", "Jiménez", "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz", "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo", "Romero", "Álvarez", "Méndez", "Chávez", "Rivera", "Juárez", "Domínguez", "Herrera", "Medina", "Ramos", "Castro", "Ortega", "Vargas", "Santiago", "Salazar", "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva", "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras", "León", "Ríos", "Estrada", "Bautista", "Meza", "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava", "Lara", "Pacheco", "Soto", "Cervantes", "Robledo", "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón", "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza", "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés", "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara", "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro", "Parra", "Villalobos", "Duarte", "Serrano", "Ávila", "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"];
const catalogoApellidosExtranjeros = ["NULL", "Petrov", "Sidorov", "Smirnov", "Kuznetsov", "Popov", "Vasiliev", "Sokolov", "Mikhailov", "Novikov", "Fedorov", "Morozov", "Volkov", "Alekseev", "Lebedev", "Semenov", "Egorov", "Pavlov", "Kozlov", "Stepanov", "Nikolaev", "Orlov", "Andreev", "Makarov", "Zakharov", "Zaitsev", "Soloviev", "Belov", "Komarov", "Grigoriev", "Romanov", "Pakhomov", "Antonov", "Tarasov", "Medvedev", "Zhukov", "Frolov", "Baranov", "Kulikov", "Gavrilov", "Yakovlev", "Kalinin", "Chernov", "Bykov", "Korolev", "Ponomarev", "Gusev", "Danilov", "Zorin", "Belyaev", "Demidov", "Larionov", "Timofeev", "Savelyev", "Ignatov", "Kapustin", "Ryabov", "Dorofeev", "Melnikov", "Fomin", "Tikhonov", "Golubev", "Sergeev", "Mironov", "Lapshin", "Seleznev", "Prokhorov", "Ustinov", "Borodin", "Martynov", "Krylov", "Ovchinnikov", "Shestakov", "Losev", "Dyakov", "Pankratov", "Sapozhnikov", "Kiselev", "Rozhkov", "Kravtsov", "Shiryaev", "Klimov", "Fadeev", "Chistyakov", "Trofimov", "Eliseev", "Nazarov", "Goncharov", "Karpov", "Lytkin", "Bondarev", "Fedoseev", "Sukhanov", "Pisarev", "Lukyanov", "Ostrovsky", "Meshkov", "Shuvalov", "Plotnikov", "Gordeev"];
const catalogoNombresPrincipales = ["Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro", "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván", "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban", "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás", "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián", "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar", "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel", "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago", "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista", "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"];
const catalogoNombresSecundarios = ["Jean", "Pierre", "Paul", "Louis", "Jacques", "Michel", "Claude", "André", "Philippe", "Bernard", "François", "Julien", "Nicolas", "Thomas", "Antoine", "Sébastien", "Alexandre", "Mathieu", "Christophe", "Laurent", "Olivier", "Damien", "Romain", "Victor", "Hugo", "Lucas", "Maxime", "Baptiste", "Éric", "Loïc", "Théo", "Clément", "Florian", "Adrien", "Guillaume", "Benjamin", "Jérôme", "Rémi", "Yann", "Cédric", "Sophie", "Marie", "Camille", "Julie", "Claire", "Élise", "Chloé", "Manon", "Lucie", "Pauline", "Laura", "Émilie", "Caroline", "Sandrine", "Valérie", "Nathalie", "Isabelle", "Catherine", "Brigitte", "Monique", "Amandine", "Aurélie", "Justine", "Mélanie", "Anaïs", "Océane", "Margaux", "Noémie", "Léa", "Inès", "Zoé", "Agathe", "Maëlle", "Élodie", "Clara", "Romane", "Salomé", "Maëva", "Tiphaine", "Constance", "Gabriel", "Arthur", "Raphaël", "Nathan", "Enzo", "Kylian", "Noah", "Adam", "Samuel", "Eliott", "Lina", "Nina", "Aya", "Yasmine", "Imane", "Farah", "Sarah", "Nour", "Mariam", "Leïla"];

const azar = (lista) => lista[Math.floor(Math.random() * lista.length)];

function generarNombreCompuesto() {
    let nombre = azar(catalogoNombresPrincipales);
    if (Math.random() < 0.5) {
        nombre += ` ${azar(catalogoNombresSecundarios)}`;
    }
    return nombre;
}

function iniciarGeneracionDatos() {
    const tipo = document.getElementById("opcion").value;
    const registros = parseInt(document.getElementById('registros').value);

    if (isNaN(registros) || registros < 1) {
        alert("Por favor ingresa un número de registros válido.");
        return;
    }

    switch(tipo) {
        case "1":
        case "2":
            procesarEstructuraSQL(registros);
            break;
        case "3":
            procesarEstructuraCSV(registros);
            break;
        case "4":
            procesarEstructuraJSON(registros);
            break;
    }
}

function procesarEstructuraSQL(registros) {
    const baseExp = 224250000;
    let lineas = [];
    
    for (let i = 0; i < registros; i++) {
        const matricula = baseExp + i;
        const ape1 = azar(catalogoApellidosNacionales);
        const ape2Raw = azar(catalogoApellidosExtranjeros);
        const ape2 = ape2Raw === "NULL" ? "NULL" : `UPPER('${ape2Raw}')`;
        const nombre = generarNombreCompuesto();
        
        lineas.push(`(${matricula}, UPPER('${ape1}'), ${ape2}, '${nombre}', 'a${matricula}@unison.mx')`);
    }
    
    textoExportacion = "INSERT INTO alumnos VALUES \n" + lineas.join(",\n") + ";";
    document.getElementById("salida").innerText = textoExportacion;
}

function procesarEstructuraCSV(registros) {
    const baseExp = 224250000;
    let lineas = ["matricula,apellido1,apellido2,nombre,correo"];

    for (let i = 0; i < registros; i++) {
        const matricula = baseExp + i;
        const nombre = generarNombreCompuesto();
        lineas.push(`${matricula},${azar(catalogoApellidosNacionales)},${azar(catalogoApellidosExtranjeros)},${nombre},a${matricula}@unison.mx`);
    }
    
    textoExportacion = lineas.join("\n");
    document.getElementById("salida").innerText = textoExportacion;
}

function procesarEstructuraJSON(registros) {
    const baseExp = 224250000;
    let lista = [];

    for (let i = 0; i < registros; i++) {
        const matricula = baseExp + i;
        lista.push({
            matricula: matricula,
            apellido1: azar(catalogoApellidosNacionales),
            apellido2: azar(catalogoApellidosExtranjeros),
            nombre: generarNombreCompuesto(),
            correo: `a${matricula}@unison.mx`
        });
    }
    
    textoExportacion = JSON.stringify(lista, null, 4);
    document.getElementById("salida").innerText = textoExportacion;
}

function exportarDocumentoGenerado() {
    if (!textoExportacion) {
        alert("Primero debes generar los datos.");
        return;
    }

    const opcion = document.getElementById("opcion").value;
    const extensiones = { "1": "sql", "2": "sql", "3": "csv", "4": "json" };
    const ext = extensiones[opcion] || "txt";
    
    const blob = new Blob([textoExportacion], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    
    a.href = url;
    a.download = `sistema_escolar.${ext}`;
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}