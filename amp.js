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
		targetCats :  [
			{
				nameForFeedback : 'イ音節文字',  //Will be used in the user feedback 
				nameForLogging : 'イ音節文字', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'ꀀ'},
					{word : 'ꀂ'},
					{word : 'ꀇ'},
					{word : 'ꀈ'},
					{word : 'ꀊ'},
					{word : 'ꀋ'},
					{word : 'ꀒ'},
					{word : 'ꀮ'},
					{word : 'ꀱ'},
					{word : 'ꀵ'},
					{word : 'ꀷ'},
					{word : 'ꀸ'},
					{word : 'ꀽ'},
					{word : 'ꁁ'},
					{word : 'ꁄ'},
					{word : 'ꁅ'},
					{word : 'ꁈ'},
					{word : 'ꁉ'},
					{word : 'ꁌ'},
					{word : 'ꁓ'},
					{word : 'ꁜ'},
					{word : 'ꁥ'},
					{word : 'ꁬ'},
					{word : 'ꀀ'},
					{word : 'ꁮ'},
					{word : 'ꁯ'},
					{word : 'ꁲ'},
					{word : 'ꁴ'},
					{word : 'ꁵ'},
					{word : 'ꁹ'},
					{word : 'ꁻ'},
					{word : 'ꂅ'},
					{word : 'ꂈ'},
					{word : 'ꂊ'},
					{word : 'ꂋ'},
					{word : 'ꂍ'},
					{word : 'ꂎ'},
					{word : 'ꂘ'},
					{word : 'ꂛ'},
					{word : 'ꂝ'},
					{word : 'ꂞ'},
					{word : 'ꂡ'},
					{word : 'ꂨ'},
					{word : 'ꂰ'},
					{word : 'ꂷ'},
					{word : 'ꂸ'},
					{word : 'ꂻ'},
					{word : 'ꃀ'},
					{word : 'ꃆ'},
					{word : 'ꃈ'},
					{word : 'ꃐ'},
					{word : 'ꃑ'},
					{word : 'ꃛ'},
					{word : 'ꃞ'},
					{word : 'ꃡ'},
					{word : 'ꃢ'},
					{word : 'ꃤ'},
					{word : 'ꃦ'},
					{word : 'ꃩ'},
					{word : 'ꃴ'},
					{word : 'ꃷ'},
					{word : 'ꄂ'},
					{word : 'ꄃ'},
					{word : 'ꄅ'},
					{word : 'ꄉ'},
					{word : 'ꄌ'},
					{word : 'ꄧ'},
					{word : 'ꄩ'},
					{word : 'ꄫ'},
					{word : 'ꄬ'},
					{word : 'ꄰ'},
					{word : 'ꄵ'},
					{word : 'ꄸ'},
					{word : 'ꅄ'},
					{word : 'ꅓ'},
					{word : 'ꅖ'},
					{word : 'ꅙ'},
					{word : 'ꅝ'},
					{word : 'ꅫ'},
					{word : 'ꅬ'},
					{word : 'ꅮ'},
					{word : 'ꅰ'},
					{word : 'ꅲ'},
					{word : 'ꅳ'},
					{word : 'ꅻ'},
					{word : 'ꅼ'},
					{word : 'ꆅ'},
					{word : 'ꆆ'},
					{word : 'ꆈ'},
					{word : 'ꆌ'},
					{word : 'ꆍ'},
					{word : 'ꆏ'},
					{word : 'ꆑ'},
					{word : 'ꆓ'},
					{word : 'ꆡ'},
					{word : 'ꆦ'},
					{word : 'ꆮ'},
					{word : 'ꆶ'},
					{word : 'ꆹ'},
					{word : 'ꆾ'},



                  
				]

			}

		
		],

		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/amp_exp2/image'
		}
	});
});