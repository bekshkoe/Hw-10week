const artists = [
    {
      name: "Michael Jackson",
      songs: ["Thriller", "Billie Jean", "Beat It"]
    },
    {
      name: "Billie Eilish",
      songs: ["Bad Guy", "Ocean Eyes", "Lovely", "Bury a Friend"]
    },
    {
      name: "Kairat Nurtas",
      songs: ["Shugyla", "Altyn", "Sensiz"]
    }
  ];
  artists[2].songs[1] = "Baika";
  const firstArtist = artists[0];
  console.log(`Artist: ${firstArtist.name}, Last Song: ${firstArtist.songs[firstArtist.songs.length - 1]}`);
  const billieEilish = artists.find(artist => artist.name === "Billie Eilish");
  const shortSongs = billieEilish.songs.filter(song => song.length <= 6);
  console.log(`Artist: ${billieEilish.name}, Short Songs: ${shortSongs}`);
