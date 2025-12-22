import { useEffect } from 'react';

type UseOutsideClickCloseParams<T extends HTMLElement> = {
  isOpen: boolean;
  rootRef: React.RefObject<T | null>;
  onClose: () => void;
};

/**
 * 모달/드롭다운 바깥 영역 클릭 시 닫기 전용 훅
 * - isOpen=true일 때만 document mousedown 리스너 등록
 * - rootRef 영역 밖을 클릭하면 onClose 호출
 */
export const useOutsideClose = <T extends HTMLElement>({
  isOpen,
  rootRef,
  onClose,
}: UseOutsideClickCloseParams<T>) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleDown = (e: MouseEvent) => {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && !root.contains(e.target)) onClose();
    };

    document.addEventListener('mousedown', handleDown);
    return () => {
      document.removeEventListener('mousedown', handleDown);
    };
  }, [isOpen, rootRef, onClose]);
};
