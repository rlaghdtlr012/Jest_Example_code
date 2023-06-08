async function fetchData() {
  const getString = new Promise((resolve) => {
    resolve("peanut butter");
  })
  const data = await getString;
  return data;
}
module.exports = fetchData;