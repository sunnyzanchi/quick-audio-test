import { Howl } from 'howler';

const sound = new Howl({
  src: ['bell.wav']
});

const howlerButton = document.querySelector('#howler button');

howlerButton.addEventListener('click', function(e) {
  sound.play();
});
