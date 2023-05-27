
const validation = (userData) => {
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'invalid email :(';
    }
    if(!userData.email){ // userData.email.length === ''
        errors.email = 'must enter an email';
    }
    if(userData.email.length > 35){
        errors.email = 'email must not exceed 35 caracters'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'password must contain at least a number'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'password must contain between 6 to 10 caracters'
    }

    return errors;
}

export default validation;