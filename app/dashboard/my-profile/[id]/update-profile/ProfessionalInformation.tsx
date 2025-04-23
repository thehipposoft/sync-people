import { useState, useRef } from "react";
import { updateProfile, uploadMedia } from "@/lib/protected-api";
import { INDUSTRIES } from "@/app/constants";
import { professional_information } from "@/types";
import { Link } from "next-view-transitions";
import Modal from "@/components/Modal";
import { Tooltip } from "@heroui/tooltip";

type ProfessionalPropsType = {
    initialValues: professional_information;
    userId: string;
};

const ProfessionalInformation = ({
    initialValues,
    userId,
}:ProfessionalPropsType) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [formValues, setFormValues] = useState<professional_information>({
        ...initialValues,
        industries: initialValues.industries || [],
    });
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [selectedCertificateToRemoveIndex, setSelectedCertificateToRemoveIndex] = useState<number>(0);
    const [certificateToUpload, setCertificateToUpload] = useState<File | null>(null);
    const [certificateName, setCertificateName] = useState<string>('');
    const [certificateExpiryDate, setCertificateExpiryDate] = useState<string>('');
    const [industriesToUpdate, setIndustriesToUpdate] = useState<professional_information['industries']>([]);
    const [selectedIndustryIndex, setSelectedIndustryIndex] = useState<number>(0);
    //Modal
    const [openRemoveCertificateModal, setOpenRemoveCertificateModal] = useState<boolean>(false);
    const [openNewCertificateModal, setOpenNewCertificateModal] = useState<boolean>(false);
    const [openUpdatedDataModal, setOpenUpdatedDataModal] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleRemoveCertificate = () => {
        setIsAPILoading(true);
        const newInd = formValues.industries.map((industry, index) => {
            if (index === selectedIndustryIndex) {
                industry.certificates = industry.certificates.filter((certificate, i) => i !== selectedCertificateToRemoveIndex);
            }

            return industry;
        });

        const body = {
            professional_information: {
                industries: newInd,
            }
        }

        const response = updateProfile(userId, body);

        setFormValues({
            ...formValues,
            industries: newInd,
        });

        setIsAPILoading(false);

        setOpenRemoveCertificateModal(false);
    };

    const handleUploadCertificate = async () => {
        setIsAPILoading(true);
        const formData = new FormData();
        formData.append("file", certificateToUpload as File);
        formData.append("title", "Profile Picture");
        formData.append("alt_text", "Profile Image");
        formData.append("status", "publish");

        const uploadResponse = await uploadMedia(formData);

        if (uploadResponse) {
            const apiIndustries = [...formValues.industries];

            if (!apiIndustries[selectedIndustryIndex].certificates) {
                apiIndustries[selectedIndustryIndex].certificates = [];
            }

            apiIndustries[selectedIndustryIndex].certificates.push({
                certificate: uploadResponse.id,
                name: certificateName,
                file_url: uploadResponse.url,
                expiry_date: certificateExpiryDate,
            });

            const apiValues = {
                professional_information: {
                    industries: apiIndustries,
                }
            };

            const response = await updateProfile(userId, apiValues);

            setFormValues({
                ...formValues,
                industries: apiIndustries,
            });

            setCertificateToUpload(null);
            setCertificateExpiryDate('');
            setCertificateName('');
            setIsAPILoading(false);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            setOpenNewCertificateModal(false);
        }
    };

    const handleIndustryDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, index: number, isNew: boolean) => {
        if (isNew) {
            const newInd = industriesToUpdate.map((industry, i) => {
                if (i === index) {
                    industry = {
                        ...industry,
                        [e.target.name]: e.target.value,
                    }
                }

                return industry;
            });

            setIndustriesToUpdate(newInd);
            return;
        }

        const newInd = formValues.industries.map((industry, i) => {
            if (i === index) {
                industry = {
                    ...industry,
                    [e.target.name]: e.target.value,
                }
            }

            return industry;
        });

        setFormValues({
            ...formValues,
            industries: newInd,
        });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);

        const response = await updateProfile(userId, {
            professional_information: {
                ...formValues,
                industries: [
                    ...formValues.industries,
                    ...industriesToUpdate,
                ],
            },
        });

        setFormValues({
            ...formValues,
            industries: [
                ...formValues.industries,
                ...industriesToUpdate,
            ],
        });

        setIndustriesToUpdate([]);
        setIsAPILoading(false);
        setOpenUpdatedDataModal(true);
    };

    const renderIndustriesFields = (listOfIndustries: professional_information['industries'], isNew: boolean) => {
        return (
            listOfIndustries && listOfIndustries.map((industry, index) => (
                <div key={index} className='border-b py-3 grid grid-cols-2 gap-4'>
                    {
                        isNew
                        ? <div className="col-span-2">
                            <div className="flex items-center justify-between mb-3">
                                <label htmlFor={`industry`} className="block">
                                    Industry
                                </label>
                                <div className="flex gap-3 items-center">
                                    <p className="opacity-50">
                                        not saved
                                    </p>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const newInd = industriesToUpdate.filter((ind, i) => i !== index);

                                            setIndustriesToUpdate(newInd);
                                        }}
                                        className="bg-red-500 p-1 rounded-md"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                        >
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909" stroke="#1C1C1C" strokeWidth="1.7" strokeLinecap="round">
                                                </path>
                                                <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="#1C1C1C" strokeWidth="1.7" strokeLinecap="round">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <select
                                id={`industry`}
                                name={`industry`}
                                required
                                value={industry.industry}
                                onChange={(e) => handleIndustryDataChange(e, index, isNew)}
                            >
                                {
                                    formValues.industries.length
                                    ? INDUSTRIES.filter((ind) => !initialValues.industries.map((ind) => ind.industry).includes(ind.value)).map((industry, index) => (
                                        <option key={index} value={industry.value}>
                                            {industry.name}
                                        </option>
                                    ))
                                    : INDUSTRIES.map((industry, index) => (
                                        <option key={index} value={industry.value}>
                                            {industry.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        : <div className="w-full flex justify-between col-span-2 flex-wrap">
                            <h3 className='capitalize mb-2 text-2xl'>
                                {`${index + 1}. ${industry.industry}`}
                            </h3>
                            {
                                listOfIndustries.length > 1 &&
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const newInd = formValues.industries.filter((ind, i) => i !== index);

                                        setFormValues({
                                            ...formValues,
                                            industries: newInd,
                                        });
                                    }}
                                    className="bg-red-500 p-1 rounded-md h-fit"
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
                            }
                        </div>
                    }
                    <div className="col-span-2 md:col-span-1">
                        <label htmlFor={`position`} className="block pb-2">
                            Position
                        </label>
                        <input
                            type="text"
                            id={'position'}
                            name={'position'}
                            required
                            value={industry.position}
                            onChange={(e) => handleIndustryDataChange(e, index, isNew)}
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label htmlFor={`preferred_salary`} className="flex pb-2 items-center gap-2">
                            Preferred salary per hour (AUD)
                            <Tooltip
                                className="bg-primary-text text-white rounded-md"
                                content={
                                    <div className="px-1 py-2">
                                        <Link href={`/categories/${industry.industry}`} className="text-sm">
                                            Link to category / Money converter
                                        </Link>
                                    </div>
                                }
                            >
                                <svg
                                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    width={15}
                                    height={15}
                                >
                                    <g id="SVGRepo_iconCarrier">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#1C274C">
                                        </path>
                                    </g>
                                </svg>
                            </Tooltip>
                        </label>
                        <input
                            type="text"
                            id={'preferred_salary'}
                            name={'preferred_salary'}
                            required
                            value={industry.preferred_salary}
                            onChange={(e) => handleIndustryDataChange(e, index, isNew)}
                        />
                    </div>
                    {
                        !isNew && <div className="col-span-2">
                            <label className="block pb-2">
                                Certificates
                            </label>
                            {
                                industry.certificates.length > 0
                                ? <table className="w-full p-3 my-3">
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
                                            <th  className={`text-left py-2 px-4 md:px-2 bg-gray-300 rounded-tr-lg`}>

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {industry.certificates.map((certificate, certificateIndex) => (
                                            <tr key={certificateIndex} className='py-4 border'>
                                                <td
                                                    className={`text-left py-3 text-sm px-4 md:px-2`}
                                                >
                                                    {certificate.name}
                                                </td>
                                                <td
                                                    className={`text-left py-3 text-sm px-4 md:px-2`}
                                                >
                                                    {certificate.expiry_date}
                                                </td>
                                                <td className='text-right pr-4'>
                                                    <button
                                                        className="bg-red-500 p-1 rounded-md h-fit"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedCertificateToRemoveIndex(index);
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
                                : null
                            }
                            <button
                                className='primary-btn text-sm ml-0 my-3'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedIndustryIndex(index);
                                    setOpenNewCertificateModal(true);
                                }}
                            >
                                + new certificate
                            </button>
                        </div>
                    }
                </div>
            ))
        )
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit} className='grid grid-cols-2 gap-4'>
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="current_status" className="block pb-2">Employment Status</label>
                    <select
                        id="current_status"
                        name="current_status"
                        required
                        value={formValues.current_status}
                        onChange={handleInputChange}
                    >
                        <option value="available">Available</option>
                        <option value="working">Working</option>
                        <option value="offline">Offline</option>
                    </select>
                </div>

                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="work_preference" className="block pb-2">Work Preference</label>
                    <select
                        id="work_preference"
                        name="work_preference"
                        required
                        value={formValues.work_preference}
                        onChange={handleInputChange}
                    >
                        <option value="part-time">Part-time</option>
                        <option value="full-time">Full-time</option>
                        <option value="casual">Casual</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>
                </div>

                <div className='col-span-2'>
                    <h4 className='font-bold'>
                        Industries
                    </h4>
                    {
                        renderIndustriesFields(formValues.industries, false)
                    }
                    {
                        renderIndustriesFields(industriesToUpdate, true)
                    }
                    <button
                        className='secondary-btn mt-4 mx-auto text-base'
                        onClick={(e) => {
                            e.preventDefault();
                            const newIndustriesArray = [...industriesToUpdate];
                            newIndustriesArray.push({
                                industry: initialValues.industries
                                    ? INDUSTRIES.filter((ind) => !initialValues.industries.map((ind) => ind.industry).includes(ind.value))[0].value
                                    : INDUSTRIES[0].value,
                                position: '',
                                preferred_salary: '',
                                certificates: [],
                                other_industry: '',
                                industry_description: '',
                            });

                            setIndustriesToUpdate(newIndustriesArray);
                        }}
                    >
                        + Add Industry
                    </button>
                </div>
                <div className='w-full col-span-2 flex'>
                    <button
                        className='primary-btn mt-4 mx-auto text-base'
                        type='submit'
                        disabled={isAPILoading}
                    >
                        Update Professional Information
                    </button>
                </div>
            </form>
            <Modal
                isOpen={openRemoveCertificateModal}
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
                        onClick={() => setOpenRemoveCertificateModal(false)}
                        disabled={isAPILoading}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn"
                        disabled={isAPILoading}
                        onClick={() => handleRemoveCertificate()}
                    >
                        Yes
                    </button>
                </div>
            </Modal>
            <Modal
                isOpen={openNewCertificateModal}
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
                            setOpenNewCertificateModal(false);
                            if (fileInputRef.current) {
                                fileInputRef.current.value = '';
                            }
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
            <Modal
                isOpen={openUpdatedDataModal}
            >
                <h4 className="mb-4">
                    Your data has been updated successfully
                </h4>
                <div className="flex gap-4">
                    <button
                        className="secondary-btn"
                        onClick={() => setOpenUpdatedDataModal(false)}
                    >
                        Keep editing
                    </button>
                    <Link
                        className="primary-btn"
                        href={`/talents/${userId}`}
                    >
                        View Public Profile
                    </Link>
                </div>
            </Modal>
        </div>
    )
};

export default ProfessionalInformation;
