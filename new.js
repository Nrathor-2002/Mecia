const numb = document.querySelector(".numb");
            let counter = 0;
            setInterval(()=>{
              if(counter == 100){
                clearInterval();
              }else{
                counter+=1;
                numb.textContent = counter + "%";
              }
              KeyframeEffect
            }, 80);
const numb1 = document.querySelector(".numb1");
            let counter1 = 0;
            setInterval(()=>{
              if(counter == 100){
              if(counter1 == 100){
                clearInterval();
              }else{
                counter1+=1;
                numb1.textContent = counter1 + "%";
              }
            }
            }, 80);     
const numb2 = document.querySelector(".numb2");
            let counter2 = 0;
            setInterval(()=>{
              if(counter1 == 100){
              if(counter2 == 100){
                clearInterval();
              }else{
                counter2+=1;
                numb2.textContent = counter2 + "%";
              }
            }
            }, 80);
            
