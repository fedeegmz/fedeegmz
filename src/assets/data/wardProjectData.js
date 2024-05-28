import { ProjectInfo } from "../../models/projectInfo.class";


const wardProjectData = new ProjectInfo(
    "Grupo Ward",
    "Ward es una web app donde se maneja contenido audiovisual. En la home page el usuario puede ver la transmisión en vivo (stream) del canal e información general relevante, como noticias o anuncios. En la página de canales se encuentran listados cada uno de los canales que son parte de Ward, con sus respectivas páginas. La aplicación consiste en un frontend con React JS y una API con FastAPI.",
    "",
    "https://grupoward.com",
    ["Python", "FastAPI", "MongoDB", "Javascript", "React JS"]
);

export default wardProjectData;
