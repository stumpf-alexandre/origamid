// fetch (sintaxe antiga)
fetch('https://68214d9a259dad2655aee5bc.mockapi.io/api/heroes')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
});

//async await (sintaxe nova)
async function fetchHeroes(url) {
  const response = await fetch(url);
  const json = await response.json();
  console.log(json);
  return json;
}

fetchHeroes('https://68214d9a259dad2655aee5bc.mockapi.io/api/heroes');
