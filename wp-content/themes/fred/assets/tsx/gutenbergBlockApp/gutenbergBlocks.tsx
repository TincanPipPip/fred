import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './gutenbergBlocks/AppInit'
import { blockContextT } from './types'

export const blockContext = createContext<Partial<blockContextT>>(null);

const root = document.getElementById('gutenbergBlock')

console.log("WEEEEEEEEEEEE")

if (root) {
    const blockName = root.dataset.block || '';

    ReactDOM.render(
        <React.StrictMode>
            <blockContext.Provider value={{ blockName }}>
                <App />
            </blockContext.Provider>
        </React.StrictMode>,
        root
    )
}