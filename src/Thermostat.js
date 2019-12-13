'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MIN_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_TEMPERATURE_PSM_ON = 25;
  this.MAX_TEMPERATURE_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}

Thermostat.prototype.currentTemperature = function(){
  return this.temperature;
}

Thermostat.prototype.isMaximumTemperature = function(){
  if(this.powerSavingMode === false){
    return this.temperature === this.MAX_TEMPERATURE_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMPERATURE_PSM_ON;
}

Thermostat.prototype.maxTemperature = function(){
  if(this.powerSavingMode){
    return this.MAX_TEMPERATURE_PSM_ON;
  }
  return this.MAX_TEMPERATURE_PSM_OFF;
}

Thermostat.prototype.increase = function(){
  if(this.isMaximumTemperature()){
    throw new Error("The maximum temperature is exceeded");
  }
  return this.temperature += 1;
}

Thermostat.prototype.decrease = function(){
  if(this.temperature <= this.MIN_TEMPERATURE){
    throw new Error("The minimum temperature is exceeded");
  }
  else{
    return this.temperature -= 1;
  }
}

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingMode = function(){
  this.powerSavingMode = !this.powerSavingMode;
  if(this.powerSavingMode && this.temperature >= this.MAX_TEMPERATURE_PSM_ON){
    this.temperature = this.MAX_TEMPERATURE_PSM_ON;
  }
}

Thermostat.prototype.reset = function(){
  return this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.currentUsage = function(){
  if(this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT){
    return "Low-usage";
  }
  else if(this.temperature >= this.MAX_TEMPERATURE_PSM_ON){
    return "High-usage";
  }
  else {
    return "Medium-usage";
  }
}

Thermostat.prototype.switchPSM = function(){
  if(this.powerSavingMode){
    return "on";
  } return "off";
}
