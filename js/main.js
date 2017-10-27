
// Hanldes fitting tabs on screen when viewport is too small
//-------------------------------------------------
$(window).resize(function() {
    if($(window).width() < 700) {
        $(".nav").css("display", "block");
        $(".tabs").css("position" , "static");
        $(".nav").css("text-align", "center");
        $(".tabs").css("margin-right" , "auto");
        $(".tabs").css("margin-left" , "auto");
        $(".name").css("margin-left" , "auto");
    }
    else {
        $(".nav").css("display", "inline-block");
        $(".tabs").css("position" , "absolute");
        $(".nav").css("text-align", "unset");
        $(".tabs").css("margin-right" , "10%");
        $(".tabs").css("margin-left" , "10%");
        $(".name").css("margin-left" , "10%");
    }
});
//-------------------------------------------------



// Handles "return to top" and header-tab scrolling
//-------------------------------------------------
$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

$('#aboutMeTab').click(function() {
    var scroll = $("#aboutMe").offset().top - 10;
    $("html, body").animate({ scrollTop: scroll }, "slow");
    return false;
});

$('#projectsTab').click(function() {
    var scroll = $("#projects").offset().top - 10;
    $("html, body").animate({ scrollTop: scroll }, "slow");
    return false;
});

$('#skillsTab').click(function() {
    var scroll = $("#skills").offset().top - 10;
    $("html, body").animate({ scrollTop: scroll }, "slow");
    return false;
});
//-------------------------------------------------