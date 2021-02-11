const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  // ES2015 special syntax
  // client ask server to find the file
  import('./image_viewer').then((module) => {
    console.log(module);
    module.default();
  });
};
document.body.appendChild(button);
