import { CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT,SELECT_CONTACT,CLEAR_CONTACT, DELETE_SELECTED_CONTACT }   from '../constant/types';
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
});

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload : id
});

export const selectContactAll = (id) => ({
    type: SELECT_CONTACT,
    payload : id
});

export const clearAllContact = () => ({
    type: CLEAR_CONTACT,
})

export const deleteSelectedContact = () => ({
    type: DELETE_SELECTED_CONTACT,
    
})






//rxa