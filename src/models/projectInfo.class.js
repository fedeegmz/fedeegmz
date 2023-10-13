export class ProjectInfo {
    name = "";
    description = "";
    imgUrl = "";
    repoUrl = "";
    deployUrl = "";
    techstack = []

    constructor(name, description, imgUrl, repoUrl, deployUrl, techstack) {
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        this.repoUrl = repoUrl;
        this.deployUrl = deployUrl;
        this.techstack = techstack;
    }
}