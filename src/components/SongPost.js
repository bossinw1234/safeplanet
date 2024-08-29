import './SongPost.css';

function SongPost(props){
    const { song, onBgClick } = props;
    return(
        <div className="song-post">
            <div className="song-post-bg" onClick={onBgClick}></div>
            <div className="song-post-content">
                <img src={song.thumbnailURL}></img>
                <h4>{song.title}</h4>
            </div>
        </div>
    )
}

export default SongPost;
