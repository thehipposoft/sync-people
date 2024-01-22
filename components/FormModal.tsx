import React from 'react';
import ProfileForm from './ProfileForm';
import { FORM_SLIDES } from './FormSlider/constants';
import FormSlider from './FormSlider';

type FormModalTypes = {
    isOpen: boolean,
    closeMenu: any,
    currentIndexProp: number,
}

const FormModal = ({ isOpen, closeMenu, currentIndexProp }:FormModalTypes) => {
        return (
            <div className={`duration-700 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-screen overflow-y-clip bg-black/50 fixed left-0 top-0 flex justify-center items-center`}>
                <div 
                    className={`w-screen h-screen bg-black/50 fixed left-0 top-0 flex justify-center items-center`}
                    onClick={closeMenu}
                 />
                <FormSlider slides={FORM_SLIDES} closeMenu={closeMenu} currentIndexProp={currentIndexProp}/>
            </div>
        );
};

export default FormModal;