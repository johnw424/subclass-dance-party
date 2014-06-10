var Dancer = function(top, left, timeBetweenSteps){
  //store timeBetweenSteps in a pseudo-private property
  this._timeBetweenSteps = timeBetweenSteps;
  // create a dancer blank node
  this.$node = $('<span class="dancer"></span>');
  // call methods, passing in args (.step and .setPosition)

  this.step();
  this.setPosition(top, left);
};

//store all methods on its proto property
Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};
