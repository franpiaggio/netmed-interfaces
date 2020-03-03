const dropdowns = document.querySelectorAll('.ns-table__link--dropdown');
const closeAllDropDowns = function(){
    let mobileActions = document.querySelectorAll('.ns-table__mobile-actions');
    mobileActions.forEach(function(el,index){
        el.classList.remove('ns-table__mobile-actions--show');
    });
    dropdowns.forEach(function(el,index){
        el.classList.remove('ns-table__link--flip');
    });
};
dropdowns.forEach(function(el, index){
    el.onclick = function(){
        let container = this.parentNode.parentNode;
        let dropdown = container.querySelectorAll('.ns-table__mobile-actions')[0];
        if(dropdown.classList.contains('ns-table__mobile-actions--show')){
            this.classList.remove('ns-table__link--flip');
            dropdown.classList.remove('ns-table__mobile-actions--show');
        }else{
            closeAllDropDowns();
            this.classList.add('ns-table__link--flip');
            dropdown.classList.add('ns-table__mobile-actions--show');
        }
    }
})