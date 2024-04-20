function MeasureRunTime(target, name, descriptor) {
  const fn = descriptor.value;

  if (typeof fn == 'function') {
    descriptor.value = function(...args) {
      const startTime = performance.now();
      const result = fn.apply(this, args);
      const endTime = performance.now();
      console.log('\x1b[33m%s\x1b[0m', `Runtime of '${name}' function is : ${(endTime - startTime).toFixed(6)} milliseconds`);
      return result;
    }
  }

  return descriptor;
}



module.export = {
  MeasureRunTime
}