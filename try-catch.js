function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');
    try{
 const age = parseInt(ageText);
 if(isNaN(age)){
    console.log('age not found', age, ageText);
 }
    }
    catch(err){
        console.log('ERROR:', err);
        errorTag.innerText = 'Something Wrong';

    }

    finally{
        console.log('All Done try catch');
    }
    
}