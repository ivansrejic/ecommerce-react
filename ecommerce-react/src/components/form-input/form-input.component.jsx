import React from "react";
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? 
            (<label className={`${otherProps.value.lenght ? 'shrink' : ''} form-input-label `}>
                {label}
            </label>)
            : null
            // Moze labela, a i ne mora. Ako nam treba FormInput bez labele, mozemo da koristimo ovu componentu
        }
    </div>
)

export default FormInput;