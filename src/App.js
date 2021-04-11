import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import form from './form'


// 👉 the shape of the state that drives the form
const initialFormValues = {
 
  username: '',
  email: '',
  role: '',
}

function Member({details}) {
  if (!details) {
    return <h3>Working fetching your team Members&apos;s details...</h3>
  }


  return (
    <div className='member container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}




function App() {


  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);


  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  };


  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
  }


  return (
    <div className="App">
        <Teamform
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {members.map((member) => {
        return <Member key={member.id} details={member} />
      })}
    </div>
  );
}


export default App;