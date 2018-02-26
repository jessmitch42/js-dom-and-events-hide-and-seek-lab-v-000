function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild() {
  let element = document.querySelector("#grand-node");

  while (element.querySelector('div')) {
    element = element.querySelector('div');
  }
  return element;
}

function increaseRankBy(n) {
  const list = document
                .getElementById('app')
                .querySelectorAll('ul.ranked-list li')

  list.forEach(li => li.innerHTML = parseInt(li.innerHTML) + n);

}
