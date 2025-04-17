define(['pipAPI', 'https://cp0131ks.github.io/amp_exp2/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			
			{
				nameForFeedback : 'Manwd',  //Will be used in the user feedback 
				nameForLogging : 'Manwd', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '男性は傲慢だ'},
                    {word: '男性は子どもらしい'},
					{word: '男性は成熟している'},
                    {word: '男性は感情的だ'},
					{word: '男性は傲慢であるべきだ'},
                    {word: '男性は子どもらしくあるべきだ'},
					{word: '男性は成熟しているべきだ'},
                    {word: '男性は感情的であるべきだ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Womanwd',  //Will be used in the user feedback 
				nameForLogging : 'Womanwd', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '女性は傲慢だ'},
                    {word: '女性は子どもらしい'},
					{word: '女性は成熟している'},
                    {word: '女性は感情的だ'},
					{word: '女性は傲慢であるべきだ'},
                    {word: '女性は子どもらしくあるべきだ'},
					{word: '女性は成熟しているべきだ'},
                    {word: '女性は感情的であるべきだ'}
                  
				]

			}, 

		
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.JPG'}, {image : 'amplamp.JPG'}, {image : 'ampumbrella.JPG'}]
		},

		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/amp_exp2/image'
		}
	});
});