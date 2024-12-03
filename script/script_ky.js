let a=0
let c=0
let b=0  

document.getElementById("gomb1").addEventListener("click", csere1);
document.getElementById("gomb2").addEventListener("click", csere2);
document.getElementById("gomb3").addEventListener("click", csere3);



function csere1(){
    if(a%2==0){
        document.getElementById("toph").innerText="Vak születése óta, de különleges képességének köszönhetően a földön keresztül érzékeli a mozgásokat, ami számára szinte teljes látást biztosít. Gazdag és túlvédelmező családból származik, ám elhagyta otthonát, hogy szabadon élhessen, és csatlakozott Aang csapatához, hogy segítsen legyőzni a Tűz Urat. Rendkívüli képességei és makacs személyisége révén nemcsak Aang kiképzésében játszott kulcsszerepet, hanem az egész világ sorsát alakította. Később Toph megalapította a Föld Királyság rendőrségét, amely a fémidomítás erejét használta a bűnözés megfékezésére, ezzel új korszakot hozva a világban.";a++ }
    else{
        document.getElementById("toph").innerHTML=`<img src="kepek/kyoshi/toph.jpg" alt="toph Beifong">`;a--
    }
}

function csere2(){
    if(b%2==0){
        document.getElementById("bumi").innerText="Omashu városának királya és Aang gyermekkori barátja. Bár első ránézésre bolondosnak és szórakozottnak tűnik, valójában zseniális stratéga és az egyik legerősebb földidomár. Bölcsessége és találékonysága révén gyakran meglepi ellenségeit, és tanításaival segíti Aang fejlődését. Bumi mindig hisz a kreativitás erejében, amely a harcban és az élet minden területén is érvényesül. Az ostrom alatt bebizonyítja, hogy nemcsak erős, hanem rendkívül ravasz is, amikor úgy dönt, megvárja a megfelelő pillanatot a cselekvésre.";b++ }
    else{
        document.getElementById("bumi").innerHTML=`<img src="kepek/kyoshi/bumi.jpg" alt="Bumi">`;b--
    }
}

function csere3(){
    if(c%2==0){
        document.getElementById("bolin").innerText="Tehetséges idomárként eleinte a Pro-bending csapat, a Tűzmenyétek tagja, ahol testvérével, Makóval együtt küzd a győzelemért. Később felfedezi a lávák idomításának ritka képességét, amely még különlegesebbé teszi. Bár gyakran komikus megjegyzéseivel és esetlenségével szórakoztatja a társait, a sorozat során bebizonyítja, hogy hűséges barát és bátor harcos. Bolin mindig szívvel-lélekkel küzd, legyen szó csatáról vagy arról, hogy támogassa a barátait nehéz időkben.";c++ }
    else{
        document.getElementById("bolin").innerHTML=`<img src="kepek/kyoshi/bolin.jpg" alt="Bolin">`;c--
    }
}



