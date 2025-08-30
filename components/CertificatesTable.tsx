import { useState, useRef } from "react";
import { updateProfile, uploadMedia } from "@/lib/protected-api";
import { CertificateType, IndustriesAvailable, professional_information } from "@/types";
import { format } from "date-fns";
import Modal from "@/components/Modal";

type PropsType = {
    certificates: CertificateType[];
    userId: string;
    industries: professional_information['industries'];
    onLoadCompleted: (certificates: CertificateType[]) => void;
    certificateParent?: 'extras' | 'professional_information';
}

const CertificateTable = ({
    certificates,
    userId,
    industries,
    certificateParent = 'professional_information',
    onLoadCompleted,
}: PropsType) => {
    const [talentCertificates, setTalentCertificates] = useState<CertificateType[]>(certificates || []);
    const [selectedCertificateToRemoveIndex, setSelectedCertificateToRemoveIndex] = useState<number | null>(null);
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    //Modals
    const [openRemoveCertificateModal, setOpenRemoveCertificateModal] = useState<boolean>(false);
    const [openAddEditCertificateModal, setOpenAddEditCertificateModal] = useState<boolean>(false);
    //Add Edit modal
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [editCertificateEnabled, setEditCertificateEnabled] = useState<boolean>(false);
    const [certificateToUpdateIndex, setCertificateToUpdateIndex] = useState<number | null>(null);
    const [certificateName, setCertificateName] = useState<string>('');
    const [certificateExpiryDate, setCertificateExpiryDate] = useState<string>('');
    const [certificateToUpload, setCertificateToUpload] = useState<File | null>(null);
    const [certificateVisibleFor, setCertificateVisibleFor] = useState<IndustriesAvailable[]>([]);
    const [keepFilePrivate, setKeepFilePrivate] = useState<boolean>(true);

    const handleRemoveCertificate = () => {
        //Remove index certificate from Certificates
        if (selectedCertificateToRemoveIndex !== null) {
            const newCertificates = certificates.filter((_, index) => index !== selectedCertificateToRemoveIndex);

            const body = {
                [certificateParent]: {
                    certificates: newCertificates,
                }
            }

            const response = updateProfile(userId, body);

            setIsAPILoading(false);

            setOpenRemoveCertificateModal(false);
            setTalentCertificates(newCertificates);
        }
    };

    const handleUploadCertificate = async () => {
        setIsAPILoading(true);
        if (editCertificateEnabled) {
            const currentCertificates = [...talentCertificates];
            if (certificateToUpdateIndex !== null) {
                currentCertificates[certificateToUpdateIndex] = {
                    ...currentCertificates[certificateToUpdateIndex],
                    name: certificateName,
                    expiry_date: certificateExpiryDate,
                    visible_for: certificateVisibleFor,
                    keep_file_private: keepFilePrivate,
                };

                const apiValues = {
                    [certificateParent]: {
                        certificates: currentCertificates,
                    }
                };

                const response = await updateProfile(userId, apiValues);
                setIsAPILoading(false);
                setTalentCertificates(currentCertificates);
                onLoadCompleted(currentCertificates);
                setOpenAddEditCertificateModal(false);
            }
        } else {
            const formData = new FormData();
            formData.append("file", certificateToUpload as File);
            formData.append("title", "Profile Picture");
            formData.append("alt_text", "Profile Image");
            formData.append("status", "publish");

            const uploadResponse = await uploadMedia(formData);

            if (uploadResponse) {
                const currentCertificates = [...talentCertificates];
                const newCertificateToPush: CertificateType = {
                    certificate: uploadResponse.id,
                    name: certificateName,
                    file_url: uploadResponse.url,
                    expiry_date: certificateExpiryDate,
                    visible_for: certificateVisibleFor,
                    keep_file_private: keepFilePrivate,
                };

                currentCertificates.push(newCertificateToPush);

                const apiValues = {
                    [certificateParent]: {
                        certificates: currentCertificates,
                    }
                };

                const response = await updateProfile(userId, apiValues);

                setTalentCertificates(currentCertificates);
                onLoadCompleted(currentCertificates);

                setCertificateToUpload(null);
                setCertificateExpiryDate('');
                setCertificateName('');
                setCertificateVisibleFor([]);
                setCertificateToUpdateIndex(null);

                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                setIsAPILoading(false);
                setOpenAddEditCertificateModal(false);
            }
        }
    };

    const handleChipSelection = (industry: IndustriesAvailable) => {
        const existingIndustry = certificateVisibleFor.find((ind) => ind === industry);
        if (existingIndustry) {
            setCertificateVisibleFor(certificateVisibleFor.filter((ind) => ind !== industry));
        } else {
            setCertificateVisibleFor([...certificateVisibleFor, industry]);
        }
    };

    return (
        <>
            <button
                className='primary-btn text-sm ml-0 mt-3'
                onClick={(e) => {
                    e.preventDefault();
                    setEditCertificateEnabled(false);
                    setCertificateToUpload(null);
                    setCertificateExpiryDate('');
                    setCertificateName('');
                    setCertificateVisibleFor([]);
                    setCertificateToUpdateIndex(null);

                    setOpenAddEditCertificateModal(true);
                }}
            >
                Add Certificate
            </button>
            {
                talentCertificates.length === 0 ? (
                    null
                )
                : <div className="overflow-x-auto">
                    <table className="w-full p-3 my-3">
                        <thead>
                            <tr>
                                <th
                                    className={`text-center lg:text-left py-2 px-4 md:px-2 bg-gray-300 rounded-tl-lg min-w-[6rem]`}
                                >
                                    Name
                                </th>
                                <th
                                    className={`text-left py-2 px-4 md:px-2 bg-gray-300 min-w-[8rem]`}
                                >
                                    Expiry date
                                </th>
                                <th
                                    className={`text-left py-2 px-4 md:px-2 bg-gray-300 min-w-[8rem]`}
                                >
                                    Visible for
                                </th>
                                <th  className={`text-left py-2 px-4 md:px-2 bg-gray-300 rounded-tr-lg`}>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {talentCertificates.map((certificate, certificateIndex) => (
                                <tr key={certificateIndex} className='py-4 border'>
                                    <td className={`text-left py-3 text-sm px-4 md:px-2 min-w-[6rem]`}>
                                        <div className="flex flex-col lg:flex-row items-center gap-1">
                                            {
                                                certificate.keep_file_private
                                                ?  <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    width={14}
                                                    height={14}
                                                >
                                                    <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </svg>
                                                : null
                                            }
                                            <a
                                                href={certificate.file_url}
                                                className="underline"
                                                target="_blank"
                                            >
                                                {certificate.name}
                                            </a>
                                        </div>
                                    </td>
                                    <td className={`text-left py-3 text-sm px-4 md:px-2`}>
                                        {
                                            certificate.expiry_date && format(certificate.expiry_date, 'dd/MM/yyyy')
                                                ? format(certificate.expiry_date, 'dd/MM/yyyy')
                                                : '-'
                                        }
                                    </td>
                                    <td className="capitalize">
                                        {certificate.visible_for.join(', ').replace(/_/g, ' ') || '-'}
                                    </td>
                                    <td className='text-right flex gap-3 pt-4 lg:pt-1 px-4 md:px-2'>
                                        <button>
                                            <svg
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCertificateName(certificate.name);
                                                    setCertificateExpiryDate(certificate.expiry_date);
                                                    setCertificateVisibleFor(certificate.visible_for);
                                                    setEditCertificateEnabled(true);
                                                    setCertificateToUpdateIndex(certificateIndex);
                                                    setKeepFilePrivate(certificate.keep_file_private);

                                                    setOpenAddEditCertificateModal(true);
                                                }}
                                                viewBox="0 0 24 24"
                                                width={25}
                                                height={25}
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                    <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                        <button
                                            className="bg-red-500 p-1 rounded-md h-fit"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedCertificateToRemoveIndex(certificateIndex);
                                                setOpenRemoveCertificateModal(true);
                                            }}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={20}
                                                height={20}
                                            >
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909" stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
                                                    </path>
                                                    <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="#fff" strokeWidth="1.7" strokeLinecap="round">
                                                    </path>
                                                </g>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

            <Modal
                isOpen={openRemoveCertificateModal}
                onClose={() => setOpenRemoveCertificateModal(false)}
            >
                <h4 className="mb-2 text-xl">
                    Are you sure you can remove the certificate?
                </h4>
                <p className="mb-3">
                    This action can not be undone.
                </p>
                <div className="flex gap-4">
                    <button
                        className="secondary-btn w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenRemoveCertificateModal(false)
                        }}
                        disabled={isAPILoading}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn w-full"
                        disabled={isAPILoading}
                        onClick={(e) => {
                            e.preventDefault();
                            handleRemoveCertificate()
                        }}
                    >
                        Yes
                    </button>
                </div>
            </Modal>
            <Modal
                isOpen={openAddEditCertificateModal}
                onClose={() => setOpenAddEditCertificateModal(false)}
            >
                <h4 className="mb-3">
                    {`${editCertificateEnabled ? 'Edit certificate/credential' : 'Upload new certificate/credential'}`}
                </h4>
                <div className="overflow-auto max-h-[70vh]">
                    <label htmlFor={`certificate_name`} className="block pb-2">
                        Certificate name
                    </label>
                    <input
                        type='text'
                        id={`certificate_name`}
                        placeholder='Certificate name'
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
                    <div>
                        <label htmlFor={`visible_for`} className="block pb-2">
                            Visible for Industries
                        </label>
                        <div className="flex gap-2 flex-wrap mb-4">
                            {
                                industries && industries.map((industry) => {
                                    const selectedIndustry = certificateVisibleFor.find((ind) => ind === industry.industry);

                                    return (
                                        <div
                                            key={industry.industry}
                                            className={`chip ${selectedIndustry ? 'chip-selected' : ''}`}
                                            onClick={() => handleChipSelection(industry.industry)}
                                        >
                                            {
                                                industry.industry === 'other'
                                                ? industry.other_industry
                                                : industry.industry.replace(/_/g, ' ')
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {!editCertificateEnabled && (
                        <div className="flex flex-col items-center space-y-3 justify-center my-6">
                            <label
                                htmlFor="certificateUpload"
                                className="cursor-pointer flex gap-2 text-primary px-4 py-2 rounded-xl shadow-md hover:bg-primary hover:text-white transition-colors group"
                            >
                                <svg
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    height={24}
                                    width={24}
                                    className="group-hover:text-white transition-all"
                                >
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" fill="currentColor"></path>
                                        <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="currentColor">
                                        </path>
                                    </g>
                                </svg>
                                Upload Certificate
                            </label>
                            <input
                                id="certificateUpload"
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => {
                                    if (!e.target.files) return;
                                    setCertificateToUpload(e.target.files[0]);
                                }}
                            />
                            {certificateToUpload && (
                                <span className="text-sm text-gray-600">
                                    Selected: {certificateToUpload.name}
                                </span>
                            )}
                        </div>
                    )}

                    <div className="flex gap-2 items-center mt-2 mb-4">
                        <input
                            type='checkbox'
                            id={`keep_file_private`}
                            checked={keepFilePrivate}
                            onChange={(e) => setKeepFilePrivate(e.target.checked)}
                        />
                        <label htmlFor={`keep_file_private`} className="block">
                            Keep File Private
                        </label>
                    </div>
                    {
                        keepFilePrivate ? (
                            <div className="flex items-start gap-2 p-3 rounded-lg border border-blue-300 bg-blue-50 text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm">
                                    <span className="font-semibold">Note:</span> Only the certificate/credential <span className="font-bold">name</span> will be visible in the selected industries.
                                </p>
                            </div>
                        ) : (
                            <div className="flex items-start gap-2 p-3 rounded-lg border border-red-300 bg-red-50 text-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z" />
                                </svg>
                                <p className="text-sm">
                                    <span className="font-semibold">Warning:</span> The actual <span className="font-bold">document/file</span> will be accessible to anyone browsing those industries.
                                </p>
                            </div>
                        )
                    }
                    <div className="flex gap-4 mt-8">
                        <button
                            className="secondary-btn w-full"
                            onClick={(e) => {
                                e.preventDefault();
                                setCertificateToUpload(null);
                                setCertificateName('');
                                setOpenAddEditCertificateModal(false);

                                if (fileInputRef.current) {
                                    fileInputRef.current.value = '';
                                }
                            }}
                            disabled={isAPILoading}
                        >
                            Cancel
                        </button>
                        <button
                            className="primary-btn w-full"
                            onClick={(e) => {
                                e.preventDefault();
                                handleUploadCertificate();
                            }}
                            disabled={isAPILoading}
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CertificateTable;
