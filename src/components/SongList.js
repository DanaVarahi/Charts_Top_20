import Song from './Song'

const SongList = ({tracks}) => {
    console.log(tracks)
    const SongDetail = tracks.map(song => {
        
        
        return(
            <Song key={song.id.attributes["im:id"]} artist={song["im:artist"].label} image={song["im:image"][2].label}>{song["im:name"].label}</Song>
        )
    })

    return (
        <>
        <ol>
            {SongDetail}
        </ol>
        </>
    )
}

export default SongList