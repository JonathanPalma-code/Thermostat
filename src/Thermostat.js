'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_TEMPERATURE_PSM_ON = 25;
  this.MAX_TEMPERATURE_PSM_OFF = 32;
};

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
};

Thermostat.prototype.increase = function(){
  if(this.temperature >= (this.MAX_TEMPERATURE + 1)){
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

Thermostat.isPowerSavingModeOn = function() {
  this.powerSavingMode = true;
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

Thermostat.prototype.reset = function(){
  return this.temperature = 20;
};

Thermostat.prototype.currentUsage = function(){
  if(this.temperature < 18){
    return "Low-usage";
  }
  if(this.temperature >= 25){
    return "High-usage";
  }
  else {
    return "Medium-usage";
  };
};