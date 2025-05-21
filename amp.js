define(['pipAPI', 'https://cp0131ks.github.io/amp_exp2/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			
			{
				nameForFeedback : 'Mandes_1',  //Will be used in the user feedback 
				nameForLogging : 'Mandes_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '男性は傲慢だ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Mandes_2',  //Will be used in the user feedback 
				nameForLogging : 'Mandes_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
                    {word: '男性は子どもらしい'}
                  
				]

			}, 
			{
				nameForFeedback : 'Mandes_3',  //Will be used in the user feedback 
				nameForLogging : 'Mandes_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '男性は成熟している'}
                  
				]

			}, 
			{
				nameForFeedback : 'Mandes_4',  //Will be used in the user feedback 
				nameForLogging : 'Mandes_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '男性は感情的だ'}
                  
				]

			}, 

			{
				nameForFeedback : 'Manpre_1',  //Will be used in the user feedback 
				nameForLogging : 'Manpre_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '男性は傲慢であるべきだ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Manpre_2',  //Will be used in the user feedback 
				nameForLogging : 'Manpre_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
                    {word: '男性は子どもらしくあるべきだ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Manpre_3',  //Will be used in the user feedback 
				nameForLogging : 'Manpre_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '男性は成熟しているべきだ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Manpre_4',  //Will be used in the user feedback 
				nameForLogging : 'Manpre_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
                    {word: '男性は感情的であるべきだ'}
                  
				]

			}, 

			{
				nameForFeedback : 'Womandes_1',  //Will be used in the user feedback 
				nameForLogging : 'Womandes_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '女性は傲慢だ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Womandes_2',  //Will be used in the user feedback 
				nameForLogging : 'Womandes_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
                    {word: '女性は子どもらしい'},
                  
				]

			}, 
			{
				nameForFeedback : 'Womandes_3',  //Will be used in the user feedback 
				nameForLogging : 'Womandes_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '女性は成熟している'}
                  
				]

			}, 
			{
				nameForFeedback : 'Womandes_4',  //Will be used in the user feedback 
				nameForLogging : 'Womandes_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
                    {word: '女性は感情的だ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Womanpre_1',  //Will be used in the user feedback 
				nameForLogging : 'Womanpre_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '女性は傲慢であるべきだ'}                  
				]

			},
			{
				nameForFeedback : 'Womanpre_2',  //Will be used in the user feedback 
				nameForLogging : 'Womanpre_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '女性は子どもらしくあるべきだ'}                  
				]

			},
			{
				nameForFeedback : 'Womanpre_3',  //Will be used in the user feedback 
				nameForLogging : 'Womanpre_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: '女性は成熟しているべきだ'}                  
				]

			},
			{
				nameForFeedback : 'Womanpre_4',  //Will be used in the user feedback 
				nameForLogging : 'Womanpre_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
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