export function Animation() {
  let to = gsap.to('.box-1', { duration: 1, x: 300, rotation: 360 });
  let from = gsap.from('.box-2', { duration: 1, x: 300, rotation: 360 });
  let fromTo = gsap.fromTo(
    '.box-3',
    { duration: 1, x: 300, rotation: 360 },
    { duration: 1, x: 0, rotation: 0 }
  );
  let set = gsap.set('.box-4', { x: 300, rotation: 210 });
  let set2 = gsap.to('.box-5', {
    duration: 1,
    x: 300,
    rotation: 360,
    onComplete: () => {
      gsap.set('.box-5', { x: 0, rotation: 0 });
    },
  });

  let tl = gsap.timeline();
  tl.to('.box-6:nth-child(1)', { duration: 1, x: 300, rotation: 360 });
  tl.to('.box-6:nth-child(2)', { duration: 1, x: 300, rotation: 360 });
  tl.to('.box-6:nth-child(3)', { duration: 1, x: 300, rotation: 360 });
  tl.to('.box-6:nth-child(4)', { duration: 1, x: 300, rotation: 360 });


  let stagger = gsap.to('.box-7',{x:300, rotation:360, stagger:0.1});

  
  function start(){$('.start').html('start !')};
  function complete(){$('.complete').html('complete !')};
  let count = 0;
  function update(){
    
    count ++;
    $('.update').html(`update(${count})`);
  };


  let callback = gsap.to('.box-8',{duration:5, x:300, rotation:360, onStart:start,onComplete:complete,onUpdate:update});
  let controls = gsap.to('.box-9',{duration:5, x:300, rotation:360});


  
  
  
  document.querySelector('.to-restart').onclick = () => to.restart();
  document.querySelector('.from-restart').onclick = () => from.restart();
  document.querySelector('.fromTo-restart').onclick = () => fromTo.restart();
  document.querySelector('.set-restart').onclick = () => set.restart();
  document.querySelector('.set2-restart').onclick = () => set2.restart();
  document.querySelector('.timeLine-restart').onclick = () => tl.restart();
  document.querySelector('.stagger-restart').onclick = () => stagger.restart();
  
  document.querySelector('.callback-restart').onclick = () => {
    callback.restart();
    $('.start,.complete,.update').html('');
    count = 0;
  } 

  document.querySelector('.controls-play').onclick = () => controls.play();
  document.querySelector('.controls-pause').onclick = () => controls.pause();
  document.querySelector('.controls-reverse').onclick = () => controls.reverse();
  document.querySelector('.controls-restart').onclick = () => controls.restart();
  
}

export default Animation;
