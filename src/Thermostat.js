'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
};

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  return this.temperature++;
};

Thermostat.prototype.decrease = function(){
  if(this.temperature <= this.MIN_TEMPERATURE){
    return "The minimum temperature is exceeded";
  }
  else{
    return this.temperature--;
  }
};