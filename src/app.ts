
export function doCalculation(...args: number[]): number {
  let total = 0;

  for (const num of args) {
    total += num;
  }

  return total;
}

window.onload = () => {
  console.log(doCalculation(1, 2, 3, 4, 5));
};
