import { ProjectInfo } from "../../models/projectInfo.class";


const shopsocialProjectData = new ProjectInfo(
    "Shop Social",
    "Shop Social es una REST API que permite navegar entre tiendas online, ver sus productos, agregar productos al carrito y comprar la lista de prodcutos previamente agregados. Está hecha en Python con FastAPI, y MongoDB para la base de datos. Para poder hacer uso de todos los endpoints, es necesario crear un usuario para hacer login. Una vez hecho login se envía un access token, este JWT se utiliza para autorizar al cliente.",
    "https://github.com/fedeegmz/shop-social",
    "",
    "Python, FastAPI, MongoDB"
);

export default shopsocialProjectData;
