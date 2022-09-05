const pokemon1 = {
  nome: "Bulbasaur",
  tipo: "Grama",
  nivel: 5,
};

const copiapokemon1 = {
  ...pokemon1,
  nome: "Squirtle",
  tipo: "Água",
  nivel: 5,
  ataques: [
    {
      nome: "Investida",
      dano: 40,
      tipoe: "Normal",
      precisao: 100,
    },
  ],
};

pokemon1.ataques = [];

pokemon1.ataques.push({
  nome: "Investida",
  dano: 40,
  tipoe: "Normal",
  precisao: 100,
});

pokemon1.ataques.push({
  nome: "Folha Navalha",
  dano: 45,
  tipoe: "Grama",
  precisao: 100,
});

copiapokemon1.ataques.push({
  nome: "Jato de Água",
  dano: 40,
  tipoe: "Água",
  precisao: 100,
});

console.log(pokemon1);
console.log(copiapokemon1);
