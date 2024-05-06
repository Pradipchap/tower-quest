export default function suffleArray(array: Array<any>) {
  const lengthOfArray = array.length;

  for (let i = 0; i < lengthOfArray; i++) {
    const randomPlace = Math.floor(Math.random() * lengthOfArray);
    const firstID = crypto.randomUUID();
    const secondID = crypto.randomUUID();
    const randomPlaceElement = {
      id: secondID,
      data:
        typeof array[randomPlace].data === "undefined"
          ? array[randomPlace]
          : array[randomPlace].data,
    };
    const currentElement = {
      id: firstID,
      data: typeof array[i].data === "undefined" ? array[i] : array[i].data,
    };
    array[i] = randomPlaceElement;

    array[randomPlace] = currentElement;
  }
  console.log(array);
  return array;
}
