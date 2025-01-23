export function parseData(pair, dataArray) {
  const id = pair[0].split("$")[0];
  const propertyName = pair[0].split("$")[1];
  const value = pair[1];
  const dataItem = dataArray.find((item) => item.id === id);

  if (dataItem) {
    propertyName === "bullets" ? dataItem[propertyName] = splitBulletPoints(value) : dataItem[propertyName] = value;
  } else {
    dataArray.push({ id: id, [propertyName] : value});
  }
}

function splitBulletPoints(bulletsString) {
  let bulletsArray = bulletsString.split("#");
  bulletsArray.shift();

  bulletsArray = bulletsArray.map((string) => {
    let transFromedString = string.trim();

    return {bulletId : crypto.randomUUID(), value : transFromedString}
  })

  return bulletsArray;
}

export function createSubmitHandler(setStateFunction) {
  return(function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newData = [];

    for (let pair of formData) {
      parseData(pair, newData);
    }

    setStateFunction([...newData])
  })
}