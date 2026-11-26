// Przypadki kliniczne – część 2 (pozostałe leki)
Object.assign(CASES,{
budezonid:{title:'Szczekający kaszel w nocy',
 story:'Godzina 2:00. Chłopiec, 2 lata, ok. 12 kg. Obudził się z „szczekającym” kaszlem i chrypką. Przy płaczu słychać świst na wdechu. Od wczoraj katar i stan podgorączkowy. Mama jest bardzo zdenerwowana.',
 vit:[['RR','36','/min'],['SpO₂','96','%'],['HR','140','/min'],['Temp.','37,9','°C'],['Stridor','przy płaczu',''],['Wciąganie','lekkie','']],
 steps:[
  {q:'Co podejrzewasz i jak ułożysz dziecko?',o:[
   ['Krup; dziecko na kolanach mamy, bez straszenia go',1,'Dobrze. Płacz i lęk nasilają stridor. Nie zaglądaj do gardła szpatułką.'],
   ['Ciało obce; od razu uderzenia w plecy',0,'Początek z infekcją, chrypka i szczekający kaszel wskazują na krup, nie zadławienie.'],
   ['Kładziesz dziecko płasko na noszach',0,'Pozycję wybiera dziecko – zwykle siedząca na rękach rodzica. Rozdzielenie z mamą nasila duszność.']]},
  {q:'Jaki lek podajesz?',o:[
   ['Budezonid 2 mg w nebulizacji',1,'Tak. Alternatywa: deksametazon doustnie lub iv. Steroid działa w ciągu kilku godzin.'],
   ['Salbutamol w nebulizacji',0,'W krupie problemem jest obrzęk krtani, nie skurcz oskrzeli – salbutamol nie pomoże.'],
   ['Antybiotyk',0,'Krup jest zwykle wirusowy, a antybiotyk nie jest lekiem ratunkowym.']]},
  {q:'Po 20 min stridor jest stale, także w spoczynku, dziecko jest blade i niespokojne. Co dokładasz?',o:[
   ['Adrenalina w nebulizacji, tlen, pilny transport',1,'Dobrze. Adrenalina wziewna działa szybko, ale krótko. Steroid działa dłużej. Dziecko jedzie do szpitala.'],
   ['Drugą dawkę budezonidu i obserwację w domu',0,'Stridor w spoczynku to krup ciężki – potrzebna jest adrenalina wziewna i transport.'],
   ['Diazepam na uspokojenie',0,'Benzodiazepiny hamują oddech i maskują niewydolność oddechową.']]}],
 end:'Stridor w spoczynku, sinica, senność lub wyczerpanie to krup zagrażający życiu.'},

deksametazon:{title:'Duszność u pana z POChP',
 story:'Mężczyzna, 68 lat, POChP, palacz od 40 lat. Od 3 dni ma więcej plwociny i narastającą duszność. Leki wziewne „przestały działać”.',
 vit:[['RR','26','/min'],['SpO₂','86','%'],['HR','112','/min'],['BP','150/90','mmHg'],['GCS','15',''],['Osłuch.','świsty','']],
 steps:[
  {q:'Jaki cel SpO₂ przyjmujesz u tego pacjenta?',o:[
   ['100% – maksymalny przepływ tlenu',0,'U chorego z POChP i zatrzymaniem CO₂ zbyt dużo tlenu może nasilić hiperkapnię i senność.'],
   ['88–92%, kontrolowany tlen',1,'Tak. Miareczkuj przepływ i obserwuj świadomość pacjenta.'],
   ['Bez tlenu – POChP to przeciwwskazanie',0,'Hipoksemia jest groźniejsza – tlen podajesz, tylko z niższym celem SpO₂.']]},
  {q:'Jakie leki podajesz?',o:[
   ['Salbutamol + ipratropium w nebulizacji oraz steroid ogólnoustrojowy (np. deksametazon)',1,'Dobrze. Leki rozszerzające oskrzela działają szybko, steroid zmniejsza zapalenie i skraca zaostrzenie.'],
   ['Tylko deksametazon',0,'Steroid działa po kilku godzinach – najpierw leki rozszerzające oskrzela.'],
   ['Furosemid 40 mg iv',0,'Świsty i plwocina wskazują na zaostrzenie POChP, a nie obrzęk płuc.']]},
  {q:'Jak podasz deksametazon iv?',o:[
   ['Szybki bolus w 2 s',0,'Szybkie podanie wywołuje nieprzyjemne pieczenie i świąd, zwłaszcza w okolicy krocza.'],
   ['Powoli, przez 1–2 minuty, ok. 6–8 mg',1,'Tak. Uprzedź pacjenta o możliwym uczuciu pieczenia.'],
   ['Domięśniowo w ramię 40 mg',0,'To dawka zbyt duża, a w ZRM drogą z wyboru jest iv lub im w dawce 6–8 mg.']]}],
 end:'Obserwuj senność i spadek częstości oddechów – to objawy narastania CO₂. Rozważ wczesne wsparcie wentylacji.'},

diazepam:{title:'Drgawki u dziecka z gorączką',
 story:'Dziewczynka, 3 lata, ok. 15 kg, od rana gorączkuje. Od 6 minut ma uogólnione drgawki. Rodzice nie potrafią założyć jej niczego do buzi, ale próbowali.',
 vit:[['Drgawki','6','min'],['SpO₂','90','%'],['HR','160','/min'],['Temp.','39,8','°C'],['Glikemia','98','mg/dl'],['Żyła','brak','']],
 steps:[
  {q:'Co robisz na początku?',o:[
   ['Wkładasz coś między zęby, żeby nie przygryzła języka',0,'Nigdy niczego nie wkładaj do ust – grozi to urazem i zadławieniem.'],
   ['Chronisz głowę, tlen, sprawdzasz glikemię',1,'Dobrze. Bezpieczeństwo, drogi oddechowe, tlen i glikemia (hipoglikemia to odwracalna przyczyna).'],
   ['Czekasz, aż drgawki same ustaną',0,'Napad trwający ≥ 5 min trzeba przerwać lekiem.']]},
  {q:'Nie masz dostępu do żyły. Jak podasz lek?',o:[
   ['Diazepam 10 mg doodbytniczo (wlewka)',1,'Tak. Dziecko ≥ 15 kg: 10 mg, < 15 kg: 5 mg. Alternatywa: midazolam im lub donosowo.'],
   ['Diazepam 10 mg domięśniowo',0,'Diazepam wchłania się z mięśnia wolno i nieprzewidywalnie – wybierz wlewkę albo midazolam.'],
   ['Czekasz na założenie wkłucia',0,'Nie opóźniaj leczenia – wlewka doodbytnicza nie wymaga żyły.']]},
  {q:'Po 10 minutach drgawki nadal trwają. Co dalej?',o:[
   ['Druga dawka benzodiazepiny, potem nie więcej niż 2 dawki przed szpitalem',1,'Dobrze. Po 2 dawkach rośnie ryzyko depresji oddechowej – przygotuj wentylację workiem.'],
   ['Trzecia i czwarta dawka diazepamu',0,'Przed szpitalem maksymalnie 2 dawki benzodiazepiny w drgawkach.'],
   ['Paracetamol – to tylko gorączka',0,'Lek przeciwgorączkowy nie przerwie trwającego napadu.']]}],
 end:'Po napadzie: pozycja bezpieczna, kontrola oddechu, obniżenie temperatury, transport. Pierwszy napad drgawek zawsze wymaga diagnostyki.'},

drotaweryna:{title:'Ból w boku „nie do wytrzymania”',
 story:'Mężczyzna, 42 lata. Nagły, falujący ból w prawej okolicy lędźwiowej, promieniujący do pachwiny. Nie może znaleźć sobie miejsca. Wymiotował raz. W przeszłości kamica nerkowa.',
 vit:[['NRS','9','/10'],['HR','98','/min'],['BP','150/90','mmHg'],['Temp.','36,8','°C'],['SpO₂','98','%'],['Objaw Goldflama','(+) prawy','']],
 steps:[
  {q:'Co podejrzewasz i co sprawdzasz, zanim dasz leki?',o:[
   ['Kolkę nerkową; wykluczasz groźne przyczyny: tętniak aorty (wiek, tętnienie), gorączkę',1,'Dobrze. Ból w boku u osoby starszej może być pękającym tętniakiem aorty brzusznej!'],
   ['Od razu podajesz leki bez badania',0,'Najpierw badanie – ból kolkowy może maskować groźne choroby.'],
   ['Zapalenie wyrostka – niczego nie podajesz',0,'Obraz (ból falujący, promieniujący do pachwiny, kamica w wywiadzie) wskazuje na kolkę nerkową.']]},
  {q:'Jakie leczenie przeciwbólowe wybierasz?',o:[
   ['Drotaweryna 40–80 mg iv powoli + lek przeciwbólowy (np. NLPZ lub metamizol)',1,'Tak. Drotaweryna tylko rozkurcza – w silnym bólu zawsze łącz ją z analgezją.'],
   ['Sama drotaweryna wystarczy',0,'Drotaweryna nie jest lekiem przeciwbólowym.'],
   ['Drotaweryna w szybkim bolusie',0,'Szybkie podanie iv grozi spadkiem ciśnienia i zapaścią.']]},
  {q:'W jakiej pozycji podajesz drotawerynę iv?',o:[
   ['Pacjent stoi przy karetce',0,'Ryzyko spadku ciśnienia i omdlenia – pacjent powinien leżeć.'],
   ['Pacjent leży, podajesz powoli, kontrolujesz ciśnienie',1,'Dobrze.'],
   ['Pozycja nie ma znaczenia',0,'Ma – lek może obniżyć ciśnienie.']]}],
 end:'Kolka z gorączką (zakażenie przy zablokowanym moczowodzie), jedyna nerka lub bezmocz – pilnie do szpitala.'},

fentanyl:{title:'Złamanie podudzia na budowie',
 story:'Mężczyzna, 35 lat, 80 kg. Spadł z rusztowania z ok. 2 m. Przytomny, krzyczy z bólu. Podudzie prawe zniekształcone, bez rany. Brak innych urazów w badaniu urazowym.',
 vit:[['NRS','10','/10'],['HR','110','/min'],['BP','135/85','mmHg'],['RR','22','/min'],['SpO₂','98','%'],['GCS','15','']],
 steps:[
  {q:'Jaka jest dawka początkowa fentanylu iv u tego pacjenta?',o:[
   ['1 µg/kg, czyli 80 µg (1,6 ml)',1,'Tak. 1 ml = 50 µg, więc 80 µg = 1,6 ml. Podawaj powoli przez 1–2 min.'],
   ['1 mg/kg, czyli 80 mg',0,'To tysiąc razy za dużo! Fentanyl dawkujesz w mikrogramach.'],
   ['0,1 µg/kg',0,'To dawka zbyt mała, by uśmierzyć silny ból.']]},
  {q:'Po 5 minutach NRS 6/10. Co robisz?',o:[
   ['Kolejna dawka 0,5 µg/kg (40 µg) i ponowna ocena',1,'Dobrze – miareczkujesz co 5 min do efektu, kontrolując oddech i świadomość.'],
   ['Od razu podwójna dawka',0,'Miareczkuj małymi porcjami – unikasz depresji oddechowej.'],
   ['Kończysz – musi wytrzymać',0,'Ból 6/10 przy złamaniu można i trzeba dalej leczyć.']]},
  {q:'Po kolejnej dawce pacjent śpi, oddycha 6 razy na minutę, SpO₂ 88%. Co robisz?',o:[
   ['Budzisz go, tlen, wspomagasz oddech workiem; nalokson w małych dawkach, gdy trzeba',1,'Tak. Najpierw oddech, potem nalokson miareczkowany – nie do pełnego wybudzenia.'],
   ['Kolejna dawka fentanylu',0,'To przedawkowanie – depresja oddechowa.'],
   ['Flumazenil',0,'Flumazenil odwraca benzodiazepiny, nie opioidy.']]}],
 end:'Przed opioidem zawsze przygotuj worek samorozprężalny i nalokson. Unieruchomienie złamania to też analgezja.'},

flumazenil:{title:'Za głęboka sedacja przed kardiowersją',
 story:'Kobieta, 66 lat, z migotaniem przedsionków i niestabilnością. Do kardiowersji zespół podał midazolam. Po zabiegu rytm zatokowy, ale pacjentka nie budzi się i oddycha płytko.',
 vit:[['RR','6','/min'],['SpO₂','87','%'],['HR','78','/min'],['BP','110/70','mmHg'],['GCS','7',''],['Rytm','zatokowy','']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['Flumazenil 0,5 mg iv w bolusie',0,'Najpierw drogi oddechowe i wentylacja. Pacjenta, którego można wentylować, nie trzeba natychmiast odwracać.'],
   ['Udrażniasz drogi oddechowe, tlen, wentylujesz workiem',1,'Dobrze.'],
   ['Nalokson',0,'Nalokson odwraca opioidy. Tu przyczyną jest midazolam.']]},
  {q:'Decydujesz się na flumazenil. Jak go podasz?',o:[
   ['0,2 mg iv przez 15 s, potem 0,1 mg co 60 s, do łącznie 1 mg',1,'Tak. Zwykle wystarcza 0,3–0,6 mg. Cel: wydolny oddech.'],
   ['1 mg od razu',0,'Miareczkuj – gwałtowne odwrócenie może wywołać drgawki i pobudzenie.'],
   ['0,01 mg/kg co 10 minut',0,'Podajesz co 60 s, a nie co 10 minut.']]},
  {q:'Pacjentka się wybudziła. Na co uważasz w transporcie?',o:[
   ['Na resedację – flumazenil działa krócej niż wiele benzodiazepin',1,'Dobrze. Obserwuj oddech i świadomość. W razie potrzeby kolejne dawki, maks. 3 mg/h.'],
   ['Na nic – lek działa wiele godzin',0,'Flumazenil działa krótko – sedacja może wrócić.'],
   ['Podajesz profilaktycznie kolejny 1 mg',0,'Podajesz tylko w razie nawrotu objawów.']]}],
 end:'Nie podawaj flumazenilu przy zatruciu mieszanym (np. z TLPD) ani pacjentom przyjmującym BZD przewlekle – grozi drgawkami.'},

