console.log('hellow')
function getData(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let format = '.Am';

    if(hour ===0){
        hour = 12;
    }
    if(hour>0){
        hour-=12;
        format = "pm";
    }
    if(hour<10){
        hour="0"+hour;
    }
    if(minutes<10){
        minutes ='0'+minutes;
    }
    if(second<10){
        second = '0'+second;
    }

    let finalTime = hour +":"+ minutes +":"+ second  ;


    let  h1 = document.getElementById('time');
    h1.innerText = finalTime + " "+format;
    h1.style.marginTop = '45px'
    h1.style.marginLeft = '65px'
    h1.style.color = '#fff'
    let span = document.getElementById('set');
    span.innerText= format;
    h1.style.display = 'none';
   
   
    

}
    setInterval(getData, 1000);
