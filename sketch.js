function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	noStroke()
// 	宣告
	var count=0


		
	for(var i=0;i<width;i+=50){
		
		for(var j=0;j<height;j+=50){	
// 			使count連加
			 count+=1

			
		fill(random(200,255),random(255),random(255));
			stroke(random(200,255),random(255),random(255));
			strokeWeight(2)

			
// 		當count被5整除時發生
			if(count%5<3){
	rect(i,j,40,40,random(2,10),random(5,20),random(5,20),random(2,10))
		 }
		 	if(random()<0.5){
				fill(0)
				// noStroke()
		 	ellipse(i+20,j+20,20)
		 }
				if(random()<0.5){
				fill(random(200,255),random(255),random(255))
		 	ellipse(i+20,j+20,10)
		 }
	}
	}

	
}

function draw() {
	for(var i=0;i<width;i+=50){
		
		for(var j=0;j<height;j+=50){	
	if(map(mouseX,0,width,0,100)%2==0){
				fill(random(200,255),random(255),random(255))
		 	ellipse(i+20,j+20,10)
		 }
		}}
	
}