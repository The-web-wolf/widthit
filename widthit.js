	require : jQuery

		function launchWidthIt(first , second){

			// verification for widthit init starts

				if(first && first == true){


					var height = $(window).height();
					var width  = $(window).width();
				

					if(second){

						var request = second;

						switch(request){
							case 'h':
								console.log( "Device height : " + height)
								break;
							case 'w':
								console.log( "Device width  : " + width)
								break;
							case 'hw':
								console.log( "Device height : " + height)
								console.log( "Device width  : " + width)
								break;

							default:
								console.warn( '\'' + request + '\' ' +  'is not a valid widthIt request method')
								break;
						}

						
					}
				}
		}

	// verification for widthit init start

		var height = $(window).height();
		var width  = $(window).width();

		global : var mobile_start_width = 1;
		global : var tablet_start_width = 769;
		global : var laptop_start_width = 992;
		global : var dextop_start_width = 1200;

		global : var mobile_end_width = 768;
		global : var tablet_end_width = 991;
		global : var laptop_end_width = 1199;
		global : var dextop_end_width = width;
		// predefined heights for several devices for easy usage

		global : var mobile_start_height =	1;
		global : var tablet_start_height = 	1;
		global : var laptop_start_height = 	1;
		global : var dextop_start_height = 	1;

		global : var mobile_end_height = height;
		global : var tablet_end_height = height;
		global : var laptop_end_height = height;
		global : var dextop_end_height = height;

		console.info('widthIt Initiated. visit the documentation at http://widthit.com/documentation ')

		console.log('\n')



		// verification or init end

		var test_i = $('.widthit').length
		
		//alert(test_i)

		$('.widthit').each(function(){

			var start_width		= $(this).data('start-width');
			var end_width   	= $(this).data('end-width');
			var start_height	= $(this).data('start-height');
			var end_height  	= $(this).data('end-height')

			if(start_width && start_width != ''){
				//	console.log('start width : '+start_width)
				switch(start_width){
					case 'mobile':
						var start_width = mobile_start_width;
					break;

					case 'tablet':
						var start_width = tablet_start_width;
					break;

					case 'laptop':
						var start_width = laptop_start_width;
					break;

					case 'dextop':
						var start_width = dextop_start_width;
					break;
					
					default :
						var start_width = start_width;
						break;
				}
			}
			else{
				var start_width = 1;
			}

			if(end_width && end_width != ''){
				//	console.log('end width : '+end_width)
				switch(end_width){
					case 'mobile':
						var end_width = mobile_end_width;
					break;

					case 'tablet':
						var end_width = tablet_end_width;
					break;

					case 'laptop':
						var end_width = laptop_end_width;
					break;

					case 'dextop':
						var end_width = dextop_end_width;
					break;
					
					default :
						var end_width = end_width;
						break;
				}
			}

			else{
				var end_width = width;
				// console.log('new end width assigned')							
			}

			if(start_height && start_height != ''){
				//	console.log('start height : '+start_height)
				switch(start_height){
					case 'mobile':
						var start_height = mobile_start_height;
					break;

					case 'tablet':
						var start_height = tablet_start_height;
					break;

					case 'laptop':
						var start_height = laptop_start_height;
					break;

					case 'dextop':
						var start_height = dextop_start_height;
					break;
					
					default :
						var start_height = start_height;
						break;
				}
			}
			else{
				var start_height = 1;
			}

			if(end_height && end_height != ''){
				//	console.log('end height : '+end_height)
				switch(end_height){
					case 'mobile':
						var end_height = mobile_end_height;
					break;

					case 'tablet':
						var end_height = tablet_end_height;
					break;

					case 'laptop':
						var end_height = laptop_end_height;
					break;

					case 'dextop':
						var end_height = dextop_end_height;
					break;
					
					default :
						var end_height = end_height;
						break;
				}
			}

			else{
				var end_height = height;
				// console.log('new end height assigned')							
			}

			// make general work on the width aspect of width it 
			if(start_width && end_width && width){
				
				if(start_width > width){
					$(this).css('display','none')
					$(this).hide()
					//console.log('element hidden')
				}

				if(width > end_width){
					$(this).css('display','none');
					$(this).hide();
					//console.log('end width exceeded')
				}
			}
			// makes general work on the height aspect of width is
			

			if(start_height && end_height && height){
				//console.log('height engine initiated')
				
				if(start_height > height){

					$(this).css('display','none')
					$(this).hide()
					//console.log('element hidden')

				}

				if(height > end_height){

					$(this).css('display','none');
					$(this).hide();
					//console.log('end height exceeded')

				}

			}						
			
		});
		
