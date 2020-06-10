            
            // PART ONE: Choose Between Four Types Of Building & Answer Questions.
			// Declare Variables:
			var choice1 = document.getElementById("resi-chec");
			var choice2 = document.getElementById("comm-chec");
			var choice3 = document.getElementById("corp-chec");
			var choice4 = document.getElementById("hybr-chec");

			var show1 = document.getElementById("residential");
			var show2 = document.getElementById("commercial");
			var show3 = document.getElementById("corporate");		
			var show4 = document.getElementById("hybride");
			
			
			// IF Customer Chooses Residential Building
			function ResiFunc() {

				if ( choice1.checked === true )
				   { show1.style.display = 'block';
				   show2.style.display = 'none';
				   show3.style.display = 'none';
				   show4.style.display = 'none';
				     
				}
				else { show1.style.display = 'none';
				}
			}

			// IF Customer Chooses commercial Building
			function CommFunc() {

				if ( choice2.checked === true )
				   { show2.style.display = 'block';
				   show1.style.display = 'none';
				   show3.style.display = 'none';
				   show4.style.display = 'none';
				}
				else { show2.style.display = 'none';
				   
				}
			}
			

            // IF Customer Chooses Corporate Building
			function CorpFunc() {
	
				if ( choice3.checked === true )
				   { show3.style.display = 'block';
				   show1.style.display = 'none';
				   show2.style.display = 'none';
				   show4.style.display = 'none';
				}
				else { show3.style.display = 'none';
				}
			}

            // IF Customer Chooses Hybride Building
			function HybrFunc() {

				if ( choice4.checked === true )
				   { show4.style.display = 'block';
				   show1.style.display = 'none';
				   show2.style.display = 'none';
				   show3.style.display = 'none';
				}
				else { show4.style.display = 'none';
				}
			}

			// END PART ONE





			// PART TWO: Calculation & Display Of Results.

			// Convrt numbers to currency
			const format = new Intl.NumberFormat('en-US',{style:"currency",currency:"USD", minimumFractionDigits:2})


			// 1-Calculation & Display of Nb Cage, Elevators cost, Installation cost, Total Cost FOR COMMERCIAL BUILDING.
			function CalcCommFun(){
				
				
				var x = Math.ceil (document.getElementById("num-elev-buil").value);                                 // Call Nb Cages to insert into calculation
				document.getElementById("NbCages-Comm").innerHTML = "Number of elevators recommended: " + x ;       // Send value of Nb of cages into HTML
				document.getElementById("showResult-Comm").style.display = 'block';                                 // Display Nb of cages into HTML

				if (document.getElementById("standard-C").checked === true){
					
					var y = x*7565;
					var z = y*0.10;
					var w = z + y;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(7565);    // Display unit price
					document.getElementById("elev-cost").innerHTML ="Elevators cost: " + format.format(y);                 // Display Elev Cost
					document.getElementById("inst-cost").innerHTML ="Installation cost: " + format.format(z);              // Display Inst Cost
					document.getElementById("tota-cost").innerHTML = "Total cost: "+ format.format(w);                     // Display Total cost
					
					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';                    
				}
				else if (document.getElementById("premium-C").checked === true){

					y = x*12345;
					z = y*0.13;
					w = z + y;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(12345); 
					document.getElementById("elev-cost").innerHTML ="Elevators cost: " + format.format(y);
					document.getElementById("inst-cost").innerHTML ="Installation cost: " + format.format(z);
					document.getElementById("tota-cost").innerHTML ="Total cost: " + format.format(w);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block'; 
					
				}
				else if(document.getElementById("excelium-C").checked === true){

					y = x*15400;
					z = y*0.16;
					w = z + y;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(15400);
					document.getElementById("elev-cost").innerHTML ="Elevators cost: " + format.format(y);
					document.getElementById("inst-cost").innerHTML ="Installation cost: " + format.format(z);
					document.getElementById("tota-cost").innerHTML ="Total cost: " + format.format(w);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block'; 
				}

			}




			// 2-Caculation of Nb Cages + Elevators cost + Installation cost FOR RESIDENTIAL BUILDING
			
			function CalcResiFun(){

				var a = document.getElementById("num-floors-buil-r").value;    // Nb of floors
				var b = document.getElementById("num-base-buil-r").value;      // Nb of basements
				var c = document.getElementById("num-apart-buil-r").value;     // Nb of apartments

				
				var d = Math.ceil(c/(a-b));      // Average of apartments by floor(excluding basements)
				var e = Math.ceil(d/6);          // Nb cages for less than 20 levels
				var f = Math.ceil((a-b)/20);     // Nb of columns
				var j = f*e;                     // Nb Cages = (Nb cages for less than 20 levels) x Nb of columns
				
				document.getElementById("NbCages-Resi").innerHTML = "Number of elevators recommended: " + j ;       // Send value of Nb of cages into HTML                             

				if(document.getElementById("num-base-buil-r").value != 0){                                          //Show only one value is different than zero
					document.getElementById("showResult-Resi").style.display = 'block';                             // Display Nb of cages into HTML
				}

				if (document.getElementById("standard-R").checked === true){
					
					y = j*7565;
					z = y*0.10;
					w  = y + z;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(7565);
					document.getElementById("elev-cost").innerHTML = "Elevators cost: " + format.format(y);
					document.getElementById("inst-cost").innerHTML = "Installation cost: " + format.format(z);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(w);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				else if (document.getElementById("premium-R").checked === true){

					t = j*12345;
					r = t*0.13;
					s = t + r;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(12345);
					document.getElementById("elev-cost").innerHTML = "Elevators cost: " + format.format(t);
					document.getElementById("inst-cost").innerHTML = "Installation cost: " + format.format(r);;
					document.getElementById("tota-cost").innerHTML ="Total cost: " + format.format(s);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				else if(document.getElementById("excelium-R").checked === true) {
					
					t = j*15400;
					r = t*0.16;
					s = t + r;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(15400);;
					document.getElementById("elev-cost").innerHTML = "Elevators cost: " + format.format(t);
					document.getElementById("inst-cost").innerHTML = "Installation cost: " + format.format(r);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(s);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				
			}


			// 3-Caculation of Nb Cages + Elevators cost + Installation cost FOR CORPORATE BUILDING
			
			function CalcCorpFun(){

				var k = Math.ceil(document.getElementById("num-floors-buil-c").value);     // Nb of floors
				var l = Math.ceil(document.getElementById("num-base-buil-c").value);       // Nb of basements
				var m = Math.ceil(document.getElementById("num-occu-floor-c").value);      // Nb of max occupants per floor

				
				var n = m*k;                // Total occupants = max-occ-floor x (Nb floor - Nb basements)
				var o = Math.ceil(n/1000);  // Nb cages for less than 20 levels
				var p = Math.ceil(k/20);    // Nb of columns
				var q = Math.ceil(o/p);     // Nb cages / Nb of columns
				var i = q*p;                // Nb Cages = (Nb cages for less than 20 levels) x Nb of columns
				
				document.getElementById("NbCages-Corp").innerHTML = "Number of elevators recommended: " + i;         // Send value of Nb of cages into HTML
				
				if(document.getElementById("num-occu-floor-c").value != 0){                                          // Show only when value is different tha zero
					document.getElementById("showResult-Corp").style.display = 'block';                              // Display Nb of cages into HTML
				}
				


				if (document.getElementById("standard-Co").checked === true){
					
					y = i*7565;
					z = y*0.10;
					w  = y + z;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(7565);
					document.getElementById("elev-cost").innerHTML = "Elevators cost: " + format.format(y);
					document.getElementById("inst-cost").innerHTML = "Installation cost: "+ format.format(z);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(w);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				else if (document.getElementById("premium-Co").checked === true){

					t = i*12345;
					r = t*0.13;
					s = t + r;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(12345);
					document.getElementById("elev-cost").innerHTML ="Elevators cost: " + format.format(t);
					document.getElementById("inst-cost").innerHTML = "Installation cost: " + format.format(r);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(s);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				else if(document.getElementById("excelium-Co").checked === true){
					
					t = i*15400;
					r = t*0.16;
					s = t + r;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(15400);
					document.getElementById("elev-cost").innerHTML = "Elevators cost: " + format.format(t);
					document.getElementById("inst-cost").innerHTML = "Installation cost: " + format.format(r);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(s);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				
			}

			// 4-Caculation of Nb Cages + Elevators cost + Installation cost FOR HYBRIDE BUILDING

			
			function CalcHybrFun(){

				k = Math.ceil(document.getElementById("num-floors-buil-h").value);  // Nb of floors
				l = Math.ceil(document.getElementById("num-base-buil-h").value);    // Nb of basements
				m = Math.ceil(document.getElementById("num-occu-floor-h").value);   // Nb of max occupants per floor

				
				n = m*k;                // Total occupants = max-occ-floor x (Nb floor - Nb basements)
				o = Math.ceil(n/1000);  // Nb cages for less than 20 levels
				p = Math.ceil(k/20);    // Nb of columns
				q = Math.ceil(o/p);     // Nb cages / Nb of columns
				i = q*p;                // Nb Cages = (Nb cages for less than 20 levels) x Nb of columns
				
				document.getElementById("NbCages-Hybr").innerHTML = "Number of elevators recommended: " + i;

				if(document.getElementById("num-occu-floor-h").value != 0){                                     // Show field only when value is different than zero
				   document.getElementById("showResult-Hybr").style.display = 'block';                          // Display Nb of cages into HTML
				}
				


				if (document.getElementById("standard-h").checked === true){
					
					y = i*7565;
					z = y*0.10;
					w  = y + z;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(7565);
					document.getElementById("elev-cost").innerHTML = "Elevators cost: " + format.format(y);
					document.getElementById("inst-cost").innerHTML = "Installation cost: "+ format.format(z);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(w);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				else if (document.getElementById("premium-h").checked === true){

					t = i*12345;
					r = t*0.13;
					s = t + r;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(12345);
					document.getElementById("elev-cost").innerHTML ="Elevators cost: " + format.format(t);
					document.getElementById("inst-cost").innerHTML = "Installation cost: " + format.format(r);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(s);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				else if(document.getElementById("excelium-h").checked === true){
					
					t = i*15400;
					r = t*0.16;
					s = t + r;
					document.getElementById("unit-price").innerHTML = "Price per one elevator: " + format.format(15400);
					document.getElementById("elev-cost").innerHTML = "Elevators cost: " + format.format(t);
					document.getElementById("inst-cost").innerHTML = "Installation cost: " + format.format(r);
					document.getElementById("tota-cost").innerHTML = "Total cost: " + format.format(s);

					document.getElementById("showResult").style.display = 'block';              
					document.getElementById("GoBack").style.display = 'block';
				}
				
				
			}
			// END PART TWO
