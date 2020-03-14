const select = document.getElementById('faq');
const answers = document.querySelectorAll('.ns-faq__answer')
let visibleAnswer = null;
let hideAllAnswers = function(){
    answers.forEach( (item, index) => {
        item.classList.add('ns-faq__answer--hidden')
    })
}
select.onchange = function(ev){
    const selected = document.getElementById('answer'+ev.target.value)
    hideAllAnswers()
    selected.classList.remove('ns-faq__answer--hidden')
}