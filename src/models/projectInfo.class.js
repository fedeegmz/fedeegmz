export class ProjectInfo {
    name = "";
    description = "";
    repoUrl = "";
    deployUrl = "";
    techstack = "";

    constructor(name, description, repoUrl, deployUrl, techstack) {
        this.name = name;
        this.description = description;
        this.repoUrl = repoUrl;
        this.deployUrl = deployUrl;
        this.techstack = techstack;
    }
}