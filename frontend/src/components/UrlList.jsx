import React, { useState } from 'react';
import { updateUrl } from '../services/urlService';

const UrlList = ({ urls, fetchUrls }) => {
    const [editId, setEditId] = useState(null);
    const [newUrl, setNewUrl] = useState('');

    const handleUpdate = async (shortCode) => {
        try {
            await updateUrl(shortCode, newUrl);
            setEditId(null);
            setNewUrl('');
            fetchUrls();
        } catch {
            alert('Update failed');
        }
    };

    return (
        <div>
            <h3>All Shortened URLs</h3>
            {urls.map(item => (
                <div key={item.id}>
                    <p>Short Code: {item.shortCode}</p>
                    <p>Original URL: {item.url}</p>
                    {editId === item.id ? (
                        <>
                            <input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
                            <button onClick={() => handleUpdate(item.shortCode)}>Save</button>
                            <button onClick={() => setEditId(null)}>Cancel</button>
                        </>
                    ) : (
                        <button onClick={() => {
                            setEditId(item.id);
                            setNewUrl(item.url);
                        }}>Update</button>
                    )}
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default UrlList;
