const btns = document.querySelectorAll(".question_btn");
btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        console.log(e);
        console.log(e.currentTarget);
        const que_toggle = e.currentTarget.parentElement.parentElement;
        que_toggle.classList.toggle('show_text');
    })
})