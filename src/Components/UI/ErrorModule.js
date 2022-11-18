import React from 'react';
import Button from './Button';
import Cart from './Cart';
import './ErrorModule.css';

const ErrorModule = (props) => {
    return (
        <div>
            <div className='backdrop ' onClick={props.errorHandle} />
            <div className='modal'>
                <Cart >
                    <header className='header'>
                        <h2>{props.title}</h2>
                    </header>
                    <div className='content'>
                        <p>{props.message}</p>
                    </div>
                    <footer className='actions'>
                        <Button onClick={props.errorHandle}>Okay</Button>
                    </footer>
                </Cart>
            </div>
        </div>
    );
};

export default ErrorModule;