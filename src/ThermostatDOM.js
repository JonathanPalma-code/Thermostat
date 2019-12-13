$( document ).ready(function(){
  var thermostat = new Thermostat();
  function update(){
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperature').attr('class', thermostat.currentUsage());
  }
  update();

  $('#increase').click(function( event ){
    if(thermostat.temperature == thermostat.maxTemperature()){
      alert("The maximum temperature is exceeded");
    }
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
    update();
    $('#PSM').text(thermostat.switchPSM());
  })
})
