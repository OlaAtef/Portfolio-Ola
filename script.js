
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var submit_inp =document.getElementById('submit-inp');

var sidemenu = document.getElementById("sidemenu");

let menuActive = document.querySelectorAll('#header ul li a');
let section = document.querySelectorAll('section');


//About Tab Links............
function opentab( tabname ){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// show Menu Bar........
document.querySelector('#menu-icon').onclick = () =>{
    sidemenu.classList.toggle('active');
}

document.querySelector('#close-menu').onclick = () =>{
    sidemenu.classList.remove('active');
}

// Switch Mode The Website..........
const toggle_mode = document.querySelector('#toggle-mode');
toggle_mode.addEventListener('click', (e) =>{
const current_mode = document.body.dataset.mode;

if(current_mode === 'dark'){
    document.documentElement.style.setProperty('--first-color', '#080808');
    document.documentElement.style.setProperty('--third-color', '#fff');
const current_mode = document.body.dataset.mode = 'light';
// e.target.innerHTML = 'Light Mode';
} else if (current_mode === 'light'){
    document.documentElement.style.setProperty('--first-color', '#fff');
    document.documentElement.style.setProperty('--third-color', '#080808');
const current_mode = document.body.dataset.mode = 'dark';
// e.target.innerHTML = 'Dark Mode';
}
});

// Form Button
function wrongSend(){
    alert('Failed to send your message! Please try contacting us another way');
};


// Active Menu 
function ActiveMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuActive.forEach(sec => sec.classList.remove('active'));
    menuActive[len].classList.add('active');
};

ActiveMenu();
window.addEventListener('scroll', ActiveMenu)


window.onscroll = ()=>{
    ScroollHeader();
}

let Header = document.getElementById('fixed-nav');
let x = 0;

function ScroollHeader(){
if(window.pageYOffset > x){
    Header.classList.add('FixedHeader');
}else{
    Header.classList.remove('FixedHeader');
}
}