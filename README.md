![Banner Generador Alumnos](screenshots/banner3.png)

## Creador
- **Estudiante:** Natalia Valenzuela ([@NataliaVlza](https://github.com/NataliaVlza))
- **Institución:** Universidad de Sonora (UNISON)
- **Modalidad:** Proyecto guiado y desarrollado en sesiones prácticas de laboratorio.

---

## Descripción
Aplicación web / herramienta interactiva diseñada para la generación masiva de registros sintéticos de alumnos para bases de datos relacionales y no relacionales. Permite parametrizar el número de datos a generar (desde 1 hasta 50,000 registros) y exportarlos en múltiples formatos para facilitar la carga inicial de datos (*data seeding*) en proyectos académicos o de desarrollo.

### Funcionalidades y requisitos implementados:
- **Generación Parametrizada:** Selector de cantidad de registros con botones de ajuste rápido (*Mín: 1*, *Máx: 50k*).
- **Múltiples Formatos de Exportación:** Soporte para sentencias `INSERT` en **SQL (MySQL / MariaDB)**, **PostgreSQL**, así como estructuras en **JSON** y **CSV (Excel)**.
- **Formateo de Datos:** Generación automática de matrículas, nombres, apellidos formateados en mayúsculas (`UPPER`) y direcciones de correo institucional (`@unison.mx`).
- **Descarga Directa:** Opción para previsualizar el código generado en pantalla y guardar directamente el archivo resultante en el equipo local.

## Imágenes del Proyecto

### 1. Pantalla de Inicio
Interfaz principal del sistema que permite configurar el volumen de datos a generar y seleccionar el motor o formato de exportación deseado.  

![Pantalla de Inicio](screenshots/pantalla_inicio.png)

---

### 2. Generación en SQL (MySQL / MariaDB)
Vista previa de la sintaxis de inserción generada en formato compatible con MySQL y MariaDB.  

![Formato MySQL](screenshots/formato_mysql.png)

---

### 3. Generación en PostgreSQL
Construcción de sentencias de inserción adaptadas para la sintaxis de PostgreSQL.  

![Formato PostgreSQL](screenshots/formato_sql.png)

---

### 4. Generación en Formato JSON
Estructuración de los datos sintéticos de alumnos en formato de objetos JSON para aplicaciones no relacionales o consumo de APIs.  

![Formato JSON](screenshots/formato_json.png)

---

### 5. Generación en Formato CSV (Excel)
Formateo de la información delimitada por comas lista para su importación en hojas de cálculo como Excel.  

![Formato CSV](screenshots/formato_csv.png)

---

### 6. Archivos Generados y Descargados
Muestra de los diferentes archivos descargados (.json, .csv, .sql) listos para ser utilizados en los gestores de bases de datos.  

![Descargas Formatos](screenshots/descargas_formatos.png)
