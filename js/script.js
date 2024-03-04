$(function(){
    $(document).keydown(function(e){
        //console.log(e.keyCode); //위 38, 오른 39, 아래 40, 왼 37
        //offset()함수 -절대 위치값 position()-상대위치값
        //offset() => top, left  offset().top;
        //변수 = 요소.offset(); 변수.top, 변수.left
        //console.log($('.bluecar').offset());
        animationCar(e.keyCode)
        parking()    
        
    });
});

function animationCar(n){
    
    switch(n){
        case 37:
            $('.gas').show();
            $('.bluecar').css('transform','rotate(270deg)')
                        .stop()
                        .animate({ left:'-=200px'},500,function(){
                            $('.gas').hide();
                            let ofst = $(this).offset();
                            $('.top').text("top :" + ofst.top +"px");
                            $('.left').text("left :" + ofst.left +"px");
                        });
        break;
        case 38:
            $('.gas').show();
            $('.bluecar').css('transform','rotate(0deg)')
                        .stop()
                        .animate({ top:'-=200px'},500,function(){
                            $('.gas').hide();
                            let ofst = $(this).offset();
                            $('.top').text("top :" + ofst.top +"px");
                            $('.left').text("left :" + ofst.left +"px");
                        });
        break;
        case 39:
            $('.gas').show();
           $('.bluecar').css('transform','rotate(90deg)')
                        .stop()
                        .animate({ left:'+=200px'},500,function(){
                            $('.gas').hide();
                            let ofst = $(this).offset();
                            $('.top').text("top :" + ofst.top +"px");
                            $('.left').text("left :" + ofst.left +"px");
                        });
        break;
        case 40:
            $('.gas').show();
            $('.bluecar').css('transform','rotate(180deg)')
                        .stop()
                        .animate({ top:'+=200px'},500,function(){
                            $('.gas').hide();
                            let ofst = $(this).offset();
                            $('.top').text("top :" + ofst.top +"px");
                            $('.left').text("left :" + ofst.left +"px");
                        });
        break;
    }
    
    
    
   // 470<='.top' && '.top'<=491 && 337<='.left' && '.left' <= 358
}
function parking(){
   
            
        $('.park').show(function(){
            if(top==482.30&&left==351.02){
            alert("주차성공!~!");
        }
        });
        
    
    
}