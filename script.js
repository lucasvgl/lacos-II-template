const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// for (let i=0; i<=filmes.length; i++){
//   console.log(`${filmes[i].titulo}de ${filmes[i].ano}dirigido por ${filmes[i].diretor}`)
//     for (let j of filmes[i].elenco){
//       console.log(`Elenco: ${j}`)
//     }
// }



for (let i in filmes){
  console.log(`${filmes[i].titulo}de ${filmes[i].ano}dirigido por ${filmes[i].diretor}`)
    for (let j of filmes[i].elenco){
      console.log(`Elenco: ${j}`)
    }
}
// escreva seu código abaixo 👇🏻