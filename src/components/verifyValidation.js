export default function verifyValidation(props) {
  const { name, email, description, image } = props;
  const verifyIsNotEmpty = () => {
    if (name && image && description && email) return true;
    return false;
  };

  const verifyIsValidEmail = () => (email.includes('@') && email.includes('.com'));

  const ableButton = verifyIsNotEmpty() && verifyIsValidEmail();
  return !ableButton;
}