furosemid:{title:'Duszność w nocy u pani z sercem',
 story:'Kobieta, 76 lat, niewydolność serca. Od kilku dni obrzęki nóg i przyrost masy o 3 kg. W nocy obudziła ją duszność, siedzi na brzegu łóżka. Kaszle, plwocina różowa i pienista. W domu bierze furosemid 40 mg rano.',
 vit:[['RR','30','/min'],['SpO₂','85','%'],['HR','108','/min'],['BP','180/100','mmHg'],['GCS','15',''],['Osłuch.','trzeszczenia','obustronnie']],
 steps:[
  {q:'Jak ułożysz pacjentkę i co podasz na start?',o:[
   ['Pozycja siedząca z opuszczonymi nogami, tlen, nitrogliceryna sl (RR wysokie)',1,'Dobrze. Przy RR skurczowym > 110 mmHg nitrogliceryna szybko zmniejsza obciążenie serca.'],
   ['Płasko z uniesionymi nogami',0,'To nasili zastój w płucach i duszność.'],
   ['Szybki bolus 500 ml płynów',0,'Pacjentka jest przewodniona – płyny pogorszą obrzęk płuc.']]},
  {q:'Jaką dawkę furosemidu iv wybierasz?',o:[
   ['40–80 mg iv (1–2× dawki domowej), powoli',1,'Tak. Pacjentka na diuretyku potrzebuje dawki co najmniej takiej jak doustna.'],
   ['10 mg iv',0,'U osoby przewlekle leczonej to za mało.'],
   ['200 mg w szybkim bolusie',0,'Za dużo i za szybko. Nie szybciej niż 4 mg/min – szybki bolus uszkadza słuch.']]},
  {q:'Inna pacjentka: duszność, BP 80/50, zimna skóra, bez obrzęków. Furosemid?',o:[
   ['Tak, zawsze przy duszności',0,'Bez przewodnienia i przy hipotensji furosemid pogłębi wstrząs.'],
   ['Nie – hipotensja i brak przewodnienia; szukasz przyczyny wstrząsu',1,'Dobrze. Warunek podania furosemidu: pacjent musi być przewodniony.'],
   ['Tak, w podwójnej dawce',0,'Przeciwwskazany w hipotensji.']]}],
 end:'Wynik pracy furosemidu oceniasz po diurezie i poprawie oddechu. Zabezpiecz pacjentkę przed transportem (cewnik/basen).'},

glukagon:{title:'Hipoglikemia bez dostępu do żyły',
 story:'Chłopiec, 9 lat, ok. 30 kg, cukrzyca typu 1. Po treningu piłki nożnej nie zjadł kolacji. Jest splątany, spocony, nie współpracuje. Żył nie widać, rzuca się.',
 vit:[['Glikemia','38','mg/dl'],['HR','124','/min'],['SpO₂','98','%'],['BP','100/60','mmHg'],['GCS','11',''],['Żyła','brak','']],
 steps:[
  {q:'Nie masz dostępu do żyły. Jaki lek podajesz?',o:[
   ['Glukagon 1 mg im (dziecko ≥ 25 kg)',1,'Tak. Dziecko < 25 kg: 0,5 mg. Od 4 r.ż. można też glukagon donosowo 3 mg.'],
   ['Glukoza 20% domięśniowo',0,'Glukozy nie podaje się domięśniowo – uszkadza tkanki.'],
   ['Słodki sok do picia',0,'Dziecko z zaburzeniami świadomości nie połyka bezpiecznie.']]},
  {q:'Po 10–15 minutach brak poprawy. Co robisz?',o:[
   ['Czekasz kolejne 30 min na drugą dawkę',0,'Nie czekaj – zakładaj dostęp i podaj glukozę iv lub io.'],
   ['Zakładasz dostęp (iv lub io) i podajesz glukozę',1,'Dobrze. Glukagon nie zadziała, gdy wątroba nie ma zapasów glikogenu (wysiłek, głód, alkohol).'],
   ['Podajesz insulinę',0,'Insulina pogłębi hipoglikemię.']]},
  {q:'Chłopiec się wybudził. Co dalej?',o:[
   ['Posiłek z węglowodanami, kontrola glikemii, często wymioty po glukagonie – obserwacja',1,'Tak. Glukagon często wywołuje nudności. Po wysiłku hipoglikemia może wrócić.'],
   ['Nic – jest dobrze',0,'Hipoglikemia może wrócić – trzeba podać jedzenie i kontrolować cukier.'],
   ['Kolejna dawka glukagonu na zapas',0,'Nie podaje się glukagonu profilaktycznie.']]}],
 end:'Glukagon działa gorzej u alkoholików, niedożywionych i po długim wysiłku. Jeśli jest dostęp iv, lekiem pierwszego wyboru jest glukoza.'},

heparyna:{title:'Ból w klatce i uniesienie ST',
 story:'Mężczyzna, 59 lat, 80 kg. Od 40 minut gniotący ból za mostkiem z potami. W EKG uniesienie ST w II, III, aVF. Teletransmisja – lekarz z pracowni hemodynamiki kwalifikuje do pierwotnej PCI.',
 vit:[['HR','64','/min'],['BP','130/80','mmHg'],['SpO₂','96','%'],['NRS','8','/10'],['EKG','STEMI','dolna'],['Czas','40 min','od bólu']],
 steps:[
  {q:'O co pytasz i co sprawdzasz przed heparyną?',o:[
   ['Krwawienia, udar krwotoczny, leki przeciwkrzepliwe, objawy rozwarstwienia aorty',1,'Dobrze. Ból promieniujący do pleców i różnica ciśnienia na ramionach to sygnał rozwarstwienia – wtedy heparyna jest przeciwwskazana.'],
   ['Nic – zawał to wskazanie zawsze',0,'Heparyna u pacjenta z rozwarstwieniem aorty lub krwawieniem może go zabić.'],
   ['Tylko alergię na penicylinę',0,'To nie ma związku z heparyną.']]},
  {q:'Jaka dawka heparyny dla 80 kg (70 j.m./kg)?',o:[
   ['5600 j.m. ≈ 1,1 ml (5000 j.m./ml); w wielu protokołach 5000 j.m.',1,'Tak. Zawsze przeliczaj dwa razy.'],
   ['56 000 j.m.',0,'To dziesięć razy za dużo!'],
   ['560 j.m.',0,'Dziesięć razy za mało.']]},
  {q:'Pacjent mówi, że bierze rywaroksaban. Co robisz?',o:[
   ['Ukrywasz to, żeby nie opóźniać transportu',0,'Informacja o lekach przeciwkrzepliwych zmienia leczenie w pracowni.'],
   ['Przekazujesz informację lekarzowi pracowni i postępujesz zgodnie z jego decyzją',1,'Dobrze. Leki przeciwkrzepliwe (warfaryna, NOAC) zmieniają decyzję o heparynie.'],
   ['Podajesz podwójną dawkę heparyny',0,'Ryzyko ciężkiego krwawienia.']]}],
 end:'Przy zawale ściany dolnej sprawdź V4R przed nitrogliceryną. Transport bezpośrednio do pracowni hemodynamiki.'},

hydrokortyzon:{title:'Słabość u pacjenta z chorobą Addisona',
 story:'Mężczyzna, 45 lat, choroba Addisona, przyjmuje hydrokortyzon doustnie. Od 2 dni wymiotuje i ma biegunkę, nie brał leków. Jest bardzo słaby, splątany, bóle brzucha.',
 vit:[['BP','75/45','mmHg'],['HR','124','/min'],['Glikemia','62','mg/dl'],['SpO₂','96','%'],['GCS','13',''],['Temp.','38,2','°C']],
 steps:[
  {q:'Co podejrzewasz?',o:[
   ['Przełom nadnerczowy',1,'Tak. Pacjent z niedoczynnością nadnerczy, który nie przyjmuje leków podczas choroby, jest zagrożony przełomem.'],
   ['Zatrucie pokarmowe – wystarczą płyny doustne',0,'Hipotensja, splątanie i hipoglikemia u pacjenta z Addisonem to stan zagrożenia życia.'],
   ['Udar mózgu',0,'Wywiad i objawy wskazują na przełom nadnerczowy.']]},
  {q:'Jaki lek i jaka dawka?',o:[
   ['Hydrokortyzon 100 mg iv lub im, bez zwłoki',1,'Dobrze. Rozpuść proszek w rozpuszczalniku, podaj iv powoli. To lek ratujący życie.'],
   ['Deksametazon 1 mg',0,'Lekiem z wyboru w przełomie jest hydrokortyzon w dawce 100 mg.'],
   ['Czekasz na wyniki w szpitalu',0,'Zwłoka zagraża życiu – hydrokortyzon trzeba podać od razu.']]},
  {q:'Co jeszcze podajesz?',o:[
   ['Płyny iv (bolus krystaloidu) i glukozę przy hipoglikemii',1,'Tak. Pacjent jest odwodniony i ma niski cukier.'],
   ['Furosemid',0,'Pacjent jest odwodniony – diuretyk pogorszy wstrząs.'],
   ['Nic więcej',0,'Hipotensja i hipoglikemia wymagają leczenia.']]}],
 end:'Pacjent z niedoczynnością nadnerczy często ma przy sobie kartę i zestaw do wstrzyknięcia – zapytaj o niego.'},

