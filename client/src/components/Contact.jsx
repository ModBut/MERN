import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {

    const [landLoad, setLandLoad] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchLandLoad = async () => {
            try {
                const res = await fetch(`/server/user/${listing.userRef}`);
                const data = await res.json();
                setLandLoad(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchLandLoad();
    }, [listing.userRef]);

    const onChange = (e) => {
        setMessage(e.target.value);
    }


    return (
        <>
            {landLoad && (
                <div className='flex flex-col gap-2'>
                    <p>Contact
                        <span className='font-semibold'>{landLoad.username}</span> for
                        <span className='font-semibold'> {listing.name.toLowerCase()}</span>
                    </p>
                    <textarea
                        name="message"
                        id="message"
                        rows='2'
                        value={message}
                        onChange={onChange}
                        placeholder='Enter your message here...'
                        className='w-full border p-3 rounded-lg'
                    ></textarea>
                    <Link to={`mailto:${landLoad.email}?subject=Regarding
                    ${listing.name}&body=${message}`}
                        className='bg-slate-700 text-white 
                        text-center p-3 uppercase rounded-lg 
                        hover:opacity-95'
                    >
                        Send Message
                    </Link>
                </div>
            )}
        </>
    )
}
