import React from "react";

const BackDrop = ({sideMenu, closeSideMenu}:any) => {

console.log('bol', sideMenu)

    return(
        <div
            className={`md:hidden md:w-5 w-7 duration-500 opacity-0 cursor-pointer fixed z-20 right-[10%] top-[3%] ${sideMenu ? 'opacity-100' : ''}`}
            onClick={closeSideMenu}
        >
            <svg viewBox="0 0 10 10" width="2em" height="2em" stroke="currentColor" stroke-width="2">
                <line x1="1" y1="1" x2="9" y2="9" />
                <line x1="9" y1="1" x2="1" y2="9" />
            </svg>
        </div>
    )
}

export default BackDrop