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
  if(this.temperature < 11){
    return "The minimum temperature is exceeded";
  }
  else{
    return this.temperature--;
  }
};