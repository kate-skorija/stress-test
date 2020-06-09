$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("section").hide();
    let stressLevel = 0;
    let copingLevel = 0;
    $("input:checkbox[value=stress-signs]:checked").each(function() {
      stressLevel += 1;
    })
    $("input:checkbox[name=stress-symptoms]:checked").each(function() {
      stressLevel += 1;
    })
    $("input:checkbox[name=stress-coping]:checked").each(function() {
      copingLevel += 1;
    })
    if (copingLevel >= stressLevel) {
      $("section#good-job").show();
    }
    else if (stressLevel > copingLevel && stressLevel - copingLevel < 6) {
      $("section#some-stress").show();
    }
    else if (stressLevel > copingLevel && stressLevel - copingLevel >= 6) {
      $("section#high-stress").show();
    }
  });
});