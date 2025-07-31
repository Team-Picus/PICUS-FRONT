import { useCallback, useRef, useState } from 'react';

export const useModal = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const onModal = useCallback(() => setIsModalOn(true), []);
  const offModal = useCallback(() => setIsModalOn(false), []);

  const toggleModal = () => {
    setIsModalOn((prev) => !prev);
  };

  return { isModalOn, toggleModal, modalRef, offModal, onModal };
};
