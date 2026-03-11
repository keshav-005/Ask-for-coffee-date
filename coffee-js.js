(function () {
  const PHASE = { ASK: 0, PLEAD1: 1, PLEAD2: 2, ANIMATE: 3, FINAL: 4 };
  let phase = PHASE.ASK;

  const askPanel = document.getElementById('askPanel');
  const plead1 = document.getElementById('plead1');
  const plead2 = document.getElementById('plead2');
  const animatePanel = document.getElementById('animatePanel');

  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const yesBtn2 = document.getElementById('yesBtn2');
  const noBtn2 = document.getElementById('noBtn2');
  const yesBtn3 = document.getElementById('yesBtn3');

  const card = document.getElementById('card');
  const scene = document.getElementById('scene');
  const me = document.getElementById('meAvatar');
  const her = document.getElementById('herAvatar');
  const leftChair = document.getElementById('leftChair');
  const rightChair = document.getElementById('rightChair');
  const cups = document.getElementById('cups');

  // ── Read dialogues from CONFIG ──
  const dialogues = CONFIG.dialogues;

  function show(panel) {
    [askPanel, plead1, plead2, animatePanel].forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-hidden', 'true');
    });
    panel.classList.add('active');
    panel.setAttribute('aria-hidden', 'false');
  }

  // initial
  show(askPanel);

  function handleNo() {
    if (phase === PHASE.ASK) {
      phase = PHASE.PLEAD1; show(plead1);
    } else if (phase === PHASE.PLEAD1) {
      phase = PHASE.PLEAD2; show(plead2);
    }
  }

  function handleYes() {
    phase = PHASE.ANIMATE; show(animatePanel);
    startSceneSequence();
  }

  yesBtn.addEventListener('click', handleYes);
  yesBtn2.addEventListener('click', handleYes);
  yesBtn3.addEventListener('click', handleYes);
  noBtn.addEventListener('click', handleNo);
  noBtn2.addEventListener('click', handleNo);

  function startSceneSequence() {
    me.style.transform = 'translate(40px, 160px)';
    me.style.opacity = '0';
    her.style.transform = 'translate(380px, 160px)';
    her.style.opacity = '0';
    leftChair.style.transform = 'translate(40px, 0px)';
    rightChair.style.transform = 'translate(380px, 0px)';

    card.classList.add('state-before-enter');

    setTimeout(() => {
      card.classList.remove('state-before-enter');
      card.classList.add('state-before-her');
      me.style.transition = 'transform 1s cubic-bezier(.2,.9,.2,1), opacity 1s';
      me.style.transform = 'translate(80px, 120px)';
      me.style.opacity = '1';
      leftChair.style.transition = 'transform 1s cubic-bezier(.2,.9,.2,1)';
      leftChair.style.transform = 'translate(80px, 0px)';
    }, 900);

    setTimeout(() => {
      card.classList.remove('state-before-her');
      card.classList.add('state-her-in');
      her.style.transition = 'transform 1s cubic-bezier(.2,.9,.2,1), opacity 1s';
      her.style.transform = 'translate(340px, 120px)';
      her.style.opacity = '1';
      rightChair.style.transition = 'transform 1s cubic-bezier(.2,.9,.2,1)';
      rightChair.style.transform = 'translate(340px, 0px)';
    }, 2100);

    setTimeout(() => {
      card.classList.remove('state-her-in');
      card.classList.add('state-me-sit');
      leftChair.style.transform = 'translate(120px, 0px)';
      rightChair.style.transform = 'translate(300px, 0px)';
      me.style.transform = 'translate(120px, 120px)';
      her.style.transform = 'translate(300px, 120px)';
    }, 3400);

    setTimeout(() => {
      card.classList.add('state-steam');
    }, 4600);
  }

})();