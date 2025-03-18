import { useState, useRef } from 'react';
import { TalentTypeAcf } from '@/types';
import { TALENT_CURRENT_STATUS_DROPDOWN, TALENT_WORK_PREFERENCE_DROPDOWN, INDUSTRIES } from '@/app/constants';
import { Select, SelectItem } from "@heroui/select";
import { Tooltip } from "@heroui/tooltip";
import Link from "next/link";
import Modal from '@/components/Modal';

type IndustriesPropsType = {
    currentIndex: number;
    initialValues: TalentTypeAcf;
    showNext: () => void;
    showPrev: () => void;
    setMainFormValues: (values: TalentTypeAcf) => void;
};

const Industries = ({
    currentIndex,
    initialValues,
    showNext,
    showPrev,
    setMainFormValues,
}:IndustriesPropsType) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [formValues, setFormValues] = useState<TalentTypeAcf['professional_information']>({
        ...initialValues.professional_information,
        industries: [],
    });
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [industriesError, setIndustriesError] = useState<string>('');
    //Certificates upload
    const [certificateToUpload, setCertificateToUpload] = useState<File | null>(null);
    const [selectedIndustryIndex, setSelectedIndustryIndex] = useState<number>(0);
    const [openNewCertificateModal, setOpenNewCertificateModal] = useState<boolean>(false);
    const [certificateName, setCertificateName] = useState<string>('');
    const [certificateExpiryDate, setCertificateExpiryDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formValues.industries.length === 0) {
            setIndustriesError('Please select at least one industry');
            return;
        }

        setIndustriesError('');

        setMainFormValues({
            ...initialValues,
            professional_information: {
                ...formValues,
            },
        });

        showNext();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;

        const keys = name.split('.');

        setFormValues((prevValues) => {
            let updatedValues = { ...prevValues };
            let temp:any = updatedValues;

            for (let i = 0; i < keys.length - 1; i++) {
                const key = keys[i];

                // Ensure the nested object exists
                temp[key] = { ...temp[key] };
                temp = temp[key];
            }

            // Set the new value
            temp[keys[keys.length - 1]] = value;

            return updatedValues;
        });
    };

    const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const industriesArray = value.split(',');
        const industriesToPush:TalentTypeAcf['professional_information']['industries'] = industriesArray.map((industry:any) => {
            return {
                industry,
                preferred_salary: '',
                position: '',
                certificates: [],
                industry_description: '',
            };
        }
        );

        setFormValues((prevValues) => {
            return {
                ...prevValues,
                industries: industriesToPush,
            };
        });
    };

    const handleIndustryInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;

        setFormValues((prevValues) => {
            let updatedValues = { ...prevValues };
            updatedValues.industries[index] = {
                ...updatedValues.industries[index],
                [name]: value,
            };

            return updatedValues;
        });
    };

    const handleUploadCertificate = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);
        const newCertificate = {
            partialFile: certificateToUpload as File,
            file_url: '',
            name: certificateName,
            expiry_date: certificateExpiryDate,
        };

        const newIndustries = formValues.industries.map((industry, index) => {
            if (index === selectedIndustryIndex) {
                return {
                    ...industry,
                    certificates: [...industry.certificates, newCertificate],
                };
            }

            return industry;
        });

        setFormValues({
            ...formValues,
            industries: newIndustries,
        });

        setCertificateExpiryDate('');
        setCertificateName('');
        setCertificateToUpload(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setIsAPILoading(false);
        setOpenNewCertificateModal(false);
    };

    return (
        <>
            <form
                className={`flex-col duration-1000 md:min-w-[850px] md:px-4 py-6 md:py-0`}
                style={{
                    translate: `${-100 * currentIndex}%`,
                }}
                onSubmit={handleSubmit}
            >
                <div className='flex items-center justify-between pt-8'>
                    <h4 className='font-bold py-2 text-xl'>
                        2. My Industries
                    </h4>
                </div>
                <p className='pb-6 text-[#1A335D] text-lg'>
                    Come on, this is just the beginning
                </p>
                <div className={`md:grid grid-cols-2 gap-4`}>
                    <div className='col-span-2 lg:col-span-1'>
                        <label htmlFor="current_status" className="block pb-2">
                            Current Status*
                        </label>
                        <select
                            name="current_status"
                            id="current_status"
                            className="w-full"
                            onChange={handleInputChange}
                            value={formValues.current_status}
                        >
                            {
                                TALENT_CURRENT_STATUS_DROPDOWN.map((status) => (
                                    <option key={status.value} value={status.value}>
                                        {status.label}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className='col-span-2 lg:col-span-1'>
                        <label htmlFor="current_status" className="block pb-2">
                            Work Preference*
                        </label>
                        <select
                            name="work_preference"
                            id="work_preference"
                            className="w-full"
                            onChange={handleInputChange}
                            value={formValues.work_preference}
                        >
                            {
                                TALENT_WORK_PREFERENCE_DROPDOWN.map((status) => (
                                    <option key={status.value} value={status.value}>
                                        {status.label}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <p className="mt-4 text-[#1A335D] col-span-2">
                        Industries of choice (you can choose more than one option)*
                    </p>
                    <Select
                        className="col-span-2 mb-3"
                        placeholder="Select one or more industries"
                        selectionMode="multiple"
                        onChange={handleMultiSelectChange}
                        required
                        items={INDUSTRIES}
                        selectedKeys={formValues.industries.map((industry) => industry.industry)}
                    >
                        {INDUSTRIES.map((industry) => (
                            <SelectItem key={industry.value}>
                                {industry.name}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                {
                    formValues.industries.map((industry, index) => (
                        <div key={index} className='border border-[#FF8149] rounded-3xl p-4 mt-4'>
                            <div className='flex items-center justify-between'>
                                <h4 className='font-bold py-4 text-xl capitalize'>
                                    {index + 1}. {industry.industry}
                                </h4>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const newInd = formValues.industries.filter((ind, i) => i !== index);

                                        setIndustriesError('');
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
                            </div>
                            <div className='md:grid grid-cols-2 gap-4'>
                                <div className='col-span-2 lg:col-span-1'>
                                    <label htmlFor="position" className="block pb-2">
                                        Position*
                                    </label>
                                    <input
                                        type="text"
                                        name={`position`}
                                        id="position"
                                        className="w-full"
                                        onChange={(e) => handleIndustryInputChange(e, index)}
                                        value={industry.position}
                                        required
                                        placeholder='You can add multiple comma separated'
                                    />
                                </div>
                                <div className='col-span-2 lg:col-span-1'>
                                    <label htmlFor={`preferred_salary`} className="flex pb-2 items-center gap-2">
                                        Preferred salary (AUD)
                                        <Tooltip
                                            className="bg-primary-text text-white rounded-md"
                                            content={
                                                <div className="px-1 py-2">
                                                    <Link
                                                        href={`/categories/${industry.industry}`}
                                                        className="text-sm underline"
                                                        target='_blank'
                                                    >
                                                        Learn more about {industry.industry}
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
                                        name={`preferred_salary`}
                                        id="preferred_salary"
                                        className="w-full"
                                        onChange={(e) => handleIndustryInputChange(e, index)}
                                        value={industry.preferred_salary}
                                        placeholder='Will not be displayed publicly'
                                    />
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor={`industry_description`} className="block pb-2">
                                    Certificates <span className='text-xs'>(optional)</span>
                                </label>
                                {
                                    industry.certificates.length > 0
                                    ? <table className="w-full p-3">
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
                                            {industry.certificates.map((certificate, index) => (
                                                <tr key={index} className='py-4 border'>
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

                                                                const newCertificates = industry.certificates.filter((cert, i) => i !== index);

                                                                //TODO: Fix logic to remove certificates

                                                                setFormValues({
                                                                    ...formValues,
                                                                    industries: formValues.industries.map((ind, i) => {
                                                                        if (i === index) {
                                                                            return {
                                                                                ...ind,
                                                                                certificates: newCertificates,
                                                                            };
                                                                        }

                                                                        return ind;
                                                                    }),
                                                                });
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
                                    className='primary-btn text-sm ml-0 mt-3'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedIndustryIndex(index);
                                        setOpenNewCertificateModal(true);
                                    }}
                                >
                                    Add certificate
                                </button>
                            </div>
                        </div>
                    ))
                }
                {
                    !formValues.industries.length && industriesError ? (
                        <p className='text-red-600 mt-4 border-2 border-red-600 rounded-md p-4 bg-red-200'>
                            {industriesError}
                        </p>
                    ) : null
                }
                <div className='flex gap-4 items-center justify-center mt-8 mb-8'>
                    <button
                        className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                        onClick={(e) => {
                            e.preventDefault();
                            showPrev();
                        }}
                    >
                        Back
                    </button>
                    <div className='md:flex hidden justify-center'>
                        {currentIndex + 1} | 4
                    </div>
                    <button
                        className='text-[#FF8149] py-2 px-4 rounded-3xl border border-[#FF8149] hover:text-white hover:bg-[#FF8149] hover:border-white duration-700'
                        type='submit'
                    >
                        Next
                    </button>
                </div>
            </form>
            <Modal
                isOpen={openNewCertificateModal}
            >
                <form onSubmit={handleUploadCertificate}>
                    <h4 className="mb-5 text-center">
                        Upload new certificate
                    </h4>
                    <input
                        type='text'
                        placeholder='Certificate name'
                        value={certificateName}
                        onChange={(e) => setCertificateName(e.target.value)}
                        className="mb-3"
                        required
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
                        className="border-none w-full"
                        accept='.pdf, .doc, .docx, .jpg, .jpeg, .png'
                        required
                        onChange={(e) => {
                            if (!e.target.files) return;

                            setCertificateToUpload(e.target.files[0]);
                        }}
                    />
                    <div className="flex gap-4 mt-4 justify-center">
                        <button
                            className="secondary-btn"
                            onClick={(e) => {
                                e.preventDefault();
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
                            type='submit'
                            disabled={isAPILoading}
                        >
                            Upload
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default Industries;
