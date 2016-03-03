var canMove = function(id){
    var win = $("#"+id);
    var moveX = 0;
    var moveY = 0;
    var moveTimer = null;
    var btn = $("#prompt .p-close");
    var login = $("#login");
    var cover = $("#cover-con");

    function init(){
        win.mousedown(down);
        win.mouseup(up);
        btn.on('click',close);
        login.on('click',open);
    }

    function down(e){
        win = $(e.target.offsetParent);
        var ele = $(e.target);
        if(ele.hasClass('move')){
            moveX = e.pageX - win.offset().left;
            moveY = e.pageY - win.offset().top;
            win.addClass('disable-select');
            $('body').addClass('pause');
            $('html').on('mousemove',move);
        }
    }

    function move(e){
        if(win){
            moveTimer = setTimeout(function(){
                win.css({"left" : (e.pageX - moveX) + "px" , "top" : (e.pageY - moveY) + "px"});
            }, 30);
        }else{
            return false;
        }
    }

    function up(e){
        win.removeClass('disable-select');
        $('body').removeClass('pause');
        $('html').off();
        moveTimer = setTimeout(function(){
            win = null;
        }, 50);
    }

    function close(e){
        win.fadeOut(0);
        cover.css('display','none');
    }

    function open(e){
        $("#prompt").fadeIn(0);
        cover.css('display','block');
    }

    init();

}
canMove("prompt");

var changeState = function(){
    var loginPage = $("#section1");
    var regPage = $("#section2");
    var toReg = $("#section1 .p-f-go");
    var toLogin = $("#section2 .p-f-return");
    var head = $("#prompt .p-u-login");

    function init(){
        toReg.on('click',go);
        toLogin.on('click',back);
    }

    function go(){
        loginPage.css("display","none");
        regPage.css("display","block");
        head.html('注册');
    }

    function back(){
        regPage.css("display","none");
        loginPage.css("display","block");
        head.html('登录');
    }
    init();
}
changeState();

