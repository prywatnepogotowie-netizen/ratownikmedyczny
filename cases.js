// Przypadki kliniczne do kursów leków (ratownikmedyczny.online)
const CASES={
adenozyna:{title:'Kołatanie serca o 3 w nocy',
 story:'Jest 3:00. Jedziecie do 34-letniej kobiety. Od 40 minut czuje szybkie bicie serca, które zaczęło się nagle, „jak przełącznikiem”. Kilka podobnych epizodów w przeszłości mijało samo. Nie choruje przewlekle, nie bierze leków, nie ma alergii.',
 vit:[['HR','186','miarowo'],['RR','16','/min'],['SpO₂','98','%'],['BP','118/76','mmHg'],['GCS','15',''],['EKG','wąskie QRS','bez P']],
 steps:[
  {q:'Pacjentka jest przytomna, różowa, bez bólu w klatce i bez duszności. Co robisz najpierw?',o:[
   ['Kardiowersja elektryczna',0,'Nie ma cech niestabilności (wstrząs, omdlenie, niedokrwienie mięśnia sercowego, niewydolność serca). Kardiowersja jest dla pacjenta niestabilnego.'],
   ['Zmodyfikowany manewr Valsalvy',1,'Dobrze! Dmuchanie w strzykawkę 10 ml przez 15 s w pozycji półsiedzącej, potem szybkie położenie z uniesieniem nóg. Przerywa SVT nawet u ok. 40% pacjentów.'],
   ['Amiodaron 300 mg iv',0,'Amiodaron nie jest lekiem pierwszego wyboru w miarowym częstoskurczu z wąskimi QRS.']]},
  {q:'Manewr nie pomógł. Rytm bez zmian. Jak podasz lek?',o:[
   ['Adenozyna 6 mg powoli przez 2 minuty',0,'Adenozyna ma okres półtrwania < 10 s – przy wolnym podaniu rozłoży się, zanim dotrze do serca.'],
   ['Adenozyna 6 mg szybkim bolusem + 20 ml NaCl 0,9%',1,'Tak! Wkłucie w dole łokciowym, kranik trójdrożny, bolus w 1–2 s, od razu przepłukanie i uniesienie ręki. Włącz ciągły wydruk EKG, defibrylator gotowy.'],
   ['Atropina 0,5 mg iv',0,'Atropina przyspiesza serce – stosujesz ją w bradykardii, nie w częstoskurczu.']]},
  {q:'Po bolusie monitor pokazuje kilka sekund płaskiej linii. Pacjentka mówi: „Umieram!”. Co robisz?',o:[
   ['Zaczynasz RKO',0,'Pacjentka jest przytomna i mówi – to nie NZK. Krótka pauza to oczekiwane działanie adenozyny.'],
   ['Uspokajasz ją i patrzysz na monitor – rytm wraca',1,'Dokładnie! Uczucie „zbliżającej się śmierci”, ucisk w klatce i gorąco mijają po kilkunastu sekundach. Monitor: rytm zatokowy 78/min.'],
   ['Podajesz adrenalinę 1 mg',0,'Adrenalina jest tu zbędna i groźna – pacjentka ma krążenie.']]},
  {q:'A gdyby pacjentka miała ciężką astmę z częstymi napadami?',o:[
   ['Podajesz adenozynę jak zwykle',0,'Astma ze skurczem oskrzeli to przeciwwskazanie – adenozyna może wywołać ciężki skurcz oskrzeli.'],
   ['Salbutamol w nebulizacji',0,'Salbutamol nie przerywa SVT, a dodatkowo przyspiesza serce.'],
   ['Bez adenozyny: stabilna – transport z monitorowaniem i konsultacja lekarza; niestabilna – kardiowersja',1,'Tak. Zawsze zapytaj o astmę i leki (dipirydamol, karbamazepina, teofilina) przed podaniem adenozyny.']]}],
 end:'Zapisz EKG przed i po leku, godzinę, dawkę i efekt. Pacjentkę z pierwszym udokumentowanym SVT zwykle transportujesz do szpitala.'},

adrenalina:{title:'Użądlenie na działce',
 story:'Mężczyzna, 28 lat, 10 minut temu użądliła go osa. Ma pokrzywkę na całym ciele, obrzęk warg, chrypkę i świszczący oddech. Jest niespokojny, „boi się, że umrze”.',
 vit:[['HR','128','/min'],['RR','28','/min'],['SpO₂','90','%'],['BP','80/50','mmHg'],['GCS','15',''],['Skóra','pokrzywka','obrzęk']],
 steps:[
  {q:'Rozpoznajesz anafilaksję. Jaki lek podajesz jako pierwszy?',o:[
   ['Klemastyna iv',0,'Leki przeciwhistaminowe łagodzą skórę, ale nie ratują życia – nie cofają obrzęku krtani ani wstrząsu.'],
   ['Adrenalina 0,5 mg im w przednio-boczną część uda',1,'Dobrze! 0,5 mg (0,5 ml roztworu 1 mg/ml) domięśniowo, bez zwłoki. U dziecka 6–12 lat 0,3 mg, < 6 lat 0,15 mg.'],
   ['Hydrokortyzon iv',0,'Steroidy działają po godzinach – nie są lekiem pierwszego rzutu.']]},
  {q:'Po 5 minutach nadal świszczący oddech i BP 82/50. Co dalej?',o:[
   ['Powtarzasz adrenalinę 0,5 mg im',1,'Tak – dawkę im można powtarzać co 5 minut, jeśli nie ma poprawy.'],
   ['Adrenalina 1 mg iv w bolusie',0,'1 mg iv to dawka w NZK. U pacjenta z krążeniem grozi groźnymi arytmiami i przełomem nadciśnieniowym.'],
   ['Czekasz na efekt steroidów',0,'Każda minuta zwłoki zwiększa ryzyko zatrzymania krążenia.']]},
  {q:'Hipotensja się utrzymuje. Jak układasz pacjenta i co jeszcze robisz?',o:[
   ['Sadzasz go i podajesz furosemid',0,'Pozycja siedząca przy wstrząsie może doprowadzić do zatrzymania krążenia. Furosemid pogłębi hipowolemię.'],
   ['Płasko z uniesionymi nogami, tlen, szybki bolus krystaloidów 500–1000 ml',1,'Dobrze. Przy duszności bez wstrząsu – pozycja siedząca. Przy wstrząsie – płasko z uniesieniem nóg.'],
   ['Pozycja boczna i obserwacja',0,'Pacjent jest przytomny i we wstrząsie – potrzebuje leczenia, nie tylko obserwacji.']]}],
 end:'Każdy pacjent po anafilaksji jedzie do szpitala – możliwa reakcja dwufazowa po kilku godzinach.'},

atropina:{title:'Babcia, która „robi się słaba”',
 story:'Kobieta, 74 lata, od rana kręci się jej w głowie, przed chwilą prawie zemdlała w łazience. Jest blada, spocona, odpowiada wolno. Leczy się na nadciśnienie.',
 vit:[['HR','36','/min'],['RR','18','/min'],['SpO₂','95','%'],['BP','78/40','mmHg'],['GCS','14',''],['EKG','bradykardia','zatokowa']],
 steps:[
  {q:'Czy pacjentka ma cechy niestabilności i co robisz?',o:[
   ['Nie – obserwujesz',0,'Hipotensja, bladość, prawie omdlenie i zaburzenia świadomości to cechy wstrząsu – trzeba leczyć.'],
   ['Tak – atropina 0,5 mg iv',1,'Dobrze. Atropina 0,5 mg iv, dostęp żylny, tlen, 12-odprowadzeniowe EKG.'],
   ['Tak – adenozyna 6 mg',0,'Adenozyna jeszcze bardziej zwolni serce – jest dla częstoskurczów.']]},
  {q:'Po 0,5 mg tętno 40/min, ciśnienie bez zmian. Co dalej?',o:[
   ['Powtarzasz 0,5 mg co 3–5 min, maksymalnie 3 mg',1,'Tak – wg ERC dawka 0,5 mg, do łącznie 3 mg.'],
   ['Od razu 3 mg w jednym bolusie',0,'Dawkę zwiększasz stopniowo. 3 mg to dawka maksymalna, nie pojedyncza.'],
   ['Amiodaron 300 mg',0,'Amiodaron zwalnia serce – tu by zaszkodził.']]},
  {q:'Podałeś już 3 mg atropiny – brak poprawy. Co teraz?',o:[
   ['Kolejne dawki atropiny',0,'Powyżej 3 mg receptory są już zablokowane – kolejne dawki nie zadziałają.'],
   ['Adrenalina we wlewie 2–10 µg/min lub stymulacja przezskórna',1,'Dobrze. Przygotuj elektrody do stymulacji, sedacja/analgezja, pilny transport do ośrodka z kardiologią.'],
   ['Czekasz na efekt',0,'Pacjentka jest we wstrząsie – czekanie grozi NZK.']]}],
 end:'Zawsze sprawdź leki pacjenta (beta-blokery, digoksyna, werapamil) i potas – to częste przyczyny bradykardii u seniorów.'},

nalokson:{title:'Toaleta w klubie',
 story:'Mężczyzna, ok. 25 lat, znaleziony w toalecie klubu. Obok strzykawka. Nie reaguje na głos, oddycha bardzo rzadko, usta sine.',
 vit:[['RR','4','/min'],['SpO₂','78','%'],['HR','58','/min'],['BP','100/60','mmHg'],['GCS','6',''],['Źrenice','szpilkowate','']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['Od razu nalokson 2 mg iv',0,'Najpierw tlen do mózgu. Wentylacja workiem trwa sekundy, założenie wkłucia – minuty.'],
   ['Udrażniasz drogi oddechowe i wentylujesz workiem z tlenem',1,'Dobrze! Bezpieczeństwo (igła!), drogi oddechowe, wentylacja BVM z tlenem – dopiero potem lek.'],
   ['Pozycja boczna i obserwacja',0,'4 oddechy na minutę to niewydolność oddechowa – trzeba wentylować.']]},
  {q:'Masz dostęp iv. Jak podasz nalokson?',o:[
   ['0,4 mg iv i miareczkowanie do wydolnego oddechu',1,'Tak. Cel: wydolny oddech, nie pełne wybudzenie. Bez dostępu – podanie im lub donosowo.'],
   ['2 mg iv, żeby szybko go obudzić',0,'Gwałtowne odwrócenie daje zespół odstawienny: wymioty, agresję, czasem obrzęk płuc.'],
   ['Flumazenil 0,5 mg',0,'Flumazenil odwraca benzodiazepiny, nie opioidy.']]},
  {q:'Pacjent oddycha, jest przytomny i chce wyjść z klubu. Co mu mówisz?',o:[
   ['Podpisuje odmowę i może iść',0,'Nalokson działa 30–90 min – krócej niż wiele opioidów. Po tym czasie może znów przestać oddychać.'],
   ['Wyjaśniasz ryzyko nawrotu i przekonujesz do transportu',1,'Dobrze. Informujesz, że działanie naloksonu minie szybciej niż narkotyku. Wszystko dokumentujesz.'],
   ['Podajesz mu benzodiazepinę na uspokojenie',0,'Benzodiazepina nasili depresję oddechową.']]}],
 end:'Pamiętaj o bezpieczeństwie: igły, agresja po wybudzeniu, możliwe zatrucie mieszane.'},

