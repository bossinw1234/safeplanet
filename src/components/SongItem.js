import './SongItem.css'
function SongItem(props){
    const {song, onSongClick}= props;
    return (
        <div className="song-item">
            <img src={song.thumbnailURL} onClick={() =>{onSongClick(song)} }></img>
            <h4> {song.title}</h4>
        </div>
    )
}

export default SongItem;