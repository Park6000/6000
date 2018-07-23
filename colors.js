var Links={
  setColor : function(color){
    // var alist = document.querySelectorAll('a');
    // i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);  // $('a') : 모든 a태그를 jquery로 제어하겠다.

  }
}
var Body = {
  setColor : function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}
function NightAndDay(self){
  if(self.value === '야간모드'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = '주간모드';
    Links.setColor('powderblue');
  }else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = '야간모드';
    Links.setColor('');
  }
}
