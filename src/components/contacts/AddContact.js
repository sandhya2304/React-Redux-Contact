import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/ContactAction';
import  shortid  from 'shortid';
import { useHistory } from 'react-router-dom';


const AddContact = () => {

    let history = useHistory();
    const dispatch  = useDispatch();
    
    const[name,setName] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");


const createContact = e =>{
   e.preventDefault();
   const new_Contact = {
       id:shortid.generate(),
       name: name,
       phone: phone,
       email: email
   }
  dispatch(addContact(new_Contact));
  history.push("/");
}

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
               Add Contact
            </div>

            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" type="submit">Add Contact</button>
                </form>
            </div>
            
        </div>
    )
}

export default AddContact;
