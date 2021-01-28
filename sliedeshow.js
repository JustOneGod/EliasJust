
// element im html
const anzHtml = 5;



let cpos = 0;//current position
let targetImg =3;//equal to button position 




let autosliede;
autosliede=setInterval(function(){
   if (targetImg>=anzHtml) {
       targetImg=1;
   } else {
    targetImg++;
   }
    
    sliedebutton(targetImg);

}, 3000);
  
function button(buttonpos) {
    clearInterval(autosliede);
    
    sliedebutton(buttonpos);
    autosliede=setInterval(function(){
        if (targetImg>=anzHtml) {
            targetImg=1;
        } else {
         targetImg++;
        }
        sliedebutton(targetImg);    
     }, 3000);
    
}

function sliedebutton(buttonpos) {   //button position
   
    targetImg=buttonpos;


    let count = buttonpos+cpos-3;
    document.getElementById('slieder'+(Math.abs(cpos-3))).style='background-color:white;';
    document.getElementById('slieder'+buttonpos).style='background-color:black; width:60px; border-radius:50px;  opacity: 0.8;';
  
    //document.getElementById('tex-block').innerHTML=;
     if (count < 0) {
      
        for (let i = 0; i < Math.abs(count); i++) {
            switchImg('left');

        }
    } else {
        for (let i = 0; i < Math.abs(count); i++) {
            switchImg('right');
        }
    }
    cpos+=(-1*count);
}



//------------------------Switch img-----------------------------------/



function switchImg(side) {

  
    if (side == 'left') {
 
        let temp1 = document.getElementById('img' + (1)).innerHTML;
        for (let i = 1; i <= anzHtml; i++) {
            if (i==3) {
                document.getElementById('grayout').style.backgroundImage='url(Images/Sliedeshow/drone'+(anzHtml)+'.jpg)'
            }


            if (i == anzHtml) {
                document.getElementById('img1').innerHTML = temp1;
                document.getElementById('grayout').style.backgroundImage='url('+document.getElementsByTagName('img')[2].src+')';
               

            
            } else {           
                temp = temp1;
                temp1 = document.getElementById('img' + (i + 1)).innerHTML;
                document.getElementById('img' + (i + 1)).innerHTML = temp;
                document.getElementById('grayout').style.backgroundImage='url('+document.getElementsByTagName('img')[2].src+')';

               


            }
        }

    } else {

        let temp1 = document.getElementById('img' + (anzHtml)).innerHTML;

        for (let i = anzHtml; i >= 1; i--) {


            document.getElementById('img' + i - 1);
            if (i == 1) {
                document.getElementById('img' + (anzHtml)).innerHTML = temp1;
                document.getElementById('grayout').style.backgroundImage='url(Images/Sliedeshow/drone'+(anzHtml)+'.jpg)'
                document.getElementById('grayout').style.backgroundImage='url('+document.getElementsByTagName('img')[2].src+')';

            } else {

                temp = temp1;
                temp1 = document.getElementById('img' + (i - 1)).innerHTML;
                document.getElementById('img' + (i - 1)).innerHTML = temp;
                document.getElementById('grayout').style.backgroundImage='url(Images/Sliedeshow/drone'+(anzHtml)+'.jpg)'
                document.getElementById('grayout').style.backgroundImage='url('+document.getElementsByTagName('img')[2].src+')';

            }
        }

    }

}
