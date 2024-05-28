const fetchVulpixData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/vulpix");

  const data = await response.json();

  console.log(data.name);

  return data;
};

fetchVulpixData();
