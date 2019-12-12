$( document ).ready(function(){
  var thermostat = new Thermostat();
  function update(){
    $('#temperature').text(thermostat.currentTemperature());
  }
  update();
  $('#increase').click(function( event ){
    thermostat.increase();
    update();
  })
})
