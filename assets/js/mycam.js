Webcam.set({
		  width: 320,
		  height: 240,
		  image_format: 'jpeg',
		  jpeg_quality: 90
		 });
		 Webcam.attach( '#my_camera' );
		 //
		 // preload shutter audio clip
		 var shutter = new Audio();
		
		 shutter.autoplay = true;
		 //shutter.src = navigator.userAgent.match(/Firefox/) ? 'shutter.ogg' : 'shutter.mp3';
		 shutter.src='assets/sound/shutter.mp3'
		 //
		 function take_snapshot() {
		  // play sound effect
		  shutter.play();

		  // take snapshot and get image data
		  Webcam.snap( function(data_uri) {
		  //
		
		  // display results in page
		  document.getElementById('results').innerHTML = '<img id="imageprev" src="'+data_uri+'"/>';
		  //
			
		  
		  });
			
		  //Webcam.reset();
		 }

		function saveSnap(){
		 // Get base64 value from <img id='imageprev'> source
		 var base64image = document.getElementById("imageprev").src;
		 var lastname=document.getElementById('lastname').value;
		 var firstname=document.getElementById('firstname').value
		 var rep_of=document.getElementById('rep_of').value
		 var name=document.getElementById('lastname').value+","+document.getElementById('firstname').value;
		 Webcam.upload( base64image, "upload.php?name="+name+"&lastname="+lastname+"&firstname="+firstname+"&repof="+rep_of, function(code, name) {
		  console.log('Save successfully');
		  alert('Save successfully');
		  console.log(name);
			document.getElementById('lastname').value='';
			document.getElementById('firstname').value='';
			document.getElementById('rep_of').value='';
			
			
			
		 });
		 
		}