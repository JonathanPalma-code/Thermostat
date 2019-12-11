'use strict';

function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  return this.temperature++;
};

Thermostat.prototype.decrease = function(){
  return this.temperature--;
};