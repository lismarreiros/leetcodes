function ArrayChallenge(strArr) {
  // Helper function to parse input and extract coordinates
  function parseCoordinates(str) {
    return str.match(/\((-?\d+),(-?\d+)\)/g).map(coord => {
      const [x, y] = coord.match(/-?\d+/g).map(Number);
      return { x, y };
    });
  }

  // Parse the input
  const coordinates = parseCoordinates(strArr[0]);

  // Extract the two rectangles
  const rect1 = coordinates.slice(0, 4);
  const rect2 = coordinates.slice(4);

  // Function to calculate rectangle boundaries
  function getRectangleBounds(rect) {
    const xVals = rect.map(coord => coord.x);
    const yVals = rect.map(coord => coord.y);
    return {
      minX: Math.min(...xVals),
      maxX: Math.max(...xVals),
      minY: Math.min(...yVals),
      maxY: Math.max(...yVals),
    };
  }

  // Get bounds for both rectangles
  const bounds1 = getRectangleBounds(rect1);
  const bounds2 = getRectangleBounds(rect2);

  // Calculate intersection bounds
  const intersectMinX = Math.max(bounds1.minX, bounds2.minX);
  const intersectMaxX = Math.min(bounds1.maxX, bounds2.maxX);
  const intersectMinY = Math.max(bounds1.minY, bounds2.minY);
  const intersectMaxY = Math.min(bounds1.maxY, bounds2.maxY);

  // Check if there's an overlap
  if (intersectMinX >= intersectMaxX || intersectMinY >= intersectMaxY) {
    return 0; // No overlap
  }

  // Calculate areas
  const area1 = (bounds1.maxX - bounds1.minX) * (bounds1.maxY - bounds1.minY);
  const overlapArea =
    (intersectMaxX - intersectMinX) * (intersectMaxY - intersectMinY);

  // Return the result
  return Math.floor(area1 / overlapArea);
}

// Test cases
console.log(
  ArrayChallenge(["(0,0), (2,2), (2,0), (0,2), (1,0), (1,2), (6,0), (6,2)"])
); // Output: 2

console.log(
  ArrayChallenge(["(0,0), (5,0), (0,2), (5,2), (2,1), (5,1), (2,-1), (5,-1)"])
); // Output: 3
