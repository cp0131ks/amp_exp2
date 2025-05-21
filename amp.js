define(['pipAPI', 'https://cp0131ks.github.io/amp_exp2/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			
			{
				nameForFeedback : 'Mandes',  //Will be used in the user feedback 
				nameForLogging : 'Mandes', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '男性は傲慢だ'},
                    {word: '男性は子どもらしい'},
					{word: '男性は成熟している'},
                    {word: '男性は感情的だ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Manpre',  //Will be used in the user feedback 
				nameForLogging : 'Manpre', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '男性は傲慢であるべきだ'},
                    {word: '男性は子どもらしくあるべきだ'},
					{word: '男性は成熟しているべきだ'},
                    {word: '男性は感情的であるべきだ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Womandes',  //Will be used in the user feedback 
				nameForLogging : 'Womandes', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '女性は傲慢だ'},
                    {word: '女性は子どもらしい'},
					{word: '女性は成熟している'},
                    {word: '女性は感情的だ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Womanpre',  //Will be used in the user feedback 
				nameForLogging : 'Womanpre', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
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
			mediaArray : [{word : '傘が開いている'}, {word : 'ランプが光っている'}, {word : '茶色のイスがある'}]
		},
		targetCats :  [
			{
				nameForFeedback : 'イ音節文字',  //Will be used in the user feedback 
				nameForLogging : 'イ音節文字', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'ꀱ'},
				    {word : 'ꃞ'},
				    {word : 'ꄅ'},
				    {word : 'ꆏ'},
				    {word : 'ꈁ'},
				    {word : 'ꊼ'},
				    {word : 'ꌙ'},
				    {word : 'ꏤ'},
				    {word : 'ꐀ'},
				    {word : 'ꐸ'},
				    {word : 'ꑗ'},
				    {word : 'ꄰ'},
				    {word : 'ꄸ'},
				    {word : 'ꅄ'},
				    {word : 'ꍡ'},
				    {word : 'ꍣ'},
				    {word : 'ꍤ'},
				    {word : 'ꍯ'},
				    {word : 'ꎓ'},
				    {word : 'ꎨ'},
				    {word : 'ꏲ'},
				    {word : 'ꐎ'},
				    {word : 'ꐧ'},
				    {word : 'ꐬ'},
				    {word : 'ꀅ'},
				    {word : 'ꀇ'},
				    {word : 'ꀒ'},
				    {word : 'ꀽ'},
				    {word : 'ꁌ'},
				    {word : 'ꂅ'},
				    {word : 'ꂊ'},
				    {word : 'ꂛ'},
				    {word : 'ꃡ'},
				    {word : 'ꄩ'},
				    {word : 'ꈍ'},
				    {word : 'ꈥ'},
				    {word : 'ꈭ'},
				    {word : 'ꈲ'},
				    {word : 'ꉐ'},
				    {word : 'ꉭ'},
				    {word : 'ꊲ'},
				    {word : 'ꋖ'},
				    {word : 'ꌅ'},
				    {word : 'ꌕ'},
				    {word : 'ꌵ'},
				    {word : 'ꎍ'},
				    {word : 'ꏵ'},
				    {word : 'ꏸ'},
				    {word : 'ꎆ'},
				    {word : 'ꑿ'},
				    {word : 'ꂨ'},
				    {word : 'ꃀ'},
				    {word : 'ꃢ'},
				    {word : 'ꃤ'},
				    {word : 'ꅫ'},
				    {word : 'ꆹ'},
				    {word : 'ꇜ'},
				    {word : 'ꇿ'},
				    {word : 'ꈵ'},
				    {word : 'ꉘ'},
				    {word : 'ꉜ'},
				    {word : 'ꍭ'},
				    {word : 'ꎖ'},
				    {word : 'ꎰ'},
				    {word : 'ꏃ'},
				    {word : 'ꏋ'},
				    {word : 'ꏙ'},
				    {word : 'ꐃ'},
				    {word : 'ꑷ'},
				    {word : 'ꒁ'},
				    {word : 'ꁕ'},
				    {word : 'ꀈ'},
				    {word : 'ꁈ'},
				    {word : 'ꁥ'},
				    {word : 'ꃆ'},
				    {word : 'ꃩ'},
				    {word : 'ꅲ'},
				    {word : 'ꆑ'},
				    {word : 'ꆾ'},
				    {word : 'ꇡ'},
				    {word : 'ꇢ'},
				    {word : 'ꈑ'},
				    {word : 'ꈴ'},
				    {word : 'ꉠ'},
				    {word : 'ꉱ'},
				    {word : 'ꊈ'},
				    {word : 'ꊥ'},
				    {word : 'ꊿ'},
				    {word : 'ꌝ'},
				    {word : 'ꍉ'},
				    {word : 'ꍕ'},
				    {word : 'ꍧ'},
				    {word : 'ꎙ'},
				    {word : 'ꏓ'},
				    {word : 'ꏗ'},
				    {word : 'ꏚ'},
				    {word : 'ꐥ'},
				    {word : 'ꐰ'},
				    {word : 'ꑆ'},
				    {word : 'ꀡ'},
				    {word : 'ꀹ'},
				    {word : 'ꒇ'},
				    {word : 'ꀮ'},
				    {word : 'ꀵ'},
				    {word : 'ꁄ'},
				    {word : 'ꁮ'},
				    {word : 'ꁯ'},
				    {word : 'ꄉ'},
				    {word : 'ꄌ'},
				    {word : 'ꆡ'},
				    {word : 'ꆶ'},
				    {word : 'ꇱ'},

                  
				]

			}

		
		],

		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/amp_exp2/image'
		}
	});
});