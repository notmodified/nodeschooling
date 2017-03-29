
console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function esc(str = '') {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
}

function html(str, ...args) {
  return str.reduce((acc, e, i) => acc + e + esc(args[i]), '');
}
