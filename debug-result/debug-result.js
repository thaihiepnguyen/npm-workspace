module.exports = async function DebugResult(target, name, descriptor) {
  const fn = descriptor.value;

  if (typeof fn == 'function') {
    descriptor.value = async function(...args) {      
      const result = await fn.apply(this, args);
      console.log('\x1b[33m%s\x1b[0m', `Result of '${name}' function is : ${result}`);

      return result
    }
  }

  return descriptor;
}