hydroksyzyna:{title:'Atak paniki w galerii handlowej',
 story:'Kobieta, 27 lat, nagle poczuła kołatanie serca, mrowienie rąk i „brak powietrza”. Boi się, że umiera. Podobne epizody miała przy stresie. Nie choruje przewlekle.',
 vit:[['RR','28','/min'],['SpO₂','99','%'],['HR','118','/min'],['BP','140/85','mmHg'],['Glikemia','104','mg/dl'],['EKG','tachykardia','zatokowa']],
 steps:[
  {q:'Co robisz, zanim uznasz, że to „tylko nerwy”?',o:[
   ['Wykluczasz przyczyny somatyczne: EKG, SpO₂, glikemia, wywiad (zator, astma, tarczyca, narkotyki)',1,'Dobrze. Pobudzenie i duszność mogą być objawem choroby, a nie diagnozą.'],
   ['Od razu podajesz lek uspokajający',0,'Najpierw wykluczasz groźne przyczyny.'],
   ['Każesz oddychać do torebki',0,'Oddychanie do torebki jest niebezpieczne, jeśli przyczyną jest np. zator lub zawał.']]},
  {q:'Wyniki są prawidłowe, pacjentka nadal bardzo się boi. Co najpierw?',o:[
   ['Spokojna rozmowa, wyjaśnienie, spowolnienie oddechu, bezpieczne miejsce',1,'Tak. Często to wystarcza. Lek rozważasz, gdy to nie pomaga.'],
   ['Diazepam 10 mg iv',0,'To zbyt silne leczenie łagodnego napadu lęku.'],
   ['Adrenalina',0,'Nie ma wskazań.']]},
  {q:'Rozmowa nie pomaga. Jaka dawka hydroksyzyny?',o:[
   ['50–100 mg głęboko im (u osoby starszej 25 mg)',1,'Dobrze. 1 ml = 50 mg. Uprzedź o senności – pacjentka nie może prowadzić samochodu.'],
   ['500 mg iv',0,'Za dużo, a hydroksyzynę w ZRM podaje się im.'],
   ['10 mg dla dorosłego',0,'Dawka zbyt mała.']]}],
 end:'Hydroksyzyna nie jest lekiem na anafilaksję, ciężkie pobudzenie, drgawki ani zespół odstawienny.'},

ibuprofen:{title:'Skręcona kostka na boisku',
 story:'Chłopiec, 10 lat, ok. 30 kg. Na meczu skręcił kostkę. Obrzęk, nie może stanąć na nodze. Rodzice są na miejscu. Brak alergii, nie choruje przewlekle.',
 vit:[['NRS','5','/10'],['HR','96','/min'],['SpO₂','99','%'],['Temp.','36,6','°C'],['Krążenie','prawidłowe','obwodowe'],['Czucie','prawidłowe','']],
 steps:[
  {q:'Co robisz najpierw, poza lekami?',o:[
   ['Unieruchomienie, schłodzenie, uniesienie kończyny, ocena krążenia i czucia',1,'Dobrze. To też zmniejsza ból.'],
   ['Każesz chodzić, żeby „rozchodzić”',0,'Przy podejrzeniu złamania kończynę trzeba unieruchomić.'],
   ['Nastawiasz staw',0,'Nie nastawiasz bez wskazań – tylko unieruchamiasz.']]},
  {q:'Jaka dawka ibuprofenu doustnie dla 30 kg?',o:[
   ['ok. 300 mg (10 mg/kg), zawiesina 100 mg/5 ml = 15 ml',1,'Tak. Maks. 30 mg/kg na dobę.'],
   ['30 mg',0,'Dziesięć razy za mało.'],
   ['1200 mg',0,'To maks. dawka dobowa dorosłego – za dużo.']]},
  {q:'W którym przypadku nie podasz ibuprofenu?',o:[
   ['Dziecko z odwodnieniem, wymiotami i biegunką',1,'Tak. NLPZ przy odwodnieniu grożą uszkodzeniem nerek. Przeciwwskazania to także krwawienie i choroba wrzodowa.'],
   ['Dziecko z gorączką',0,'Gorączka u dziecka > 3 mies. to wskazanie.'],
   ['Dziecko z bólem po urazie',0,'To typowe wskazanie.']]}],
 end:'W bólu silnym (NRS ≥ 7) ibuprofen może uzupełniać opioid, ale go nie zastępuje.'},

ipratropium:{title:'Napad astmy u nastolatka',
 story:'Chłopak, 15 lat, astma. Po biegu na WF ciężka duszność, mówi pojedynczymi słowami. Po dwóch dawkach salbutamolu z własnego inhalatora bez poprawy.',
 vit:[['RR','30','/min'],['SpO₂','90','%'],['HR','128','/min'],['BP','125/75','mmHg'],['GCS','15',''],['Osłuch.','świsty','']],
 steps:[
  {q:'Co podajesz na start?',o:[
   ['Tlen, salbutamol 5 mg + ipratropium 0,5 mg w jednej nebulizacji',1,'Dobrze. W ciężkim napadzie łączysz oba leki.'],
   ['Tylko ipratropium',0,'Ipratropium nigdy nie stosujesz samodzielnie w ostrym napadzie – to dodatek do salbutamolu.'],
   ['Metoprolol na tachykardię',0,'Beta-blokery są przeciwwskazane w astmie.']]},
  {q:'Ile ml roztworu ipratropium 0,25 mg/ml odmierzysz dla 500 µg?',o:[
   ['2 ml',1,'Tak. 500 µg = 0,5 mg; 0,5 ÷ 0,25 = 2 ml. Uzupełnij NaCl do 3–4 ml.'],
   ['0,5 ml',0,'0,5 ml to 125 µg – za mało dla nastolatka.'],
   ['5 ml',0,'To 1,25 mg – za dużo.']]},
  {q:'Po 20 min nadal duszność. Co dalej?',o:[
   ['Powtórz nebulizację (do 3 razy w 1. godzinie) i dołóż steroid',1,'Dobrze. Przy braku poprawy rozważ siarczan magnezu 2 g iv.'],
   ['Kończysz leczenie',0,'Pacjent nadal jest w ciężkim napadzie.'],
   ['Podajesz morfinę na duszność',0,'Morfina hamuje oddech – przeciwwskazana.']]}],
 end:'Po ipratropium możliwa suchość w ustach i rozszerzenie źrenic, jeśli mgła trafi do oczu – nie myl tego z objawem neurologicznym.'},

ketoprofen:{title:'Ból kręgosłupa po dźwignięciu',
 story:'Mężczyzna, 50 lat. Po podniesieniu ciężkiej szafy nagły ból w okolicy lędźwiowej. Brak zaburzeń czucia, nietrzymania moczu ani osłabienia nóg. Choruje na nadciśnienie.',
 vit:[['NRS','8','/10'],['HR','90','/min'],['BP','150/90','mmHg'],['SpO₂','98','%'],['Temp.','36,7','°C'],['Neurologia','bez zmian','']],
 steps:[
  {q:'Czego musisz być pewny, zanim podasz NLPZ?',o:[
   ['Że to nie rozwarstwienie aorty, OZW ani krwawienie do jamy brzusznej',1,'Dobrze. Rozrywający ból do pleców, różnica ciśnień, tętniący guz w brzuchu – to sygnały alarmowe.'],
   ['Niczego – ból kręgosłupa to zawsze dyskopatia',0,'Ból pleców może być objawem pękającego tętniaka aorty.'],
   ['Tylko czy pacjent ma alergię na orzechy',0,'Bez znaczenia przy ketoprofenie.']]},
  {q:'Jak podasz ketoprofen iv?',o:[
   ['100 mg w 100 ml NaCl 0,9%, wlew 30–60 min',1,'Tak. Nie w bolusie. Maks. 200 mg na dobę.'],
   ['100 mg w szybkim bolusie',0,'Ketoprofen iv podaje się we wlewie.'],
   ['Razem z tramadolem w jednej butelce',0,'Powstaje osad – każdy lek w osobnym wlewie.']]},
  {q:'Przy jakich objawach ból kręgosłupa wymaga pilnego transportu?',o:[
   ['Zatrzymanie moczu, drętwienie krocza, osłabienie nóg',1,'Tak – to zespół ogona końskiego, wymaga pilnej operacji.'],
   ['Ból przy pochylaniu',0,'To typowy objaw bólu mechanicznego.'],
   ['Napięcie mięśni przykręgosłupowych',0,'To częsty, łagodny objaw.']]}],
 end:'NLPZ są przeciwwskazane w niewydolności nerek, czynnym krwawieniu i chorobie wrzodowej.'},

klemastyna:{title:'Swędząca wysypka po antybiotyku',
 story:'Kobieta, 30 lat. Drugiego dnia przyjmowania amoksycyliny pojawiła się swędząca pokrzywka na tułowiu i rękach. Oddycha swobodnie, nie ma obrzęku warg ani chrypki.',
 vit:[['RR','16','/min'],['SpO₂','99','%'],['HR','88','/min'],['BP','125/80','mmHg'],['Skóra','pokrzywka',''],['Oddech','bez świstów','']],
 steps:[
  {q:'Jak oceniasz reakcję?',o:[
   ['Reakcja alergiczna bez cech anafilaksji (bez objawów z dróg oddechowych i krążenia)',1,'Dobrze. Wtedy lek przeciwhistaminowy jest właściwy.'],
   ['Anafilaksja – adrenalina im',0,'Brak objawów z dróg oddechowych i krążenia – to nie anafilaksja.'],
   ['To nic – niczego nie podajesz',0,'Świąd i pokrzywka wymagają leczenia objawowego.']]},
  {q:'Jak podasz klemastynę?',o:[
   ['2 mg iv powoli (2–3 min) lub im',1,'Tak. Szybki bolus iv może obniżyć ciśnienie.'],
   ['20 mg iv',0,'Maks. dawka dobowa to 4 mg.'],
   ['Szybki bolus 2 mg',0,'Szybkie podanie iv grozi hipotensją.']]},
  {q:'W trakcie transportu pacjentka zaczyna chrypieć i świszczeć, BP 85/55. Co teraz?',o:[
   ['Kolejna dawka klemastyny',0,'Objawy z dróg oddechowych i krążenia = anafilaksja = adrenalina.'],
   ['Adrenalina 0,5 mg im, tlen, płyny',1,'Dobrze. Klemastyna nie leczy wstrząsu ani obrzęku krtani.'],
   ['Obserwacja do szpitala',0,'Anafilaksja wymaga natychmiastowej adrenaliny.']]}],
 end:'Po klemastynie pacjent będzie senny – nie może prowadzić auta. Uwaga na łączenie z alkoholem i lekami uspokajającymi.'},

