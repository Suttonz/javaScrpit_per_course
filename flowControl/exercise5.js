return foo() ? 'bar' : qux();
//Refactor the statement above

if(foo()){
 return 'bar';
}else{
 return qux();
}



