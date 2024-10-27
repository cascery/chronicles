import React, { useEffect, useState } from 'react';
import './MusicPlayer.css';

function NewArtists() {
    const [newArtists, setNewArtists] = useState([]);
    const apiKey = '76945e9ce3e987bb4d1109d01f5679ef';
    const username = 'cascery';

    const fetchNewArtists = async () => {
        try {
            // Fetch recent tracks
            const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&format=json&limit=100`);
            const data = await response.json();
            const recentTracks = data.recenttracks.track;

            // Filter new artists based on the timestamp (in Unix time)
            const oneMonthAgo = Math.floor(Date.now() / 1000) - (30 * 24 * 60 * 60);
            const filteredArtists = recentTracks.filter(track => track.date && track.date.uts > oneMonthAgo)
                .map(track => ({
                    name: track.artist['#text'],
                    image: track.image[2]['#text'],
                }));

            // Remove duplicates
            const uniqueArtists = Array.from(new Set(filteredArtists.map(artist => artist.name)))
                .map(name => {
                    return filteredArtists.find(artist => artist.name === name);
                });

            setNewArtists(uniqueArtists);
        } catch (error) {
            console.error('Error fetching new artists:', error);
        }
    };

    useEffect(() => {
        fetchNewArtists();
    }, []);

    return (
        <div className="flex flex-col gap-2 p-6 bg-blue-200 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">New Artists of the Month</h2>
            <ul className="space-y-4">
                {newArtists.map((artist, index) => (
                    <li key={artist.name} className="flex flex-col bg-white rounded-lg shadow-md p-4">
                        <div className="flex items-center">
                            <img
                                src={artist.image}
                                alt={`${artist.name}`}
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <p className="font-medium">{artist.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewArtists;
