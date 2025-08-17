import React, { useEffect, useRef } from "react";

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose?: () => void;
};

const Modal = ({
    children,
    isOpen,
    onClose,
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
            className="border-2 lg:px-12 px-8 lg:py-12 py-8 fixed z-10 overflow-hidden rounded-xl border-transparent"
        >
            <svg
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="absolute top-4 right-4 cursor-pointer text-primary"
                width={24}
                height={24}
                onClick={onClose}
            >
                <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="currentColor">
                    </path>
                </g>
            </svg>
            <div className="pt-4">
                {children}
            </div>
        </dialog>
    )
};

export default Modal;
