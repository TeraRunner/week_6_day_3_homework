const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((startLocation) => startLocation.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((endLocation) => endLocation.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => transport === journey.transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => minDistance < journey.distance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => {
  return totalDistance += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((transport) => transport.transport);
};

module.exports = Traveller;