klonazepam:{title:'Stan padaczkowy u dorosłego',
 story:'Mężczyzna, 40 lat, padaczka. Żona mówi, że miał już dwa napady bez odzyskania przytomności między nimi. Teraz znowu drgawki uogólnione, trwają od 6 minut. Masz założone wkłucie.',
 vit:[['Drgawki','6','min'],['SpO₂','89','%'],['HR','130','/min'],['Glikemia','110','mg/dl'],['GCS','3','(napad)'],['Dostęp','iv','']],
 steps:[
  {q:'Czy to wskazanie do benzodiazepiny?',o:[
   ['Tak – napad ≥ 5 min i napady bez odzyskania przytomności = stan padaczkowy',1,'Dobrze. Glikemia jest prawidłowa – podajesz lek przeciwdrgawkowy.'],
   ['Nie – czekasz 30 min',0,'Każda minuta stanu padaczkowego uszkadza mózg.'],
   ['Tylko gdy pacjent ma gorączkę',0,'Gorączka nie jest warunkiem.']]},
  {q:'Jak przygotujesz i podasz klonazepam?',o:[
   ['Ampułkę leku zmieszaj z rozpuszczalnikiem (2 ml = 1 mg), podaj 1 mg iv powoli',1,'Tak. Tempo ok. 0,25–0,5 mg/min. W razie potrzeby powtórz.'],
   ['Bez rozpuszczalnika, szybki bolus',0,'Przygotuj lek z rozpuszczalnikiem tuż przed podaniem i podawaj powoli.'],
   ['10 mg iv',0,'Dawka 10 mg to dawka diazepamu, nie klonazepamu.']]},
  {q:'Napad ustał, pacjent oddycha 6/min. Co robisz?',o:[
   ['Udrożnienie dróg, tlen, wentylacja workiem, pozycja bezpieczna',1,'Dobrze. Benzodiazepiny hamują oddech.'],
   ['Kolejna dawka klonazepamu na zapas',0,'Napad ustał – nie podajesz kolejnej dawki.'],
   ['Flumazenil rutynowo',0,'U chorego na padaczkę flumazenil może wywołać kolejne drgawki.']]}],
 end:'Pamiętaj o przyczynach: hipoglikemia, uraz głowy, zatrucie, odstawienie leków, u kobiety w ciąży – rzucawka (siarczan magnezu).'},

klopidogrel:{title:'Zawał, ale pracownia nie chce prasugrelu',
 story:'Mężczyzna, 80 lat, przebyty udar niedokrwienny 3 lata temu. Od godziny ból w klatce. EKG: STEMI ściany przedniej. Lekarz pracowni kwalifikuje do pierwotnej PCI.',
 vit:[['HR','88','/min'],['BP','140/85','mmHg'],['SpO₂','95','%'],['NRS','7','/10'],['EKG','STEMI','V1–V4'],['Wiek','80','lat']],
 steps:[
  {q:'Który lek P2Y12 jest przeciwwskazany u tego pacjenta?',o:[
   ['Prasugrel – przebyty udar i wiek ≥ 75 lat',1,'Tak. Decyzję o leku P2Y12 i tak podejmuje lekarz pracowni.'],
   ['Kwas acetylosalicylowy',0,'ASA podajesz każdemu z OZW, jeśli nie ma przeciwwskazań.'],
   ['Żaden',0,'Prasugrel jest przeciwwskazany po udarze lub TIA.']]},
  {q:'Lekarz zleca klopidogrel. Jaka dawka przed pierwotną PCI?',o:[
   ['600 mg doustnie, razem z ASA',1,'Tak. Przy fibrynolizie dawka zależy od wieku (≤ 75 lat 300 mg, > 75 lat 75 mg).'],
   ['75 mg',0,'75 mg to dawka podtrzymująca lub przy fibrynolizie u > 75 lat.'],
   ['6000 mg',0,'Dziesięć razy za dużo.']]},
  {q:'Pacjent bierze omeprazol. Co to oznacza?',o:[
   ['Może osłabić działanie klopidogrelu – przekaż informację w szpitalu',1,'Dobrze. Omeprazol hamuje CYP2C19, który aktywuje klopidogrel.'],
   ['Nic',0,'To ważna interakcja.'],
   ['Rezygnujesz z ASA',0,'ASA nadal jest wskazana.']]}],
 end:'Zawsze dokumentuj godzinę podania leków przeciwpłytkowych i przekaż ją pracowni.'},

'kwas-acetylosalicylowy':{title:'Ucisk w klatce w czasie sprzątania',
 story:'Kobieta, 64 lata, cukrzyca i nadciśnienie. Od 30 minut gniotący ból za mostkiem z dusznością i nudnościami. Nie brała dziś żadnych leków przeciwpłytkowych. Brak alergii.',
 vit:[['HR','92','/min'],['BP','150/90','mmHg'],['SpO₂','96','%'],['NRS','7','/10'],['EKG','ST ↓','V4–V6'],['Glikemia','180','mg/dl']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['EKG 12-odprowadzeniowe w ciągu 10 minut od kontaktu',1,'Dobrze. EKG decyduje o dalszym postępowaniu (STEMI czy NSTE-ACS).'],
   ['Od razu transport bez EKG',0,'EKG to podstawa rozpoznania OZW w karetce.'],
   ['Każesz się położyć i odpocząć',0,'Ból wieńcowy w spoczynku to OZW, dopóki nie wykluczysz.']]},
  {q:'Jak podasz ASA?',o:[
   ['150–300 mg, tabletka do rozgryzienia i połknięcia',1,'Tak. Rozgryzienie przyspiesza wchłanianie.'],
   ['75 mg do połknięcia w całości',0,'To dawka podtrzymująca – w OZW potrzebna jest dawka nasycająca.'],
   ['1 g iv',0,'Za dużo, a w ZRM ASA podaje się doustnie.']]},
  {q:'Który pacjent NIE dostanie ASA?',o:[
   ['Pacjent z astmą aspirynową i czynnym krwawieniem z przewodu pokarmowego',1,'Dobrze. Pytaj też o alergię na ASA i NLPZ.'],
   ['Pacjent z cukrzycą',0,'Cukrzyca nie jest przeciwwskazaniem.'],
   ['Pacjent po 70. roku życia',0,'Wiek nie jest przeciwwskazaniem.']]}],
 end:'Ibuprofen przyjęty przez pacjenta osłabia działanie przeciwpłytkowe ASA – zapytaj o leki przeciwbólowe.'},

lidokaina:{title:'VF, a amiodaronu brak',
 story:'Mężczyzna, 62 lata, NZK w domu. Trwa resuscytacja, na monitorze migotanie komór. Po wyjęciu leków okazuje się, że w karetce nie ma amiodaronu.',
 vit:[['Rytm','VF',''],['Tętno','brak',''],['Wyładowania','3',''],['EtCO₂','18','mmHg'],['Dostęp','io',''],['Czas NZK','10 min','']],
 steps:[
  {q:'Po 3. defibrylacji nadal VF. Co podajesz?',o:[
   ['Adrenalina 1 mg i lidokaina 100 mg iv/io',1,'Tak. Lidokaina jest alternatywą, gdy amiodaron jest niedostępny.'],
   ['Lidokaina 500 mg',0,'Za dużo. Dawka 1–1,5 mg/kg, zwykle 100 mg.'],
   ['Nic – bez amiodaronu kończysz',0,'Lidokaina jest uznaną alternatywą.']]},
  {q:'Ile ml roztworu 2% to 100 mg?',o:[
   ['5 ml',1,'Tak. 2% = 20 mg/ml, więc 100 mg = 5 ml.'],
   ['2 ml',0,'2 ml to 40 mg.'],
   ['50 ml',0,'50 ml to 1 g – dziesięciokrotne przedawkowanie.']]},
  {q:'Po 5. defibrylacji VF się utrzymuje. Co z lidokainą?',o:[
   ['50 mg iv/io, maks. 3 mg/kg w 1. godzinie',1,'Dobrze. Szukaj przyczyn odwracalnych (4H i 4T).'],
   ['100 mg co każdą pętlę',0,'Dawki są ograniczone – ryzyko toksyczności (drgawki, arytmie).'],
   ['Dokładasz amiodaron, gdy go przywiozą',0,'Nie łączysz dwóch leków antyarytmicznych w NZK.']]}],
 end:'Lidokainę stosujesz też do znieczulenia przed płukaniem dostępu doszpikowego u przytomnego pacjenta.'},

mannitol:{title:'Uraz głowy i coraz gorszy kontakt',
 story:'Mężczyzna, 30 lat, 80 kg, potrącony przez samochód. Na miejscu GCS 13, w trakcie oceny spada do 8. Prawa źrenica szeroka i sztywna. BP 170/90, HR 52.',
 vit:[['GCS','8','(było 13)'],['Źrenice','P > L','sztywna'],['BP','170/90','mmHg'],['HR','52','/min'],['SpO₂','93','%'],['RR','nieregularny','']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['Drogi oddechowe, SpO₂ > 94%, normokapnia, głowa uniesiona o 30°, stabilizacja kręgosłupa',1,'Dobrze. Podstawy są ważniejsze niż leki – niedotlenienie i hipotensja zabijają mózg.'],
   ['Od razu mannitol',0,'Najpierw oddech i krążenie.'],
   ['Hiperwentylacja wszystkim pacjentom z urazem głowy',0,'Rutynowa hiperwentylacja zmniejsza przepływ krwi przez mózg.']]},
  {q:'Czy to wskazanie do mannitolu?',o:[
   ['Tak – nowa anizokoria, spadek GCS ≥ 2 pkt, triada Cushinga (nadciśnienie, bradykardia, zaburzenia oddychania)',1,'Tak, to objawy wgłobienia.'],
   ['Nie – mannitol stosuje się tylko w szpitalu',0,'Objawy wgłobienia to wskazanie wg procedury.'],
   ['Tylko przy hipotensji',0,'Przy hipotensji mannitol jest groźny – pogłębia ją przez diurezę.']]},
  {q:'Jaka dawka dla 80 kg (0,5 g/kg) roztworu 20%?',o:[
   ['40 g = 200 ml, wlew 15–20 min z filtrem',1,'Tak. Osobna linia, nie razem z krwią.'],
   ['40 ml',0,'40 ml to tylko 8 g.'],
   ['800 ml',0,'To 160 g – za dużo.']]}],
 end:'Pacjent z urazem głowy i objawami wgłobienia jedzie do ośrodka z neurochirurgią.'},

metamizol:{title:'Kolka żółciowa po świątecznym obiedzie',
 story:'Kobieta, 48 lat. 2 godziny po tłustym posiłku silny, kurczowy ból pod prawym łukiem żebrowym promieniujący do łopatki. Wymiotowała. Bez gorączki i żółtaczki.',
 vit:[['NRS','8','/10'],['HR','96','/min'],['BP','135/85','mmHg'],['Temp.','36,9','°C'],['SpO₂','98','%'],['Objaw Chełmońskiego','(+)','']],
 steps:[
  {q:'Co sprawdzasz, zanim uznasz to za kolkę żółciową?',o:[
   ['EKG – zawał ściany dolnej może dawać ból w nadbrzuszu',1,'Dobrze. Ból w nadbrzuszu z nudnościami bywa objawem zawału.'],
   ['Nic – to na pewno woreczek',0,'Zawsze wykluczaj groźne przyczyny bólu brzucha.'],
   ['Test ciążowy u każdej pacjentki po 45 r.ż. zamiast EKG',0,'EKG jest tu kluczowe.']]},
  {q:'Jak podasz metamizol iv?',o:[
   ['1 g iv powoli (nie szybciej niż 1 ml/min) lub w 100 ml NaCl',1,'Tak. 500 mg/ml, więc 1 g = 2 ml.'],
   ['1 g w szybkim bolusie',0,'Szybkie podanie grozi gwałtownym spadkiem ciśnienia.'],
   ['10 g iv',0,'Maks. 4–5 g na dobę.']]},
  {q:'W trakcie wstrzykiwania pacjentka blednie, BP spada do 85/50. Co robisz?',o:[
   ['Przerywasz podanie, układasz płasko z uniesieniem nóg, płyny',1,'Dobrze. To typowe działanie niepożądane przy zbyt szybkim podaniu. Wyklucz też reakcję alergiczną.'],
   ['Podajesz resztę szybciej',0,'Pogorszysz hipotensję.'],
   ['Furosemid',0,'Pogłębi spadek ciśnienia.']]}],
 end:'Gorączka i żółtaczka przy bólu żółciowym to podejrzenie zapalenia dróg żółciowych – pilnie do szpitala.'},

