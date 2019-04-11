var image = document.getElementById('image1');
       // Quand on survole l'image, on lance la fonction :
       image.addEventListener('mouseover', function()
       {
         // On change le border de l'élément
         document.getElementById("image1").style.border = "3px red solid";
       });
       // Quand on quitte le survol :
       image.addEventListener('mouseout', function()
       {
         // On réinitialise le border
         document.getElementById("image1").style.border = "";
       });
