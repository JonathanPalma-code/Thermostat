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
});