metoklopramid:{title:'Wymioty po morfinie',
 story:'Kobieta, 55 lat, ze złamaniem nadgarstka. Po 6 mg morfiny ból się zmniejszył, ale zaczęła wymiotować. Brak bólu brzucha, nie ma objawów niedrożności.',
 vit:[['NRS','3','/10'],['HR','84','/min'],['BP','125/80','mmHg'],['SpO₂','97','%'],['RR','14','/min'],['GCS','15','']],
 steps:[
  {q:'Kiedy NIE podasz metoklopramidu?',o:[
   ['Przy podejrzeniu niedrożności, perforacji lub krwawienia z przewodu pokarmowego',1,'Tak. Metoklopramid przyspiesza perystaltykę.'],
   ['Przy nudnościach po opioidzie',0,'To wskazanie.'],
   ['U pacjentki ze złamaniem',0,'Złamanie nie jest przeciwwskazaniem.']]},
  {q:'Jak podasz metoklopramid?',o:[
   ['10 mg iv powoli, co najmniej 3 minuty',1,'Tak. 5 mg/ml → 10 mg = 2 ml. Maks. 30 mg na dobę.'],
   ['50 mg iv',0,'Za dużo – ryzyko objawów pozapiramidowych.'],
   ['10 mg w szybkim bolusie',0,'Podawaj powoli – szybkie podanie zwiększa działania niepożądane.']]},
  {q:'Po godzinie pacjentka ma skręcenie szyi i oczy uciekają do góry. Co to?',o:[
   ['Ostra dystonia – działanie niepożądane metoklopramidu',1,'Dobrze. Częstsza u młodych. W szpitalu leczy się ją lekami antycholinergicznymi lub benzodiazepiną.'],
   ['Udar mózgu',0,'Obraz i związek z lekiem wskazują na dystonię polekową.'],
   ['Napad padaczkowy',0,'Pacjentka jest przytomna – to dystonia.']]}],
 end:'U dzieci metoklopramid jest lekiem drugiego rzutu, a < 1 roku – przeciwwskazany.'},

metoprolol:{title:'Szybkie migotanie przedsionków',
 story:'Mężczyzna, 70 lat, migotanie przedsionków od lat. Od rana kołatanie serca, lekka duszność przy wysiłku. Przytomny, bez bólu w klatce, bez obrzęku płuc. Nie choruje na astmę.',
 vit:[['HR','148','niemiarowo'],['BP','145/90','mmHg'],['SpO₂','95','%'],['RR','18','/min'],['GCS','15',''],['EKG','AF','wąskie QRS']],
 steps:[
  {q:'Czy pacjent jest stabilny?',o:[
   ['Tak – brak wstrząsu, omdlenia, niedokrwienia i niewydolności serca',1,'Dobrze. Możesz rozważyć kontrolę częstości lekiem.'],
   ['Nie – od razu kardiowersja',0,'Kardiowersja jest dla pacjenta niestabilnego.'],
   ['Nie wiadomo – podajesz adenozynę',0,'Adenozyna nie leczy migotania przedsionków.']]},
  {q:'Jak podasz metoprolol?',o:[
   ['Do 5 mg iv, 1–2 mg/min, powtarzane co 5 min wg HR i RR',1,'Tak. Przed każdą dawką: HR, ciśnienie, osłuchanie płuc.'],
   ['50 mg iv w bolusie',0,'Dziesięć razy za dużo.'],
   ['5 mg iv szybko, bez kontroli',0,'Podawaj powoli i kontroluj parametry.']]},
  {q:'Kiedy NIE podasz metoprololu?',o:[
   ['Astma, hipotensja, bradykardia, blok AV II/III°, ostra niewydolność serca',1,'Dobrze.'],
   ['Nadciśnienie',0,'Nadciśnienie nie jest przeciwwskazaniem.'],
   ['Wiek > 65 lat',0,'Wiek sam w sobie nie jest przeciwwskazaniem.']]}],
 end:'Ustal, od kiedy trwa AF – ma to znaczenie dla dalszego leczenia w szpitalu (ryzyko zakrzepów).'},

midazolam:{title:'Drgawki na przystanku',
 story:'Mężczyzna, ok. 35 lat, ok. 80 kg. Świadkowie mówią, że od 7 minut ma drgawki. Nie wiadomo, czy choruje. Rzuca się – nie da się założyć wkłucia.',
 vit:[['Drgawki','7','min'],['SpO₂','88','%'],['HR','134','/min'],['Glikemia','95','mg/dl'],['Dostęp','brak',''],['Uraz głowy','brak widocznych','']],
 steps:[
  {q:'Jak przerwiesz napad bez dostępu iv?',o:[
   ['Midazolam 10 mg im (pacjent > 40 kg)',1,'Tak. Midazolam działa im szybko – brak żyły nie opóźnia leczenia.'],
   ['Diazepam 10 mg im',0,'Diazepam z mięśnia wchłania się wolno i nieprzewidywalnie.'],
   ['Czekasz, aż sam przestanie',0,'Napad > 5 min trzeba przerwać lekiem.']]},
  {q:'Ile ml przy ampułce 5 mg/ml?',o:[
   ['2 ml',1,'Tak. Uwaga: przy ampułce 1 mg/ml to samo 10 mg = 10 ml. Zawsze sprawdź stężenie!'],
   ['10 ml',0,'10 ml to dawka przy stężeniu 1 mg/ml.'],
   ['0,2 ml',0,'To tylko 1 mg.']]},
  {q:'Drgawki ustały. Na co uważasz?',o:[
   ['Depresja oddechowa – tlen, drogi oddechowe, worek gotowy',1,'Dobrze. Szukaj też przyczyny drgawek (glikemia, uraz, zatrucie).'],
   ['Na nic – możesz go zostawić',0,'Pacjent po napadzie i benzodiazepinie wymaga obserwacji i transportu.'],
   ['Podajesz flumazenil rutynowo',0,'Flumazenil może wywołać nawrót drgawek.']]}],
 end:'Do sedacji przed procedurą midazolam miareczkujesz: 1–2,5 mg iv, u starszych od 0,5–1 mg.'},

morfina:{title:'Oparzenie w kuchni',
 story:'Kobieta, 40 lat, ok. 70 kg. Wylała na siebie wrzątek – oparzone przedramię i udo. Krzyczy z bólu. Przytomna, oddycha swobodnie, krążenie wydolne.',
 vit:[['NRS','9','/10'],['HR','112','/min'],['BP','140/85','mmHg'],['SpO₂','98','%'],['RR','22','/min'],['GCS','15','']],
 steps:[
  {q:'Co robisz najpierw z oparzeniem?',o:[
   ['Chłodzenie letnią wodą ok. 20 min, zdjęcie biżuterii, jałowy opatrunek',1,'Dobrze. Chłodzenie zmniejsza też ból. Uważaj na wychłodzenie.'],
   ['Lód bezpośrednio na skórę',0,'Lód uszkadza tkanki i wychładza pacjenta.'],
   ['Smarujesz maścią',0,'Na miejscu tylko chłodzenie i jałowy opatrunek.']]},
  {q:'Jak przygotujesz i podasz morfinę?',o:[
   ['10 mg + 9 ml NaCl = 1 mg/ml; po 2–3 mg co 5 min do ulgi',1,'Tak. Miareczkujesz do efektu, do ok. 0,1 mg/kg.'],
   ['10 mg w jednym bolusie',0,'Miareczkuj – unikasz depresji oddechowej i hipotensji.'],
   ['1 mg/kg',0,'To dziesięć razy za dużo.']]},
  {q:'Po 7 mg pacjentka ma ciśnienie 85/50 i jest senna. Co robisz?',o:[
   ['Przerywasz morfinę, układasz płasko, tlen, płyny; przy depresji oddechu nalokson',1,'Dobrze. Morfina rozszerza naczynia i obniża ciśnienie.'],
   ['Kolejne 3 mg',0,'Pogłębisz hipotensję i depresję oddechową.'],
   ['Furosemid',0,'Pogłębi spadek ciśnienia.']]}],
 end:'U pacjenta z hipotensją lepszym wyborem opioidu jest fentanyl. Przy nudnościach – lek przeciwwymiotny.'},

nitrogliceryna:{title:'Ból w klatce u pana z zawałem dolnym',
 story:'Mężczyzna, 66 lat. Od 30 min ból za mostkiem. EKG: uniesienie ST w II, III, aVF. Prosi o „tabletkę pod język”, bo zwykle mu pomaga.',
 vit:[['HR','58','/min'],['BP','100/65','mmHg'],['SpO₂','95','%'],['NRS','8','/10'],['EKG','STEMI','dolna'],['V4R','ST ↑','']],
 steps:[
  {q:'Co oznacza uniesienie ST w V4R?',o:[
   ['Zawał prawej komory – nitrogliceryna przeciwwskazana',1,'Tak. Prawa komora zależy od obciążenia wstępnego – nitrogliceryna może wywołać ciężką hipotensję.'],
   ['Nic – podajesz 0,4 mg sl',0,'Przy zawale prawej komory nitrogliceryna jest przeciwwskazana.'],
   ['Wystarczy połowa dawki',0,'Nie podajesz wcale.']]},
  {q:'Inny pacjent: OZW, BP 150/90, bez zawału prawej komory. Przed podaniem pytasz o…',o:[
   ['Sildenafil (24 h) lub tadalafil (48 h)',1,'Dobrze. Połączenie z inhibitorami PDE-5 grozi ciężką hipotensją.'],
   ['Alergię na laktozę',0,'Nie ma tu znaczenia.'],
   ['Szczepienia',0,'Nie ma znaczenia.']]},
  {q:'Jak podajesz nitroglicerynę w bólu wieńcowym?',o:[
   ['0,4 mg sl, co 5 min, maks. 3 dawki, jeśli RR ≥ 90 i spadek ≤ 30 mmHg',1,'Tak. Przed każdą dawką mierzysz ciśnienie.'],
   ['Całe opakowanie, aż ból minie',0,'Ryzyko ciężkiej hipotensji.'],
   ['Tylko jeśli ból > 2 h',0,'Czas trwania bólu nie decyduje o podaniu.']]}],
 end:'Nitrogliceryna łagodzi ból, ale nie leczy zawału – nie opóźniaj transportu do PCI.'},

