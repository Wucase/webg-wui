function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`
  }
  if (element) {
    prefixName += `_${element}`
  }
  if (modifier) {
    prefixName += `--${modifier}`
  }
  return prefixName
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element, '') : ''
  const m = (modifier: string = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''
  const be = (blockSuffix: string = '', element: string = '') =>
    element && blockSuffix ? _bem(prefixName, blockSuffix, element, '') : ''
  const bm = (blockSuffix: string = '', modifier: string = '') =>
    modifier && blockSuffix ? _bem(prefixName, blockSuffix, '', modifier) : ''
  const em = (element: string = '', modifier: string = '') =>
    modifier && element ? _bem(prefixName, '', element, modifier) : ''
  const bem = (
    blockSuffix: string = '',
    element: string = '',
    modifier: string = ''
  ) =>
    blockSuffix && modifier && element
      ? _bem(prefixName, blockSuffix, element, modifier)
      : ''

  const is = (name: string = '', state) => (state && name ? `is-${name}` : '')
  return { b, e, m, be, bm, em, bem, is }
}

export function createNamespace(name: string) {
  const prefixName = `w-${name}`
  return createBEM(prefixName)
}

// const bem = createNamespace("icon");
// console.log(bem.bem("box", "element", "modifier"));
// console.log(bem.is("disabled", true));
