import { Howl } from 'howler';

const sound = new Howl({
  src: ['bell.wav']
});
const howlerButton = document.querySelector('#howler button');

howerButton.addEventListener('click', function(e) {
  sound.play();
});
