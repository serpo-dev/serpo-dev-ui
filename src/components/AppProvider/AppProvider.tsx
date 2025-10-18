import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import Modal from '../Modal/Modal';
import { ToastContainer } from '../Toast/ToastContainer';

type AppContextType = {
    openModal: (content: React.ReactNode, options?: { title?: string }) => void;
    closeModal: () => void;
    pushToast: (message: string, duration?: number) => void;
    toggleTheme: () => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useApp must be used within AppProvider');
    return ctx;
}

export const AppProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

    const openModal = useCallback((content: React.ReactNode, options?: { title?: string }) => {
        setModalContent(content);
        setModalTitle(options?.title);
        setModalOpen(true);
    }, []);
    const closeModal = useCallback(() => setModalOpen(false), []);
    const pushToast = useCallback((message: string, duration?: number) => {
        // small helper that uses global API in ToastContainer
        (window as any).appToasts?.push(message, duration ?? 3500);
    }, []);

    const toggleTheme = useCallback(() => {
        const current = document.documentElement.getAttribute('data-theme') === 'dark';
        document.documentElement.setAttribute('data-theme', current ? 'light' : 'dark');
        try {
            localStorage.setItem('app-theme', current ? 'light' : 'dark');
        } catch { }
    }, []);

    const value = useMemo(
        () => ({ openModal, closeModal, pushToast, toggleTheme }),
        [openModal, closeModal, pushToast, toggleTheme]
    );

    return (
        <AppContext.Provider value={value}>
            {children}
            <Modal open={modalOpen} onClose={closeModal} title={modalTitle}>
                {modalContent}
            </Modal>
            <ToastContainer />
        </AppContext.Provider>
    );
};
