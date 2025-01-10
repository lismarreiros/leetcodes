function closestSumPair(a1, a2, target) {
  // Sort both input arrays
  const a1Sorted = a1.slice().sort((a, b) => a - b);
  const a2Sorted = a2.slice().sort((a, b) => a - b);

  let i = 0; // Pointer for a1Sorted
  let j = a2Sorted.length - 1; // Pointer for a2Sorted
  let smallestDiff = Math.abs(a1Sorted[0] + a2Sorted[0] - target);
  let closestPair = [a1Sorted[0], a2Sorted[0]];

  while (i < a1Sorted.length && j >= 0) {
      const v1 = a1Sorted[i];
      const v2 = a2Sorted[j];
      const currentSum = v1 + v2;
      const currentDiff = currentSum - target;

      // Update the closest pair if a smaller difference is found
      if (Math.abs(currentDiff) < smallestDiff) {
          smallestDiff = Math.abs(currentDiff);
          closestPair = [v1, v2];
      }

      // If exact target is found, return immediately
      if (currentDiff === 0) {
          return closestPair;
      } else if (currentDiff < 0) {
          i++; // Increase the sum by moving to the next element in a1Sorted
      } else {
          j--; // Decrease the sum by moving to the previous element in a2Sorted
      }
  }

  return closestPair;
}

// Test cases
const a1 = [-1, 3, 8, 2, 9, 5];
const a2 = [4, 1, 2, 10, 5, 20];
const aTarget = 24;
console.log(closestSumPair(a1, a2, aTarget)); // Expected: [5, 20] or [3, 20]

const b1 = [7, 4, 1, 10];
const b2 = [4, 5, 8, 7];
const bTarget = 13;
console.log(closestSumPair(b1, b2, bTarget)); // Expected: [4, 8], [7, 7], [7, 5], or [10, 4]

const c1 = [6, 8, -1, -8, -3];
const c2 = [4, -6, 2, 9, -3];
const cTarget = 3;
console.log(closestSumPair(c1, c2, cTarget)); // Expected: [-1, 4] or [6, -3]

const d1 = [19, 14, 6, 11, -16, 14, -16, -9, 16, 13];
const d2 = [13, 9, -15, -2, -18, 16, 17, 2, -11, -7];
const dTarget = -15;
console.log(closestSumPair(d1, d2, dTarget)); // Expected: [-16, 2] or [-9, -7]
