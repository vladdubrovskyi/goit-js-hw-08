import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

function onTimeUpdate(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}
