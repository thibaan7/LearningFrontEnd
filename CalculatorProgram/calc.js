const display= document.getElementById("display");

    function appendToDisplay(input){  /*display.value += input;: 
                                            This concatenates (adds) the input to the current value of the display.
                                        For example,
                                        if the display already shows "5" 
                                        and the user presses "2", 
                                        the display will now show "52".*/


    display.value+=input;
    if(display.value==='5/2/2003'){
        displaykotte();
    }

}


    function clearDisplay(){
    display.value= "";
    }


    function calculate(){
        try{
            display.value=eval(display.value);
        }
        catch(error){
    display.value="Error";
        }

    }
    function displaykotte() {
            display.value = "poda kotte"; // Assign "PODA KOTTE" to the display value
        }
    
    


