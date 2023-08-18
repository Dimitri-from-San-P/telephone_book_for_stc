import React, { useContext, useState } from 'react';
import stateContext from '../reducer/context';
import './UpdateContact.css';
import { Contact } from '../types/types';

function UpdateContact({
  isUpdateContactWindowOpen,
  closeUpdateWindow,
  row,
}: {
  isUpdateContactWindowOpen: boolean;
  closeUpdateWindow: () => void;
  row: Contact | null;
}): JSX.Element | null {
  const { dispatch } = useContext(stateContext);

  const [newNameInput, setNewNameInput] = useState(row ? row.name : '');
  const [newPhoneInput, setNewPhoneInput] = useState(row ? row.phone || '' : '');
  const [newEmailInput, setNewEmailInput] = useState(row ? row.email || '' : '');
  const [newAddressInput, setNewAddressInput] = useState(row ? row.address || '' : '');
  const [showError, setShowError] = useState(false);
  const [showPhoneHint, setShowPhoneHint] = useState(false);

  const updateName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewNameInput(event.target.value);
  };

  const updatePhone: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewPhoneInput(event.target.value);
  };

  const updateEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewEmailInput(event.target.value);
  };

  const updateAddress: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNewAddressInput(event.target.value);
  };

  const showHint = (): void => {
    setShowPhoneHint(true);
  };

  const hideHint = (): void => {
    setShowPhoneHint(false);
  };

  const handleOverPhoneInput = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      hideHint();
    }
  };

  const contactUpdateSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (newNameInput && row) {
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: {
          id: row?.id,
          name: newNameInput,
          phone: newPhoneInput || '',
          address: newAddressInput || '',
          email: newEmailInput || '',
        },
      });
    } else {
      setShowError(true);
    }
  };

  if (!isUpdateContactWindowOpen) return null;

  return (
    <div className="addContact-overlay">
      <div className="addContact-window" onClick={handleOverPhoneInput}>
        <h3>Редактировать пользователя</h3>
        <form onSubmit={contactUpdateSubmit} className="addForm">
          <input
            onClick={handleOverPhoneInput}
            value={newNameInput}
            onChange={updateName}
            type="text"
            placeholder="Имя"
            className="addFormInput"
          />
          <input
            onClick={showHint}
            value={newPhoneInput}
            onChange={updatePhone}
            type="tel"
            placeholder="Номер"
            pattern="^\+7\s[0-9]{3}\s[0-9]{2}-[0-9]{2}-[0-9]{2}$"
            className="addFormInput"
          />
          {showPhoneHint ? <p>Номер записывается в формате +7 *** **-**-**</p> : null}
          <input
            onClick={handleOverPhoneInput}
            value={newEmailInput}
            onChange={updateEmail}
            type="email"
            placeholder="Электронная почта"
            className="addFormInput"
          />
          <input
            onClick={handleOverPhoneInput}
            value={newAddressInput}
            onChange={updateAddress}
            type="text"
            placeholder="Адрес"
            className="addFormInput"
          />
          <div className="twoButtons">
            <button type="submit" className="btn">
              Сохранить
            </button>
            <button type="button" onClick={closeUpdateWindow} className="btn">
              Отмена
            </button>
          </div>
        </form>
        {showError && <div style={{ fontSize: '15px' }}>Поле "Имя" не ложно быть пустым!</div>}
      </div>
    </div>
  );
}

export default UpdateContact;
