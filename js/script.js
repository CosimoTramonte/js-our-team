
const lista = document.getElementById("lista");

const team = [
    {
        imgProfile: "img/wayne-barnett-founder-ceo.jpg",
        fullName: "Wayne Barnett",
        role: "Founder & CEO",
    },
    {
        imgProfile: "img/angela-caroll-chief-editor.jpg",
        fullName: "Angela Caroll",
        role: "Chief Editor",
    },
    {
        imgProfile: "img/walter-gordon-office-manager.jpg",
        fullName: "Walter Gordon",
        role: "Office Manager",
    },
    {
        imgProfile: "img/angela-lopez-social-media-manager.jpg",
        fullName: "Angela Lopez",
        role: "Social Media Manager",
    },
    {
        imgProfile: "img/scott-estrada-developer.jpg",
        fullName: "Scott Estrada",
        role: "Developer",
    },
    {
        imgProfile: "img/barbara-ramos-graphic-designer.jpg",
        fullName: "Barbara Ramos",
        role: "Graphic Designer",
    }
];

console.log("array dei membri del team",team);

for(let member of team){
    console.log("singolo membro del team",member);

    lista.innerHTML += `<img src="${member.imgProfile}">`;
    lista.innerHTML += `<h4>${member.fullName}</h4>`
    lista.innerHTML += `<h6>${member.role}</h6>`

    /*for (let key in member){
        lista.innerHTML += `
            <li> ${key}: ${member[key]} </li>
        `
    }*/

    lista.innerHTML += `
        <li> ------- </li>
    `
}