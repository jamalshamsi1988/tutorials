localStorage.setItem("name","Bob");
localStorage.removeItem("name");

sessionStorage.setItem("name","john");
sessionStorage.removeItem("name");

document.cookie="name=Kyle; expires="+new Date(9999,0,1).toUTCString();
document.cookie="lastName=Smith; expires=" + new Date(9999,0,1).toUTCString();

console.log(document.cookie);