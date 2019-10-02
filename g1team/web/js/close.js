define(['jquery'], function($) {
    let newNode = document.createElement('span');
    newNode.innerHTML = "x";
    let referenceNode = document.querySelector('.block-search');
    referenceNode.after(newNode);
    $('span').click(function(){
        if($(".search-wrap").hasClass("active")){        
            $(".search-wrap").removeClass("active");
        }
    });
});