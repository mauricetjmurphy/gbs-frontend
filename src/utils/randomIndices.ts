export function generateRandomIndicies(
  amount: number,
  size: number | undefined
) {
  const numbers = new Set();

  while (size !== undefined && numbers.size < amount) {
    const randomNumber = Math.floor(Math.random() * size) + 1;
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
}
