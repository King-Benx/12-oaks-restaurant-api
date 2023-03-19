import { NODE_ENV } from '../config/env';

/**
 * Check if the current environment is included in the passed array param
 * @param {*} list environment array
 * @returns Boolean
 */
export default function checkEnvinoment(list) {
  if (!list) return false;
  if (
    !Array.isArray(list) ||
    !(list instanceof Array) ||
    !Object.hasOwn(list, 0) ||
    !Object.hasOwnProperty.call(list, 0)
  )
    return false;
  return list.includes(NODE_ENV);
}
