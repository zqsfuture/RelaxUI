export const isObject = targe => Object.prototype.toString.call(targe) === '[object Object]'
export const isNumber = targe => Object.prototype.toString.call(targe) === '[object Number]'
export const isString = targe => Object.prototype.toString.call(targe) === '[object String]'
export const isUndefined = targe => Object.prototype.toString.call(targe) === '[object Undefined]'
export const isBoolean = targe => Object.prototype.toString.call(targe) === '[object Boolean]'
export const isArray = targe => Object.prototype.toString.call(targe) === '[object Array]'
export const isFunction = targe => Object.prototype.toString.call(targe) === '[object Function]'