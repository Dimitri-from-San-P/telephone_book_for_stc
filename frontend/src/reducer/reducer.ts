import { Action } from '../types/Actions';
import { State } from '../types/types';
import mockData from '../Table/mockData.json';

export const init: State = {
  contactsArr: mockData,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactsArr: [
          ...state.contactsArr,
          {
            id: action.payload.id,
            name: action.payload.name,
            phone: action.payload.phone,
            address: action.payload.address,
            email: action.payload.email,
          },
        ],
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contactsArr: state.contactsArr.map((contact) =>
          contact.id === action.payload.id
            ? {
                ...contact,
                name: action.payload.name,
                phone: action.payload.phone,
                address: action.payload.address,
                email: action.payload.email,
              }
            : contact
        ),
      };
    case 'SORT_CONTACTS':
      return {
        ...state,
        contactsArr: [...state.contactsArr].sort((a, b) => a.name.localeCompare(b.name)),
      };
    case 'SEARCH_CONTACT':
      return {
        ...state,
        contactsArr: state.contactsArr.filter(
          (contact) =>
            contact.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            contact.address?.toLowerCase().includes(action.payload.toLowerCase()) ||
            contact.email?.toLowerCase().includes(action.payload.toLowerCase()) ||
            contact.phone?.includes(action.payload.toLowerCase())
        ),
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contactsArr: state.contactsArr.filter((contact) => contact.id !== action.payload),
      };
  }
  return state;
};
