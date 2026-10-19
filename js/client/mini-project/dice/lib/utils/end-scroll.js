export const endScroll = (node) => {
  if (typeof node === 'string') node = document.querySelector(node);
  node.scrollTop = node.scrollHeight;
};