glukoza:{title:'Agresywny pan z cukrzycą',
 story:'Mężczyzna, 60 lat, ok. 80 kg. Żona mówi, że rano wziął insulinę, ale nie zjadł śniadania. Jest splątany, spocony, agresywny, nie odpowiada logicznie.',
 vit:[['Glikemia','32','mg/dl'],['HR','108','/min'],['SpO₂','97','%'],['BP','150/90','mmHg'],['GCS','12',''],['Skóra','zimny pot','']],
 steps:[
  {q:'Jak wyrównasz glikemię?',o:[
   ['Słodki napój doustnie',0,'Pacjent z zaburzeniami świadomości nie połyka bezpiecznie – ryzyko zachłyśnięcia.'],
   ['Glukoza 20% iv, 0,2 g/kg',1,'Dobrze. Podajesz do dużej żyły, kontrolujesz wkłucie (glukoza drażni żyłę).'],
   ['Insulina sc',0,'Insulina obniża cukier – pogłębi hipoglikemię!']]},
  {q:'Ile ml glukozy 20% podasz pacjentowi 80 kg (0,2 g/kg)?',o:[
   ['16 ml',0,'16 to gramy, nie mililitry. 20% = 0,2 g w 1 ml.'],
   ['80 ml',1,'Tak: 0,2 g × 80 kg = 16 g. 16 g ÷ 0,2 g/ml = 80 ml.'],
   ['160 ml',0,'To byłoby 32 g – dwa razy za dużo.']]},
  {q:'A gdybyś nie mógł założyć wkłucia?',o:[
   ['Glukagon 1 mg im',1,'Dobrze (dzieci < 25 kg: 0,5 mg). Działa w 10–15 min, gorzej u alkoholików i niedożywionych.'],
   ['Glukoza 20% domięśniowo',0,'Glukoza podana poza żyłę uszkadza tkanki – tylko iv lub io.'],
   ['Czekasz na poprawę',0,'Hipoglikemia uszkadza mózg – trzeba działać.']]}],
 end:'Po 10–15 min zmierz glikemię ponownie i podaj posiłek. Po lekach doustnych (pochodne sulfonylomocznika) lub długiej insulinie – transport, bo hipoglikemia wróci.'},

