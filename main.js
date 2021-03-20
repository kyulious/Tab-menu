/*  
focus event
focus : 상호작용이 가능한 콘텐츠요소만 포커스 이벤트 발생 가능
(input, a, button)
focusin : 포커스가 들어갔을때
focusout : 포커스가 떠났을떄
*/

var $tab = $("#tab");
var $btns = $tab.find("dt a");
var $boxs = $tab.find("dd");

$btns.on("click focusin", function(e){
    e.preventDefault();
    var isOn = $(this).hasClass("on");
    if(isOn) return;

    activation(this);    
});


function activation(self){
    var target = $(self).attr("href");

    $boxs.hide();
    $(target).show();

    $btns.removeClass("on");
    $(self).addClass("on");
}

$("#box").on({
    click: function(){
        console.log("You clicked")
    },
    mouseleave: function(){
        console.log("You mouse!")
    }
})