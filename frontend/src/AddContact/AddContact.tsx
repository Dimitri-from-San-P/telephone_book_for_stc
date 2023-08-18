import React, { useContext, useState } from 'react';
import stateContext from '../reducer/context';
import './AddContact.css';

function AddContact({
  isAddContactWindowOpen,
  closeAddContactWindow,
}: {
  isAddContactWindowOpen: boolean;
  closeAddContactWindow: () => void;
}): JSX.Element | null {
  const { state, dispatch } = useContext(stateContext);

  const [nameInput, setNameInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [showError, setShowError] = useState(false);
  const [showPhoneHint, setShowPhoneHint] = useState(false);

  const addName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setNameInput(event.target.value);
  };

  const addPhone: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPhoneInput(event.target.value);
  };

  const addEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmailInput(event.target.value);
  };

  const addAddress: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setAddressInput(event.target.value);
  };

  const getId = (): any => {
    const allContactsId = [...state.contactsArr];
    allContactsId.sort((a, b) => a.id - b.id);
    const maxNum = allContactsId[allContactsId.length - 1];
    if (maxNum) {
      return maxNum.id;
    }
  };

  const newId = getId();

  const showHint = (): void => {
    setShowPhoneHint(true);
  };

  const hideHint = (): void => {
    setShowPhoneHint(false);
  };

  const contactSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (nameInput) {
      dispatch({
        type: 'ADD_CONTACT',
        payload: {
          id: newId + 1,
          name: nameInput,
          phone: phoneInput,
          address: addressInput,
          email: emailInput,
        },
      });
      closeAddContactWindow();
    } else {
      setShowError(true);
    }
  };

  const handleOverPhoneInput = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      hideHint();
    }
  };

  if (!isAddContactWindowOpen) return null;

  return (
    <div className="addContact-overlay">
      <div className="addContact-window" onClick={handleOverPhoneInput}>
        <h3>Добавить пользователя</h3>
        <form onSubmit={contactSubmit} className="addForm">
          <input
            onClick={handleOverPhoneInput}
            value={nameInput}
            onChange={addName}
            type="text"
            placeholder="Имя"
            className="addFormInput"
          />
          <input
            onClick={showHint}
            value={phoneInput}
            onChange={addPhone}
            type="tel"
            placeholder="Номер"
            pattern="^\+7\s[0-9]{3}\s[0-9]{2}-[0-9]{2}-[0-9]{2}$"
            className="addFormInput"
          />
          {showPhoneHint ? <p>Номер записывается в формате +7 *** **-**-**</p> : null}
          <input
            onClick={handleOverPhoneInput}
            value={emailInput}
            onChange={addEmail}
            type="email"
            placeholder="Электронная почта"
            className="addFormInput"
          />
          <input
            onClick={handleOverPhoneInput}
            value={addressInput}
            onChange={addAddress}
            type="text"
            placeholder="Адрес"
            className="addFormInput"
          />
          <div className="twoButtons">
            <button type="submit" className="btn">
              Сохранить
            </button>
            <button type="button" onClick={closeAddContactWindow} className="btn">
              Отмена
            </button>
          </div>
        </form>
        {showError && <div style={{ fontSize: '15px' }}>Заполните поле "Имя"!</div>}
      </div>
    </div>
  );
}

export default AddContact;
