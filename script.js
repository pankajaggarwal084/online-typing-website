           const arr=["JavaScript is a lightweight, interpreted, object-oriented language",
            "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
            "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
            "JavaScript is a scripting language and it is not java.JavaScript is interpreter based scripting language."];
        const msg=document.getElementById('message');
        const txt=document.getElementById('typingtext');
      const btn1=document.getElementById('btn');
      let start,end;
      function fun(){
          var random=Math.floor(Math.random()*arr.length);
          message.innerText=arr[random];
          var date=new Date();
          start=date.getTime();
          btn1.innerText="DONE";
        }
      fun1=() =>{
          date=new Date();
          end=date.getTime();
          var totaltime= (end-start)/1000;
          console.log(totaltime);
          var totalstring=typingtext.value;
          var countword=wordCounter(totalstring);           
          var speed=Math.round((countword/totaltime)*60);
          var finalmsg=("You typed with the speed of " +speed+" words per minutes");
          finalmsg += comparewords(message.innerText,totalstring);

          message.innerText=finalmsg;
        }
        comparewords=(str1,str2)=>{
          var words1=str1.split(" ");
          var words2=str2.split(" ");
          var count=0;
          words1.forEach(function(item,index){
              if(item==words2[index]){
                  count++;
              }
          })
          var errors=(words1.length-count);
          return(" "+count+" correct out of "+words1.length+" words and the total number of error are "+errors+".");
        }
        wordCounter=(a) =>{
            var totalinput=a.split(" ").length;
            console.log(totalinput);
            return totalinput;
           
        }
        btn.addEventListener('click',function(){
             if(this.innerText=='START'){
                typingtext.disabled=false;
                fun();
            }
            else if(this.innerText=="DONE"){
                typingtext.disabled=true;
                btn1.innerText="START";
                fun1();
            }
        });
