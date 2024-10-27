import React, { useEffect, useState } from 'react';
import './MusicPlayer.css';

function MostM() {
    const [artists, setArtists] = useState([]);
    const apiKey = '76945e9ce3e987bb4d1109d01f5679ef';
    const username = 'cascery';



    
    const fetchTopArtists = async () => {
        try {
            const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=${username}&api_key=${apiKey}&format=json&period=1month`);
            const data = await response.json();
            setArtists(data.topartists.artist);
        } catch (error) {
            console.error('Error fetching top artists:', error);
        }
    };
    

    useEffect(() => {
        fetchTopArtists();
    }, []);

    // Calculate the total play count to get percentages
    const totalPlays = artists.reduce((sum, artist) => sum + parseInt(artist.playcount), 0);

    return (
        <div className="flex flex-col gap-2 p-6 bg-red-200 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Top Artists of the Month</h2>
            <ul className="space-y-4">
                {artists.map((artist, index) => {
                    const playCount = parseInt(artist.playcount);
                    const percentage = ((playCount / totalPlays) * 100).toFixed(1); // Percentage of total plays

                    return (
                        <li 
                          key={artist.name} 
                          className="flex flex-col bg-white rounded-lg shadow-md p-4"
                        >
                            <div className="flex items-center">
                                <span className={`font-bold mr-4 text-lg ${index === 0 ? 'text-yellow-500' : ''}`}>
                                    {index + 1}.
                                </span>
                                <img
                                    src={artist.image[2]['#text']}
                                    alt={`${artist.name}`}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div className="flex flex-col">
                                    <p className="font-medium">{artist.name}</p>
                                    <p className="text-sm text-gray-500">{playCount} plays ({percentage}%)</p>
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div 
                                  className="bg-red-400 h-2 rounded-full" 
                                  style={{ width: `${percentage}%` }} 
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MostM;
