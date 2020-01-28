function easeOutCubic(t) {return (--t)*t*t+1;}
document.bewegen = function(data){
	//data hat speed throttle etc

    //var steigungY = value*0.22*11;
    // var aktuellY = document.getElementById('ballBild').getAttribute('x');
	// var aktuellX =document.getElementById('ballBild').getAttribute('y');
	// var vx = 4.09;
	// var vy = -0.82;
	
	var throttle = easeOutCubic(data.throttle*0.01);
	// // var speed = data.speed;
	// var brake = data.brake;

	// if(aktuellX <2400 && aktuellY > -1500){
	// 	console.log("bin drin ")
		
	//   var throttle = Math.round(throttle *2);
	//   (aktuellX = vx + throttle*2)-70;
	//   (aktuellY = vy - throttle*2)+2130;
	var startX = -70;
	var startY = 2130;
	var endX = 3000;
	var endY = 1490;
	var x = startX + (endX -startX)*throttle;
	var y = startY + (endY -startY)*throttle;
	var xBack = x -1*0.000003;
	var yBack = y -1*0.000003;
	var emoji = document.getElementById('Emoji').style.opacity = 0;

	if(throttle =+ throttle && throttle > 3){
	document.getElementById('ballBild').setAttribute('x', String(x));
	document.getElementById('ballBild').setAttribute('y', String(y));
	}

	if((throttle <= throttle) && x!=-70 && y!=2130){
		
		document.getElementById('ballBild').setAttribute('x', String(xBack));
		document.getElementById('ballBild').setAttribute('y', String(yBack));

	}
	if(throttle == 0){
		
		document.getElementById('ballBild').setAttribute('x', String(xBack));
		document.getElementById('ballBild').setAttribute('y', String(yBack));
		console.log(yBack)
	}
	if(x > 2000){
		console.log('angry');
		document.getElementById('Emoji').style.opacity = 1;

	}
	if(x> 2400){
		x= 2400;
	}
	// if(throttle == 0){
	// 	aktuellX = throttle - (vx * 3*2);
	// 	aktuellY = throttle - (vy * 3*2);
	// }
	// document.getElementById('ballBild').setAttribute('x', String(throttle))
	// document.getElementById('ballBild').setAttribute('y', String(throttle*-1));
	


		// console.log('throttle ist' + throttle);
		//, brakeVal    = Math.round(streams.electrics.brake * 1000)
		
		//ball rollt zurück wenn gaspedal nicht betätigt
		// if(speed <= speed && (throttle <1000) && aktuellY !=2130 && aktuellX != -65){            
		// 		//geschw. des rücklaufs
		// 	  aktuellX = aktuellX - (vx * 3*2);
		// 	  aktuellY = aktuellY - (vy * 3*2);
			  
		// 	  // if(aktuellX < -70) {
		// 	  //   console.log(aktuellX," is smaller than -70")
		// 	  //   aktuellX = -70;}                
		// 	  // if(aktuellY < 2130){
		// 	  //   console.log(aktuellY," is smaller than 2130")
		// 	  //   aktuellY = 2130;}
		// 	document.getElementById('ballBild').setAttribute('x', String(aktuellX));
		//   document.getElementById('ballBild').setAttribute('y', String(aktuellY));
		  
		  
			
		//   }
		// 	//auswirkung der bremse auf den ball
		//   if(aktuellY !=2128 && aktuellX != -65){
		//   if(brakeVal += brakeVal){

		// 	aktuellX = aktuellX - (vx * 15*2);
		// 	  aktuellY = aktuellY - (vy * 15*2);

		// 	// (aktuellX -= vx * (brakeVal *0.2));
		// 	// (aktuellY -= vy * (brakeVal*0.2));
		   
		//   document.getElementById('ballBild').setAttribute('x', String(aktuellX));
		// document.getElementById('ballBild').setAttribute('y', String(aktuellY));
		// 	if(aktuellX == -65 && aktuellY == 2128){
		// 	  return;
		// 	}
		//   } 
		
  
		  //bremst ball am startpunkt wenn er zurück rollt
		
		  //ball bewegt sich beim gas geben
		 
	// 	if(throttle <=200 && (throttle += throttle)){
	// 	  var throttle = Math.round(throttle * 5);
	// 	  aktuellX += vx * throttle*2;
	// 	  (aktuellY += vy * throttle*2)*-1;
	// 	  document.getElementById('ballBild').setAttribute('x', String(aktuellX));
	// 	document.getElementById('ballBild').setAttribute('y', String(aktuellY));
		
	//   }
	  
	//   if(throttle <=1000 && (throttle += throttle)){
	// 	  console.log('hallo');
	// 	var throttle = Math.round(throttle * 20);
	// 	aktuellX += vx * throttle*2;
	// 	(aktuellY += vy * throttle*2)*-1;
	// 	document.getElementById('ballBild').setAttribute('x', String(aktuellX));
	//   document.getElementById('ballBild').setAttribute('y', String(aktuellY));
	//   if(aktuellX >2900){
	// 	return;
	//   }
	  
	// }
	
	// if(aktuellX < -65){
	// 	aktuellX = -65;
		
	// 	return;
		
	//   }
	//   //fängt ball am ende des balkens ab
	//   if(aktuellX >2800){
	// 	return;
	//   }
	// if abfragen überarbeiten
		//bremse lukas fragen
}
