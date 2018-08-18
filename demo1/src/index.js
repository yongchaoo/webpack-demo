import _ from 'lodash';
import './style.css';
import Icon from './images/01.jpg';
import Data from './data.xml';
function component() {
  var element = document.createElement('div');
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  console.log(Data);
  return element;
}

document.body.appendChild(component());