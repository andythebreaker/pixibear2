var app = new PIXI.Application(800, 800, {backgroundColor : 0xFFD700});
document.getElementById("ThisIsAIdForYouToAppend").appendChild(app.view);

// create a new Sprite from an image path
var bunny = PIXI.Sprite.fromImage('bear.png')

// center the sprite's anchor point
bunny.anchor.set(0.1);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// Listen for animate update
/*
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.1 * delta;
});
*/
