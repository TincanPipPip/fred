import React, { useEffect, useState, useContext, createContext } from 'react'
import { Data, dataContextT } from '../gutenbergBlockTypes';
// import DataFetch from './Data/DataFetch';
import AppContainer from './AppContainer'
import { blockContext } from '../gutenbergBlocks'

export const dataContext = createContext<Partial<dataContextT>>(null);

/**
 * Get data & prepare app
 */

export default function App() {
    const [loadedBlockData, setLoadedBlockData] = useState<Data>(null);
    const { pageIndex } = useContext(blockContext);
    const siteUrl = window.location.origin

    useEffect(() => {
        const fetchData = async (siteUrl: string) => {
            const response = await fetch(`${siteUrl}/wp-json/wp/v2/pages/${pageIndex}/`)
            const data = await response.json()

            // console.log(data.block_data)

            setLoadedBlockData(data.block_data);
        }

        fetchData(siteUrl);
    }, []);


    return (
        <dataContext.Provider value={{ loadedBlockData }}>
            <AppContainer />
        </dataContext.Provider>
    )
}
