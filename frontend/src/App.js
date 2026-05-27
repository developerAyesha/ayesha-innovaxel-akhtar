import React, { useEffect, useState } from 'react';
import { getAllUrls } from './services/urlService';
import ShortenUrlForm from './components/ShortenUrlForm';
import UrlList from './components/UrlList';

function App() {
    const [urls, setUrls] = useState([]);

    const fetchUrls = async () => {
        const data = await getAllUrls();
        setUrls(data);
    };

    useEffect(() => { fetchUrls(); }, []);

    return (
        <div>
            <h1>URL Shortener Frontend</h1>
            <ShortenUrlForm fetchUrls={fetchUrls} />
            <UrlList urls={urls} fetchUrls={fetchUrls} />
        </div>
    );
}

export default App;
