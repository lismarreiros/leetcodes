// longest substring without repeating characters
const lengthOfLongestSubstring = function(s) {
  let leftPointer = 0
  let result = 0
  const visitedChars = new Map()

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    while(visitedChars.has(s[rightPointer])){ // verifica se o que o ponteiro direito está apontando existe no Map; se tiver
      visitedChars.delete(s[leftPointer]) // vai remover
      leftPointer++ // incrementar o esquerdo
    }

    let width = rightPointer - leftPointer + 1 // o mais 1 é por que quando o valor for zero, quer dizer que os dois ponteiros estão apontando para um mesmo caracter
    result = Math.max(result, width)
    visitedChars.set(s[rightPointer])
  }
  console.log(result)
  return result
}

lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
