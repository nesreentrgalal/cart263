
const grid = document.querySelector('.m-grid');
const tl = new TimelineMax();

TweenLite.set(grid, {
  transformPerspective: 400,
  transformOrigin: '50% 50%' });


tl.
to(grid, 1, { scaleY: 1, ease: Power3.easeIn }).
to(grid, 1, { rotationX: 75, y: '0%', ease: Power2.easeIn, transformPerspective: 300, onComplete: () => grid.classList.add('is-animating') }, '+=0.3')
// .to(grid, 1, {transformPerspective: 300}, '+=1')
// .to(grid, 1, { ease:Linear.easeNone, onComplete: () => grid.classList.add('is-animating')}, '-=0.3')
.to('.m-logo__wrap', 1, { scale: 1 });
