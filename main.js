let view_btn = document.getElementById('view-more');
view_btn.addEventListener('click', viewDesign);

function viewDesign(){
    window.scroll({
        top: 0,
        left: 1500,
        behavior: 'smooth'
      });
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

let home = document.getElementById('to-main');
home.addEventListener('click', backHome);

function backHome(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}