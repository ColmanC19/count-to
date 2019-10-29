$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();
  var countToInput = parseInt($("#countto").val());
  var countByInput = parseInt($("#countby").val());
 // console.log(countToInput)
 // console.log(countByInput)

  for (var i = countByInput; i <= countToInput; i += countByInput) {
    // console.log(newI);
    $(".output").append(i + ', ');
};

  });
});
