import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './listingApp/AppInit'
import { blockContextT } from './listingAppTypes'

export const blockContext = createContext<Partial<blockContextT>>(null);

const root = document.querySelector('.listingApp') as HTMLElement;

if (root) {
    const blockName = root.dataset.block || '';
    const pageIndex = root.dataset.pageIndex || '';

    ReactDOM.render(
        <React.StrictMode>
            <blockContext.Provider value={{ blockName, pageIndex }}>
                <App />
            </blockContext.Provider>
        </React.StrictMode>,
        root
    )
}