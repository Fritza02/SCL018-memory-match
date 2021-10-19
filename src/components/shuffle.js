const shuffle = (data) => {
  for (let i = data.length - 1; i > 0; i--) { /*28=maggie*/
    let j = Math.floor(Math.random() * (i + 1));/*19=krusty*/
  [data[i], data[j]] = [data[j], data[i]];
  /*i=28  j=19*/ 
  }
  return data;
};
export default shuffle ;
