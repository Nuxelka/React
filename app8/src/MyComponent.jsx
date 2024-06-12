import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isE, setIsE] = useState(false);

    const updateName = () => {
        setName('SpongeBob');
    }
    const updateAge = () => {
        setAge(age+1);
    }
    const toggleE = () => {
        setIsE(!isE);
    }

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={updateAge}>Set Age</button>

                <p>Is Employed: {isE ? 'Yes' : 'No'}</p>
                <button onClick={toggleE}>Set Status</button>
            </div>);
}

export default MyComponent;