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

PIXI.loader
    .add("bear.png")
    .load(init);

function init() {
        	var sprite = new PIXI.Sprite(
        			PIXI.loader.resources["bear.png"].texture // get Texture Cache
        		);
		console.log("123");
              	renderer1.render(sprite);
  		}
document.body.appendChild(renderer1.view);
//var stage = new PIXI.Container();
