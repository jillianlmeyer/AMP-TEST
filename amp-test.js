define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({

		trialsInBlock : [40, 40, 40, 40, 40, 40], //Number of trials in each block 
		trialsInExample : 5, //Change to 0 if you don't want an example block
	
		sortingLabel1 : 'Morally Wrong', //Response is coded as 0. 
		sortingLabel2 : 'Neutral',  //Response is coded as 1.

		rightKey : 'm', 
		leftKey : 'z',

		targetCat : 'SECOND word', //The name of the targets (used in the instructions)

		//The default font color of text in the task (e.g., for key labels).
		fontColor : '#FFFFFF', 

		//Set the canvas of the task
		canvas : {
			maxWidth: 850,
			proportions : 0.7,
			background: '#FFFFFF',
			borderWidth: 5,
			canvasBackground: '#000000',//this is black background 000000
			borderColor: 'lightblue'
		}, 
		
		
		//Instructions text for the 2-responses version.
			exampleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><br/>' + 
			'Press the key <B>rightKey</B> if the targetCat is more rightAttribute than average. ' + 
			'Hit the <b>leftKey</b> key if it is more leftAttribute than average.<br/><br/>' + 
			'The items appear and disappear quickly.  ' + 
			'Remember to ignore the first word that appears before the targetCat and evaluate only the targetCat.<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><br/><br/>' + 
			'When you are ready to try a few practice responses, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'[Round 1 of nBlocks]</p></div>',
		
		//  ***** REAL TRIAL ************//
		//The CSS for all the prime stimuli.
		primeStimulusCSS : {color:'#FFFF00','font-size':'2.3em'},
		//The prime categories.
		primeCats :  [
			{
				nameForFeedback : 'CMTs',  //Will be used in the user feedback 
				nameForLogging : 'CMTs', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word : 'unfairness'}, 
					{word : 'injustice'},
					{word : 'cheating'},
					{word : 'fraud'},
					{word : 'lying'}, 
					{word : 'dishonesty'},
					{word : 'disloyalty'},
					{word : 'betrayal'},
					{word : 'stealing'},
					{word : 'theft'}
				]

			}, 
			{
				nameForFeedback : 'NeutralsP',  //Will be used in the user feedback 
				nameForLogging : 'NeutralsP', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    	{word : 'writing'}, 
					{word : 'farming'},
					{word : 'painting'},
					{word : 'baking'},
					{word : 'poetry'},
					{word : 'wondering'},
					{word : 'golf'},
					{word : 'leisure'},
					{word : 'modesty'},
					{word : 'agreement'}
				]
			}
		],

		targetCats :  [
				{
				nameForLogging : 'NeutralsT',  //Will be used in the logging
				//An array of all media objects for this category. The default is pic1-pic200.jpg
				mediaArray : [
					{word : 'travel'}, 
					{word : 'whistling'},
					{word : 'industry'},
					{word : 'reunion'},
					{word : 'nursing'},
					{word : 'listening'},
					{word : 'passage'},
					{word : 'watching'},
					{word : 'tennis'},
					{word : 'exercise'}
				]				
			},
				{
				nameForLogging : 'Negatives',  //Will be used in the logging
				//An array of all media objects for this category. The default is pic1-pic200.jpg
				mediaArray : [
					{word : 'murder'}, 
					{word : 'rape'},
					{word : 'assault'},
					{word : 'torture'},
					{word : 'abuse'},
					{word : 'slaughter'},
					{word : 'terrorism'},
					{word : 'massacre'},
					{word : 'molesting'},
					{word : 'killing'}
				]
				}
			],

		//Duration parameters.
		fixationDuration : 200, //It means that by default we do not use fixation.
		primeDuration : 200, 
		postPrimeDuration : 75, //Duration of blank screen between prime and target.
		targetDuration : 200, //Duration of target presentation.
		ITI : 250, //Duration between trials.

		//  ********* END REAL TRIALS **********//


		// *********  EXAMPLE ROUND  *****************
		examplePrimeStimulus : {
			css : {color:'#FFFF00', 'font-size':'3em'},
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [
				{word : 'painting'}, 
				{word : 'baking'}, 
				{word : 'poetry'},
				{word: 'cruelty'},
				{word: 'genocide'}
			]
		},

		exampleTargetStimulus : {
			css : {color:'#0000FF', 'font-size':'3em'},
			nameForLogging : 'exampleTarget', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [
				{word : 'painting'}, 
				{word : 'baking'},
				{word : 'poetry'},
				{word: 'cruelty'},
				{word: 'racism'}
			]
		},

		//For the example block (often practice)  - MEASURED IN MILLISECONS.  1000MS = 1 SECOND
		exampleBlock_fixationDuration : 200, 
		exampleBlock_primeDuration : 200, 
		exampleBlock_postPrimeDuration : 75, 
		exampleBlock_targetDuration : 200,

		// ****** END EXAMPLE ROUND ********
		
	});
});
