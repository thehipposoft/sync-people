import { useState, useRef } from "react";
import { uploadMedia } from "@/lib/protected-api";
import Modal from "./Modal";

type UploadFileModalProps = {
    isOpen: boolean;
    modalTitle: string;
    handleCancelClick: () => void;
    handleUploadClick: (fileId: string, name: string, file_url: string, expiry_date?:string) => void;
};

const UploadFileModal = ({
    isOpen,
    modalTitle,
    handleCancelClick,
    handleUploadClick,
}:UploadFileModalProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [certificateToUpload, setCertificateToUpload] = useState<File | null>(null);
    const [certificateName, setCertificateName] = useState<string>('');
    const [certificateExpiryDate, setCertificateExpiryDate] = useState<string>('');
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);

    const handleUploadCertificate = async () => {
        setIsAPILoading(true);
        const formData = new FormData();
        formData.append("file", certificateToUpload as File);
        formData.append("title", "Profile Picture");
        formData.append("alt_text", "Profile Image");
        formData.append("status", "publish");

        const uploadResponse = await uploadMedia(formData);

        if (uploadResponse) {
            setCertificateToUpload(null);
            setCertificateName('');
            setCertificateExpiryDate('');
            setIsAPILoading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            handleUploadClick(uploadResponse.id, certificateName, uploadResponse.url, certificateExpiryDate);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleCancelClick}
        >
            <h4 className="mb-3">
                {modalTitle}
            </h4>
            <input
                type='text'
                placeholder='File name'
                value={certificateName}
                onChange={(e) => setCertificateName(e.target.value)}
                className="mb-3"
            />
             <div className='w-full my-3'>
                <label htmlFor={`certificate_expiry_date`} className="block pb-2">
                    Expiry date
                </label>
                <input
                    name='certificate_expiry_date'
                    type='date'
                    value={certificateExpiryDate}
                    onChange={(e) => setCertificateExpiryDate(e.target.value)}
                    className="mb-3"
                />
            </div>
            <input
                type='file'
                ref={fileInputRef}
                className="border-none"
                accept='.pdf, .doc, .docx'
                onChange={(e) => {
                    if (!e.target.files) return;

                    setCertificateToUpload(e.target.files[0]);
                }}
            />
            <div className="flex gap-4 mt-4">
                <button
                    className="secondary-btn"
                    onClick={() => {
                        setCertificateToUpload(null);
                        setCertificateName('');
                        if (fileInputRef.current) {
                            fileInputRef.current.value = '';
                        }
                        handleCancelClick();
                    }}
                    disabled={isAPILoading}
                >
                    Cancel
                </button>
                <button
                    className="primary-btn"
                    onClick={() => handleUploadCertificate()}
                    disabled={isAPILoading}
                >
                    Upload
                </button>
            </div>
        </Modal>
    );
};

export default UploadFileModal;
