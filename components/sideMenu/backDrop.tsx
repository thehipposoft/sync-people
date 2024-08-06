import React from "react";

const BackDrop = ({sideMenu, closeSideMenu}:any) => {
    return(
        <div
            className={`md:hidden py-2 px-16 flex justify-end w-full duration-500 opacity-0 cursor-pointer fixed z-20  ${sideMenu ? 'opacity-100' : ''}`}
            onClick={closeSideMenu}
        >
            <svg viewBox="0 0 10 10" width="2em" height="2em" stroke="currentColor" stroke-width="2" className="text-[#1A335D]">
                <line x1="1" y1="1" x2="9" y2="9" fill='#1A335D'/>
                <line x1="9" y1="1" x2="1" y2="9" fill='#1A335D'/>
            </svg>
        </div>
    )
}

export default BackDrop