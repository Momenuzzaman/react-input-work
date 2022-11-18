import React, { useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import Button from '../UI/Button';
import Cart from '../UI/Cart';
import ErrorModule from '../UI/ErrorModule';
import './AddUser.css';
const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
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
        setEnteredName('');
        setEnteredAge('');
    };

    const handleChangeName = (event) => {
        setEnteredName(event.target.value);
    };
    const handleChangeAge = (event) => {
        setEnteredAge(event.target.value);
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
                    <input id="userName" type="text" value={enteredName} name="userName" onChange={handleChangeName}></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} name="age" onChange={handleChangeAge}></input>
                    <Button type="submit">AddUser</Button>
                </form>
            </Cart>
        </Wrapper>
    );
};

export default AddUser;