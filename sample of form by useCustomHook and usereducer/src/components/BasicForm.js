
import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

  const { value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameameChangedHandler,
    inputBlurHandler: firtNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(isNotEmpty)


  const { value: enteredLastName,
    isValid: lastNameIsValid,
     hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty)

  const { value: enteredEmail,
    isValid: emailIsValid,
     hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(isEmail)

   let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }


  const submitform = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(enteredFirstName,enteredLastName,enteredEmail);
    resetFirstNameInput()
    resetLastNameInput()
    resetEmailInput()
  }

    const firstNameInputClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';
   const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';


  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitform}>
      <div className='control-group'>
        <div className= {firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameameChangedHandler} value={enteredFirstName}
            onBlur={firtNameBlurHandler} />
          {firstNameInputHasError && (
          <p className='error-text'>firstName must not be empty.</p>
        )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameChangedHandler} value={enteredLastName}
            onBlur={lastNameBlurHandler} />
          {lastNameInputHasError && (
          <p className='error-text'>lastName must not be empty.</p>
        )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailChangedHandler} value={enteredEmail}
          onBlur={emailBlurHandler} />
        {emailInputHasError && (
          <p className='error-text'>Email must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
