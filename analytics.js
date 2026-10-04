/* Yandex Metrica: SPA pageviews and content-only event parameters. */
(function(){
 const counterId=113352932;
 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
 m[i].l=1*new Date();k=e.createElement(t);a=e.getElementsByTagName(t)[0];k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
 })(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');
 window.ym(counterId,'init',{defer:true,clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:false});
 let previousPage=null;
 window.portfolioPageView=(caseId=null)=>{
  const page=location.origin+location.pathname+(caseId?'#case/'+caseId:'');
  if(page===previousPage)return;
  const options={title:document.title,referer:previousPage||document.referrer};
  previousPage=page;
  window.ym(counterId,'hit',page,options);
 };
 window.dataLayer=window.dataLayer||[];
 window.portfolioTrack=(event,params={})=>{
  const detail={event:'portfolio_'+event,...params};
  window.dataLayer.push(detail);
  window.dispatchEvent(new CustomEvent('portfolio:analytics',{detail}));
  let goal='portfolio_'+event;
  if(event==='contact_click'&&['telegram','email'].includes(params.channel))goal='contact_'+params.channel;
  if(event==='case_open')goal='case_open';
  if(event==='email_copy')goal='email_copy';
  window.ym(counterId,'reachGoal',goal,params);
 };
})();
