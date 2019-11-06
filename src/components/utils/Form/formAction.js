export const validate = (element, formdata = []) => {   //retruning and array
    let error = [true,'']; //by deafaul if true no error msg 

    //  
    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value)
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.confirm){
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';                //triming the actuall value of element
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message] : error;    //if not valid send valid msg if not send default error on top
    }

    return error
}



export const update = (element, formdata, formName ) => {
    //grab formdata and mutate it
    const newFormdata = {
        ...formdata
    }

    const newElement = {
        //putting inside element.id
        ...newFormdata[element.id]
    }
//newEWlement has new value
    newElement.value = element.event.target.value;
//
    if(element.blur){
        let validData = validate(newElement,formdata);  //checking wat to validate
        newElement.valid = validData[0];                 //validata retruning an array
        newElement.validationMessage = validData[1];
    }

    newElement.touched = element.blur;     //newElment.touch is equal to whatever element we get from blur which is true
    newFormdata[element.id] = newElement;  //putting newElement inside newFormdata

    return newFormdata;
}

export const generateData = (formdata, formName) =>{
    let dataToSubmit = {};

    for(let key in formdata){
        if(key !== 'confirmPassword'){
            dataToSubmit[key] = formdata[key].value;
        }
    }

    return dataToSubmit;
}

export const isFormValid = (formdata, formName) => {
    let formIsValid = true;

    for(let key in formdata){
        formIsValid = formdata[key].valid && formIsValid
    }
    return formIsValid;
}

