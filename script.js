function addSong(event) {
    event.preventDefault();
  
    const songInput = document.querySelector('.playlist-form input[type="text"]');
    const songName = songInput.value;
  
    if (songName.trim() !== '') {
      const songList = document.querySelector('.song-list');
      const newSongItem = document.createElement('li');
      newSongItem.className = 'song-list-item';
      newSongItem.innerHTML = `
        <img src="images/default.png" alt="${songName}">
        <span>${songName}</span>
      `;
      songList.appendChild(newSongItem);
  
      songInput.value = '';
    }
  }
  