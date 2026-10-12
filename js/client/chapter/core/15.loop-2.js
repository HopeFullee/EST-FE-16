const getSiblingElem = (query) => {
  let nextNode = document.querySelector(query);

  do {
    nextNode.nextSibling;
  } while (nextNode.nodeType !== 1);

  return nextNode;
};

const res = getSiblingElem('.title');

console.log(res);
