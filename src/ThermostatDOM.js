$( document ).ready(function(){
  var thermostat = new Thermostat();

  $('#increase').click(function( event ){
    if(thermostat.temperature == thermostat.maxTemperature()){
      alert("The maximum temperature is exceeded");
    }
    thermostat.increase();
    update();
  })
  $('#decrease').click(function( event ){
    if(thermostat.temperature == thermostat.MIN_TEMPERATURE){
      alert("The minimum temperature is exceeded");
    }
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

  function update(){
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperature').attr('class', thermostat.currentUsage());
  }
  update();

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=b91f7d640b792ba9d5c85d85a9e0ca5d';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#city-name').text(data.name);
    })
  }
  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })
})
