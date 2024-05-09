import ReactDOM from 'react-dom';

const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-200/70 z-10 overflow-hidden" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default Backdrop;