noradrenalina:{title:'Wstrząs septyczny u seniorki',
 story:'Kobieta, 78 lat, 60 kg. Od 2 dni gorączka i ból przy oddawaniu moczu. Dziś splątana. Po 1500 ml krystaloidów ciśnienie nadal niskie. Transport międzyszpitalny z lekarzem.',
 vit:[['BP','78/40','MAP 53'],['HR','124','/min'],['Temp.','39,4','°C'],['SpO₂','93','%'],['GCS','13',''],['Nawrót kap.','4','s']],
 steps:[
  {q:'Kiedy wazopresor ma sens?',o:[
   ['Gdy pacjent dostał odpowiednią objętość płynów, a ciśnienie nadal jest niskie',1,'Tak. Wazopresor u pacjenta z hipowolemią to „obkurczanie pustych naczyń”.'],
   ['Zawsze przed płynami',0,'Najpierw objętość.'],
   ['Nigdy w sepsie',0,'W sepsie noradrenalina jest wazopresorem pierwszego wyboru.']]},
  {q:'Jak rozcieńczasz noradrenalinę do pompy?',o:[
   ['4 mg do 50 ml (80 µg/ml), zwykle w 5% glukozie',1,'Tak. Wlew pompą, osobna linia.'],
   ['Bolus 4 mg iv',0,'Noradrenalinę podaje się w ciągłym wlewie, nie w bolusie.'],
   ['4 mg do 5 ml',0,'Za duże stężenie – trudne dawkowanie.']]},
  {q:'Jaki jest cel miareczkowania?',o:[
   ['MAP ≥ 65 mmHg',1,'Dobrze. Start 0,05–0,1 µg/kg/min, zwiększanie co kilka minut.'],
   ['Ciśnienie skurczowe 200 mmHg',0,'Za wysoko – obciążasz serce i niedokrwiasz tkanki.'],
   ['HR < 60',0,'To nie jest cel leczenia wazopresorem.']]}],
 end:'Wynaczynienie noradrenaliny powoduje martwicę – kontroluj miejsce wkłucia.'},

papaweryna:{title:'Kolka jelitowa',
 story:'Mężczyzna, 38 lat. Od kilku godzin kurczowy ból brzucha, biegunka, nudności. Brzuch miękki, bez objawów otrzewnowych. Bez gorączki.',
 vit:[['NRS','6','/10'],['HR','92','/min'],['BP','130/80','mmHg'],['Temp.','36,8','°C'],['SpO₂','98','%'],['Brzuch','miękki','']],
 steps:[
  {q:'Co wykluczasz przed lekiem rozkurczowym?',o:[
   ['Ostry brzuch: objawy otrzewnowe, niedrożność, krwawienie, zawał',1,'Dobrze. Leki rozkurczowe mogą zamaskować objawy groźnej choroby.'],
   ['Nic – to tylko jelita',0,'Zawsze wykluczaj groźne przyczyny bólu brzucha.'],
   ['Alergię na pyłki',0,'Nie ma znaczenia.']]},
  {q:'Jak podasz papawerynę u dorosłego?',o:[
   ['40–80 mg im lub sc; iv 40 mg bardzo powoli, pod kontrolą EKG',1,'Tak. 20 mg/ml → 40 mg = 2 ml.'],
   ['400 mg iv',0,'Za dużo.'],
   ['Szybki bolus iv',0,'Szybkie podanie iv grozi zaburzeniami rytmu i spadkiem ciśnienia.']]},
  {q:'Z czym w praktyce łączysz papawerynę?',o:[
   ['Z lekiem przeciwbólowym, np. metamizolem',1,'Dobrze. Papaweryna rozkurcza, ale sama słabo uśmierza ból.'],
   ['Z drotaweryną w dużej dawce',0,'Łączenie spazmolityków nasila spadek ciśnienia.'],
   ['Z niczym',0,'W bólu umiarkowanym potrzebna jest też analgezja.']]}],
 end:'Papaweryna jest przeciwwskazana w bloku AV i ciężkiej niewydolności wątroby.'},

paracetamol:{title:'Gorączka u kobiety w ciąży',
 story:'Kobieta, 29 lat, 24. tydzień ciąży, 65 kg. Gorączka 39,2 °C, ból mięśni i głowy. Wzięła rano tabletkę na przeziębienie, ale nie pamięta, jaką.',
 vit:[['Temp.','39,2','°C'],['HR','108','/min'],['BP','115/70','mmHg'],['SpO₂','97','%'],['RR','20','/min'],['GCS','15','']],
 steps:[
  {q:'O co pytasz przed podaniem paracetamolu?',o:[
   ['Ile paracetamolu przyjęła, także w lekach złożonych na przeziębienie',1,'Tak. Wiele leków na przeziębienie zawiera paracetamol – ryzyko przedawkowania.'],
   ['O nic – paracetamol jest bezpieczny',0,'Przedawkowanie paracetamolu uszkadza wątrobę.'],
   ['O grupę krwi',0,'Nie ma znaczenia.']]},
  {q:'Jaka dawka iv dla 65 kg?',o:[
   ['1 g iv we wlewie 15 min, maks. 4 g na dobę, odstęp ≥ 4 h',1,'Dobrze. Przy ryzyku uszkodzenia wątroby maks. 3 g.'],
   ['3 g jednorazowo',0,'Za dużo na jedną dawkę.'],
   ['Ibuprofen zamiast paracetamolu',0,'W III trymestrze NLPZ są przeciwwskazane, a w ciąży lekiem z wyboru jest paracetamol.']]},
  {q:'Dziecko 20 kg – ile ml paracetamolu iv (10 mg/ml)?',o:[
   ['30 ml (15 mg/kg = 300 mg)',1,'Tak. 15 mg/kg = 1,5 ml/kg.'],
   ['3 ml',0,'To tylko 30 mg.'],
   ['100 ml',0,'To 1 g – dawka dla dorosłego.']]}],
 end:'Gorączka w ciąży: oceń też objawy zakażenia dróg moczowych i ruchy płodu.'},

'siarczan-magnezu':{title:'Drgawki u kobiety w ciąży',
 story:'Kobieta, 31 lat, 36. tydzień ciąży. Od rana silny ból głowy i mroczki przed oczami. Mąż mówi, że przed chwilą miała drgawki. Teraz jest senna, ma obrzęki.',
 vit:[['BP','175/115','mmHg'],['HR','98','/min'],['SpO₂','95','%'],['Glikemia','96','mg/dl'],['GCS','12',''],['Ciąża','36','tydz.']],
 steps:[
  {q:'Co podejrzewasz?',o:[
   ['Rzucawkę',1,'Tak. Drgawki u ciężarnej z nadciśnieniem po 20. tygodniu to rzucawka, dopóki nie udowodnisz inaczej.'],
   ['Padaczkę',0,'Nadciśnienie, ból głowy i mroczki w ciąży wskazują na rzucawkę.'],
   ['Hipoglikemię',0,'Glikemia jest prawidłowa.']]},
  {q:'Jaki lek podajesz?',o:[
   ['Siarczan magnezu 4 g iv powoli (wg procedury), potem wlew',1,'Tak. W rzucawce lekiem z wyboru jest magnez, nie benzodiazepina. 20% = 200 mg/ml, więc 4 g = 20 ml.'],
   ['Tylko diazepam',0,'Benzodiazepiny słabiej zapobiegają kolejnym napadom w rzucawce.'],
   ['Furosemid',0,'Nie ma wskazań.']]},
  {q:'Na co uważasz w trakcie podawania magnezu?',o:[
   ['Depresja oddechowa, zanik odruchów kolanowych, hipotensja',1,'Dobrze. To objawy przedawkowania magnezu. Odtrutka: wapń.'],
   ['Hiperglikemia',0,'To nie jest typowe działanie magnezu.'],
   ['Gorączka',0,'Nie jest to działanie magnezu.']]}],
 end:'Ułóż ciężarną na lewym boku. Transport do szpitala z oddziałem położniczym, uprzedź szpital.'},

'sol-fizjologiczna-nacl-09':{title:'Wymioty i biegunka u seniora',
 story:'Mężczyzna, 82 lata, 65 kg. Od 3 dni biegunka i wymioty, mało pije. Jest słaby, ma suche śluzówki, zawroty głowy przy wstawaniu. Płuca osłuchowo czyste.',
 vit:[['BP','88/50','mmHg'],['HR','118','/min'],['SpO₂','96','%'],['Nawrót kap.','3,5','s'],['GCS','14',''],['Płuca','czyste','']],
 steps:[
  {q:'Jak podasz płyny?',o:[
   ['Bolus 250–500 ml, potem ocena',1,'Tak. Po każdym bolusie oceniasz HR, ciśnienie, nawrót kapilarny, świadomość i płuca.'],
   ['3 litry jak najszybciej',0,'U osoby starszej grozi to przewodnieniem i obrzękiem płuc.'],
   ['Nic – niech pije wodę',0,'Pacjent we wstrząsie potrzebuje płynów iv.']]},
  {q:'Po 500 ml pojawiają się trzeszczenia nad płucami i duszność. Co robisz?',o:[
   ['Przerywasz bolusy, pozycja siedząca, tlen',1,'Dobrze. To objawy przewodnienia.'],
   ['Kolejny bolus 1000 ml',0,'Pogorszysz obrzęk płuc.'],
   ['Kładziesz płasko',0,'Nasili duszność.']]},
  {q:'Kiedy przy dużych objętościach lepszy jest płyn zbilansowany (PWE, Ringer)?',o:[
   ['Przy dużych objętościach – mniej kwasicy hiperchloremicznej',1,'Tak. Sól fizjologiczna zawiera dużo chlorków.'],
   ['Nigdy',0,'Wytyczne coraz częściej preferują płyny zbilansowane.'],
   ['Tylko u dzieci',0,'Dotyczy dorosłych i dzieci.']]}],
 end:'U dziecka we wstrząsie bolus to 10 ml/kg, potem ponowna ocena.'},

tietylperazyna:{title:'Zawroty głowy na statku… i w karetce',
 story:'Kobieta, 45 lat. Nagłe zawroty głowy „wszystko wiruje”, nudności, wymioty. Szum w prawym uchu, podobne epizody w przeszłości (choroba Ménière’a). Badanie neurologiczne bez objawów ogniskowych.',
 vit:[['HR','86','/min'],['BP','130/80','mmHg'],['SpO₂','98','%'],['Glikemia','102','mg/dl'],['GCS','15',''],['Neurologia','bez ogniskowych','']],
 steps:[
  {q:'Co musisz wykluczyć przed lekiem przeciwwymiotnym?',o:[
   ['Udar (tylnego krążenia): niedowład, zaburzenia mowy, ataksja, podwójne widzenie',1,'Dobrze. Zawroty z objawami ogniskowymi to udar, dopóki nie wykluczysz.'],
   ['Nic',0,'Lek może zamaskować objawy udaru.'],
   ['Alergię na gluten',0,'Nie ma znaczenia.']]},
  {q:'Jak podasz tietylperazynę?',o:[
   ['6,5 mg im (1 ampułka), pacjentka leży',1,'Tak. Ryzyko spadku ciśnienia po iniekcji.'],
   ['6,5 mg iv w bolusie',0,'W ZRM podaje się ją im.'],
   ['Dziecku 5 lat 1/2 ampułki',0,'Tietylperazyna jest przeciwwskazana u dzieci.']]},
  {q:'U osoby starszej po tietylperazynie zwracasz uwagę na…',o:[
   ['Hipotensję i objawy pozapiramidowe (dystonię)',1,'Dobrze. U starszych ryzyko jest większe.'],
   ['Hiperglikemię',0,'To nie jest typowe działanie.'],
   ['Nadciśnienie',0,'Raczej spadek ciśnienia.']]}],
 end:'W chorobie lokomocyjnej i zawrotach błędnikowych lek łagodzi objawy, ale nie zwalnia z oceny neurologicznej.'},

