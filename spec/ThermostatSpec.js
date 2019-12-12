'use strict';

describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('expect the default degree', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it('increases temperature a degree', function(){
    thermostat.increase();
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it('should raise an error when Max Temperature is exceeed', function(){
    for(var i=20; i<thermostat.maxTemperature(); i++){
      thermostat.increase();
    };

    expect(function (){ 
      thermostat.increase();
    }).toThrowError("The maximum temperature is exceeded");
    
  });

  it('decreases temperature a degree', function(){
    thermostat.decrease();
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it('expect the minimum temperature to be 10 degrees',function() {
    var i;
    for(i=20; i>thermostat.MIN_TEMPERATURE; i--){
      thermostat.decrease();
    };
    expect(function (){ 
      thermostat.decrease();
    }).toThrowError("The minimum temperature is exceeded");
  });

  //Power saving mode

  it('has power saving mode on by default',function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM back on', function(){
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });8

  it('expect to reset the temperature to 20 when calling the reset function', function(){
    expect(thermostat.reset()).toEqual(20);
  });

  describe('displaying usage levels', function(){
    describe('When temperature is below 18 degrees', function(){
      it('Low-usage', function(){
        var i;
        for(i=0;i<=3;i++){
          thermostat.decrease();
        }
        expect(thermostat.currentUsage()).toEqual("Low-usage");
      });
    });
    describe('When temperature is over 25 degrees', function(){
      it('High-Usage', function(){
        thermostat.switchPowerSavingMode();
        var i;
        for(i=0;i<7;i++){
          thermostat.increase();
        }
        expect(thermostat.currentUsage()).toEqual("High-usage");
      });
    });
  });
});