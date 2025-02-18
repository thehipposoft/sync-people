import { useState } from "react";
import { updateProfile, uploadMedia } from "@/lib/protected-api";
import { INDUSTRIES } from "@/app/constants";
import { professional_information } from "@/types";
import { Link } from "next-view-transitions";
import Modal from "@/components/Modal";
import { Tooltip } from "@heroui/tooltip";
import { render } from "sass";

type ProfessionalPropsType = {
    initialValues: professional_information;
    userId: string;
};

const ProfessionalInformation = ({
    initialValues,
    userId,
}:ProfessionalPropsType) => {
    const [formValues, setFormValues] = useState<professional_information>(initialValues);
    const [isAPILoading, setIsAPILoading] = useState<boolean>(false);
    const [selectedCertificateToRemoveIndex, setSelectedCertificateToRemoveIndex] = useState<number>(0);
    const [certificateToUpload, setCertificateToUpload] = useState<File | null>(null);
    const [certificateName, setCertificateName] = useState<string>('');
    const [newIndustries, setNewIndustries] = useState<professional_information['industries']>([]);
    //Modal
    const [openRemoveCertificateModal, setOpenRemoveCertificateModal] = useState<boolean>(false);
    const [openNewCertificateModal, setOpenNewCertificateModal] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleRemoveCertificate = (index: number) => {
        setIsAPILoading(true);
        const newIndustries = formValues.industries.map((industry, i) => {
            if (i === index) {
                industry.certificates = industry.certificates.filter((certificate, j) => j !== selectedCertificateToRemoveIndex);
            }

            return industry;
        });

        const body = {
            professional_information: {
                industries: newIndustries,
            }
        }

        const response = updateProfile(body, userId);

        setFormValues({
            ...formValues,
            industries: newIndustries,
        });

        setIsAPILoading(false);

        setOpenRemoveCertificateModal(false);
    };

    const handleUploadCertificate = async () => {
        const formData = new FormData();
        formData.append("file", certificateToUpload as File);
        formData.append("title", "Profile Picture");
        formData.append("alt_text", "Profile Image");
        formData.append("status", "publish");

        const uploadResponse = await uploadMedia(formData);

        if (uploadResponse) {
            const formValuesToUpload = {
                ...formValues,
            }

            const apiValues = {
                professional_information: {
                    industries: formValuesToUpload.industries.map((industry, index) => {
                        if (index === formValuesToUpload.industries.length - 1) {
                            if (!industry.certificates) {
                                industry.certificates = [];
                            }

                            industry.certificates.push({
                                certificate: uploadResponse.id,
                                name: certificateName,
                            });
                        }

                        return industry;
                    }),
                }
            };

            const response = await updateProfile(apiValues, userId);

            setFormValues({
                ...formValues,
            });

            setIsAPILoading(false);
            setOpenNewCertificateModal(false);
        }
    };

    const handleIndustryDataChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const newIndustries = formValues.industries.map((industry, i) => {
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
            industries: newIndustries,
        });
    }


    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsAPILoading(true);


        const response = await updateProfile({
            professional_information: formValues,
        }, userId);

        setFormValues({
            ...formValues,
            industries: [
                ...formValues.industries,
                ...newIndustries,
            ],
        });

        setIsAPILoading(false);
    };

    const renderIndustriesFields = (listOfIndustries: professional_information['industries'], isNew: boolean) => {
        return (
            listOfIndustries.map((industry, index) => (
                <div key={index} className='border-b py-3 grid grid-cols-2 gap-4'>
                    {
                        isNew
                        ? <div className="col-span-2">
                            <label htmlFor={`industry`} className="block pb-2">
                                Industry
                            </label>
                            <select
                                id={`industry`}
                                name={`industry`}
                                required
                                value={industry.industry}
                                onChange={(e) => handleIndustryDataChange(e, index)}
                            >
                                {
                                    INDUSTRIES.filter((ind) => !initialValues.industries.map((ind) => ind.industry).includes(ind.value)).map((industry, index) => (
                                        <option key={index} value={industry.value}>
                                            {industry.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        : <h3 className='capitalize mb-2 col-span-2 text-2xl'>
                            {`${index + 1}. ${industry.industry}`}
                        </h3>
                    }
                    <div className=''>
                        <label htmlFor={`position`} className="block pb-2">
                            Position
                        </label>
                        <input
                            type="text"
                            id={'position'}
                            name={'position'}
                            required
                            value={industry.position}
                            onChange={(e) => handleIndustryDataChange(e, index)}
                        />
                    </div>
                    <div className=''>
                        <label htmlFor={`preferred_salary`} className="flex pb-2 items-center gap-2">
                            Preferred salary (AUD)
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
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#1C274C">
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
                            onChange={(e) => handleIndustryDataChange(e, index)}
                        />
                    </div>
                    <div>
                        <label className="block pb-2">
                            Certificates
                        </label>
                        {
                            industry.certificates && industry.certificates.map((certificate, index) => (
                                <div key={index} className='flex gap-3'>
                                    {
                                        certificate.certificate ?
                                            <Link
                                                href={certificate.certificate}
                                                className='underline'
                                                target='_blank'
                                            >
                                                {certificate.name}
                                            </Link>
                                        : <p>{certificate.name}</p>
                                    }

                                    <button
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
                                                <path d="M5.73708 6.54391V18.9857C5.73708 19.7449 6.35257 20.3604 7.11182 20.3604H16.8893C17.6485 20.3604 18.264 19.7449 18.264 18.9857V6.54391M2.90906 6.54391H21.0909" stroke="#1C1C1C" strokeWidth="1.7" strokeLinecap="round">
                                                </path>
                                                <path d="M8 6V4.41421C8 3.63317 8.63317 3 9.41421 3H14.5858C15.3668 3 16 3.63317 16 4.41421V6" stroke="#1C1C1C" strokeWidth="1.7" strokeLinecap="round">
                                                </path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            ))
                        }
                        <button
                            className='primary-btn text-sm ml-0 mt-3'
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenNewCertificateModal(true);
                            }}
                        >
                            + Upload new certificate
                        </button>
                    </div>
                </div>
            ))
        )
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit} className='grid grid-cols-2 gap-4'>
                <div className=''>
                    <label htmlFor="current_status" className="block pb-2">Current Status</label>
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

                <div className=''>
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
                        renderIndustriesFields(newIndustries, true)
                    }
                    <button
                        className='primary-btn mt-4'
                        onClick={(e) => {
                            e.preventDefault();
                            const newIndustriesArray = [...newIndustries];
                            newIndustriesArray.push({
                                industry: 'construction',
                                position: '',
                                preferred_salary: '',
                                certificates: [],
                                other_industry: '',
                            });

                            setNewIndustries(newIndustriesArray);
                        }}
                    >
                        + Add Industry
                    </button>
                </div>
                <div className='w-full col-span-2 flex'>
                    <button
                        className='primary-btn mt-4 mx-auto'
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
                <h4 className="mb-3">
                    Are you sure you can remove the certificate?
                </h4>
                <div className="flex gap-4">
                    <button
                        className="secondary-btn"
                        onClick={() => setOpenRemoveCertificateModal(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn"
                        onClick={() => handleRemoveCertificate(selectedCertificateToRemoveIndex)}
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
                <input
                    type='file'
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
                            setOpenNewCertificateModal(false)
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="primary-btn"
                        onClick={() => {
                            handleUploadCertificate();
                        }}
                    >
                        Upload
                    </button>
                </div>
            </Modal>
        </div>
    )
};

export default ProfessionalInformation;
