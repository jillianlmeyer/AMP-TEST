define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
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
					{word : 'stealing'}]

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
					{word : 'poetry'}]
			}
		],

		targetCats :  [
				{
					nameForLogging : 'targetcats',  //Will be used in the logging
					//An array of all media objects for this category. The default is pic1-pic200.jpg
					mediaArray : [
						{word : 'sad'}, {word : 'happy'}
					]
				
				}
			],

		

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		trialsInBlock : [40, 40, 40, 40], //Number of trials in each block 
		trialsInExample : 5, //Change to 0 if you don't want an example block
		
		sortingLabel1 : 'Jill', //Response is coded as 0. 
		sortingLabel2 : 'Not Jill',  //Response is coded as 1.
		
		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		}
	});
});
