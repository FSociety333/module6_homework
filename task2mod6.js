let i = 2; 
const dividers = [i]; 
function st(n){
  const next = dividers.find(d => d > n);
  if(next) return next;
  while(dividers[dividers.length - 1] <= n) { 
  if(dividers.every(d => i%d)){ 
     diders.push(i); 
    }
    i++; 
  }
  return dividers[dividers.length - 1]; 
}

calc.onclick = () => res.value = st(inp.value);