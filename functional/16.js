module.exports = function f(deps) {
  return Object.keys(g(deps)).sort();
}


function g(deps) {
  if (!deps) return [];

  const {dependencies} = deps;

  if (!dependencies) return [];

  let r = {};

  Object.keys(dependencies).forEach(d => {
    Object.assign(r, {[d + '@' + dependencies[d]['version']]: ''}, g(dependencies[d]));
  });

  return r;
}
