export function parseData(pair, dataArray) {
  const id = pair[0].split("$")[0];
  const propertyName = pair[0].split("$")[1];
  const value = pair[1];
  const dataItem = dataArray.find((item) => item.id === id);

  if (dataItem) {
    dataItem[propertyName] = value;
  } else {
    dataArray.push({ id: id, [propertyName] : value});
  }
}
