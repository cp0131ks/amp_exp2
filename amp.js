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
				     {word : 'ꂊ'},
				    {word : 'ꃞ'},
				    {word : 'ꄅ'},
				    {word : 'ꈁ'},
				    {word : 'ꉭ'},
				    {word : 'ꌵ'},
				    {word : 'ꍯ'},
				    {word : 'ꎓ'},
				    {word : 'ꏤ'},
				    {word : 'ꏸ'},
				    {word : 'ꐎ'},
				    {word : 'ꐧ'},
				    {word : 'ꄰ'},
				    {word : 'ꅄ'},
				    {word : 'ꈭ'},
				    {word : 'ꈲ'},
				    {word : 'ꋖ'},
				    {word : 'ꍡ'},
				    {word : 'ꍤ'},
				    {word : 'ꍭ'},
				    {word : 'ꎨ'},
				    {word : 'ꎰ'},
				    {word : 'ꏲ'},
				    {word : 'ꐬ'},
				    {word : 'ꐸ'},
				    {word : 'ꀅ'},
				    {word : 'ꑿ'},
				    {word : 'ꀱ'},
				    {word : 'ꂅ'},
				    {word : 'ꂨ'},
				    {word : 'ꃡ'},
				    {word : 'ꃢ'},
				    {word : 'ꄩ'},
				    {word : 'ꄸ'},
				    {word : 'ꅫ'},
				    {word : 'ꆏ'},
				    {word : 'ꇜ'},
				    {word : 'ꇢ'},
				    {word : 'ꇿ'},
				    {word : 'ꈍ'},
				    {word : 'ꈥ'},
				    {word : 'ꉐ'},
				    {word : 'ꊲ'},
				    {word : 'ꊼ'},
				    {word : 'ꌕ'},
				    {word : 'ꌙ'},
				    {word : 'ꍣ'},
				    {word : 'ꎍ'},
				    {word : 'ꎖ'},
				    {word : 'ꐀ'},
				    {word : 'ꐃ'},
				    {word : 'ꀡ'},
				    {word : 'ꀇ'},
				    {word : 'ꁈ'},
				    {word : 'ꁌ'},
				    {word : 'ꂛ'},
				    {word : 'ꃀ'},
				    {word : 'ꃤ'},
				    {word : 'ꅲ'},
				    {word : 'ꈵ'},
				    {word : 'ꉘ'},
				    {word : 'ꉜ'},
				    {word : 'ꉠ'},
				    {word : 'ꊥ'},
				    {word : 'ꌅ'},
				    {word : 'ꌝ'},
				    {word : 'ꍉ'},
				    {word : 'ꏃ'},
				    {word : 'ꏓ'},
				    {word : 'ꏙ'},
				    {word : 'ꏚ'},
				    {word : 'ꏵ'},
				    {word : 'ꐰ'},
				    {word : 'ꑗ'},
				    {word : 'ꑷ'},
				    {word : 'ꒁ'},
				    {word : 'ꀹ'},
				    {word : 'ꀾ'},
				    {word : 'ꁕ'},
				    {word : 'ꀀ'},
				    {word : 'ꀈ'},
				    {word : 'ꀒ'},
				    {word : 'ꀽ'},
				    {word : 'ꃆ'},
				    {word : 'ꃛ'},
				    {word : 'ꄉ'},
				    {word : 'ꄌ'},
				    {word : 'ꆹ'},
				    {word : 'ꆾ'},
				    {word : 'ꇡ'},
				    {word : 'ꇱ'},
				    {word : 'ꈑ'},
				    {word : 'ꉬ'},
				    {word : 'ꉱ'},
				    {word : 'ꊈ'},
				    {word : 'ꊿ'},
				    {word : 'ꋄ'},
				    {word : 'ꋩ'},
				    {word : 'ꍕ'},
				    {word : 'ꎎ'},
				    {word : 'ꎙ'},
				    {word : 'ꎮ'},
				    {word : 'ꏋ'},
				    {word : 'ꏗ'},
				    {word : 'ꐞ'},
				    {word : 'ꐥ'},
				    {word : 'ꎆ'},
				    {word : 'ꒇ'},
				    {word : 'ꀵ'},
				    {word : 'ꁄ'},
				    {word : 'ꁜ'},
				    {word : 'ꁮ'},

                  
				]

			}

		
		],

		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/amp_exp2/image'
		}
	});
});