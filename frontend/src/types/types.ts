export type Contact = {
  id: number;
  photo?: string;
  name: string;
  phone?: string;
  address?: string;
  email?: string;
};

export type IdContact = Contact['id'];

export type State = {
  contactsArr: Contact[];
};

export type TableConfig = {
  dataField: string;
  caption: string;
  dataType: string;
};
