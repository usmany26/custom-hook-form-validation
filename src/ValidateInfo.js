export default function validate (values) { 
    let errors = {}

    if (!values.username) {
        errors.username = 'username required'
    }

    if (!values.email) {
        errors.email = 'email required'
    }
    else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(values.email)) {
        errors.email = 'email address is incorrect'
    }

    if (!values.password) {
        errors.password = 'password is required'
    }
    else if (values.password.length < 6) {
        errors.password = 'password must be greater than 6'
    }

    if (!values.password2) {
        errors.password2 = 'password is requires'
    }
    else if (values.password2 !== values.password) {
        errors.password2 = 'password does not match'
    }

    return errors;

}