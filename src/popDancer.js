// create new instantiator function
var PopDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);
};

// set Dancers as the super-class of PopDancer
PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

//should we use Dancer.proto here instead?
PopDancer.prototype.oldStep = Dancer.prototype.step;

// create prototype step method
PopDancer.prototype.step = function(){

  this.oldStep();
  this.$node.animate({
    left: "+=50px"
  });
};

PopDancer.prototype.setPosition = function(top, left){
  // package style for node container
  var styleSettings = {
    top: top,
    left: left,
    border: "0px"
  };
  // apply style to node container
  this.$node.css(styleSettings);

  //create image node
  var $imageNode = $('<img src="src/cat.gif" />');

  // package style for image node
  var imgStyleSettings = {
    height: "auto",
    width: "10%"
  };

  //apply style to image node
  $imageNode.css(imgStyleSettings);

  // prepend image node as child of node container
  this.$node.prepend($imageNode);
};
