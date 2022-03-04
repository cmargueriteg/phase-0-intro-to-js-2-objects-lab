const employee = {name:"Hank", streetAddress:"123 Main" }

function updateEmployeeWithKeyAndValue(object, key, value){
        
    const updatedCall = {...object, 
    
      [key]: value}

      return updatedCall
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){

        object[key]= value

        return object
        
    }

    function deleteFromEmployeeByKey(object,key){

        const updatedEmployee = {...deleteFromEmployeeByKey}
        
        delete object.key; 

        return updatedEmployee
    }

    function destructivelyDeleteFromEmployeeByKey(object, key){
      delete object[key];

return object
    }