salbutamol:{title:'Duszność u studentki',
 story:'Kobieta, 22 lata, astma od dzieciństwa. Od godziny narasta duszność, inhalator „nie pomaga”. Siedzi pochylona, opiera ręce na kolanach, mówi pojedynczymi słowami.',
 vit:[['RR','32','/min'],['SpO₂','89','%'],['HR','124','/min'],['BP','130/80','mmHg'],['GCS','15',''],['Osłuch.','świsty','']],
 steps:[
  {q:'Co podajesz na start?',o:[
   ['Tlen do SpO₂ 94–98% i salbutamol 5 mg w nebulizacji',1,'Dobrze. Nebulizację napędzaj tlenem, powtarzaj co 20 min w pierwszej godzinie.'],
   ['Diazepam na uspokojenie',0,'Benzodiazepiny hamują oddech – w ciężkiej astmie mogą doprowadzić do zatrzymania oddechu.'],
   ['Metoprolol na tachykardię',0,'Beta-blokery wywołują skurcz oskrzeli – przeciwwskazane w astmie. Tachykardia minie z poprawą oddechu.']]},
  {q:'Co dokładasz do leczenia?',o:[
   ['Ipratropium 0,5 mg do nebulizacji i steroid (budezonid / hydrokortyzon)',1,'Tak. Ipratropium dodatkowo rozszerza oskrzela, steroid hamuje stan zapalny.'],
   ['Furosemid 40 mg iv',0,'To nie obrzęk płuc – furosemid tu nie pomoże.'],
   ['Morfina na duszność',0,'Morfina hamuje oddech – niebezpieczna w astmie.']]},
  {q:'Po 15 min świsty ucichły, ale pacjentka jest senna, SpO₂ 86%. Co to znaczy?',o:[
   ['Poprawa – świsty ustąpiły',0,'Uwaga! „Cicha klatka” oznacza, że powietrze prawie nie przepływa – stan zagrożenia życia.'],
   ['Astma zagrażająca życiu: siarczan magnezu 2 g iv w 20 min, przygotowanie do wentylacji, pilny transport',1,'Dokładnie. Senność, cisza nad płucami, spadek SpO₂ = zbliżające się zatrzymanie oddechu.'],
   ['Kończysz nebulizacje i obserwujesz',0,'Pacjentka się pogarsza – trzeba zintensyfikować leczenie.']]}],
 end:'Cisza nad płucami, sinica, senność, bradykardia i hipotensja to objawy astmy zagrażającej życiu.'},

