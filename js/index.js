/**
 * Created by Administrator on 2016/12/17.
 */
$(function(){
    var isClick=false;
    $(".musicImg").on("tap",function(){
        if(isClick==false){
            $("#music-audio").preload="";
            $(".music").css({"background":"url('')"});
            $(".musicImg").removeClass("infinite");
            isClick=true;
        }else {
            $("#music-audio").preload="auto";
            $(".music").css({"background":"url('img/music_c0fda01.gif') no-repeat top right"});
            $(".musicImg").addClass("infinite");
            isClick=false;

        }
        //console.log(1);


});
});
