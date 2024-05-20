const main=document.querySelector('main');
let deg=90;

setInterval(()=>{

    subeBaja();

    main.style.backgroundImage=`linear-gradient( ${deg}deg,  rgba(152,45,255,1) 0.7%, rgba(90,241,255,1) 50%, rgba(65,239,164,1) 100% )`;

},50);

function subeBaja(){
    if(deg==360) deg=359;

    if(deg==1)deg=0;

    if(deg%2==0)deg+=2;

    if(deg%2==1)deg-=2;
}