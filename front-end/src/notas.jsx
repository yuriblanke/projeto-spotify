// rafce cria uma arrow function neste modelo:

import React from "react";

const Notas = () => {
  return <div>Notas</div>;
};

export default Notas;

// Nomeação de Componente
// PascalCase

// Nomeação de variável, função...
// camelCase (primeira minúscula)

// Nomeação de classes
// kebab-case (com hífen)

// export default: posso importar com qualquer nome e sem chaves
// export "sem default": só posso importar com o nome entre chaves e com o nome exportado

// self-closing tag
// <header></header> = <header />

// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements (não é um componente, mas faz parte de um bloco)
// Modifiers
// bloco__elemento--modificador
// ex.:
// header
// header__link
// header__link--small
// Nomes compostos são separados por -
// ex: item-list__header

// Tag vazia em react <></> = fragment

// Componentes recebem "props" como argumento

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}

// Spread operator
// {...props}
// passa todas as props para o componente

// Quando componentes se re-renderizam
// Uma das ocasiões é quando uma variável de estado usada por este componente é atualizada
// Hook - useState
