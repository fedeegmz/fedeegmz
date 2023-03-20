// import data_personalinfo from './..info/personal-info.json' assert {type: 'JSON'};
// import data_projects from './..info/projects.json' assert {type: 'JSON'};


// const header = document.querySelector('#header');
// const projects = document.querySelector('.projects');


// async function readData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         return data;
        
//     } catch (err) {
//         console.error(`Error al hacer fetch: ${err}`);
//     }
// }

// function renderPersonalInfo(data) {
//     let techStack = "";
//     for (let tc of data.techstack) {
//         techStack.concat(tc, ' ');
//     }
        
//     header.innerHTML = `
//         <section class="titles">
//             <h1>${data.name}</h1>
//             <h2>${data.profession}</h2>
//             <h3>${techStack}</h3>
//         </section>

//         <section class="personal-info">
//             <div class="about">
//                 <p>
//                     ${data.aboutme}
//                 </p>
//             </div>
//             <div class="contact">
//                 <button><strong>Download CV</strong></button>
//                 <div>
//                     <img src="./img/icon/email.png" alt="Icono de Gmail">
//                     <span>${data.contact.email}</span>
//                 </div>
//                 <div>
//                     <img src="./img/icon/whatsapp.png" alt="Icono de Whatsapp">
//                     <span>${data.contact.phone}</span>
//                 </div>
//             </div>
//         </section>
//     `;
// }

// function renderProjects(data) {
//     let stringProjects = "";
//     let stringTech = "";

//     for (let project of data) {

//         for (let tech of project.technologies) {
//             stringTech.concat(`
//             <div class="tech-box">
//                 <span>${tech}</span>
//             </div>
//             `);
//         }

//         stringProjects.concat(`
//         <div class="project-box ${project.title}">
//             <h3 class="project-box__title">${project.title}</h3>
                    
//             <div class="project-box__content">
//                 <div>
//                     <figure class="project-box__content__img">
//                         <img src=${project.image} alt="Imagen ilustrativa del proyecto">
//                     </figure>
//                     <div class="project-box__content__tech">
//                         ${stringTech}
//                     </div>
//                 </div>
                
//                 <p class="project-box__content__description">
//                     <a href=${project.github}>GitHub</a>
//                     <br>${project.description}
//                 </p>
//             </div>
//         </div>
//         `);
//     }
//     projects.innerHTML = stringProjects;
// }

// // (async () => {
// //     renderPersonalInfo(await readData("./../info/personal-info.json"));
// //     renderProjects(await readData("./../info/projects.json"));
// // })();
// renderPersonalInfo(data_personalinfo);
// renderProjects(data_projects);