tikagrelor:{title:'STEMI i teletransmisja',
 story:'Mężczyzna, 55 lat, 85 kg. Od godziny ból za mostkiem z potami. EKG: uniesienie ST w V1–V5. Wysyłasz zapis teletransmisją do pracowni hemodynamiki.',
 vit:[['HR','96','/min'],['BP','135/85','mmHg'],['SpO₂','96','%'],['NRS','8','/10'],['EKG','STEMI','przednia'],['Czas','60 min','od bólu']],
 steps:[
  {q:'Kto decyduje o podaniu tikagreloru?',o:[
   ['Lekarz ośrodka kardiologii inwazyjnej po teletransmisji EKG',1,'Tak. Kolejność: EKG w 10 min → teletransmisja → konsultacja → decyzja.'],
   ['Ratownik zawsze sam',0,'Tikagrelor podajesz po konsultacji, wg decyzji lekarza.'],
   ['Rodzina pacjenta',0,'Nie.']]},
  {q:'Jaka dawka nasycająca?',o:[
   ['180 mg (2 tabletki po 90 mg) razem z ASA',1,'Tak. Jeśli pacjent nie może połknąć – rozkrusz tabletki w niewielkiej ilości wody.'],
   ['90 mg',0,'90 mg to dawka podtrzymująca (2 razy na dobę).'],
   ['600 mg',0,'600 mg to dawka klopidogrelu przed PCI.']]},
  {q:'Pacjent po kilku godzinach mówi, że ma uczucie braku powietrza, ale SpO₂ 98% i osłuchowo czysto. Co to może być?',o:[
   ['Typowe działanie niepożądane tikagreloru – duszność',1,'Dobrze. Zwykle łagodna i przemijająca, ale zawsze wyklucz inne przyczyny.'],
   ['Na pewno obrzęk płuc',0,'Czyste płuca i dobra saturacja przemawiają przeciw.'],
   ['Alergia na ASA',0,'Mało prawdopodobne bez innych objawów.']]}],
 end:'Tikagrelor nie jest stosowany u dzieci. Przed podaniem zapytaj o krwawienia i przebyty udar krwotoczny.'},

urapidyl:{title:'Bardzo wysokie ciśnienie',
 story:'Kobieta, 70 lat. Od rana ból głowy. Teraz nagła duszność, siedzi, kaszle pienistą plwociną. Osłuchowo trzeszczenia nad płucami.',
 vit:[['BP','220/120','mmHg'],['HR','110','/min'],['SpO₂','86','%'],['RR','30','/min'],['GCS','15',''],['Osłuch.','trzeszczenia','']],
 steps:[
  {q:'Czy to stan nagły?',o:[
   ['Tak – bardzo wysokie ciśnienie z uszkodzeniem narządu (obrzęk płuc)',1,'Dobrze. Wysokie ciśnienie bez objawów nie wymaga leku dożylnego w ZRM.'],
   ['Nie – to tylko wysokie ciśnienie',0,'Obrzęk płuc to uszkodzenie narządowe – stan nagły.'],
   ['Tylko gdy ciśnienie > 250',0,'Decydują objawy, nie tylko liczba.']]},
  {q:'Jak podasz urapidyl?',o:[
   ['10–50 mg iv powoli (zwykle 25 mg), pacjentka leży lub siedzi, ocena po 5 min',1,'Tak. 5 mg/ml → 25 mg = 5 ml.'],
   ['100 mg w szybkim bolusie',0,'Za dużo i za szybko – ryzyko gwałtownej hipotensji.'],
   ['Doustnie',0,'W stanie nagłym urapidyl podaje się iv.']]},
  {q:'O ile obniżasz ciśnienie w pierwszej godzinie (poza obrzękiem płuc i rozwarstwieniem)?',o:[
   ['Nie więcej niż o ok. 25%',1,'Dobrze. Zbyt szybki spadek grozi niedokrwieniem mózgu, serca i nerek.'],
   ['Do 100/60 jak najszybciej',0,'Zbyt gwałtowny spadek jest niebezpieczny.'],
   ['Nie obniżasz w ogóle',0,'W stanie nagłym ciśnienie trzeba obniżać, ale stopniowo.']]}],
 end:'U starszych i z chorobą wątroby dawki są mniejsze – metabolizm jest wolniejszy.'},

'wodoroweglan-sodu-84':{title:'Zatrucie lekami przeciwdepresyjnymi',
 story:'Kobieta, 35 lat, 70 kg. Znaleziona w domu, obok puste opakowania po amitryptylinie. Senna, potem drgawki. Na monitorze szerokie zespoły QRS.',
 vit:[['GCS','8',''],['BP','80/50','mmHg'],['HR','128','/min'],['QRS','0,16','s'],['SpO₂','92','%'],['Źrenice','szerokie','']],
 steps:[
  {q:'Co oznacza szeroki QRS w zatruciu TLPD?',o:[
   ['Blokadę kanałów sodowych – wskazanie do wodorowęglanu sodu',1,'Tak. Szeroki QRS, arytmie, hipotensja i drgawki to wskazania.'],
   ['Hipoglikemię',0,'To typowy obraz kardiotoksyczności TLPD.'],
   ['Normę',0,'QRS 0,16 s jest wyraźnie poszerzony.']]},
  {q:'Jaka dawka dla 70 kg?',o:[
   ['1–2 mmol/kg = 70–140 ml roztworu 8,4% (1 ml = 1 mmol)',1,'Tak. Powtarzasz do zwężenia QRS.'],
   ['7 ml',0,'Za mało.'],
   ['700 ml',0,'Dziesięć razy za dużo.']]},
  {q:'Czy podajesz wodorowęglan rutynowo w każdym NZK?',o:[
   ['Nie – wytyczne ERC tego nie zalecają; tylko w określonych sytuacjach (hiperkaliemia, zatrucie TLPD)',1,'Dobrze.'],
   ['Tak, zawsze po 10 minutach',0,'To nieaktualne postępowanie.'],
   ['Tak, zamiast adrenaliny',0,'Nie zastępuje adrenaliny.']]}],
 end:'Nie mieszaj wodorowęglanu w jednej linii z wapniem i adrenaliną – wytrąca się osad, a katecholaminy się inaktywują.'},

'glukoza-5':{title:'Rozcieńczanie amiodaronu',
 story:'Mężczyzna, 65 lat, z częstoskurczem komorowym z tętnem, stabilny. Lekarz zlecił amiodaron 300 mg we wlewie w 10–20 min.',
 vit:[['HR','160','/min'],['BP','115/70','mmHg'],['SpO₂','96','%'],['EKG','VT','szerokie QRS'],['GCS','15',''],['Dostęp','iv','']],
 steps:[
  {q:'W czym rozcieńczasz amiodaron do wlewu?',o:[
   ['W 5% glukozie',1,'Tak. Amiodaron jest niestabilny w soli fizjologicznej przy rozcieńczaniu do wlewu.'],
   ['W 8,4% wodorowęglanie',0,'Nie – to inny lek, niezgodność.'],
   ['W wodzie do wstrzykiwań, 500 ml',0,'Nie podaje się dużych objętości czystej wody iv – hemoliza.']]},
  {q:'Kiedy nie podasz glukozy 5% jako płynu?',o:[
   ['Przy hiperglikemii, przewodnieniu i obrzęku mózgu',1,'Dobrze. Glukoza 5% to „woda bez sodu” – nie leczy wstrząsu.'],
   ['Gdy pacjent ma gorączkę',0,'Nie jest to przeciwwskazanie.'],
   ['U każdego pacjenta po 60 r.ż.',0,'Wiek nie jest przeciwwskazaniem.']]},
  {q:'Czy glukoza 5% nadaje się do wyrównania wstrząsu krwotocznego?',o:[
   ['Nie – szybko opuszcza naczynia; we wstrząsie używasz krystaloidów zbilansowanych',1,'Tak.'],
   ['Tak, jest najlepsza',0,'Glukoza 5% nie zostaje w naczyniach.'],
   ['Tak, razem z insuliną',0,'Nie ma takiego wskazania.']]}],
 end:'Glukozy 5% nie mylisz z glukozą 20% – ta druga leczy hipoglikemię.'},

hes:{title:'Wstrząs i stara skrobia w karetce',
 story:'Mężczyzna, 45 lat, sepsa z ogniskiem w płucach. Hipotensja mimo podania krystaloidów. Ktoś z zespołu proponuje podanie HES.',
 vit:[['BP','82/45','mmHg'],['HR','122','/min'],['Temp.','39,6','°C'],['SpO₂','90','%'],['GCS','14',''],['Nawrót kap.','4','s']],
 steps:[
  {q:'Czy HES nadaje się w sepsie?',o:[
   ['Nie – sepsa jest przeciwwskazaniem (uszkodzenie nerek, większa śmiertelność)',1,'Tak. W sepsie stosujesz krystaloidy, a przy utrzymującej się hipotensji – wazopresor.'],
   ['Tak, to najlepszy płyn w sepsie',0,'Badania wykazały szkodliwość HES w sepsie.'],
   ['Tak, ale w podwójnej dawce',0,'Przeciwwskazany.']]},
  {q:'W jakich jeszcze stanach HES jest przeciwwskazany?',o:[
   ['Oparzenia, niewydolność nerek lub wątroby, krwawienie śródczaszkowe, zaburzenia krzepnięcia',1,'Dobrze.'],
   ['Ból brzucha',0,'To nie jest przeciwwskazanie samo w sobie.'],
   ['Nadwaga',0,'Nie ma znaczenia.']]},
  {q:'Czym zastąpisz HES u tego pacjenta?',o:[
   ['Krystaloid zbilansowany w bolusach 500 ml z oceną; przy braku poprawy – noradrenalina',1,'Tak.'],
   ['Glukoza 5%',0,'Nie wyrównuje objętości wewnątrznaczyniowej.'],
   ['Niczym – czekasz',0,'Pacjent we wstrząsie wymaga leczenia.']]}],
 end:'HES ma dziś bardzo ograniczone zastosowanie i nie stosuje się go u dzieci w ZRM.'},

izosorbid:{title:'Pan z tabletkami w kieszeni',
 story:'Mężczyzna, 70 lat, choroba wieńcowa. Bierze przewlekle monoazotan izosorbidu. Od 20 min ból w klatce, nie ustąpił po odpoczynku. Wczoraj wieczorem wziął tadalafil.',
 vit:[['HR','84','/min'],['BP','125/80','mmHg'],['SpO₂','96','%'],['NRS','7','/10'],['EKG','bez uniesień ST',''],['Tadalafil','wczoraj','']],
 steps:[
  {q:'Czy monoazotan izosorbidu jest lekiem doraźnym w ostrym bólu wieńcowym?',o:[
   ['Nie – to lek do zapobiegania napadom dławicy w leczeniu przewlekłym',1,'Tak. Działa wolniej niż nitrogliceryna podjęzykowa.'],
   ['Tak, najlepszy na ostry ból',0,'Na ostry ból stosuje się nitroglicerynę sl.'],
   ['Tak, w dawce 100 mg',0,'Nie.']]},
  {q:'Pacjent wziął tadalafil wczoraj. Co z azotanami?',o:[
   ['Przeciwwskazane – tadalafil 48 h (sildenafil 24 h)',1,'Dobrze. Połączenie grozi ciężką hipotensją.'],
   ['Można podać połowę dawki',0,'Nie podajesz wcale.'],
   ['Bez znaczenia',0,'To ważna interakcja.']]},
  {q:'Co robisz dalej?',o:[
   ['EKG, ASA wg procedury, leczenie bólu bez azotanów, transport',1,'Tak. Ból wieńcowy w spoczynku to OZW, dopóki nie wykluczysz.'],
   ['Zostawiasz w domu z tabletkami',0,'Ból wieńcowy w spoczynku wymaga diagnostyki w szpitalu.'],
   ['Podajesz 2 tabletki izosorbidu',0,'Przeciwwskazane po tadalafilu.']]}],
 end:'Azotany są przeciwwskazane także przy RR skurczowym < 90 mmHg i zawale prawej komory.'},

