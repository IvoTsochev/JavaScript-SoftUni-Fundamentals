function solve(bandName, albumName, songName) {
    
    let songDuration = (albumName.length * bandName.length) * songName.length / 2
    // console.log(albumName.length);
    // console.log(bandName.length);
    // console.log(songName.length);
    
    
    

    let gramophoneSpin = Math.ceil(songDuration / 2.5)

    console.log(`The plate was rotated ${gramophoneSpin} times.`);
    
}

solve("Black Sabath", "Paranoid", "War Pigs");