$(document).ready(function(){
                  
  var names = [];
  
  
   $('#addme').click(function(){
// part1: add a new person's name to the line
     names.push($('#namebox').val());
     console.log(names[names.length - 1]);
     
// part1: notify the person of their position on the line
     $('#number').text("You are number: " + names.length);
   });    
   
                   
                  
   $('#whosnext').click(function() {
     // part2/extension: notify if there is no one on the line
     if(names.length === 0) {
       $('#nextperson').text("There is no one on the line.");
     } else {
                  
      // part2: remove the person who was just served from the line
      // part2: notify the person who is next on the line
       var next = names.shift();
       $('#nextperson').text("The next person is " + next);
     }
   });         
                  

// part3: when someone gives a name, notify the person of the position in line
  $('#findname').change(function() {
    var name = $('#findname').val();
    for(var i=0; i<names.length; i++) {
      if(name == names[i]) {
        $('#namepos').text("You are number: " + (i + 1));
        return;
      }
    }
    
    $('#namepos').text("You are not in line.");
  });
  

                  
                
                  
                  

                  
});