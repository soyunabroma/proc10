var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gol1, gol2, jugador, jugador2, comp, juga, pelota;

function setupp (){
  gol1 = createSprite(200,10,140,20);
  gol1.shapeColor = "yellow";
  gol2 = createSprite(200,390,140,20);
  gol2.shapeColor = "yellow";
  
  jugador = createSprite(200,370,80,10);
  jugador.shapeColor="black";
  jugador2 = createSprite(200,30,80,10);
  jugador2.shapeColor="black";
  
  juga = 0;
  comp = 0;
  for (var i = 10; i < 400; i= i + 20) {
  var coso = createSprite(i,200,10,1);
  coso.shapeColor = "black";
  }
  
  pelota=createSprite(200,200,10,10);
  pelota.shapeColor = "white";
}


setupp();

function draw() {
  background("green");
  
  if(keyDown("space")){
  pelota.velocityX = randomNumber(-10, 10);
  pelota.velocityY = randomNumber(-10, 10);
  }
  
  c
  
  createEdgeSprites();
  pelota.bounceOff(edges);
  pelota.bounceOff(jugador2);
  pelota.bounceOff(jugador);
  
  if (keyDown("a")){
    jugador.x = jugador.x + -3;
  }
  if (keyDown("d")){
    jugador.x = jugador.x + 3;
  }
  if (keyDown("LEFT_ARROW")){
    jugador2.x = jugador2.x + -3;
  }
  if (keyDown("RIGHT_ARROW")){
    jugador2.x = jugador2.x + 3;
  }
  
  if(pelota.isTouching(gol1)){
    pelota.x = 200;
    pelota.y = 200;
    pelota.velocityX = 0;
    pelota.velocityY = 0;
    comp = comp + 1;
  }
  if(pelota.isTouching(gol2)){
    pelota.x = 200;
    pelota.y = 200;
    pelota.velocityX = 0;
    pelota.velocityY = 0;
    juga = juga + 1;
  }
  
  if(comp == 5 || juga ==5){
    text("fin del juego",200,180);
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
