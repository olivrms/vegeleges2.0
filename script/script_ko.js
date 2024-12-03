let a=0
let c=0
let b=0  

document.getElementById("gomb1").addEventListener("click", csere1);
document.getElementById("gomb2").addEventListener("click", csere2);
document.getElementById("gomb3").addEventListener("click", csere3);



function csere1(){
    if(a%2==0){
        document.getElementById("katara").innerText="Déli Víz Törzsből származó tehetséges vízidomár, aki bátyjával, Sokkával együtt találta meg Aangot, az utolsó légidomárt. Kitartó és erős akaratú személyiségével nemcsak a csapat érzelmi támasza volt, hanem kulcsszerepet játszott a háború megállításában is. Katara mesteri szintre fejlesztette vízidomítási képességeit, amelyek közé tartozott a gyógyítás és a veszélyes vérhajlítás is. Bár néha anyáskodó és szigorú, mély törődése és együttérzése segített összetartani a csapatot a legnehezebb időkben is. A történet végére Katara nemcsak Aang társa és mestere lett, hanem a világ egyik legerősebb vízidomárjaként vívta ki tiszteletét.";a++ }
    else{
        document.getElementById("katara").innerHTML=`<img src="kepek/korra/katara.jpg" alt="Katara">`;a--
    }
}

function csere2(){
    if(b%2==0){
        document.getElementById("amon").innerText="Amon egy karizmatikus és titokzatos figura, aki az egyenlőség eszméjét hirdeti. Valódi neve Noatak, és Északi Víz Törzséből származik, ahol apja, Yakone, kíméletlen vízidomár és véridomár volt. Amon fiatal korában sajátította el a véridomítást, de apja kegyetlensége és hatalomvágya elől elmenekült, új identitást teremtve magának. Mozgalma, az Egyenlőség Párt, az idomárok elleni harcra és a nem-idomárok felszabadítására összpontosított, miközben Amon titkos véridomítási képességeit kihasználva megszüntette az idomítók erejét. ";b++ }
    else{
        document.getElementById("amon").innerHTML=`<img src="kepek/korra/amon.jpg" alt="Amon">`;b--
    }
}

function csere3(){
    if(c%2==0){
        document.getElementById("tarrlok").innerText="Egyesült Köztársaság Tanácsának Északi Víz Törzsét képviselő tagja, akinek ambiciózus és manipulatív természete hamar szembekerül Korrával. Apja, Yakone, hírhedt véridomár volt, aki Tarrlokot és bátyját, Noatakot (Amon) gyermekkorukban kényszerítette a véridomítás elsajátítására. Bár Tarrlok felnőttként megpróbált elhatárolódni apja örökségétől, politikai hatalomvágya és manipulatív módszerei végül ráirányították a figyelmet. A Korrával való konfliktusai során kiderült, hogy ő is képes a véridomításra, amit vészhelyzetekben használt, hogy elérje céljait. Tragikus sorsa akkor teljesedett be, amikor rájött, hogy bátyja, Amon, ugyanazon fájdalmas múltjuk áldozata, és Tarrlok önfeláldozásával közösen vetettek véget életüknek.";c++ }
    else{
        document.getElementById("tarrlok").innerHTML=`<img src="kepek/korra/tarrlok.jpg" alt="Tarrlok">`;c--
    }
}