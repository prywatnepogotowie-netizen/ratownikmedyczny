/* ratownikmedyczny.online – dawki u dzieci i wzory do przeliczeń.
   Źródła: karty leków na stronie (ChPL, rozporządzenie MZ z 22.06.2023), wytyczne ERC 2025 (PLS), APLS (masa ciała, parametry).
   Materiał edukacyjny – w praktyce obowiązują procedury, ChPL i decyzja lekarza. */
(function(){
// d: dawka na kg (lo–hi), u: jednostka dawki, max: maks. dawka jednorazowa, c: stężenie roztworu {v: ile jednostek dawki w 1 ml, txt: opis}
// fx: dawka stała (bez liczenia na kg), no: lek nie dla dzieci
const P={
adrenalina:[
 {w:'NZK iv/io',d:10,u:'µg',max:1000,c:{v:100,txt:'1 mg rozcieńczony do 10 ml NaCl 0,9% = 100 µg/ml'},n:'Co 3–5 min. Rytm nie do defibrylacji: jak najszybciej; do defibrylacji: po 3. wyładowaniu.'},
 {w:'Anafilaksja im',d:10,u:'µg',max:500,c:{v:1000,txt:'Amp. 1 mg/ml (1:1000), nierozcieńczona'},n:'W przednio-boczną część uda; można powtórzyć po 5 min. Wg wieku: < 6 lat 150 µg, 6–12 lat 300 µg, > 12 lat 500 µg.'},
 {w:'Krup – nebulizacja',d:0.5,u:'ml',max:5,c:null,n:'Roztwór 1 mg/ml nierozcieńczony (0,5 ml/kg, maks. 5 ml).'}],
amiodaron:[
 {w:'NZK, po 3. defibrylacji',d:5,u:'mg',max:300,c:{v:50,txt:'Amp. 150 mg / 3 ml = 50 mg/ml'},n:'Bolus iv/io.'},
 {w:'NZK, po 5. defibrylacji',d:5,u:'mg',max:150,c:{v:50,txt:'Amp. 150 mg / 3 ml = 50 mg/ml'},n:'Druga dawka – maks. 150 mg (ERC 2025).'}],
adenozyna:[
 {w:'1. dawka',d:0.1,u:'mg',max:6,c:{v:3,txt:'Amp. 6 mg / 2 ml = 3 mg/ml'},n:'Szybki bolus, od razu przepłucz 5–10 ml NaCl.'},
 {w:'Kolejna dawka',d:0.2,u:'mg',max:12,c:{v:3,txt:'Amp. 6 mg / 2 ml = 3 mg/ml'},n:'Jeśli pierwsza nie zadziałała.'}],
atropina:[{w:'Bradykardia',d:20,u:'µg',max:500,c:{v:500,txt:'Amp. 0,5 mg/ml = 500 µg/ml'},n:'U dziecka bradykardia to najczęściej niedotlenienie – najpierw tlen i wentylacja.'}],
lidokaina:[{w:'NZK zamiast amiodaronu',d:1,u:'mg',max:100,c:{v:20,txt:'Lidokaina 2% = 20 mg/ml'},n:'Po 3. i 5. wyładowaniu, gdy nie ma amiodaronu.'}],
glukoza:[{w:'Hipoglikemia – glukoza 10%',d:0.2,u:'g',max:20,c:{v:0.1,txt:'Glukoza 10% = 0,1 g/ml (100 mg/ml)'},n:'0,2 g/kg = 2 ml/kg roztworu 10%. Potem kontrola glikemii.'}],
'sol-fizjologiczna-nacl-09':[{w:'Wstrząs – bolus',d:10,u:'ml',max:500,c:null,n:'Po każdym bolusie ponowna ocena (ABCDE). U nastolatków jak u dorosłych.'}],
pwe:[{w:'Wstrząs – bolus',d:10,u:'ml',max:500,c:null,n:'Płyn zbilansowany – pierwszy wybór. Ponowna ocena po bolusie.'}],
ringer:[{w:'Wstrząs – bolus',d:10,u:'ml',max:500,c:null,n:'Ponowna ocena po każdym bolusie.'}],
midazolam:[{w:'Drgawki im / donosowo / podpoliczkowo',d:0.2,u:'mg',max:10,c:{v:5,txt:'Amp. 5 mg/ml'},n:'Zakres 0,2–0,3 mg/kg; można powtórzyć raz.'}],
diazepam:[{w:'Drgawki iv',d:0.2,hi:0.3,u:'mg',max:10,c:{v:5,txt:'Amp. 10 mg / 2 ml = 5 mg/ml'},n:'Bez dostępu iv: wlewka doodbytnicza 5 mg lub 10 mg (wg wieku i masy).'}],
fentanyl:[{w:'Ból iv',d:1,u:'µg',max:100,c:{v:50,txt:'Amp. 0,1 mg / 2 ml = 50 µg/ml'},n:'Powoli, pod kontrolą oddechu i SpO₂.'}],
morfina:[{w:'Ból iv',d:0.05,hi:0.1,u:'mg',max:10,c:{v:1,txt:'10 mg rozcieńczone do 10 ml = 1 mg/ml'},n:'Podawaj we frakcjach, obserwuj oddech.'}],
nalokson:[{w:'Zatrucie opioidami iv',d:0.01,u:'mg',max:0.4,c:{v:0.4,txt:'Amp. 0,4 mg/ml'},n:'Wg ChPL; przy braku efektu lekarz może zlecić 0,1 mg/kg.'}],
flumazenil:[{w:'Odwrócenie benzodiazepin',d:0.01,u:'mg',max:0.2,c:{v:0.1,txt:'0,5 mg / 5 ml = 0,1 mg/ml'},n:'Dziecko > 1 r.ż.; powtarzać co 60 s, łącznie maks. 0,05 mg/kg lub 1 mg.'}],
paracetamol:[{w:'Ból, gorączka iv',d:15,d10:7.5,u:'mg',max:750,c:{v:10,txt:'Roztwór 10 mg/ml'},n:'Do 10 kg: 7,5 mg/kg (maks. 30 mg/kg na dobę), powyżej 10 kg: 15 mg/kg (maks. 60 mg/kg na dobę). Odstęp ≥ 4 h.'}],
ibuprofen:[{w:'Ból, gorączka doustnie',d:10,u:'mg',max:400,c:{v:20,txt:'Zawiesina 100 mg / 5 ml = 20 mg/ml'},n:'Od 3. miesiąca życia; co 6–8 h.'}],
metamizol:[{w:'Ból, gorączka',d:8,hi:16,u:'mg',max:1000,c:{v:500,txt:'Amp. 1 g / 2 ml = 500 mg/ml'},n:'Niemowlęta tylko im. Wg ChPL i procedury.'}],
deksametazon:[{w:'Krup',d:0.15,hi:0.6,u:'mg',max:10,c:{v:4,txt:'Amp. 4 mg/ml'},n:'Jednorazowo po, im lub iv.'}],
hydrokortyzon:[{w:'Ciężka astma',d:4,u:'mg',max:100,c:{v:50,txt:'100 mg rozpuszczone w 2 ml = 50 mg/ml'},n:'Przełom nadnerczowy wg wieku: < 3 lat 25 mg, 3–12 lat 50 mg, > 12 lat 100 mg.'}],
klemastyna:[{w:'Alergia – dawka na dobę',d:0.025,u:'mg',max:2,c:{v:1,txt:'Amp. 2 mg / 2 ml = 1 mg/ml'},n:'Dawka dobowa, im, podzielona na 2 dawki. Od 1. roku życia.'}],
metoklopramid:[{w:'Nudności, wymioty',d:0.1,hi:0.15,u:'mg',max:10,c:{v:5,txt:'Amp. 10 mg / 2 ml = 5 mg/ml'},n:'Dzieci 1–18 lat, tylko lek drugiego rzutu; < 1 roku przeciwwskazany.'}],
'siarczan-magnezu':[{w:'Ciężka astma',d:40,u:'mg',max:2000,c:{v:200,txt:'Roztwór 20% = 200 mg/ml'},n:'Wlew przez 20 min.'}],
'wodoroweglan-sodu-84':[{w:'Wg zlecenia (np. zatrucie TLPD)',d:1,u:'mmol',max:50,c:{v:1,txt:'8,4% = 1 mmol/ml'},n:'1 mmol/kg = 1 ml/kg. U niemowląt rozcieńcza się do 4,2%.'}],
'kwas-traneksamowy':[{w:'Krwotok urazowy',d:15,u:'mg',max:1000,c:{v:100,txt:'Amp. 500 mg / 5 ml = 100 mg/ml'},n:'iv przez 10 minut.'}],
furosemid:[{w:'Wg zlecenia',d:1,u:'mg',max:40,c:{v:10,txt:'Amp. 20 mg / 2 ml = 10 mg/ml'},n:'Powoli iv.'}],
noradrenalina:[{w:'Wlew ciągły (µg/kg/min)',inf:true,d:0.05,hi:0.1,u:'µg',c:{v:80,txt:'4 mg rozcieńczone do 50 ml = 80 µg/ml'},n:'Pompa, osobna linia; miareczkuj wg ciśnienia.'}],
salbutamol:[{w:'Nebulizacja',fx:'< 5 lat: 2,5 mg · ≥ 5 lat: 2,5–5 mg',n:'Co 20 min wg efektu. Inhalator + spejser: 4–10 wdechów po 100 µg.'}],
glukagon:[{w:'Hipoglikemia im',fx:'< 25 kg: 0,5 mg · ≥ 25 kg: 1 mg',n:'Gdy nie ma dostępu iv.'}],
budezonid:[{w:'Krup – nebulizacja',fx:'2 mg w nebulizacji',n:'Spokój dziecka, na kolanach rodzica.'}],
hydroksyzyna:[{w:'Dziecko do 40 kg',d:2,u:'mg',max:100,c:{v:50,txt:'Amp. 100 mg / 2 ml = 50 mg/ml'},n:'To maksymalna dawka NA DOBĘ (2 mg/kg).'}],
klonazepam:[{w:'Drgawki iv',fx:'0,5 mg iv powoli',n:'Wg ChPL.'}],
tlen:[{w:'Cel SpO₂',fx:'94–98%',n:'Najmniejszy skuteczny przepływ.'}]
};
const NO={ketoprofen:'Postaci do wstrzykiwań nie stosuje się u dzieci – wybierz ibuprofen lub paracetamol.',tietylperazyna:'Przeciwwskazana u dzieci.',tikagrelor:'Nie stosuje się u dzieci.',prasugrel:'Nie stosuje się u dzieci.',klopidogrel:'Nie stosuje się u dzieci w ZRM.','kwas-acetylosalicylowy':'Nie u dzieci – ryzyko zespołu Reye’a.',izosorbid:'Nie stosuje się u dzieci.',kaptopryl:'Nie stosuje się u dzieci w ZRM.',hes:'Nie stosuje się u dzieci w ZRM.',metoprolol:'Nie ustalono dawkowania iv u dzieci.',drotaweryna:'Postać iniekcyjna nie jest zalecana u dzieci.',nitrogliceryna:'Nie stosuje się u dzieci w ZRM.'};

const f=(x,dp)=>{if(x==null||isNaN(x))return '–';let d=dp!=null?dp:(x>=100?0:x>=10?1:x>=1?2:3);let s=(+x.toFixed(d)).toString();return s.replace('.',',')};
const fm=x=>f(x,x<1?2:x<10?1:0);
const ue=u=>u==='µg'?'µg':u;
// wynik jednej pozycji dla masy kg
const per=(r,kg)=>r.d10&&kg<=10?r.d10:r.d;
function calc(r,kg){
 if(r.fx)return {fx:true,txt:r.fx};
 const lo=per(r,kg)*kg, hi=r.hi?r.hi*kg:null;
 let capLo=r.max&&lo>r.max, capHi=r.max&&hi&&hi>r.max;
 const dLo=capLo?r.max:lo, dHi=hi!=null?(capHi?r.max:hi):null;
 let ml=null,mlHi=null;
 if(r.inf){ // wlew: µg/kg/min → ml/h
  const a=lo*60/r.c.v, b=hi*60/r.c.v; return {inf:true,lo,hi,ml:a,mlHi:b};}
 if(r.u==='ml'){ml=dLo;mlHi=dHi}
 else if(r.c){ml=dLo/r.c.v;mlHi=dHi!=null?dHi/r.c.v:null}
 return {lo,hi,dLo,dHi,capLo,capHi,ml,mlHi};
}
// kroki wzoru jako HTML (do utrwalenia)
function steps(r,kg){
 const x=calc(r,kg),U=ue(r.u);
 if(x.fx)return '<div class="pf-st"><b>Dawka stała:</b> '+x.txt+'</div>';
 if(x.inf){return '<div class="pf-st"><span class="n">1</span><b>Dawka na minutę:</b> '+f(r.d)+(r.hi?'–'+f(r.hi):'')+' µg × '+f(kg,1)+' kg = <b>'+f(x.lo)+(r.hi?'–'+f(x.hi):'')+' µg/min</b></div>'+
  '<div class="pf-st"><span class="n">2</span><b>Na godzinę:</b> × 60 = '+f(x.lo*60)+(r.hi?'–'+f(x.hi*60):'')+' µg/h</div>'+
  '<div class="pf-st"><span class="n">3</span><b>Na ml/h:</b> ÷ '+f(r.c.v)+' µg/ml = <b class="pf-ml">'+f(x.ml,1)+(r.hi?'–'+f(x.mlHi,1):'')+' ml/h</b></div>';}
 let o='<div class="pf-st"><span class="n">1</span><b>Dawka:</b> '+f(per(r,kg))+(r.hi?'–'+f(r.hi):'')+' '+U+'/kg × '+f(kg,1)+' kg = <b>'+f(x.lo)+(r.hi?'–'+f(x.hi):'')+' '+U+'</b></div>';
 if(x.capLo||x.capHi)o+='<div class="pf-st warn"><span class="n">!</span><b>Przekracza maksimum</b> → podaj maks. <b>'+f(r.max)+' '+U+'</b></div>';
 else if(r.max)o+='<div class="pf-st ok"><span class="n">✓</span>Poniżej maksimum ('+f(r.max)+' '+U+')</div>';
 if(r.u!=='ml'&&r.c)o+='<div class="pf-st"><span class="n">2</span><b>Objętość:</b> '+f(x.dLo)+(x.dHi!=null?'–'+f(x.dHi):'')+' '+U+' ÷ '+f(r.c.v)+' '+U+'/ml = <b class="pf-ml">'+fm(x.ml)+(x.mlHi!=null?'–'+fm(x.mlHi):'')+' ml</b><small>'+r.c.txt+'</small></div>';
 if(r.u==='ml')o+='<div class="pf-st"><span class="n">2</span>Objętość = <b class="pf-ml">'+f(x.ml)+(x.mlHi!=null?'–'+f(x.mlHi):'')+' ml</b></div>';
 return o;
}
// wzór słowny do zapamiętania
function rule(r){
 if(r.fx)return r.fx;
 if(r.inf)return 'ml/h = µg/kg/min × kg × 60 ÷ µg w 1 ml';
 const U=ue(r.u);let s=f(r.d)+(r.hi?'–'+f(r.hi):'')+' '+U+'/kg × masa (kg)';
 if(r.d10)s+=' (do 10 kg: '+f(r.d10)+' '+U+'/kg)';
 if(r.max)s+=' (maks. '+f(r.max)+' '+U+')';
 if(r.c&&r.u!=='ml')s+=' → ÷ '+f(r.c.v)+' '+U+'/ml';
 return s;
}
const CSS='.pf{background:#fff7e6;border:2px solid #f4a261;border-radius:16px;padding:12px 14px;margin:12px 0}.pf h4{margin:0 0 6px;font-size:17px;color:#9a4a00}.pf .pf-rule{font-weight:800;background:#fff;border-radius:10px;padding:8px 10px;margin:6px 0;color:#14213d;border-left:5px solid #f4a261}'+
'.pf-kg{display:flex;align-items:center;gap:10px;margin:8px 0;font-weight:700}.pf-kg input[type=range]{flex:1;accent-color:#e63946}.pf-kg output{min-width:64px;text-align:right;font-size:18px;color:#e63946}'+
'.pf-st{background:#fff;border-radius:10px;padding:8px 10px 8px 40px;margin:5px 0;position:relative;font-size:15px;line-height:1.4}.pf-st .n{position:absolute;left:8px;top:8px;width:24px;height:24px;border-radius:50%;background:#457b9d;color:#fff;font-weight:800;font-size:13px;display:flex;align-items:center;justify-content:center}'+
'.pf-st.warn{background:#ffe3e3}.pf-st.warn .n{background:#e63946}.pf-st.ok .n{background:#2a9d8f}.pf-st small{display:block;color:#5b6b82;font-size:12.5px}.pf-ml{color:#e63946;font-size:17px}.pf .pf-w{font-weight:800;margin:10px 0 2px;color:#14213d}.pf .pf-n{font-size:13.5px;color:#5b6b82;margin:4px 0 0}.pf-no{background:#ffe3e3;border:2px solid #e63946;border-radius:14px;padding:10px 12px;margin:12px 0;font-weight:700}';
let cssOn=false;function css(){if(cssOn)return;cssOn=true;const s=document.createElement('style');s.textContent=CSS;document.head.appendChild(s)}
// box do karty leku / kursu; kg startowe 20
function box(id,kg0){
 css();if(NO[id])return '<div class="pf-no">🧒 Dzieci: '+NO[id]+'</div>';
 const R=P[id];if(!R)return '';
 const hasCalc=R.some(r=>!r.fx),uid='pf'+Math.random().toString(36).slice(2,7),kg=kg0||20;
 let o='<div class="pf" id="'+uid+'"><h4>🧒 Dzieci – wzór do zapamiętania</h4>';
 R.forEach(r=>{o+='<div class="pf-w">'+r.w+'</div><div class="pf-rule">'+rule(r)+'</div>'});
 if(hasCalc){o+='<div class="pf-kg">⚖️ Masa dziecka <input type="range" min="3" max="60" step="1" value="'+kg+'"><output>'+kg+' kg</output></div><div class="pf-out"></div>'}
 else o+='<div class="pf-out"></div>';
 o+='<p class="pf-n">Policz najpierw sam w głowie, potem porównaj. <a href="leki-obliczenia.html">🧮 Więcej w dziale Leki i obliczenia</a></p></div>';
 setTimeout(()=>{const el=document.getElementById(uid);if(!el)return;const rg=el.querySelector('input[type=range]'),out=el.querySelector('.pf-out');
  const draw=()=>{const k=rg?+rg.value:20;if(rg)el.querySelector('output').textContent=k+' kg';out.innerHTML=R.map(r=>'<div class="pf-w">'+r.w+'</div>'+steps(r,k)+(r.n?'<p class="pf-n">'+r.n+'</p>':'')).join('')};
  if(rg)rg.oninput=draw;draw()},0);
 return o;
}
window.PEDI={P,NO,calc,steps,rule,box,f,fm,per};
})();
