function chunkArray<objectType>(arr:objectType[], n:number) {
  if (n <= 0) {
    throw new Error('The number of chunks must be greater than 0');
  }

  const result = [];
  const chunkSize = Math.ceil(arr.length / n);

  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }

  return result;
}

export { chunkArray };
