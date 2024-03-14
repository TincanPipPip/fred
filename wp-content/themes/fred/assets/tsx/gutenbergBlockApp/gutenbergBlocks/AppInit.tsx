import React, { useEffect, useState } from 'react'
import { Data } from '../types';
import DataFetch from '../Data/DataFetch';
import AppContainer from './AppContainer'

/**
 * Get data, set state & prepare app
 */

export default function App() {
    const [loadedBlockData, setLoadedBlockData] = useState<Data>(null);(null);

    useEffect(() => {
        const fetchData = () => {
            const data = DataFetch() as Data
            setLoadedBlockData(data);
        };

        fetchData();
    }, []);

    return (
        <AppContainer loadedBlockData={loadedBlockData} />
    )
}
