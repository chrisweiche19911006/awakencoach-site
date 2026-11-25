// awakencoach.tw 全站共用：頁首、頁尾、浮動按鈕
(function(){
  // Google Analytics（GA4）：?from=ig 之類的來源，轉成 utm_source 讓 GA 分得開
  try{
    var q=new URLSearchParams(location.search),src=q.get('from');
    if(src&&!q.get('utm_source')){q.set('utm_source',src);q.set('utm_medium','social');q.set('utm_campaign','site-tools');
      history.replaceState(null,'',location.pathname+'?'+q.toString()+location.hash);}
  }catch(e){}
  var GA='G-XXGFTRK3QS',gs=document.createElement('script');gs.async=true;gs.src='https://www.googletagmanager.com/gtag/js?id='+GA;document.head.appendChild(gs);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA);
  document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="lin.ee"]');if(a)gtag('event','line_click',{page:location.pathname});
    var c=e.target.closest&&e.target.closest('[data-ac]');if(c)gtag('event','cta_click',{cta:c.dataset.ac,page:location.pathname});});
  // 結果頁下一步：私訊＋12/6 小課（<div class="ac-next" data-tool="x" data-sis="1"></div>）
  var IGDM='https://ig.me/m/chrisweiche1006',FORM='https://docs.google.com/forms/d/e/1FAIpQLSdlXvASgeAfJBT9IRQvanXCnOdNZ1JKSSKeNTjzBG35-FVDBQ/viewform';
  function fill(){document.querySelectorAll('.ac-next:not([data-done])').forEach(function(d){d.dataset.done=1;
    d.innerHTML='<div class="acn"><p>看完結果還是卡卡的？把這個結果傳給我，我陪妳一起看</p><a data-ac="dm" href="'+IGDM+'" target="_blank" rel="noopener">私訊 Chen 聊聊</a></div>'+
     '<div class="acn"><p>想當面抽一張牌，看清妳卡在哪一步嗎？12/6 我在現場等妳</p><a data-ac="event1206" href="'+FORM+'" target="_blank" rel="noopener">看 12/6 小課</a>'+
     (d.dataset.sis?'<small>帶一位姐妹一起來，現場多抽一題</small>':'')+'</div>';
    if(d.dataset.tool&&!d.dataset.nodone)window.acDone(d.dataset.tool);});}
  window.acDone=function(t){gtag('event','quiz_complete',{tool:t});};
  document.addEventListener('DOMContentLoaded',function(){fill();new MutationObserver(fill).observe(document.body,{childList:true,subtree:true});});
  var LINE='https://lin.ee/7TJ603O';
  var ig='<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.3 5.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 2c-2.7 0-3 0-4.1.1C5 2.2 2.2 5 2.1 7.9 2 9 2 9.3 2 12s0 3 .1 4.1c.1 2.9 2.9 5.7 5.8 5.8 1.1.1 1.4.1 4.1.1s3 0 4.1-.1c2.9-.1 5.7-2.9 5.8-5.8.1-1.1.1-1.4.1-4.1s0-3-.1-4.1C21.8 5 19 2.2 16.1 2.1 15 2 14.7 2 12 2zm0 1.8c2.7 0 3 0 4 .1 2 .1 3.9 2 4 4 .1 1 .1 1.3.1 4s0 3-.1 4c-.1 2-2 3.9-4 4-1 .1-1.3.1-4 .1s-3 0-4-.1c-2-.1-3.9-2-4-4-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-2 2-3.9 4-4 1-.1 1.3-.1 4-.1z"/></svg>';
  var th='<svg viewBox="0 0 24 24"><path d="M16.7 11.1l-.3-.1c-.2-3-1.8-4.7-4.6-4.7-1.6 0-3 .7-3.8 2l1.5 1c.6-.9 1.6-1.1 2.3-1.1 1 0 1.7.3 2.1.9.3.4.5 1 .6 1.7-.8-.1-1.7-.2-2.6-.1-2.6.1-4.3 1.7-4.2 3.8.1 1.1.6 2 1.5 2.6.8.5 1.8.8 2.8.7 1.4-.1 2.5-.6 3.2-1.6.6-.7.9-1.7 1-2.9.7.4 1.2 1 1.4 1.7.4 1.1.4 2.9-1 4.3-1.3 1.3-2.8 1.8-5.1 1.8-2.6 0-4.5-.8-5.8-2.4-1.2-1.5-1.8-3.6-1.8-6.3s.6-4.8 1.8-6.3c1.3-1.6 3.2-2.4 5.8-2.4 2.6 0 4.6.8 5.9 2.4.6.8 1.1 1.8 1.5 2.9l1.8-.5c-.4-1.4-1-2.6-1.9-3.6C17.3 1.9 14.8.8 11.7.8 8.6.8 6.2 1.9 4.6 3.9 3.2 5.7 2.4 8.3 2.4 11.4c0 3.1.8 5.7 2.2 7.5 1.6 2 4 3.1 7.1 3.1 2.8 0 4.7-.7 6.4-2.4 2.2-2.2 2.1-5 1.4-6.7-.5-1.2-1.5-2.2-2.8-2.8zm-4.9 4.6c-1.1.1-2.3-.4-2.3-1.6 0-.8.6-1.8 2.6-1.9h.7c.7 0 1.4.1 2 .2-.2 2.8-1.6 3.2-3 3.3z"/></svg>';
  var fb='<svg viewBox="0 0 24 24"><path d="M14 8V6.1c0-.9.6-1.1 1-1.1h2.6V1h-3.6C10 1 9.2 4 9.2 5.9V8H7v4h2.2v11H14V12h3.2l.4-4H14z"/></svg>';
  var ln='<svg viewBox="0 0 24 24"><path d="M12 2.5C6.5 2.5 2 6.1 2 10.6c0 4 3.6 7.4 8.4 8 .3.1.8.2.9.5.1.3.1.7 0 .9l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6.1 1.5-1.6 2.2-3.2 2.2-4.9C22.5 6.1 18 2.5 12 2.5z"/></svg>';
  var h=document.createElement('header');h.className='sh';
  h.innerHTML='<div class="sh-in"><a class="sh-logo" href="/"><small>龜山塔羅</small>覺醒教練 Chen</a>'+
   '<button class="sh-burger" aria-label="選單">☰</button><nav class="sh-menu">'+
   '<a href="/guishan-tarot/">龜山塔羅</a><a href="/#tools">免費小工具</a><a href="/#qa">感情問答</a><a href="/reviews/">客人回饋</a><a href="/#coach">情感陪跑</a>'+
   '<a class="sh-line" href="'+LINE+'" target="_blank" rel="noopener">加 LINE 聊聊</a></nav></div>';
  document.body.insertBefore(h,document.body.firstChild);
  h.querySelector('.sh-burger').onclick=function(){h.querySelector('.sh-menu').classList.toggle('open')};
  var f=document.createElement('footer');f.className='sf';
  f.innerHTML='<div class="sf-in"><div><b>龜山塔羅師 Chen｜覺醒教練</b><br>塔羅情感教練・情感陪跑<br>龜山可面談・雙北・線上全台灣</div>'+
   '<div><a href="/guishan-tarot/">龜山塔羅</a><a href="/reviews/">客人回饋</a><a href="/giver/">付出型測驗</a><a href="/match/">生日配對</a><br>'+
   '<a href="https://www.instagram.com/chrisweiche1006/" target="_blank" rel="noopener">Instagram</a><a href="https://www.threads.net/@chrisweiche1006" target="_blank" rel="noopener">Threads</a><a href="https://www.facebook.com/profile.php?id=100013899103094" target="_blank" rel="noopener">Facebook</a><a href="'+LINE+'" target="_blank" rel="noopener">官方 LINE</a></div></div><div class="sf-in" style="font-size:12px;opacity:.7;margin-top:8px">本站使用 Google Analytics 統計匿名流量</div>';
  document.body.appendChild(f);
  var b=document.createElement('div');b.className='fab';
  b.innerHTML='<div class="fab-more">'+
   '<a class="f-fb" href="https://www.facebook.com/profile.php?id=100013899103094" target="_blank" rel="noopener" aria-label="Facebook">'+fb+'Facebook</a>'+
   '<a class="f-th" href="https://www.threads.net/@chrisweiche1006" target="_blank" rel="noopener" aria-label="Threads">'+th+'Threads</a>'+
   '<a class="f-ig" href="https://www.instagram.com/chrisweiche1006/" target="_blank" rel="noopener" aria-label="Instagram">'+ig+'Instagram</a>'+
   '<a class="f-test" data-ac="fab-event" href="https://docs.google.com/forms/d/e/1FAIpQLSdlXvASgeAfJBT9IRQvanXCnOdNZ1JKSSKeNTjzBG35-FVDBQ/viewform" target="_blank" rel="noopener">📝 報名小課</a><a class="f-test" href="/giver/">🧡 免費測驗</a></div>'+
   '<button class="f-toggle" aria-label="更多">＋</button>'+
   '<a class="f-line" href="'+LINE+'" target="_blank" rel="noopener" aria-label="官方 LINE">'+ln+'<span>官方 LINE</span></a>';
  document.body.appendChild(b);
  var t=b.querySelector('.f-toggle');
  t.onclick=function(){var o=b.classList.toggle('open');t.textContent=o?'×':'＋'};
})();
