// non empty
export const nonEmpty = value => !!value

// email validator
export const emailRegExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
export const isEmail = value => emailRegExp.test(value)