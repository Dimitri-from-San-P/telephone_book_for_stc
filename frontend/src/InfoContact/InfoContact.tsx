import React from 'react';
import { Contact } from '../types/types';
import './InfoContact.css';

function InfoContact({
  isInfoContactWindowOpen,
  closeInfoWindow,
  row,
}: {
  isInfoContactWindowOpen: boolean;
  closeInfoWindow: () => void;
  row: Contact | null;
}): JSX.Element | null {
  if (!isInfoContactWindowOpen) return null;
  return (
    <div className="infoContact-overlay">
      <div className="infoContact-window">
        <h3>Информация о пользователе</h3>
        <h4>Имя: {row?.name}</h4>
        <h4>Телефон: {row?.phone}</h4>
        <h4> Электронная почта: {row?.email}</h4>
        <h4>Адрес: {row?.address}</h4>
        <button type="button" onClick={closeInfoWindow} className="btn">
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default InfoContact;
