var $leftbtn=$(".leftbtn");
var $rigthbtn=$('.rigthbtn');
var $list=$('.bannerleft li');
var liW=$list.eq(0).width();
$(window).resize(function(){
    liW=$list.eq(0).width();
})
var next=0;
var index=0;

var falg=true;
/*鼠标移上按键时停止轮播*/
$leftbtn.mouseover(function(){
    clearInterval(t)
}).mouseout(function(){
     t=setInterval(leftmove,2000);
})
$rigthbtn.mouseover(function(){
    clearInterval(t)
}).mouseout(function(){
    t=setInterval(leftmove,2000);
})

/*点击时选项*/
$leftbtn.click(function(){
    if(falg){
        falg=false
        leftmove()
    }

})
$rigthbtn.click(function(){
    if(falg){
        falg=false
        rigthmove()
    }
})
$list.css({'left':liW+'px'});
$list.eq(0).css({"left":"0"});
var t=setInterval(leftmove,2000);


/*向左*/
function leftmove(){
    next++
    if(next==$list.length){
        next=0;
    }
    $list.eq(next).css({'left':liW});
    $list.eq(index).css({'left':0});
    $list.eq(index).animate({'left':-liW});
    $list.eq(next).animate({'left':0},function(){
        falg=true
    });


    index=next;
}
/*向右*/
function rigthmove(){
    next--
    if(next<0){
        next=$list.length-1;
    }
    $list.eq(next).css({'left':-liW});
    $list.eq(index).css({'left':0});
    $list.eq(index).animate({'left':liW});
    $list.eq(next).animate({'left':0},function(){
        falg=true
    });


    index=next;
}

