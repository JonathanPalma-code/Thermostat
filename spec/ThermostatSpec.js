'use strict';

describe('Thermostat',function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  it('expect the current degree', function(){
    expect(thermostat.currentTemperature()).toEqual(20);
  })
})