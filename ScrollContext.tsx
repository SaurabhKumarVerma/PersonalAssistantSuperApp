import React, { createContext, useState, useContext } from 'react';

const ScrollContext = createContext({ scrollY: 0, setScrollY: (y: number) => {} });

interface IScrollProvider {
    children: any
}
export const ScrollProvider: React.FC = ({children}: IScrollProvider) => {
    const [scrollY, setScrollY] = useState(0);

    return (
        <ScrollContext.Provider value={{ scrollY, setScrollY }}>
             {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);