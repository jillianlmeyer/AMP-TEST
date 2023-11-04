define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({

		trialsInBlock : [40, 40, 40, 40], //Number of trials in each block 
		trialsInExample : 5, //Change to 0 if you don't want an example block
	
		sortingLabel1 : 'Neutral', //Response is coded as 0. 
		sortingLabel2 : 'Negative',  //Response is coded as 1.
		

		//  ***** REAL TRIAL ************//
		primeCats :  [
			{
				nameForFeedback : 'CMTs',  //Will be used in the user feedback 
				nameForLogging : 'CMTs', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'unfairness'}, 
					{word : 'cheating'}, 
					{word : 'deception'}, 
					{word : 'lying'}, 
					{word : 'stealing'}
				]

			}, 
			{
				nameForFeedback : 'Neutrals',  //Will be used in the user feedback 
				nameForLogging : 'Neutrals', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    	{word : 'writing'}, 
					{word : 'farming'}, 
					{word : 'baking'}, 
					{word : 'painting'}, 
					{word : 'poetry'}
				]
			}
		],

		targetCats :  [
				{
				nameForLogging : 'Neutrals',  //Will be used in the logging
				//An array of all media objects for this category. The default is pic1-pic200.jpg
				mediaArray : [
					{word : 'writing'}, 
					{word : 'farming'}, 
					{word : 'baking'}, 
					{word : 'painting'}, 
					{word : 'poetry'}
				]
				
			},
				{
				nameForLogging : 'Negatives',  //Will be used in the logging
				//An array of all media objects for this category. The default is pic1-pic200.jpg
				mediaArray : [
					{word : 'murder'}, 
					{word : 'rape'}, 
					{word : 'assault'}, 
					{word : 'racism'}, 
					{word : 'torture'}
				]
				}
			],

		//Duration parameters.
		fixationDuration : 1000, //It means that by default we do not use fixation.
		primeDuration : 1000, 
		postPrimeDuration : 1000, //Duration of blank screen between prime and target.
		targetDuration : 1000, //Duration of target presentation.
		showRatingDuration : 300, //In the 7-responses option, for how long to show the selected rating.
		ITI : 250, //Duration between trials.

		//  ********* END REAL TRIALS **********//


		// *********  EXAMPLE ROUND  *****************
		examplePrimeStimulus : {
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [
				{word : 'armchair'}, 
				{word : 'lamp'}, 
				{word : 'umbrella'},
				{word: 'upset'},
				{word: 'unhappy'}
			]
		},

		exampleTargetStimulus : {
			nameForLogging : 'exampleTarget', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [
				{word : 'armchair'}, 
				{word : 'lamp'}, 
				{word : 'umbrella'},
				{word: 'upset'},
				{word: 'unhappy'}
			]
		},

		//For the example block (often practice)  - MEASURED IN MILLISECONS.  1000MS = 1 SECOND
		exampleBlock_fixationDuration : 500, 
		exampleBlock_primeDuration : 500, 
		exampleBlock_postPrimeDuration : 1000, 
		exampleBlock_targetDuration : 500,

		// ****** END EXAMPLE ROUND ********
		
	});
});
