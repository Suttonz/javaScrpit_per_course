const F00 = 'bar';
{
  const F00 = 'qux';
}

console.log(F00);
// It will output bar,because F00 has being decleared outside the curly brackets
//It means it is outside the block as global variable, console.log will print 
//value bar to the console and F00 inside the block will be ingore since its inside
//the block.