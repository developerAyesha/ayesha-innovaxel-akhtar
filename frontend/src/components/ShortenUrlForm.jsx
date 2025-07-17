import React, { useState } from 'react';
import { shortenUrl } from '../services/urlService';

const ShortenUrlForm = ({ fetchUrls }) => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await shortenUrl(url);
            setShortUrl(`${data.shortCode}`);
            setUrl('');
            fetchUrls(); // update list
        } catch (error) {
            alert('Error shortening URL');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter long URL" />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && <p>Short URL: <a href={`http://localhost:4000/shorten/${shortUrl}`} >{shortUrl}</a></p>}
        </div>
    );
};

export default ShortenUrlForm;
