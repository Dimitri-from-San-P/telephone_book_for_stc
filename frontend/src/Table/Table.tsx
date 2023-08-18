import React, { useContext, useEffect, useState } from 'react';
import tableConfig from './tableConfig.json';
import stateContext from '../reducer/context';
import { Contact, IdContact, TableConfig } from '../types/types';
import ModalPanel from '../ModalPanel/ModalPanel';
import './Table.css';
import AddContact from '../AddContact/AddContact';
import UpdateContact from '../UpdateContact/UpdateContact';
import MenuIcon from '../Icons/MenuIcon.svg';
import InfoContact from '../InfoContact/InfoContact';

function Table(): JSX.Element {
  const columnsArr = tableConfig.columns;
  const { state, dispatch } = useContext(stateContext);
  const [modalPanelOpen, setModalPanelOpen] = useState(false);
  const [addContactOpen, setAddContactOpen] = useState(false);
  const [updateContactOpen, setUpdateContactOpen] = useState(false);
  const [rowUpdateContact, setRowUpdateContact] = useState<Contact | null>(null);
  const [infoContactOpen, setInfoContactOpen] = useState(false);
  const [isEditingMode, setIsEditingMode] = useState(true);

  const openModalPanel = (): void => {
    setModalPanelOpen(true);
  };

  const closeModalPanel = (): void => {
    setModalPanelOpen(false);
  };

  const openAddContactWindow = (): void => {
    setAddContactOpen(true);
    setModalPanelOpen(false);
  };

  const closeAddContactWindow = (): void => {
    setAddContactOpen(false);
  };

  const openUpdateWindow = (row: Contact): void => {
    setUpdateContactOpen(true);
    setRowUpdateContact(row);
  };

  const closeUpdateWindow = (): void => {
    setUpdateContactOpen(false);
    setRowUpdateContact(null);
  };

  const sortContacts = (): void => {
    dispatch({ type: 'SORT_CONTACTS' });
  };

  const openInfoWindow = (row: Contact): void => {
    setInfoContactOpen(true);
    setRowUpdateContact(row);
  };

  const closeInfoWindow = (): void => {
    setInfoContactOpen(false);
    setRowUpdateContact(null);
  };

  const handleEditButtonClick = (event: React.MouseEvent, row: Contact): void => {
    event.stopPropagation();
    openUpdateWindow(row);
  };

  const handleRowClick = (event: React.MouseEvent, row: Contact): void => {
    if (!event.target || !(event.target as HTMLElement).classList.contains('updateBtn')) {
      openInfoWindow(row);
    }
  };

  const handleDeleteButtonClick = (event: React.MouseEvent, row: IdContact): void => {
    event.stopPropagation();
    dispatch({ type: 'DELETE_CONTACT', payload: row });
  };

  return (
    <div>
      <ModalPanel
        isPanelOpen={modalPanelOpen}
        closeModalPanel={closeModalPanel}
        openAddContactWindow={openAddContactWindow}
        toggleEditingMode={() => setIsEditingMode(!isEditingMode)}
      />
      <AddContact
        isAddContactWindowOpen={addContactOpen}
        closeAddContactWindow={closeAddContactWindow}
      />
      <UpdateContact
        isUpdateContactWindowOpen={updateContactOpen}
        closeUpdateWindow={closeUpdateWindow}
        row={rowUpdateContact}
      />
      <InfoContact
        isInfoContactWindowOpen={infoContactOpen}
        closeInfoWindow={closeInfoWindow}
        row={rowUpdateContact}
      />
      <table>
        <thead>
          <tr>
            {columnsArr.map((column: TableConfig, index: number) =>
              index === 0 ? (
                <th key={column.dataField}>
                  <button type="button" onClick={openModalPanel} className="buttonMenu">
                    <img src={MenuIcon} alt="Menu Icon" />
                  </button>
                </th>
              ) : (
                <th key={column.dataField} onClick={sortContacts}>
                  {column.caption}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {state.contactsArr.map((row: Contact) => (
            <tr key={row.id} onClick={(event) => handleRowClick(event, row)}>
              {columnsArr.map((column: TableConfig) => (
                <td key={column.caption}>{row[column.dataField as keyof Contact]}</td>
              ))}
              <td>
                {isEditingMode ? (
                  <button
                    type="button"
                    onClick={(event) => handleEditButtonClick(event, row)}
                    className="updateBtn"
                  >
                    Редактировать
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={(event) => handleDeleteButtonClick(event, row.id)}
                    className="updateBtn"
                  >
                    Удалить
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
