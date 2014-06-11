var WeirdoPartyGuy = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
};
WeirdoPartyGuy.prototype.creep = function(){
  function makeNewPosition(){

    // Get window dimensions (remove the dimension of the node)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
  }
  var node = this.$node;
  function animateDiv(){
      var newq = makeNewPosition();
      var oldq = node.offset();
      var speed = calcSpeed([oldq.top, oldq.left], newq);

      node.animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv();
      });

  };

  function calcSpeed(prev, next) {

      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);

      var greatest = x > y ? x : y;

      var speedModifier = .5;

      var speed = Math.ceil(greatest/speedModifier);

      return speed;

  }

  animateDiv();

};
