/* Prawdziwe zapisy EKG – rysowanie pasków, 12 odprowadzeń i monitora.
   Zapisy: PTB-XL (CC BY 4.0), MIT-BIH Arrhythmia DB i CU Ventricular Tachyarrhythmia DB (ODC-By 1.0) – PhysioNet. */
(function(){
const D=()=>window.EKGD,C={},GAIN={vf:.5,vf2:.5,vffine:.7,vt:.55,tdp:.45,vfl:.7};let uid=0;
function dec(b){const s=atob(b),n=s.length>>1,a=new Float32Array(n);for(let i=0;i<n;i++){let v=s.charCodeAt(2*i)|(s.charCodeAt(2*i+1)<<8);if(v>32767)v-=65536;a[i]=v/100}return a}
function sig(k){return C[k]||(C[k]=dec(D().s[k].b))}
function grid(W,H,mm,id){return `<defs><pattern id="${id}" width="${5*mm}" height="${5*mm}" patternUnits="userSpaceOnUse">${[1,2,3,4].map(i=>`<path d="M${i*mm} 0V${5*mm}M0 ${i*mm}H${5*mm}" class="g1"/>`).join('')}<path d="M0 0V${5*mm}M0 0H${5*mm}" class="g5"/></pattern></defs><rect width="${W}" height="${H}" fill="url(#${id})"/>`}
function poly(y,fs,x0,y0,mm,from,to,gain){let p='';for(let i=from;i<to&&i<y.length;i++)p+=`${(x0+(i-from)/fs*25*mm).toFixed(1)},${(y0-y[i]*10*mm*(gain||1)).toFixed(1)} `;return p}
// pasek rytmu: 25 mm/s, 10 mm/mV
function strip(key,o){o=o||{};const fs=D().fs,y=o.y||sig(key),secs=o.secs||Math.min(10,y.length/fs),mm=o.mm||4,h=o.hmm||26,W=secs*25*mm,H=h*mm,id='eg'+(uid++);
 return `<svg class="ecg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMinYMid meet" role="img" aria-label="${o.label||'Zapis EKG'}">${grid(W,H,mm,id)}<polyline points="${poly(y,fs,0,H*(o.base||0.58),mm,0,Math.round(secs*fs),o.gain||GAIN[key]||1)}" class="tr"/></svg>`}
const LAY=[['I','aVR','V1','V4'],['II','aVL','V2','V5'],['III','aVF','V3','V6']];
// EKG 12-odprowadzeniowe (4 kolumny po 2,5 s + rytm II); o.hl = {odprowadzenie: kolor}
function lead12(rec,o){o=o||{};const fs=rec.fs,mm=o.mm||4,rowH=28*mm,W=10*25*mm+6*mm,H=rowH*4,id='eg'+(uid++),S=rec.S,ix=n=>rec.names.indexOf(n);
 let g=grid(W,H,mm,id),hl='',tr='',lb='';
 LAY.forEach((row,r)=>row.forEach((n,c)=>{const x0=6*mm+c*2.5*25*mm,y0=r*rowH+rowH*0.58,col=o.hl&&o.hl[n];
  if(col)hl+=`<rect x="${x0}" y="${r*rowH+2}" width="${2.5*25*mm}" height="${rowH-4}" fill="${col}" fill-opacity=".16" stroke="${col}" stroke-width="3" rx="6"/>`;
  tr+=`<polyline points="${poly(S[ix(n)],fs,x0,y0,mm,Math.round(c*2.5*fs),Math.round((c+1)*2.5*fs))}" class="tr"/>`;
  lb+=`<text x="${x0+6}" y="${r*rowH+22}" font-size="20" font-weight="800" fill="${col||'#0b1f3a'}">${n}</text>`}));
 const cal=r=>{const y0=r*rowH+rowH*0.58;return `<polyline points="0,${y0} ${mm},${y0} ${mm},${y0-10*mm} ${5*mm},${y0-10*mm} ${5*mm},${y0} ${6*mm},${y0}" class="tr"/>`};
 tr+=[0,1,2,3].map(cal).join('')+`<polyline points="${poly(S[ix('II')],fs,6*mm,3*rowH+rowH*0.58,mm,0,10*fs)}" class="tr"/>`;
 lb+=`<text x="${6*mm+6}" y="${3*rowH+22}" font-size="20" font-weight="800" fill="${o.hl&&o.hl.II?o.hl.II:'#0b1f3a'}">II (rytm)</text>`;
 return `<svg class="ecg e12r" viewBox="0 0 ${W} ${H}" role="img" aria-label="EKG 12-odprowadzeniowe">${g}${hl}${tr}${lb}</svg>`}
function load12(id){return fetch('ekg/'+String(id).padStart(5,'0')+'.json').then(r=>r.json()).then(j=>{j.S=j.L.map(dec);return j})}
// monitor na żywo: st() zwraca {on, rh:'sin'|'loop', key, hr}
function monitor(cv,st){const cx=cv.getContext('2d'),fs=D().fs;let q=[],px=0,last=0,acc=0,prev=null,cur={},bi=0;
 function beat(){const k=cur.key,y=sig(k),R=D().s[k].r;if(!R||R.length<3)return loop();const r=R[1+bi%(R.length-2)];bi++;
  const rr=Math.max(20,Math.round(fs*60/Math.max(20,cur.hr||70))),pre=Math.round(0.24*fs),post=Math.min(Math.round(0.46*fs),rr-pre-4);
  const b0=y[r-pre]||0;for(let i=-pre;i<post;i++)q.push((y[r+i]||0)-b0);let l=q[q.length-1]||0;for(let i=pre+post;i<rr;i++){l*=0.85;q.push(l)}}
 function loop(){const y=sig(cur.key);for(let i=0;i<y.length;i++)q.push(y[i])}
 function next(){if(!q.length){cur=st()||{};if(!cur.on){for(let i=0;i<fs/4;i++)q.push(0);return}if(cur.rh==='flat'){for(let i=0;i<fs/2;i++)q.push((Math.random()-.5)*0.02);return}cur.rh==='sin'?beat():loop()}return q.shift()}
 function f(ts){const dt=Math.min(60,ts-last);last=ts;const W=cv.width,H=cv.height,pps=W/(4*fs);acc+=dt/1000*fs;const on=(st()||{}).on;
  while(acc>=1){acc--;const v=next();const x=px;px=(px+pps);if(px>=W){px=0;prev=null}cx.fillStyle='#05080d';cx.fillRect(x,0,pps+12,H);
   const y=H*0.6-v*H*0.32*(GAIN[cur.key]||1);if(prev!=null){cx.strokeStyle=on?'#38f27a':'#334';cx.lineWidth=2.4;cx.beginPath();cx.moveTo(x-pps,prev);cx.lineTo(x,y);cx.stroke()}prev=y}
  requestAnimationFrame(f)}
 requestAnimationFrame(f);return{reset(){q=[]}}}
window.EKGL={dec,sig,strip,lead12,load12,monitor,LAY,
 SRC:'Prawdziwe zapisy EKG: PTB-XL (Wagner i in., Sci Data 2020, CC BY 4.0), MIT-BIH Arrhythmia Database (Moody, Mark 2001) i CU Ventricular Tachyarrhythmia Database (Nolle i in. 1986), PhysioNet (Goldberger i in. 2000), licencja ODC-By 1.0.'};
})();