amiodaron:{title:'Zasłabnięcie na przystanku',
 story:'Mężczyzna, 58 lat, upadł na przystanku. Świadek prowadzi RKO od 4 minut. Podłączasz defibrylator – na monitorze migotanie komór.',
 vit:[['Tętno','brak',''],['Oddech','brak',''],['Rytm','VF',''],['RKO','świadek','4 min'],['Czas','04:00',''],['EtCO₂','—','']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['Defibrylacja i od razu RKO 30:2 przez 2 min',1,'Dobrze! VF to rytm do defibrylacji – każda minuta zwłoki zmniejsza szansę przeżycia.'],
   ['Najpierw amiodaron 300 mg',0,'Leki nigdy nie opóźniają defibrylacji.'],
   ['Najpierw intubacja',0,'Wysokiej jakości uciśnięcia i defibrylacja są ważniejsze niż zaawansowane drogi oddechowe.']]},
  {q:'Po 3. defibrylacji nadal VF. Jakie leki podajesz?',o:[
   ['Adrenalina 1 mg i amiodaron 300 mg iv/io',1,'Tak. Adrenalina potem co 3–5 min (co drugą pętlę).'],
   ['Amiodaron 150 mg',0,'150 mg to druga dawka – po 5. defibrylacji. Pierwsza dawka to 300 mg.'],
   ['Lidokaina 100 mg razem z amiodaronem',0,'Lidokaina jest alternatywą, gdy amiodaron jest niedostępny – nie podajesz obu.']]},
  {q:'Po 5. defibrylacji VF się utrzymuje. Co z amiodaronem?',o:[
   ['Druga dawka 150 mg iv/io',1,'Dobrze. Szukaj odwracalnych przyczyn (4H i 4T), rozważ zmianę położenia elektrod.'],
   ['Ponownie 300 mg',0,'Druga dawka to 150 mg.'],
   ['Już nic nie podajesz',0,'Po 5. wyładowaniu podajesz drugą dawkę 150 mg.']]}],
 end:'Po powrocie krążenia: EKG 12-odprowadzeniowe, SpO₂ 94–98%, ciśnienie skurczowe > 100 mmHg, transport do pracowni hemodynamiki.'}
};
