

function createElement(type='div', {attributes={}, classNames=[], event={}}, ...children){
  const elem = document.createElement(type);
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue)
  }
  for (const [eventType, eventHandler] of Object.entries(events)) {
    elem.setAttribute(eventType, eventHandler);
  }
  elem.classList.add(...classNames);
  elem.addEventListener(typeEvent, onClick); //example
  elem.append(...children);
  return elem;
}

// attributes={
//   src:'',
//   alt:'',
//   data:''
// }