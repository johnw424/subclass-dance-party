var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this, [top, left, timeBetweenSteps]);
};


makeBlinkyDancer.prototype.step = function(){
  makeDancer.prototype.step.apply(this)();
  this.$node.toggle();
}