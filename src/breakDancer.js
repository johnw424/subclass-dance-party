// create new instantiator function
var BreakDancer = function(top, left, timeBetweenSteps){

  Dancer.apply(this, arguments);
};

// set Dancers as the super-class of BreakDancer
BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

//should we use Dancer.proto here instead?
BreakDancer.prototype.oldStep = Dancer.prototype.step;

// create prototype step method
BreakDancer.prototype.step = function(){
  this.oldStep();
};

BreakDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
