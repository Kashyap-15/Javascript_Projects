// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'The Boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

// select items
const img = document.getElementById("person_img");
const Pname = document.getElementById("person_name");
const occuoation = document.getElementById("person_occu");
const feedback = document.getElementById("person_para");

// btn selector
const prevbtn = document.getElementById("reverse");
const nextbtn = document.getElementById("forward");
const randombtn = document.getElementById("random_btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded",function () {
    showPerson(currentItem);
})

// show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src=item.img;
    Pname.textContent = item.name;
    occuoation.textContent = item.job;
    feedback.textContent = item.text;
}

// show next feedback
nextbtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1) currentItem=0;
    showPerson(currentItem);
})

// previous feedback 
prevbtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0) currentItem=reviews.length-1;
    showPerson(currentItem);
})

// random review 
randombtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showPerson(currentItem);
})