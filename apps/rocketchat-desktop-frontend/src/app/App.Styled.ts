import styled from '@emotion/styled';

export const ApplicationWrapper = styled.div``;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
  column-gap: 20px;
`;

export const Col1 = styled.div`
  display: grid;
`;

export const Col2 = styled.div`
  display: grid;
`;
//   grid-template-areas: "sidebar-wrapper rocketchat-wrapper";

export const AppCols = styled.div`
  grid-template-columns: 100px ;
`;

// /* fr é uma unidade fracional */
// .grid-template-columns-2 {
// 	grid-template-columns: 1fr 2fr;
// }

// /* minmax define um valor mínimo e máximo para a coluna */
// .grid-template-columns-3 {
// 	grid-template-columns: minmax(200px, 1fr) 1fr 1fr;
// }

// /* O repeat vai repetir o número de colunas */
// .grid-template-columns-4 {
// 	grid-template-columns: repeat(3, 1fr);
// }

// /* Auto-fit vai calcular automaticamente o total de colunas */
// .grid-templ