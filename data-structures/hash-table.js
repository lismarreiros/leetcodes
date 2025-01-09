const hashTable = new Map()
hashTable.set('key1', 'value1')
hashTable.set('key2', 'value2')

console.log(hashTable)

hashTable.delete('key1')

console.log(hashTable)
console.log(hashTable.has('key1'))


/* 
map objects are collections of key-value pairs. 
a key may only occur once - it's unique.
is iterated by key-value pairs - a for... of loop returns a 2-member array of [key, value] for each iteration.
iteration happens in insertion order, which corresponds to the order in which each key-value was first inserted into de map by te set() method.
it could be represented internally as a hash table with
O(n) lookup, a search tree (with O(log n) lookup)


to construct a hash table:
 you need an array
 the dictionary you want to represent
 a way to decide which index of the array you want to use for each key value pair
*/

// first recurring character problem
// https://www.youtube.com/watch?v=GJdiM-muYqc&t=0s

// "DBCABA" -> return B

function firstRecurring(string) {
  let count = {} // dictionary or hash table
  for (char of string) {
    if (count[char] !== undefined) {
      return char
    }
    count[char] = 1
  }
  return null
}

console.log(firstRecurring('DBCABA'))