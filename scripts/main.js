
$(document).ready(function(){

/**************** Javascript/jQuery for the memory game ************************/
																		 
	/***********************************************************************/
	/* - Creating two variables and gives them the value "null", 		   */ 
	/*   which also means "no value".									   */							 
	/*																f	   */
	/**/ var pick1 = null; 												   //
	/**/ var pick2 = null; 												   // 
	/***********************************************************************/										 
																		 
	/************ The click event for the cards, a varible "e" is created. *****/
	$(".card").click(function(e) {	

		/***********************************************************************/																 	
		/* - Creating a variable and picks out the 5th character from the id   */
		/* - The first character postion is "0" so the fourth would be fifth   */
		/*   character. It works like positions in an array		      		   */
		/* - Which would be "1", "2", "3" and so on. 						   */	
		/*																       */
		/**/ var selectedCard = e.currentTarget.id.substring(4); 		       // 			 
		/***********************************************************************/
		
		/***********************************************************************/
		/* - Merging together "#card" and the character picked up from the id".*/
		/* - Then adds a new class to the card "rotate". 					   */
		/* - When the new class is added it styling instruction from the css   */
		/*   file = to rotate the div 180 degrees. 							   */
		/* - This will turn the card upside down. 							   */
		/*																	   */
		/**/ $('#card' + selectedCard).addClass('rotate'); 				       //				 
		/***********************************************************************/

		/***********************************************************************/
		/* - Creating a variable with the value "e" that picks out the current */
		/*   target "info" 													   */
		/*	 																   */
		/**/ var chosenCard = e.currentTarget; 								 /**/								 
		/***********************************************************************/
		
		/***********************************************************************/
		/* - Here we add four if statments that will activate and play a       */
		/*   <audio> tag in html document. 									   */
		/* - Depending on which card is selected, a sound is played that  	   */
		/*	 matches the animal on the cards 								   */
		/*																	   */			
		/**/ if (chosenCard.classList[1] == "pigcard" ) { 					   //
		/**/ 	$('.playPig').trigger("play");
				console.log(chosenCard);								   //
		/**/ }																   //
		/**/ else if (chosenCard.classList[1] == "sheepcard" ) {			   //
		/**/ 	$('.playSheep').trigger("play");							   //
		/**/ }																   //		
		/**/ else if (chosenCard.classList[1] == "chickencard" ) {			   //
		/**/ 	$('.playChicken').trigger("play");							   //
		/**/ }																   //
		/**/ else if (chosenCard.classList[1] == "catcard" ) {				   //	
		/**/ 	$('.playCat').trigger("play");								   //
		/**/ }																   //
		/***********************************************************************/
		

		/***********************************************************************/
		/* - If pick1 or pick2 have a value, this "if" statment will be 	   */
		/*	 executed and just skip the rest of the code below, thanks to      */
		/*	 the return command											       */
		/* - This "if" statment is added to the code so the player won't be    */
		/* 	 able to click the same card twice.							       */	
		/* - After this "if" statment has been run, the rest of the code is    */
		/*   "skipped". 													   */
		/* - If this code block would be deleted, the player could click the   */
		/*   same card twice and so get "a pair" right and would fade out. 	   */ 
		/* 	 																   */
		/**/ if( pick1 == chosenCard || pick2 == chosenCard ) { 			   //				 
		/**/	return;													       //			 
		/**/ } 																   //
		/***********************************************************************/
		
		/***********************************************************************/
		/* - Here's what happens when the player clicks on the first card.     */
		/* - It checks, if pick1 has the value of "null", execute this.        */
		/* - Which in this case, is true!									   */	   
		/* - The pick1 value is now changed from "null" to "e.currentTarget".  */	   
		/* - Which is unique for every "click" in this case.			  	   */
		/*   -			  	   												   */
		/*							 										   */
		/**/ else if ( pick1 == null ) { 									 /**/
		/**/	pick1 = chosenCard;		 									 /**/									 
		/**/ }							 									 /**/
		/***********************************************************************/

		/************************************************************************************************/
		/* 
		/* - When you click on the second card. the first "if" statment above (pick1 == null) will be   */
		/*   false. 																					*/
		/* - And this if statment (pick2 == null) will be next inline to be executed					*/
		/* - Also in this if statment there is other "if" statments that lays inside. 				    */
		/* 																								*/		
		/**/ else if ( pick2 == null ) {										 					    //
		/*																								//	
		/*	/********************************************************************/						//		
		/*	/* - Pick2 value is changed the same way pick1 was changed 			*/						//
		/*	/*	 (but with a new unique value).									*/						//
		/*	/*																	*/						//
		/*	/**/ pick2 = chosenCard;   										  /**/						//
		/*	/********************************************************************/						//
		/*																								//
		/*	/*********************************************************************************/			//
		/*	/* - This first if statment (inside the "else if" statment above)				 */			//				
		/*	/*   checks if the two cards have the same class.								 */			//
		/*	/* - The ".classList[1]" checks "inside" pick1 and pick2 and					 */			//
		/*	/*   "checks" if the second class is the same on both picks    					 */			//
		/*	/* 	 (for examples, pick1.classList[1] classname is "pig" and    				 */			//
		/*	/*   pick2.classList[1] is also "pig".  										 */			//	
		/*	/* - This would make this "if" statment true and be executet.  					 */			//
		/*	/*																				 */			//
		/*	/*																				 */			//
		/*	*/ if ( pick1.classList[1] == pick2.classList[1] ) {		      			     //			//		 
		/*	/*	/***********************************************************************/ 	 //			//
		/*	/*	/* - Here we add a sound when the player gets a pair right	 		   */    //			//
		/*	/*	*/	setTimeout(function() {											   //    //			//
		/*	/*	*/	$('.playWin').trigger("play");									   /*	 //			//
		/*	/*	*/	}, 1000);														   /*	 //			//
		/*	/*	/***********************************************************************/	 //			//
		/*	/*																				 //			//	
		/*	/*	/************************************************************************/   //			//
		/*	/*	/* - As said above when, when this code is executed it will start a     */	 //			//
		/*	/*	/* 	 jQuery effect and fade out the two cards with the same class.      */	 //			//
		/*	/*	/* 	 like "pig" for example once more.									*/	 //			//
		/*	/*	/*  													     			*/	 //			//
		/*	/*	/**/ $('.'+ chosenCard.classList[1]).fadeTo(1000, 0); 				  /**/	 //			//
		/*	/*	/************************************************************************/	 //			// 
		/*	/*																				 //			//	
		/*	/*	/************************************************************************/   //			//
		/*	/*	/* - Here it adds a new class after the "pig" class. 					*/   //			// 
		/*	/*	/* - This class is used to check if the level is complete or not 	 	*/	 //			//
		/*	/*	/* 	 further down this code (we will get to that later)  				*/   //			//
		/*	/*	/*																		*/	 //			//
		/*	/*	/**/ $('.'+ chosenCard.classList[1]).addClass("done");				  /**/ 	 //			//
		/*	/*	/************************************************************************/ 	 //			//
		/*	/*																				 //			//	
		/*	/*	/************************************************************************/ 	 //			//
		/*	/*	/* - After the class has been faded out, the value of pick 1 and 2 will */	 //			//
		/*	/*	/*   be given a "null" value once again. 								*/ 	 //			//	
		/*	/*	/* - The reason why it's changed back to it's original value is because */	 //			//
		/*	/*	/*   when you're gonna click on new cards to turn around you can choose */	 //			//
		/*	/*	/*   the same variables as before.										*/	 //			//
		/*	/*	/*																		*/	 //			//
		/*	/*	/**/ pick1 = null; 												      /**/	 //			//									 
		/*	/*	/**/ pick2 = null; 													  /**/	 //			//								 
		/*	/*	/************************************************************************/   //			//
		/*	/*																				 //			//
		/*	/*	/************************************************************************/ 	 //			//
		/*	/*	/* - This statment is a tricky one. It looks if all the card classes    */   //			//
		/*	/*	/*   has a class called "done".											*/	 //			//
		/*	/*	/* - You could say that it asks "if the .card class has not a class     */   //			//
		/*	/*	/*   not called .done, this statment should be executed (yeah pretty    */	 //			//
		/*	/*	/*   weird question I know).											*/	 //			//
		/*	/*	/*																		*/ 	 //			//
		/*	/*	*/ if( !$(".card").not(".done").length ) {							    //	 //         //
		/*	/*	/*																		*/	 // 		//
		/*	/*	/*		/******************************************************/		// 	 //			//
		/*  /*  /* 		/* - "setTimeout" is a function where event inside 	  */		//   //    		//		
		/*  /*  /* 		/* 	 waits 2000 millisecond before it executes,  	  */		//   //			//
		/*  /*  /* 		/* 	 this event remove all the cards div:s. 	      */		//   //			//
		/*  /*  /* 		/* - The reason they are removed is because 	      */		//   //			//
		/*  /*  /* 		/*   of a button (will make "unhidden")  			  */		//   //			//
		/*  /*  /* 		/*   should be displayed at the top of 				  */		//   //			//
		/*  /*  /* 		/*   the screen.									  */		//   //			//
		/*  /*  /*		/*													  */		//   //			//
		/*	/*	/*		*/ setTimeout(function() {	 	 					  //		//	 //			//
		/*	/*	/*		*/ 		$(".cardWrap").remove(); 					  // 	 	// 	 //			//
		/*	/*	/*		*/ }, 2000);					 					  // 		// 	 //			//
		/*	/*	/*		/******************************************************/		//	 //			//
		/*	/*	/*																		//	 //			//
		/*	/*	/*		/******************************************************/		// 	 //			//
		/*	/*	/*		/* - And here's another delayed effect, this one also */		// 	 //			//
		/*	/*	/*		/*   waits 2000 millisecond before showing the hidden */		// 	 //			//
		/*	/*	/*		/* 	 button that can take you to the next level.	  */		// 	 //			//
		/*	/*	/*		/* - The buttons classname is "next" so we add a css  */		// 	 //			//
		/*	/*	/*		/*   effect so it will change from the "hidden" to    */		// 	 //			//
		/*	/*	/*		/*   "block" (which is like writting "show")		  */		// 	 //			//
		/*	/*	/*		/*													  */		// 	 //			//
		/*	/*	/*		*/ setTimeout(function() {							/**/		// 	 //			//
		/*	/*	/*		*/ 	$(".nextButton").css("display", "block"); 		/**/		// 	 // 		//
		/*	/*	/*		*/ }, 2000);										/**/		//	 //			//
		/*	/*	/*		/******************************************************/		//	 //			//					 
		/*	/*	/**/ }																	//	 //			//
		/*	/*	/************************************************************************/   //			//				 
		/*	/**/ } 																			 //			//
		/*	/*********************************************************************************/ 		//	
		/*																								//
		/*	/*********************************************************************************/			//														 
		/*	/* - If the two cards the player choose don't match, this else statment will run.*/			//
		/*  /*  																			 // 		// 
		/*  */ else {																		 //			//
		/*  /*																			 	 // 		//
		/*	/*	/**********************************************************************/	 //			//									 												 	
		/*	/*	/* - The second card gets the class "rotate" så it flips around		  */	 //			//
		/* /*	/*																	  */	 //			//
		/*	/*	*/$('#card' + selectedCard).addClass("rotate"); 					  //	 //			//			
		/*	/*  /**********************************************************************/	 //			//																	  */
		/*	/*																				 // 	    //	
		/*  /*  /**********************************************************************/	 //			//	
		/*	/*	/* - The values are changed to "null" once again so two new cards	  */	 //			//	
		/*  /*	/*   can be selected.												  */	 //			//	
		/*  /*  /* 																	  */	 //			//	
		/*	/*	*/ pick1 = null; 													  //	 //			//												 
		/*  /*  */ pick2 = null; 													  //	 //			//												 
		/*	/*	/**********************************************************************/	 //			//	
		/*	/* 																				 //			//
		/*	/*	/**********************************************************************/     //			//
		/*	/*	/*	- Here we call all the divs and tells them to remove   			  */     //			//
		/*	/*	/*	  there class called "rotate", if a "div" doesn't have this class */     //			//
		/*	/*	/*	  they will not be affected. 								      */     //			//			
		/*	/*	/*	- This will make the card rotate back to it's original position	  */     //			//			
		/*	/*	/*	  which means that the animal image will be facing down		      */     //			//	
		/*	/*	/*																	  */     //			//														 
		/* 	/*	*/ setTimeout(function() {											  //     //			//							 
		/*	/*	*/ 	$('div').removeClass("rotate");									  //     //			//					 
		/*	/*	*/ }, 500);															  //     //			//
		/*	/*	/**********************************************************************/     //			//									 
		/*	*/	}																			 //			//
		/*	*/																				 //			//
		/*	*/}																				 //			//
		//	/*********************************************************************************/			//
		/*																								*/
		/****************** End of else if ( pick2 == null ) ********************************************/	
																 
	 })																	 
});




















	




