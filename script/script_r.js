let a=0
let c=0
let b=0  

document.getElementById("gomb1").addEventListener("click", csere1);
document.getElementById("gomb2").addEventListener("click", csere2);
document.getElementById("gomb3").addEventListener("click", csere3);



function csere1(){
    if(a%2==0){
        document.getElementById("zuko").innerText="A Tűz Népének trónörököse, akinek története a megváltás és az önkeresés útját mutatja be. Eleinte célja az Avatar elfogása volt, hogy visszaszerezze apja, Ozai, kegyeit, de az útja során ráébredt, hogy valódi hűsége a világ egyensúlyának helyreállításához kötődik. Iroh nagybátyja iránymutatása mellett Zuko felismerte apja zsarnokságát, és elhatározta, hogy segíti Aangot a Tűz Urának legyőzésében. Bátorsága és fejlődése révén végül igazságos vezetővé vált, aki békét hozott a Tűz Népének és a világ többi részének. Zuko története a belső harcok és az erkölcsi győzelem szimbóluma.";a++ }
    else{
        document.getElementById("zuko").innerHTML=`<img src="kepek/roku/zuko.jpg" alt="Zuko">`;a--
    }
}

function csere2(){
    if(b%2==0){
        document.getElementById("iroh").innerText="A Tűz Népének hercege, aki bátyja, Ozai zsarnoki uralma helyett a békét és harmóniát részesítette előnyben. Fiának elvesztése mélyen megrázta, ami arra késztette, hogy megkérdőjelezze a Tűz Népének háborúját és saját korábbi tetteit. Bölcsességével és humorával nemcsak unokaöccse, Zuko mentoraként vált nélkülözhetetlenné, hanem az Avatár csapatának is szövetségese lett. Iroh filozófiája az elemek egyensúlyára és a belső béke megtalálására épült, amit teázói és tanításai is tükröztek. Karaktere az együttérzés és a megértés példáját mutatja, megtestesítve a valódi erő fogalmát a megbocsátásban és a szeretetben. ";b++ }
    else{
        document.getElementById("iroh").innerHTML=`<img src="kepek/roku/iroh.png" alt="Ihro">`;b--
    }
}

function csere3(){
    if(c%2==0){
        document.getElementById("mako").innerText="Fiatalon árvaságra jutott, és testvérével, Bolinnal együtt tanult meg túlélni a Köztársasági Város utcáin. Komoly és felelősségteljes természetével ellentéte Bolin vidám és gondtalan személyiségének, de ez az egyensúly tette őket erős csapattá. Mako eleinte a Pro-bending bajnokságban a Tűzmenyétek csapat kapitányaként tűnt ki, majd később a rendfenntartók tagjaként dolgozott a város biztonságáért. Hűsége és éles esze miatt sokszor Korrának is megbízható társa lett a harcokban és a világ megmentésében. Bár a személyes kapcsolatai gyakran bonyolultak voltak, Mako minden helyzetben bizonyította, hogy hűséges barát és bátor harcos.";c++ }
    else{
        document.getElementById("mako").innerHTML=`<img src="kepek/roku/mako.jpg" alt="Mako">`;c--
    }
}