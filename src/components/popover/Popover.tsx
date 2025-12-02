import { useState } from "react";

type PopoverProps = {
    direction?: 'top' | 'bottom' | 'left' | 'right';
    content: React.ReactNode;
    children: React.ReactNode;
}

export const Popover = ({ direction = 'bottom', content, children }: PopoverProps) => {
    const [open, setOpen] = useState(false);

    const togglePopover = () => {
        setOpen(!open);
    }

    const getPositionClasses = () => {
        switch (direction) {
            case 'top':
                return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
            case 'bottom':
                return 'top-full left-1/2 -translate-x-1/2 mt-2';
            case 'left':
                return 'right-full top-1/2 -translate-y-1/2 mr-2';
            case 'right':
                return 'left-full top-1/2 -translate-y-1/2 ml-2';
            default:
                return 'top-full left-1/2 -translate-x-1/2 mt-2';
        }
    };

    const getArrowClasses = () => {
        switch (direction) {
            case 'top':
                return 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-white';
            case 'bottom':
                return 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-white';
            case 'left':
                return 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-white';
            case 'right':
                return 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-white';
            default:
                return 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-white';
        }
    };

    return (
        <div className="relative inline-block">
            <div onClick={togglePopover} className="cursor-pointer">
                {children}
            </div>
            {open && (
                <>
                    <div
                        className="fixed inset-0 z-10"
                        onClick={togglePopover}
                    />
                    <div
                        className={`
                            absolute z-20 
                            ${getPositionClasses()}
                            bg-white shadow-lg rounded-lg p-4
                            min-w-[200px]
                            animate-fade-in
                        `}
                    >
                        <div
                            className={`
                                absolute w-0 h-0 
                                border-[8px]
                                ${getArrowClasses()}
                            `}
                        />
                        {content}
                    </div>
                </>
            )}
        </div>
    )
}
