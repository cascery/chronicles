import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import  { useEffect, useState } from 'react';

const Playing = ({ username}) => {
    const [songTitle, setSongTitle] = useState('Loading...');
  const [artistName, setArtistName] = useState('');
  const [albumCover, setAlbumCover] = useState('');




  useEffect(() => {
    getCurrentlyPlaying(); // Initial fetch when the component mounts

    const intervalId = setInterval(getCurrentlyPlaying, 10000); // Set interval to fetch every 10 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, []);



 



  async function getCurrentlyPlaying() {
    const apiKey = '29496f11d5772e5f06f86f5ac9ad9990';
    const user = username;
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const recentTracks = data.recenttracks.track;
      const currentlyPlaying = recentTracks.find(track => track['@attr'] && track['@attr'].nowplaying);

      if (currentlyPlaying) {
        setSongTitle(currentlyPlaying.name);
        setArtistName(currentlyPlaying.artist['#text']);
        setAlbumCover(currentlyPlaying.image[2]['#text']);
      } else {
        setSongTitle('No song is currently playing');
      }
    } catch (error) {
      console.error('Error fetching currently playing track:', error);
    }
  }


  return (
    <div>
    <p style={{textAlign:'left',padding:'10px'}}>
      
    <FontAwesomeIcon icon={faStar} style={{ marginRight: '2px' }} />

      @{username}</p>
    <div id="currently-playing">
      <img id="album-cover" src={albumCover} alt="Album Cover" />
      <div id="song-info">
        <p id="song-title">{songTitle}</p>
        <p id="artist-name">{artistName}</p>
      </div>
    </div>
  </div>
  );
};

export default Playing;
