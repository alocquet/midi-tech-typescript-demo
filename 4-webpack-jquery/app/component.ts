
export function sayHello(name: string) {
  var div = document.createElement("div");
  div.innerHTML = `Hello world ${name}`;
  return div
}

