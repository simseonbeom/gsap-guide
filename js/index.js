let container;
let stage;

import Animation from './animation.js';

gsap.registerPlugin(ScrollTrigger);

Scrollbar.use(OverscrollPlugin);

const overscrollOptions = {
  enable: true,
  effect: navigator.userAgent.match(/Android/) ? 'glow' : 'glow',
  damping: 0.11,
  maxOverscroll: navigator.userAgent.match(/Android/) ? 150 : 100,
  glowColor: 'transparent',
};

const options = {
  damping: 0.1,
  continuousScrolling: true,
  alwaysShowTracks: false,
  renderByPixels: !('ontouchstart' in document),
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

stage = document.querySelector('#container');

container = Scrollbar.init(stage, {
  ...options,
  delegateTo: stage,
});

ScrollTrigger.scrollerProxy(stage, {
  scrollTop(value) {
    if (arguments.length) {
      container.scrollTop = value;
    }

    return container.scrollTop;
  },
});

container.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: stage });

container.setPosition(0, 0);
container.track.xAxis.element.remove();
// Scrollbar.detachStyle();

$('.startPoint').click(function () {
  container.scrollTo(0, 0, 600, {
    callback: () => console.log('done!'),
    easing: easing.easeInOutCirc,
  });
});

(function () {
  Animation();

  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $('.posNum').html(scrollTop);
  });
})();

// Only necessary to correct marker position - not needed in production
if (document.querySelector('.gsap-marker-scroller-start')) {
  const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

  container.addListener(({ offset }) => {
    gsap.set(markers, { marginTop: -offset.y });
  });
}
