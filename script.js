const goskill=document.getElementById('link-skill');
const goproject=document.getElementById('link-project')
const gocontact=document.getElementById('link-contact')
const skill_section=document.getElementById('skills');
const project_section=document.getElementById('section-project');
const footer_section=document.getElementById('Contact');
const section_3 = document.getElementById("projects");
goskill.addEventListener('click',(e)=>{
skill_section.scrollIntoView({behavior:'smooth'})
})
goproject.addEventListener('click',()=>{
project_section.scrollIntoView({behavior:'smooth'});
})
gocontact.addEventListener('click',()=>{
  footer_section.scrollIntoView({behavior:"smooth"})
})
let cards = [
  {
    name: "Recipie-Hub",
    link: "https://recipiehub.vercel.app/",
    technology: "React CSS",
  },
  {
    name: "Clg-Website",
    link: "https://adp-it.netlify.app/",
    technology: "HTML CSS Javascript",
  },
  {
    name: "Dice-Game",
    link: "https://dice-game-010203.netlify.app/",
    technology: "HTML CSS Javascript",
  },
  {
    name: "World-Data",
    link: "https://worlds-data.netlify.app/",
    technology: "HTML CSS Javascript",
  },
];
cards.forEach((item, key) => {
 section_3.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 class="purple">${item.name}</h2>
    <img src="/card-${++key}.JPG" class="card-img" alt="">
    <h3>${item.technology}</h3>
 
    <a href=${item.link} target="_blank" class="purple">Go To Site</a>
  </div>
</div>`
  );
});
