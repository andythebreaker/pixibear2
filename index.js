// ³Ð¤@­Ó Render ¦Û°Ê§PÂ_¬O§_¦³ webGL
var renderer1 = PIXI.autoDetectRenderer(256, 256);
renderer1.resize(512, 512);
renderer1.backgroundColor = 0x061639;
renderer1.view.style.position = "absolute";
renderer1.view.style.display = "block";
renderer1.autoResize = true;
renderer1.resize(window.innerWidth, window.innerHeight);
//var texture = PIXI.utils.TextureCache["bear.png"];
//var logo = new PIXI.Sprite(texture);

//document.body.appendChild(renderer1.view);
document.getElementById("ThisIsAIdForYouToAppend").appendChild(renderer1.view);
var stage = new PIXI.Container();
renderer1.render(stage);
var addbear;

function loadbear(){
	console.log("load")
	addbear = PIXI.loader
    	.add("bear.png")
    	.load(init);
	console.log("finish")
}

function init() {
		console.log("initSTART");
        	var sprite = new PIXI.Sprite(
        			PIXI.loader.resources["bear.png"].texture // get Texture Cache
        		);
		console.log("finish123");
                //renderer1.render(sprite);
	
		stage.addChild(sprite);
		}

loadbear();
console.log(new Date());
console.log('Dude!');
sleep(10000);
console.log(new Date());
renderer1.render(stage);
stage.addChild(addbear);
console.log("runOK");

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
