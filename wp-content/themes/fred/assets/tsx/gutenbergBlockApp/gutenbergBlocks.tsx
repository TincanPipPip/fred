import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './gutenbergBlocks/AppInit'
import { blockContextT } from './gutenbergBlockTypes'

export const blockContext = createContext<Partial<blockContextT>>(null);

const root = document.querySelector('.gutenbergBlock') as HTMLElement;

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