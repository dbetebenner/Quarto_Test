$(window).scroll(function(){
    if($(window).scrollTop() > 35) {
        $('.navbar-container').addClass("shrink");
        $('.navbar-brand-container').addClass("shrink");
        $('.navbar-brand-logo').addClass("shrink");
    } else {
        $('.navbar-container').removeClass("shrink");
        $('.navbar-brand-container').removeClass("shrink");
        $('.navbar-brand-logo').removeClass("shrink");
    }
});
