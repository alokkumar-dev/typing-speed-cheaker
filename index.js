const setOfWorld=[
    "MY name is Alok Kumar and I am a web developer",
    "hope you  are having fun thid is simple game you can make",
    "If you want to source code then link is gevin in the description so you can creare your own version of this challenge"
];
const msg=document.getElementById("msg");
const typeWorlds=document.getElementById("myWords");
const btn=document.getElementById("btn");

let startTime, endTime;

const playGame= () =>{
    let randomNumber=Math.floor(Math.random() *setOfWorld.length);
    msg.innerText =setOfWorld[randomNumber] 
   let date =new Date();
   startTime =date.getTime();
   btn.innerText='Done';
     
} 
 const endPlay = ()=>{
     let date=new Date();
     endTime =date.getTime();
     let totalTime = (endTime-startTime) / 1000;
     console.log(totalTime)

     let totalStr = typeWorlds.value;
     let wordCount = wordCounter(totalStr);

     let speed = Math.floor((wordCount/totalTime) * 60);

     let finalMsg = 'you typed total at '+speed +"words per minutes";

      finalMsg+= compareWords(msg.innerText ,totalStr)

     msg.innerText =finalMsg;
     
 }
 const compareWords= (str1,str2)=>{
     let words1 = str1.split(" ");
     let words2 = str1.split(" ");
     let cnt = 0;

     words1.forEach(function (item,index){
         if(item == words2[index]){
             cnt++;
         }
     })
   
     let errorWords=(words1.length -cnt);
     return (cnt +"correct out of "+words1.length + "word and the total number of error are "+ errorWords +".");
     
 }

 const wordCounter = (str) =>{
    let response = str.split(" ").length;
    console.log(response);
    return response;
 }

btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
      typeWorlds.disabled  =false;
      playGame();
    }else if(this.innerText=='Done'){
        typeWorlds.disabled = true;
        btn.innerText ='Start';
        endPlay();  

    }
})