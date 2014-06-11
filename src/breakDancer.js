// create new instantiator function
var BreakDancer = function(top, left, timeBetweenSteps){
  // //store timeBetweenSteps in a pseudo-private property
  // this._timeBetweenSteps = timeBetweenSteps;
  // // create a dancer blank node
  // this.$node = $('<span class="dancer"></span>');
  // // call methods, passing in args (.step and .setPosition)
  // this.oldStep();
  // this.setPosition(top, left);
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
