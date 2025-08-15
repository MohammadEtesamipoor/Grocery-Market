import {createContext, ReactNode, useContext, useState} from 'react';

const ModalContext = createContext({
    isModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
});
export const useModal=()=>useContext(ModalContext);

export  function ModalProvider({ children }: { children: ReactNode }) {
    const[showModal, setShowModal] = useState<boolean>(false);
    const openModal = () => {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return(
    <ModalContext.Provider value={{isModalOpen:showModal,openModal:openModal,closeModal:closeModal}}>
        {children}
    </ModalContext.Provider>
    )
}