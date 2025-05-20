
       function oblicz(){
           event.preventDefault();
            var szer = parseFloat(document.getElementById("szerokosc").value);
            var dlug = parseFloat(document.getElementById("dlugosc").value);
              var winylowe = document.getElementById("winylowe").checked;
              var laminowe = document.getElementById("laminowe").checked;
              var deska = document.getElementById("deska").checked;
            
     if (isNaN(szer) || isNaN(dlug)) {
        document.getElementById('wynik').innerHTML = "Wprowadź poprawne dane.";
        return;
    }

        var pole = (szer) * (dlug);
        var koszt = 0;
    
        if ( document.getElementById("winylowe").checked) {
            koszt = 12*pole;
            document.getElementById('wynik').innerHTML = `Pole powierzchni pomieszczenia: ` +(pole) + ` Koszt montażu: `+ (koszt);
        }
        else if (document.getElementById("laminowe").checked) {
            koszt = 14*pole;
            document.getElementById('wynik').innerHTML = `Pole powierzchni pomieszczenia:  ` +(pole) +` Koszt montażu: `+ (koszt);
        }
        else if (document.getElementById("deska").checked) {
            koszt = 18*pole;
            document.getElementById('wynik').innerHTML = `Pole powierzchni pomieszczenia: ` +(pole) +` Koszt montażu: `+ (koszt);
        }     
          
        else  {
            document.getElementById('wynik').innerHTML =" Wprowadź poprawne dane. " ;
        return;
        }
      

      

        }
        