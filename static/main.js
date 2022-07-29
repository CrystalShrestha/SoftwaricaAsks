/*Hamburger Menu */
var hamburger_menu = document.querySelector('.hamburger-menu-container');
var button = hamburger_menu.querySelector('.hamburger-menu')
button.addEventListener('click', (event) => {
    hamburger_menu.classList.toggle('open')
})



/*Questions Animation*/
var index=0;
firstSlider();
durationSlider();

function firstSlider(){
    changeImage(index)
    question_items[index].classList.add('active');
    index++;
}

function durationSlider(){
    setInterval(()=>{
        if (!question_item_isSelected){
            changeImage(index)
            resetActive();
            question_items[index].classList.add('active');
            index<questions_img.length-1 ? index++ : index=0;
        }
    },3000);
}

/* Nav Search Hints */
var nav_search=document.querySelector('.nav-search');
var search=nav_search.querySelector('.search-container');
var search_hint=nav_search.querySelector('.search-hints');
var search_btn=document.querySelector('.search-btn');
var search_input=search.querySelector('input');

search.addEventListener('click',()=>{
    search_hint.classList.add('open');
})

window.addEventListener('click', function(e){
    if (!(nav_search.contains(e.target) || search_btn.contains(e.target))){
        search_hint.classList.remove('open');
    }
});

search_btn.addEventListener('click',()=>{

    if (!nav_search.classList.contains('open')){
        search_hint.classList.remove('open');
    }
    nav_search.classList.toggle('open');
    search_input.focus();
        setTimeout(()=>{
            search_hint.classList.toggle('open');
        },50)
});

let $id = (id) => document.getElementById(id);
var [login, register, form] = ['login', 'register', 'form'].map(id => $id(id));

[login, register].map(element => {
    element.onclick = function () {
        [login, register].map($ele => {
            $ele.classList.remove("active");
        });
        this.classList.add("active");
        this.getAttribute("id") === "register"?  form.classList.add("active") : form.classList.remove("active");
    }
});