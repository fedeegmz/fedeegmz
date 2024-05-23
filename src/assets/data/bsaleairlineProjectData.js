import { ProjectInfo } from "../../models/projectInfo.class";


const bsaleairlineProjectData = new ProjectInfo(
    "Bsale Airline",
    "Bsale Airline es una REST API implementada con Python/FastAPI. Contiene un único endpoint que lee los datos de pasajeros de una base de datos MySQL, y asigna asientos en un avión a esos pasajeros. Cumple ciertos requisitos, como que los pasajeros menores de 18 años tengan un asiento al lado de un mayor responsable, que a los pasajeros que compraron su boleto en una misma compra se le asignen asientos cercanos, etc. Además contiene tests con Pytest para verificar el correcto funcionamiento del sistema.",
    "https://github.com/fedeegmz/bsale-airline",
    "",
    "Python, FastAPI, MySQL"
);

export default bsaleairlineProjectData;