kaptopryl:{title:'Ciśnienie 190 bez objawów',
 story:'Kobieta, 60 lat. Zmierzyła sobie ciśnienie 190/105 i się przestraszyła. Czuje się dobrze, nie ma bólu głowy, duszności, bólu w klatce ani objawów neurologicznych. Przyjmuje leki na nadciśnienie, dziś zapomniała.',
 vit:[['BP','190/105','mmHg'],['HR','82','/min'],['SpO₂','98','%'],['GCS','15',''],['Neurologia','bez zmian',''],['EKG','bez zmian ostrych','']],
 steps:[
  {q:'Czy to stan nagły wymagający leku iv?',o:[
   ['Nie – wysokie ciśnienie bez uszkodzenia narządów to stan pilny, nie nagły',1,'Dobrze. Wystarczy powolne obniżanie, często lekiem doustnym.'],
   ['Tak – urapidyl iv',0,'Lek iv rezerwujesz dla nadciśnienia z uszkodzeniem narządów.'],
   ['Tak – trzeba zbić do 120/80 natychmiast',0,'Gwałtowny spadek jest groźny.']]},
  {q:'O co pytasz przed podaniem kaptoprylu?',o:[
   ['Obrzęk naczynioruchowy po inhibitorze ACE, ciąża, zwężenie tętnic nerkowych',1,'Tak.'],
   ['Uczulenie na penicylinę',0,'Nie ma związku.'],
   ['Grupę krwi',0,'Nie ma znaczenia.']]},
  {q:'Jak podasz kaptopryl?',o:[
   ['12,5–25 mg doustnie lub podjęzykowo, z kontrolą ciśnienia',1,'Dobrze. Zalecasz kontakt z lekarzem POZ i przyjęcie stałych leków.'],
   ['100 mg',0,'Za dużo.'],
   ['Iv w bolusie',0,'Kaptopryl jest lekiem doustnym.']]}],
 end:'Obrzęk warg lub języka po inhibitorze ACE to obrzęk bradykininowy – słabo reaguje na steroidy i leki przeciwhistaminowe.'},

'kwas-traneksamowy':{title:'Wypadek motocyklowy',
 story:'Mężczyzna, 25 lat, 75 kg. Wypadek motocyklowy 40 minut temu. Blady, spocony, tętno na promieniowej słabe. Bolesny brzuch i niestabilna miednica.',
 vit:[['BP','85/50','mmHg'],['HR','132','/min'],['SpO₂','95','%'],['GCS','14',''],['Czas od urazu','40','min'],['Miednica','niestabilna','']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['Opanowanie krwawienia: pas miednicy, unieruchomienie, szybki transport',1,'Dobrze. Krwawienie zatrzymujesz mechanicznie, lek wspomaga.'],
   ['Duże ilości płynów do normalnego ciśnienia',0,'W urazie z krwotokiem stosujesz hipotensję permisywną – płyny w małych bolusach.'],
   ['Czekasz na śmigłowiec bez działań',0,'Działasz od razu.']]},
  {q:'Czy podasz kwas traneksamowy?',o:[
   ['Tak – ciężkie krwawienie, < 3 h od urazu: 1 g iv przez 10 min',1,'Tak. Potem 1 g we wlewie przez 8 h (w szpitalu).'],
   ['Nie – tylko w szpitalu',0,'Im wcześniej, tym lepiej – najlepiej w ZRM.'],
   ['Tak, 10 g bolus',0,'Dawka to 1 g przez 10 min.']]},
  {q:'Kiedy NIE podasz kwasu traneksamowego?',o:[
   ['Gdy od urazu minęło więcej niż 3 godziny',1,'Dobrze. Po 3 h nie ma korzyści, a może szkodzić.'],
   ['U młodego mężczyzny',0,'Wiek nie jest przeciwwskazaniem.'],
   ['Przy złamaniu miednicy',0,'To jedno ze wskazań.']]}],
 end:'Dziecko: 15 mg/kg (maks. 1 g) przez 10 minut. Kwas traneksamowy stosuje się też w krwotoku poporodowym.'},

pwe:{title:'Odwodnienie po wakacjach',
 story:'Kobieta, 50 lat, 70 kg. Od 2 dni wymioty i biegunka po wyjeździe. Słaba, sucha skóra, zawroty głowy. Płuca czyste, bez chorób serca i nerek.',
 vit:[['BP','90/55','mmHg'],['HR','115','/min'],['SpO₂','97','%'],['Nawrót kap.','3','s'],['GCS','15',''],['Płuca','czyste','']],
 steps:[
  {q:'Jak podasz PWE?',o:[
   ['Bolus 500 ml, potem ocena',1,'Tak. Oceniasz HR, ciśnienie, nawrót kapilarny, świadomość, płuca.'],
   ['5 litrów od razu',0,'Ryzyko przewodnienia.'],
   ['Glukoza 5% zamiast PWE',0,'Glukoza 5% nie wyrównuje objętości.']]},
  {q:'Kiedy PWE jest przeciwwskazany?',o:[
   ['Przewodnienie, obrzęk płuc, ciężka niewydolność serca lub nerek, hiperkaliemia',1,'Dobrze.'],
   ['Gorączka',0,'Nie jest przeciwwskazaniem.'],
   ['Ciąża',0,'Nie jest przeciwwskazaniem.']]},
  {q:'Jaki bolus u dziecka 20 kg we wstrząsie?',o:[
   ['200 ml (10 ml/kg), potem ocena',1,'Tak.'],
   ['2000 ml',0,'Dziesięć razy za dużo.'],
   ['20 ml',0,'Za mało.']]}],
 end:'Płyny zbilansowane (PWE, Ringer) są przy dużych objętościach lepsze od soli fizjologicznej.'},

prasugrel:{title:'Zawał u młodego pacjenta',
 story:'Mężczyzna, 50 lat, 85 kg. Od 50 min ból za mostkiem. EKG: STEMI ściany przedniej. Teletransmisja – lekarz pracowni kwalifikuje do pierwotnej PCI i decyduje o prasugrelu. Nigdy nie miał udaru.',
 vit:[['HR','92','/min'],['BP','140/90','mmHg'],['SpO₂','96','%'],['NRS','8','/10'],['EKG','STEMI','V1–V4'],['Wiek','50','lat']],
 steps:[
  {q:'O co musisz zapytać przed prasugrelem?',o:[
   ['Przebyty udar lub TIA, czynne krwawienie, wiek ≥ 75 lat, masa < 60 kg',1,'Tak. U tych pacjentów prasugrel zwykle się nie zaleca.'],
   ['Uczulenie na pyłki',0,'Nie ma znaczenia.'],
   ['Ostatni posiłek',0,'Nie decyduje o podaniu.']]},
  {q:'Jaka dawka nasycająca?',o:[
   ['60 mg doustnie jednorazowo, razem z ASA',1,'Tak.'],
   ['600 mg',0,'600 mg to dawka klopidogrelu.'],
   ['10 mg',0,'10 mg to dawka podtrzymująca w szpitalu.']]},
  {q:'Kto ostatecznie decyduje o wyborze leku P2Y12?',o:[
   ['Lekarz ośrodka kardiologii inwazyjnej',1,'Dobrze. Prasugrel podajesz tylko po teletransmisji EKG i konsultacji.'],
   ['Ratownik, wg własnego uznania',0,'Prasugrel wymaga konsultacji.'],
   ['Pacjent',0,'Nie.']]}],
 end:'Nie łączysz dwóch leków P2Y12 (np. prasugrel + klopidogrel) bez zlecenia.'},

ringer:{title:'Odwodnienie u biegacza',
 story:'Mężczyzna, 30 lat, 75 kg. Po półmaratonie w upale zasłabł. Przytomny, spocony, zawroty głowy, kurcze mięśni. Temperatura 38,2 °C.',
 vit:[['BP','95/60','mmHg'],['HR','118','/min'],['Temp.','38,2','°C'],['SpO₂','98','%'],['GCS','15',''],['Glikemia','90','mg/dl']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['Cień, chłodzenie, pozycja leżąca, dostęp iv',1,'Dobrze. Przy temperaturze > 40 °C i zaburzeniach świadomości podejrzewaj udar cieplny – agresywne chłodzenie.'],
   ['Każesz dalej biec, żeby się rozruszał',0,'Pacjent jest odwodniony i przegrzany.'],
   ['Ciepły koc',0,'Pogorszy przegrzanie.']]},
  {q:'Jak podasz płyn Ringera?',o:[
   ['Bolus 500 ml, potem ocena',1,'Tak.'],
   ['Wlew 50 ml na godzinę',0,'Za mało przy odwodnieniu z hipotensją.'],
   ['Nie podajesz – niech pije wodę',0,'Przy hipotensji płyny iv są wskazane.']]},
  {q:'Biegacz po maratonie jest splątany, a dużo pił wody. Na co uważasz?',o:[
   ['Hiponatremię – nie podawaj dużych ilości płynów bez oceny',1,'Dobrze. Nadmiar wody może obniżyć sód i spowodować obrzęk mózgu.'],
   ['Hiperglikemię',0,'Mniej prawdopodobna.'],
   ['Nic',0,'Splątanie wymaga szukania przyczyny.']]}],
 end:'Ringer zawiera potas i wapń – nie stosuj go w hiperkaliemii i hiperkalcemii, nie mieszaj z krwią w jednej linii.'},

tlen:{title:'Ból głowy całej rodziny',
 story:'Zimowy wieczór. Cała rodzina (rodzice i dwoje dzieci) skarży się na ból głowy, nudności i senność. W łazience pracuje stary piecyk gazowy. Matka jest splątana.',
 vit:[['SpO₂','98','% (!)'],['HR','110','/min'],['BP','120/75','mmHg'],['GCS','13','(matka)'],['RR','22','/min'],['Detektor CO','alarm','']],
 steps:[
  {q:'Co robisz najpierw?',o:[
   ['Ewakuujesz wszystkich na świeże powietrze, zadbaj o własne bezpieczeństwo',1,'Dobrze. Nie wchodzisz bez ochrony – możesz sam się zatruć.'],
   ['Badasz każdego w łazience',0,'Zostając w pomieszczeniu z CO, narażasz siebie i pacjentów.'],
   ['Otwierasz piecyk, żeby sprawdzić',0,'Bezpieczeństwo najpierw – wezwij straż pożarną.']]},
  {q:'SpO₂ pokazuje 98%. Czy to wyklucza niedotlenienie?',o:[
   ['Nie – pulsoksymetr nie odróżnia karboksyhemoglobiny od oksyhemoglobiny',1,'Tak. W zatruciu CO wynik SpO₂ jest fałszywie prawidłowy.'],
   ['Tak – saturacja prawidłowa',0,'Pulsoksymetr w zatruciu CO zawyża wynik.'],
   ['Tak, jeśli HR jest prawidłowe',0,'Nie.']]},
  {q:'Jak podajesz tlen?',o:[
   ['100% przez maskę z rezerwuarem 10–15 l/min',1,'Dobrze. W zatruciu CO tlen podajesz w maksymalnym stężeniu niezależnie od SpO₂.'],
   ['2 l/min przez wąsy',0,'To za mało w zatruciu CO.'],
   ['Tylko jeśli SpO₂ < 94%',0,'W zatruciu CO zasada celu SpO₂ 94–98% nie obowiązuje.']]}],
 end:'U pacjenta z POChP i zatrzymaniem CO₂ celem jest SpO₂ 88–92%. W pozostałych sytuacjach 94–98%.'}
});
