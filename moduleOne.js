(function (module, window, document, undefined) {
  //global variables
  module.globalVar = "Hello"; 
  //can be accessed by moduleOne.globalVar inside the window
  //can only be accessed by module.globalVar inside this script 
  module.privateToGlobal = privateVar; 
  //can be accessed by moduleOne.privateToGlobal inside the window
  //can be accessed by module.privateToGlobal and privateVar inside this script 
  
  //private variables
  var privateVar = "World";
    
  //global functions
  module.init = function(){
    logVariables();
  }
  
  module.log = function(){
    console.log("Hello World");
  } 
  //can be accessed by moduleOne.log() inside the window
  //can only be accessed by module.log() inside this script 
  
  module.logVariables = logVariables; 
  //can be accessed by moduleOne.logVariables() inside the window
  //can be accessed by module.logVariables() and logVariables() inside this script 
  
  //private functions 
  function logVariables(){
    console.log("globalVar", module.globalVar);
    console.log("globalVar", moduleOne.globalVar);
    console.log("privateVar", privateVar);
  }
})((window.moduleOne = {}), window, document);
