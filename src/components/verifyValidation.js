export default function verifyValidation(props) {
    const { name, email, description, image } = props;
    const verifyIsNotEmpty = () => {
        if (name && image &&  description  && email) return true;
        return false;
    };

    const verifyIsValidEmail = () => { 
        return (email.includes('@'));
    };

    const ableButton = verifyIsNotEmpty() && verifyIsValidEmail();
    return !ableButton;
}