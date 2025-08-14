import React from "react";

const BackDrop = ({sideMenu, closeSideMenu, isDashboard}:any) => {
    return(
        <div
            className={`${sideMenu ? 'opacity-100 flex' : 'hidden'} ${isDashboard ? 'left-[8%]' : ''} py-2 px-16 justify-end w-full duration-500 opacity-0 cursor-pointer fixed z-20 `}
            onClick={closeSideMenu}
        >
            <svg viewBox="0 0 10 10" width="2em" height="2em" stroke="currentColor" strokeWidth="2" className="text-primary">
                <line x1="1" y1="1" x2="9" y2="9" fill='#1A335D'/>
                <line x1="9" y1="1" x2="1" y2="9" fill='#1A335D'/>
            </svg>
        </div>
    )
}

export default BackDrop
