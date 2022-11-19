import React, { useRef, useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Cart from '../UI/Cart';
import ErrorModule from '../UI/ErrorModule';
import './AddUser.css';

const AddUser = (props) => {
    const [error, setError] = useState();
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length == 0 || enteredAge.trim().length == 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)"
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)"
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandle = () => {
        setError(null);
    };
    return (
        <Wrapper>
            {error && <ErrorModule title={error.title} message={error.message} errorHandle={errorHandle} />}
            <Cart>
                <form className='user' onSubmit={addUserHandler}>
                    <label htmlFor="userName">Username</label>
                    <input id="userName" type="text" name="userName" ref={nameInputRef}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id="age" type="number" name="age" ref={ageInputRef}></input>
                    <Button type="submit">AddUser</Button>
                </form>
            </Cart>
        </Wrapper>
    );
};

export default AddUser;