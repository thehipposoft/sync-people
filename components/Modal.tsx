import React, { useEffect, useRef } from "react";

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
};

const Modal = ({
    children,
    isOpen,
}:ModalProps) => {
    const modalRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        const modal = modalRef.current;
        if (!modal) return;

        if (isOpen) {
            modal.showModal();
            document.body.style.overflow = 'hidden';
        } else {
            modal.close();
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <dialog
            ref={modalRef}
            className="border-2 p-7 fixed z-10 overflow-hidden rounded-xl border-purple"
        >
            {children}
        </dialog>
    )
};

export default Modal;
