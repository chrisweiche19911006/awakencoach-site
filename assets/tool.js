// 小工具共用：單選按鈕、複製
function pick(group){
  group.querySelectorAll('.opt').forEach(function(b){
    b.addEventListener('click',function(){
      group.querySelectorAll('.opt').forEach(function(x){x.classList.remove('on')});
      b.classList.add('on');group.dataset.v=b.dataset.v;
      if(window.onPick)window.onPick();
    });
  });
}
function copyText(btn){
  var t=btn.parentNode.querySelector('span').textContent;
  var done=function(){btn.textContent='已複製';setTimeout(function(){btn.textContent='複製'},1500)};
  if(navigator.clipboard){navigator.clipboard.writeText(t).then(done,function(){prompt('長按複製',t)})}else{prompt('長按複製',t)}
}
function sayHTML(s){return '<div class="say"><span>'+s+'</span><button class="copy" onclick="copyText(this)">複製</button></div>'}
