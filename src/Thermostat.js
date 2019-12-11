'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.MAX_TEMPERATURE = 25;
};

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  if(this.temperature >= this.MAX_TEMPERATURE){
    return "The maximum temperature is exceeded"
  }
  else{
    return this.temperature++;
  }
};

Thermostat.prototype.decrease = function(){
  if(this.temperature <= this.MIN_TEMPERATURE){
    return "The minimum temperature is exceeded";
  }
  else{
    return this.temperature--;
  }
};

Thermostat.prototype.powerMode = function(){
  if(this.MAX_TEMPERATURE == 25){
    this.MAX_TEMPERATURE = 32;
    return "Power saving mode is off";
  }
  else{
    this.MAX_TEMPERATURE = 25;
    return "Power saving mode is on";
  }
  
};