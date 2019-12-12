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
  $('#decrease').click(function( event ){
    thermostat.decrease();
    update();
  })

  $('#reset').click(function( event ){
    thermostat.reset();
    update();
  })

  $('#power_saving_mode').click(function( event ){
    thermostat.switchPowerSavingMode();
    $('#PSM').text(thermostat.switchPSM());
  })
})
