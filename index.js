(function () {
    const api = window.SubwayBuilderAPI;

    // Log when mod loads
    console.debug('[Trams Mod] Loaded!');

    api.trains.registerTrainType({
		id: 'tram',
		name: 'Tram',
		description: 'Trams/Streetcars for street running in dense urban environments',
		
		// Based off of Pesa Jazz
		// https://pesa.pl/en/produkty/tramwaje/jazz
		// https://bark.lgbt/@rail_/112902990591292420
		stats: { 
			maxAcceleration: 1.0,
			maxDeceleration: 1.0,
			maxSpeed: 80,
			maxSpeedLocalStation: 15,
			
			capacityPerCar: 35,
			
			carLength: 5.85714285714,
			minCars: 3,
			maxCars: 7,
			carsPerCarSet: 2,
			
			trainWidth: 2.3,
			
			minStationLength: 38.6,
			maxStationLength: 82,
			
			carCost: 2_500_000,
			baseTrackCost: 15_000,
			baseStationCost: 105_000,
			scissorsCrossoverCost: 500_000,			
			trainOperationalCostPerHour: 200,
			carOperationalCostPerHour: 25
		},
		compatibleTrackTypes: ['tram', 'light-rail'],
		appearance: { color: '##FF8DA1' },
		allowAtGradeRoadCrossing: true,
		
	});
})();
