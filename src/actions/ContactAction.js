import { CREATE_CONTACT, UPDATE_CONTACT }   from '../constant/types';
import { EDIT_CONTACT }   from '../constant/types';


//actions
export const addContact = (contact) =>({
    type: CREATE_CONTACT,
    payload : contact
});


export const editContact = (id) => ({
    type: EDIT_CONTACT,
    payload : id
});

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload : contact
})



//rxa