// create new instantiator function
var BlinkyDancer = function(top, left, timeBetweenSteps){
  // //store timeBetweenSteps in a pseudo-private property
  // this._timeBetweenSteps = timeBetweenSteps;
  // // create a dancer blank node
  // this.$node = $('<span class="dancer"></span>');
  // // call methods, passing in args (.step and .setPosition)
  // this.oldStep();
  // this.setPosition(top, left);
  Dancer.apply(this, arguments);
};

// set Dancers as the super-class of BlinkyDancer
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

//should we use Dancer.proto here instead?
BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

// create prototype step method
BlinkyDancer.prototype.step = function(){
  this.oldStep();

  this.$node.fadeToggle();
};

BlinkyDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left,
    border: "0px"
  };
  this.$node.css(styleSettings);

  var $imageNode = $('<img src="http://4.bp.blogspot.com/-eWIfLcLqyIA/TadDjZfjjCI/AAAAAAAAAVk/_Em2J4-UZaM/s1600/FistPump.jpg" />');

  // package style for image node
  var imgStyleSettings = {

  };

  //apply style to image node
  $imageNode.css(imgStyleSettings);

  // prepend image node as child of node container
  this.$node.prepend($imageNode);
};
