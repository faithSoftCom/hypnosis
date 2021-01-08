function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function getBrightness(r, b, g) {
  // brightness calculation from http://alienryderflex.com/hsp.html
  return Math.sqrt(
  0.299 * (r * r) +
  0.587 * (g * g) +
  0.114 * (b * b));

}

setInterval(() => {
  const r = getRandomNumber(),
  g = getRandomNumber(),
  b = getRandomNumber(),
  brightness = getBrightness(r, g, b);

  document.documentElement.style.setProperty(`--r`, r);
  document.documentElement.style.setProperty(`--g`, g);
  document.documentElement.style.setProperty(`--b`, b);

  let bgColor;
  if (brightness > 40) {
    bgColor = '#121212';
  } else {
    bgColor = '#BDBCBF';
  }
  document.documentElement.style.setProperty(`--bg`, bgColor);
}, 2000);