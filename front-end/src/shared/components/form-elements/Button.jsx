/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Button = props => {
  if (props.href) {
    return (
      <a
        className={`${props.danger ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'}
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
        rounded focus:outline-none focus:shadow-outline`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className={`${props.danger ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'} 
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
        rounded focus:outline-none focus:shadow-outline`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`${props.danger ? 'bg-red-500 hover:bg-red-700' : 'bg-blue-500 hover:bg-blue-700'} 
      bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
      rounded focus:outline-none focus:shadow-outline ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;