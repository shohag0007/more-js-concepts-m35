function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
 const age = parseInt(ageText);
 if(isNaN(age)){
    throw "Please enter a number";
 }
 else if (age < 18){
   throw "You are not allowed";
 }
 else if(age > 30){
    throw "You are not allow here";
 }
 errorTag.innerHTML = '';
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerHTML = 'ERROR:' + err;

    }

    finally{
        console.log('All Done try catch');
    }
    
}