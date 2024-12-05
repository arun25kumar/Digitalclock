
    
    function clock(){
        let hour=document.getElementById("hour")
        let mins=document.getElementById("mins")
        let seconds=document.getElementById("seconds")
        let ampm=document.getElementById("ampm")
    
    let dateTime = new Date()
    let hr=dateTime.getHours()
    let min=dateTime.getMinutes()
    let sec=dateTime.getSeconds()

  if(hr>12){
    hr=hr-12
    ampm.innerHTML="PM"
}
   else {
    ampm.innerHTML="AM"
   }

if(hr<=9){
    hr='0'+hr
 
}
if(min<=9)
{
    min='0'+ min
}
if(sec<=9){
    sec='0'+sec

}

     hour.innerHTML=hr
     mins.innerHTML=min
     seconds.innerHTML=sec




}
setInterval(()=>{
    clock()
},500)