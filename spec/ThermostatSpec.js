'use strict';

describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('expect the current degree', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases temperature a degree', function(){
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature a degree', function(){
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it('expect the minimum temperature to be 10 degrees',function() {
    var i;
    for(i=20; i>thermostat.MIN_TEMPERATURE; i--){
      thermostat.decrease();
    };
    expect(thermostat.decrease()).toEqual("The minimum temperature is exceeded");
  });

  it('expect the maximum temperature to be 25 degrees',function() {
    var i;
    for(i=20; i<thermostat.MAX_TEMPERATURE; i++){
      thermostat.increase();
    };
    expect(thermostat.increase()).toEqual("The maximum temperature is exceeded")
  });

  it('expect the maximum temperature to be 32 degrees when the power saving mode is off',function() {
    var i;
    for(i=20; i<32; i++){
      thermostat.increase();
    };
    expect(thermostat.increase()).toEqual("The maximum temperature is exceeded")
  });

  it('expect the power saving mode is off',function() {
    thermostat.powerMode();
    expect(thermostat.MAX_TEMPERATURE).toEqual(32)
  });

  it('expect to reset the temperature to 20 when calling the reset function', function(){
    expect(thermostat.reset()).toEqual(20);
  });

  // DESCRIBEEEEE current usage.

  it('gives a message due to the thermostat current energy usage', function(){
    var i;
    for(i=0;i<=3;i++){
      thermostat.decrease();
    }
    expect(thermostat.currentUsage()).toEqual("Low-usage");
  })

  it('gives a message due to the thermostat current energy usage', function(){
    var i;
    for(i=0;i>6;i++){
      thermostat.increase();
    }
    expect(thermostat.currentUsage()).toEqual("High-usage");
  })
});