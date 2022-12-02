import styles from './Home.module.scss';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Iframe from 'react-iframe';

const cx = classNames.bind(styles);

function VideosFree({ videosFree }) {
    const [currentVideo, setCurrentVideo] = useState(videosFree[0]);
    return (
        <div className={cx('row')}>
            <div className={cx('col-75')}>
                <Iframe
                    height="500"
                    width="100%"
                    src={currentVideo.link}
                    title={currentVideo.name}
                    frameborder="0"
                ></Iframe>
            </div>
            <div className={cx('col-25', 'list-videos')}>
                {videosFree.map((video, index) => (
                    <button key={index} className={cx('video', 'row')} onClick={() => setCurrentVideo(video)}>
                        <div className={cx('avatar')}>
                            <img alt="" src={video.avatar}></img>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('name')}>{`${index + 1}. ${video.name}`}</div>
                            <p className={cx('course')}>
                                Khoá học: <a>{video.course}</a>
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default VideosFree;
