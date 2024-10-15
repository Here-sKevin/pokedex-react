import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PokemonContextType {
    value: string;
    setValue: (value: string) => void;
}


const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

interface PokemonProviderProps {
    children: ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
    const [value, setValue] = useState<string>('Default Value');

    return (
        <PokemonContext.Provider value={{ value, setValue }}>
            {children}
        </PokemonContext.Provider>
    );
};

const usePokemonContext = (): PokemonContextType => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
};

export { PokemonProvider, usePokemonContext };
