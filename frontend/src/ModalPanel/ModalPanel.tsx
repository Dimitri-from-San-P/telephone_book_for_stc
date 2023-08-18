import React from 'react';
import './ModalPanel.css';

function ModalPanel({
  isPanelOpen,
  closeModalPanel,
  openAddContactWindow,
  toggleEditingMode,
}: {
  isPanelOpen: boolean;
  closeModalPanel: () => void;
  openAddContactWindow: () => void;
  toggleEditingMode: () => void;
}): JSX.Element | null {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (event.target === event.currentTarget) {
      closeModalPanel();
    }
  };

  const changeToDeleteMode = (): void => {
    toggleEditingMode();
  };

  if (!isPanelOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="block block-top" onClick={openAddContactWindow}>
          <div className="icon icon-top">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="filled filled-top"
                d="M28.9998 27.3334C24.5498 27.3334 15.6665 29.5501 15.6665 34.0001V37.3334H42.3332V34.0001C42.3332 29.5501 33.4498 27.3334 28.9998 27.3334ZM13.9998 20.6667V15.6667H10.6665V20.6667H5.6665V24.0001H10.6665V29.0001H13.9998V24.0001H18.9998V20.6667H13.9998ZM28.9998 24.0001C30.7679 24.0001 32.4636 23.2977 33.7139 22.0475C34.9641 20.7972 35.6665 19.1015 35.6665 17.3334C35.6665 15.5653 34.9641 13.8696 33.7139 12.6194C32.4636 11.3691 30.7679 10.6667 28.9998 10.6667C27.2317 10.6667 25.536 11.3691 24.2858 12.6194C23.0355 13.8696 22.3332 15.5653 22.3332 17.3334C22.3332 19.1015 23.0355 20.7972 24.2858 22.0475C25.536 23.2977 27.2317 24.0001 28.9998 24.0001Z"
              />
            </svg>
            <p>Добавить пользователя</p>
          </div>
          <div className="segment segment-top" />
        </div>
        <div className="block block-left">
          <div className="icon icon-left">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="filled filled-left"
                d="M35.72 36L37.8 38C35 40.4 29.88 42 24 42C15.18 42 8 38.42 8 34V14C8 9.58 15.16 6 24 6C29.9 6 35 7.6 37.8 10L35.72 12L35 12.8C33.3 11.54 29.56 10 24 10C16.26 10 12 13 12 14C12 15 16.26 18 24 18C26.74 18 29 17.62 30.84 17.08L32.76 19H27V21.84C26 21.94 25 22 24 22C19.22 22 14.94 20.94 12 19.28V24.9C14.6 26.8 19.16 28 24 28C25 28 26 27.94 27 27.84V29H32.76L30.76 31L31 31.22C28.82 31.72 26.48 32 24 32C19.44 32 15.22 31.1 12 29.54V34C12 35 16.26 38 24 38C29.56 38 33.3 36.46 35 35.22L35.72 36ZM37.84 14.16L35 17L40 22H30V26H40L35 31L37.84 33.84L47.68 24L37.84 14.16Z"
              />
            </svg>
            <p>Экспортировать контакты</p>
          </div>
          <div className="segment segment-left" />
        </div>
        <div className="block block-right">
          <div className="icon icon-right">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="filled filled-right"
                d="M17.68 24L7.84 33.84L5 31L10 26H0V22H10L5 17L7.84 14.16L17.68 24ZM24 6C17.18 6 11.36 8.14 9.06 11.14L10 12L12.06 14.14C12 14.1 12 14 12 14C12 13 16.26 10 24 10C31.74 10 36 13 36 14C36 15 31.74 18 24 18C18.76 18 15.16 16.62 13.36 15.44L19.6 21.68C21 21.88 22.48 22 24 22C28.78 22 33.06 20.94 36 19.28V24.9C33.4 26.8 28.84 28 24 28C22.08 28 20.2 27.8 18.48 27.46L15.18 30.74C17.82 31.54 20.82 32 24 32C28.56 32 32.78 31.1 36 29.54V34C36 35 31.74 38 24 38C16.26 38 12 35 12 34V33.92L10 36L9.08 36.86C11.38 39.86 17.2 42 24 42C32.82 42 40 38.42 40 34V14C40 9.58 32.84 6 24 6Z"
              />
            </svg>
            <p>Импортировать контакты</p>
          </div>
          <div className="segment segment-right" />
        </div>
        <div className="block block-bottom" onClick={changeToDeleteMode}>
          <div className="icon icon-bottom">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="filled filled-bottom"
                d="M38.5167 15.7333C39.1667 15.0833 39.1667 14 38.5167 13.3833L34.6167 9.48335C34 8.83335 32.9167 8.83335 32.2667 9.48335L29.2 12.5333L35.45 18.7833L38.5167 15.7333ZM9 32.75V39H15.25L33.6833 20.55L27.4333 14.3L9 32.75Z"
                fill="#273B69"
              />
            </svg>
            <p>Редактировать список</p>
          </div>
          <div className="segment segment-bottom" />
        </div>
      </div>
    </div>
  );
}

export default ModalPanel;
