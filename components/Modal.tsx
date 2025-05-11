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
            className="border-2 md:px-20 px-8 md:py-24 py-8 fixed z-10 overflow-hidden rounded-xl border-transparent"
        >
            {children}
        </dialog>
    )
};

export default Modal;
