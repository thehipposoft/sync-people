import { useState, useRef } from "react";
import { updateProfile, uploadMedia } from "@/lib/protected-api";
import { CertificateType, IndustriesAvailable, professional_information } from "@/types";
import { format } from "date-fns";
import Modal from "@/components/Modal";

type PropsType = {
    certificates: CertificateType[];
    userId: string;
    industries: professional_information['industries'];
}

const CertificateTable = ({
    certificates,
    userId,
    industries,
}: PropsType) => {
    const [talentCertificates, setTalentCertificates] = useState<CertificateType[]>(certificates);
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

    const handleRemoveCertificate = () => {
        //Remove index certificate from Certificates
        if (selectedCertificateToRemoveIndex !== null) {
            const newCertificates = certificates.filter((_, index) => index !== selectedCertificateToRemoveIndex);

            const body = {
                professional_information: {
                    certificates: newCertificates,
                }
            }

            const response = updateProfile(userId, body);

            setIsAPILoading(false);

            setOpenRemoveCertificateModal(false);
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
                };

                const apiValues = {
                    professional_information: {
                        certificates: currentCertificates,
                    }
                };

                const response = await updateProfile(userId, apiValues);
                setIsAPILoading(false);
                setTalentCertificates(currentCertificates);
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
                };

                currentCertificates.push(newCertificateToPush);

                const apiValues = {
                    professional_information: {
                        certificates: currentCertificates,
                    }
                };

                const response = await updateProfile(userId, apiValues);

                setTalentCertificates(currentCertificates);

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

    console.log(">>certificateVisibleFor", certificateVisibleFor);

    return (
        <>
            <button
                className='primary-btn text-sm ml-0 mt-3'
                onClick={(e) => {
                    e.preventDefault();
                    setOpenAddEditCertificateModal(true);
                }}
            >
                Add Certificate
            </button>
            <table className="w-full p-3 my-3">
                <thead>
                    <tr>
                        <th
                            className={`text-left py-2 px-4 md:px-2 bg-gray-300 rounded-tl-lg`}
                        >
                            Name
                        </th>
                        <th
                            className={`text-left py-2 px-4 md:px-2 bg-gray-300`}
                        >
                            Expiry date
                        </th>
                        <th
                            className={`text-left py-2 px-4 md:px-2 bg-gray-300`}
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
                            <td
                                className={`text-left py-3 text-sm px-4 md:px-2`}
                            >
                                {certificate.name}
                            </td>
                            <td
                                className={`text-left py-3 text-sm px-4 md:px-2`}
                            >
                                {
                                    certificate.expiry_date && format(certificate.expiry_date, 'dd/MM/yyyy')
                                        ? format(certificate.expiry_date, 'dd/MM/yyyy')
                                        : '-'
                                }
                            </td>
                            <td>
                                {certificate.visible_for.join(', ').replace(/_/g, ' ') || '-'}
                            </td>
                            <td className='text-right flex gap-3 pt-1'>
                                <button>
                                    <svg
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCertificateName(certificate.name);
                                            setCertificateExpiryDate(certificate.expiry_date);
                                            setCertificateVisibleFor(certificate.visible_for);
                                            setEditCertificateEnabled(true);
                                            setCertificateToUpdateIndex(certificateIndex);

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
                        className="secondary-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenRemoveCertificateModal(false)
                        }}
                        disabled={isAPILoading}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn"
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
                    Upload new certificate
                </h4>
                <input
                    type='text'
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
                        Visible for
                    </label>
                    <div className="flex gap-2 flex-wrap mb-4">
                        {
                            industries.map((industry) => {
                                const selectedIndustry = certificateVisibleFor.find((ind) => ind === industry.industry);

                                return (
                                    <div
                                        key={industry.industry}
                                        className={`chip ${selectedIndustry ? 'chip-selected' : ''}`}
                                        onClick={() => handleChipSelection(industry.industry)}
                                    >
                                        {industry.industry.replace(/_/g, ' ')}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    !editCertificateEnabled && (
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
            </Modal>
        </>
    );
};

export default CertificateTable;
