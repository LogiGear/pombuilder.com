$(document).ready(function(){
    $("#btn-quick-copy").click(function() {
        $('html,body').animate({
            scrollTop: $("#quick-copy-box").offset().top - (window.innerHeight - $("#quick-copy-box").height())/2},
            'slow', function(){
                $("#quick-copy-box").animate({
                    opacity: 0.25
                }, 200, function(){
                    $("#quick-copy-box").animate({
                        opacity: 1
                    }, 200);
                })
            });
    });

    $("#btn-smart-gen").click(function() {
        $('html,body').animate({
            scrollTop: $("#smart-gen-box").offset().top - (window.innerHeight - $("#smart-gen-box").height())/2},
            'slow', function(){
                $("#smart-gen-box").animate({
                    opacity: 0.25
                }, 200, function(){
                    $("#smart-gen-box").animate({
                        opacity: 1
                    }, 200);
                })
            });
    });

    $("#btn-locator-test").click(function() {
        $('html,body').animate({
            scrollTop: $("#locator-test-box").offset().top - (window.innerHeight - $("#locator-test-box").height())/2},
            'slow', function(){
                $("#locator-test-box").animate({
                    opacity: 0.25
                }, 150, function(){
                    $("#locator-test-box").animate({
                        opacity: 1
                    }, 150);
                })
            });
    });

    $(".play-acttion-container").click(function() {
        $('html,body').animate({
            scrollTop: $(".video-introduce-box").offset().top - (window.innerHeight - $(".video-introduce-box").height())/2},
            'slow', function(){
                $("#video-player").get(0).play();
            });
    });
});