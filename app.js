'use strict';
angular.module('beamng.apps')
.directive('app', ['StreamsManager', 'UiUnits' ,function (StreamsManager, UiUnits) {
  return {
    template:  '<object style="width:100%; height:100%; box-sizing:border-box; pointer-events: none" type="image/svg+xml" data="modules/apps/Ball/Ball.svg"></object>',
    replace: true,
    restrict: 'EA',
    link: function (scope, element, attrs) {      
      // An optional list of streams that will be used in the app
      var streamsList = ['engineInfo' , 'electrics'];
 
      // Make the needed streams available.
      StreamsManager.add(streamsList);
 
      // Make sure we clean up after closing the app.
      scope.$on('$destroy', function () {
        StreamsManager.remove(streamsList);
      });
      var aktuellY = 2128;
	    var aktuellX =-65;
    	var vx = 4.000000056;
      var vy = -0.820000005;
      var gas = 
    
      element.on('load', function() {
        var svg   = element[0].contentDocument
        , throttle = svg.getElementById('ballBild');
        

        svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
   
        scope.$on('streamsUpdate', function (event, streams){
          if(streams != null && streams.electrics !=null){
            var throttleVal = Math.round(streams.electrics.throttle * 1000)
            , brakeVal    = Math.round(streams.electrics.brake * 1000)
            console.log(throttleVal);
            //ball rollt zurück wenn gaspedal nicht betätigt
            if(streams.electrics.throttle <= streams.electrics.throttle && (streams.electrics.throttle <1000) && aktuellY !=2130 && aktuellX != -65){            
                    //geschw. des rücklaufs
                  aktuellX = aktuellX - (vx * 3*2);
                  aktuellY = aktuellY - (vy * 3*2);
                  
                  // if(aktuellX < -70) {
                  //   console.log(aktuellX," is smaller than -70")
                  //   aktuellX = -70;}                
                  // if(aktuellY < 2130){
                  //   console.log(aktuellY," is smaller than 2130")
                  //   aktuellY = 2130;}
                svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
              svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
              
              
                
              }
                //auswirkung der bremse auf den ball
              if(aktuellY !=2128 && aktuellX != -65){
              if(brakeVal += brakeVal){

                aktuellX = aktuellX - (vx * 15*2);
                  aktuellY = aktuellY - (vy * 15*2);

                // (aktuellX -= vx * (brakeVal *0.2));
                // (aktuellY -= vy * (brakeVal*0.2));
               
              svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
            svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
                if(aktuellX == -65 && aktuellY == 2128){
                  return;
                }
              } 
            }
      
              //bremst ball am startpunkt wenn er zurück rollt
              if(aktuellX < -65){
                aktuellX = -65;
                
                return;
                
              }
              //fängt ball am ende des balkens ab
              if(aktuellX >2800){
                return;
              }

              //ball bewegt sich beim gas geben
              if(throttleVal <=100 && (throttleVal += throttleVal)){
                var throttleVal = Math.round(streams.electrics.throttle *2);
                aktuellX += vx * throttleVal*2;
                aktuellY += vy * throttleVal*2;
                svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
              svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
              
            }
            if(throttleVal <=200 && (throttleVal += throttleVal)){
              var throttleVal = Math.round(streams.electrics.throttle * 5);
              aktuellX += vx * throttleVal*2;
              aktuellY += vy * throttleVal*2;
              svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
            svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
            
          }
          
          if(throttleVal <=1000 && (throttleVal += throttleVal)){
            var throttleVal = Math.round(streams.electrics.throttle * 20);
            aktuellX += vx * throttleVal*2;
            aktuellY += vy * throttleVal*2;
            svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
          svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
          if(aktuellX >2900){
            return;
          }
        }
        
        
          //   if(throttleVal += throttleVal){
          //     aktuellX += vx * throttleVal*2;
          //     aktuellY += vy * throttleVal*2;
          //     svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
          //   svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
          // }
          
           /*else if (throttleVal -= throttleVal) {
            aktuellX -= vx * 1/throttleVal;
            aktuellY -= vy * 1/throttleVal;
            svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
            svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
          } 
          /*if (aktuellX > 3150) {
            aktuellX += throttleVal;
            aktuellY += throttleVal;
            svg.getElementById('ballBild').setAttribute('x', String(aktuellX));
            svg.getElementById('ballBild').setAttribute('y', String(aktuellY));
          }*/
          }
          
        })
        
      })

      }
   
      }
    }
  ]);
 