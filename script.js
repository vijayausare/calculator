
           let y, x=0;
           let mulx=1;
           let muly=1;
           function display(val){  
            document.getElementById("val").value+=val;
    
           }
           function clr(){
               document.getElementById("val").value="";
           }
           function find()
         {
             let x = document.getElementById("val").value
             let y = eval(x)
             document.getElementById("val").value = y
         }
