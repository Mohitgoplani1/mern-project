/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { validate } from '../../utils/validators';

const inputReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators),
                isTouched: true,
            };
            case 'TOUCH':
                return {
                    ...state,
                    isTouched: true,
                };
        default:
            return state;
    }
};

const Input = props => {
    console.log('Input component called ' + new Date())
    const [inputState, dispatch] = useReducer(inputReducer, { 
        value: props.initialValue || '', 
        isValid: props.initialIsValid || false,
        isTouched: false,
    });
    console.log(inputState);
    const { id, onInput } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);
    
    const changeHandler = event => {
        console.log('change hander called ' + new Date())
        dispatch({type: 'CHANGE', val: event.target.value, validators: props.validators});
    };
    console.log('changeHander', {changeHandler});
    const touchHandler = event => {
        dispatch({type: 'TOUCH', val: event.target.value});
    };
    const element = props.element === 'input' ? (
    <input 
        id={props.id} 
        type={props.type} 
        placeholder={props.placeholder} 
        className={`block text-gray-700 text-sm font-bold mb-2 ${!inputState.isValid && inputState.isTouched && "border-red-500"}`}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
    />
    ) : (
    <textarea  
        id={props.id} 
        rows={props.rows || 3} 
        className="form-input px-4 py-3 rounded"
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
    />
    );

    return (
        <div className="mb-4">
            <label htmlFor={props.id} className="block text-gray-700 text-sm font-bold mb-2">{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p className="text-red-500 italic">{props.errorText}</p>}
        </div>
    );
};

export default Input;