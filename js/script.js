const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Recupero elementi dal DOM

const newCol = document.querySelector('.team');

// console.log(newCol)

// Dichiaro variabile vuota che andrò a riempire con la stringa per l'HTML

let newCards = '';

// Ciclo l'array di oggetti

for(let i=0; i<teamMembers.length; i++){
  // destrutturo gli elementi ciclati
  const singleMember = teamMembers[i];
  const {name, role, email, img} = singleMember;

   // creo la card

   newCards += `<div class="col-xl-4 col-lg-6">
   <div class="carta d-flex  text-white bg-black ">
       <div class="immagine">
           <img src=${img} alt="">
       </div>
       <div class="testo mx-3 py-3">
           <h5 class="pit">${name}</h5>
           <div class="mb-2">${role}</div>
           <div class="text-info">${email}</div>
       </div>
   </div>
</div>`
  

}

newCol.innerHTML= newCards;