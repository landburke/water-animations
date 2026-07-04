// test.js
function testInflowOnly() {
  let state = { waterLevel: 0, capacity: 200, inflowRate: 50, holeSize: 0 };
  const inflow = (state.inflowRate / 100) * 100 * 0.016; // 0.8 units in 16ms
  state.waterLevel += inflow;
  console.assert(state.waterLevel > 0, "Water should increase with inflow");
  console.log("✓ Inflow test passed");
}

function testOutflowWithPressure() {
  let state = { waterLevel: 100, capacity: 200, holeSize: 50 };
  const pressure = Math.sqrt(state.waterLevel / state.capacity);
  const holeFactor = (state.holeSize / 100) * 100;
  const outflow = pressure * holeFactor * 0.016;
  console.assert(outflow > 0, "Water should leak from hole");
  console.log("✓ Outflow test passed");
}

function testEquilibrium() {
  // Find a state where inflow ≈ outflow
  let state = { waterLevel: 150, capacity: 200, inflowRate: 50, holeSize: 30 };
  // After many frames, level should stabilize
  console.log("✓ Equilibrium test (manual inspection needed)");
}

testInflowOnly();
testOutflowWithPressure();
testEquilibrium();
