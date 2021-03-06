/**
 * @license
 * Copyright (c) 2020 UMI
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict'

/**
 * @param {number[]} array
 * @param {number} [length]
 * @param [value]
 * @private
 */
function arrayFill (array, length, value) {
  const v = value || 0
  for (let i = 0; i < length; i++) {
    array[i] = v
  }
}
/**
 * @param {number} length
 * @returns {number[]}
 * @private
 */
function arrayNew (length) {
  const a = []
  for (let i = 0; i < length; i++) {
    a[i] = 0
  }
  return a
}
/**
 * @param {number[]} a
 * @param {ArrayLike<number>} b
 * @param {number} [offset]
 * @param {number} [length]
 * @private
 */
function arraySet (a, b, offset, length) {
  const o = offset || 0
  const l = length || b.length
  for (let i = 0; i < l; i++) {
    a[o + i] = b[i]
  }
}
/**
 * @param {ArrayLike<number>} a
 * @param {number} [begin]
 * @param {number} [end]
 * @returns {number[]}
 * @private
 */
function arraySlice (a, begin, end) {
  const b = begin || 0
  const e = end || a.length
  const r = []
  for (let i = b; i < e; i++) {
    r[r.length] = a[i]
  }
  return r
}
/**
 * @param {ArrayLike<number>} a
 * @param {number[]} b
 * @returns {number[]}
 * @private
 */
function arrayConcat (a, b) {
  const r = arraySlice(a)
  for (let i = 0, l = b.length; i < l; i++) {
    r[r.length] = b[i]
  }
  return r
}

exports.arrayConcat = arrayConcat
exports.arrayFill = arrayFill
exports.arrayNew = arrayNew
exports.arraySet = arraySet
exports.arraySlice = arraySlice
