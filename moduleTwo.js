(function (module, window, document, undefined) {
  
  module.init = function(){
    console.log("moduleOne.log");
    moduleOne.log();
    console.log("moduleOne.logVariables");
    moduleOne.logVariables();
    console.log("logModuleOneVariables");
    logModuleOneVariables();
  }

  function logModuleOneVariables(){
    console.log("moduleOne.globalVar", moduleOne.globalVar);
    console.log("moduleOne.privateToGlobal", moduleOne.privateToGlobal);
  }
  
})((window.moduleTwo = {}), window, document);

