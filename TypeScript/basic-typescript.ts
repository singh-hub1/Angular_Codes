// ts -> js this process is known as transpilation
export{}
let greet ="good morining vishal singh";
console.log(greet);
// cannot recdeclare varibale because a file is treated as a script rather than a module ,a module has its own scope where as script share a global scope to overcome this error we need to add export statement at the top which doesn't export anything by adding export/imoport statement typescript treats this file as module instead of a script.