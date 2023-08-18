import { IdContact } from './types';

export type Action =
  | {
      type: 'ADD_CONTACT';
      payload: { id: number; name: string; phone: string; address: string; email: string };
    }
  | {
      type: 'UPDATE_CONTACT';
      payload: { id: number; name: string; phone: string; address: string; email: string };
    }
  | {
      type: 'SORT_CONTACTS';
    }
  | {
      type: 'SEARCH_CONTACT';
      payload: string;
    }
  | {
      type: 'DELETE_CONTACT';
      payload: IdContact;
    };
