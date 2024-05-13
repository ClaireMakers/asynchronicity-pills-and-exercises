const promiseToCountSheep = new Promise((resolve, reject) => {
  const fulfilled = false;
  
  const sheep = ["Bramble", "Daffodil", "Buttercup"];

  if (fulfilled) {
    resolve(sheep);
  } else {
    reject("Did not find any sheep!");
  }
})
  .then((sheepData) => {
    return sheepData.length;
  })
  .then((sheepCount) => {
    console.log(sheepCount);
  })
  .catch((errorStr) => {
    console.log(errorStr);
  });
