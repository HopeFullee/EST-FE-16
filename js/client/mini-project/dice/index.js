import { diceAnimation } from './lib/animations/animation.js';
import { getNode, getNodes } from './lib/utils/get-node.js';

const [rollBtn, recordBtn, resetBtn] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

const createRollBtnHandler = () => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 200);
      recordBtn.disabled = true;
      resetBtn.disabled = true;
    } else {
      clearInterval(stopAnimation);
      recordBtn.disabled = false;
      resetBtn.disabled = false;
    }

    isClicked = !isClicked;
  };
};

let count = 0;
let total = 0;

const createRecordItem = (value) => {
  const template = `
    <tr>
      <td>${++count}</td>
      <td>${value}</td>
      <td>${(total += value)}</td>
    </tr>
  `;

  return template;
};

const renderRecordItem = () => {
  const diceNumber = getNode('#cube').getAttribute('dice');
  const recordItem = createRecordItem(diceNumber);

  getNode('tbody').insertAdjacentHTML('beforeend', recordItem);
};

const handleRecord = () => {
  recordListWrapper.hidden = false;
  renderRecordItem();
};

const handleResetRecord = () => {
  getNode('tbody').textContent = '';
  count = 0;
  total = 0;
  recordListWrapper.hidden = true;
};

const rollBtnHandler = createRollBtnHandler();

rollBtn.addEventListener('click', rollBtnHandler);
recordBtn.addEventListener('click', handleRecord);
resetBtn.addEventListener('click', handleResetRecord);
