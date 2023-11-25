import { useEffect, useState } from 'react';

const useDataLoad = (url) => {
    const [loadedData, setLoadedData] = useState();

    useEffect(() => {
        fetch(`http://localhost:3000/${url}`)
            .then(res => res.json())
            .then(data => setLoadedData(data))
    }, [url])

    return loadedData;
};

export default useDataLoad;