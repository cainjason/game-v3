import videoUrl from '../../videos/video.mp4';

const VideoItem = () => <video controls><source src={videoUrl} type='video/mp4' /></video>

export default VideoItem;