define(['jquery'], function($) {
    $('.sections.nav-sections').click(function(){
        $('.header.links').slideToggle('500');
    });
    $('.icon-wrap').click(function(){
    if($(".search-wrap").hasClass("active")){        
        $(".search-wrap").removeClass("active");
        }else{
            $(".search-wrap").addClass("active");
        }
    });
});


