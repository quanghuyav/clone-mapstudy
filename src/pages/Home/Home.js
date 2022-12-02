import ImageGallery from 'react-image-gallery';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import logo from '../../assets/img/logo-vuong.jpg';
import { Link } from 'react-router-dom';
import VideosFree from './VideosFree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Home() {
    // fake api
    const images = [
        {
            original: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/06/20/20220620134219-_20ddvfmkb.png',
            thumbnail: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/06/20/20220620134219-_20ddvfmkb.png',
        },
        {
            original: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/05/20/20220520073415-rngeisfeiw.jpg',
            thumbnail: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/05/20/20220520073415-rngeisfeiw.jpg',
        },
        {
            original: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/06/20/20220620134219-_20ddvfmkb.png',
            thumbnail: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/06/20/20220620134219-_20ddvfmkb.png',
        },
        {
            original: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/05/20/20220520073415-rngeisfeiw.jpg',
            thumbnail: 'https://cdn-mapstudy.cdn.vccloud.vn/banners/2022/05/20/20220520073415-rngeisfeiw.jpg',
        },
    ];
    const coursesHighSchool = [
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            name: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/11/16/20221116074627-bff4oldypl.jpg',
            name: 'Tiền Giải Đề 2023 - Môn Vật Lý',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520095611-giuj7wpwfo.png',
            name: 'Cơ bản và Nâng cao Toán Lớp 11',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070013-xoi5mz43te.png',
            name: 'Cơ bản và Nâng cao Vật Lý Lớp 11',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070209-qetbg1lc7u.png',
            name: 'Cơ bản và Nâng cao Vật Lý Lớp 10',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/06/27/20220627043111-gvfdou-yu-.png',
            name: 'Cơ bản và Nâng cao Toán 10',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/10/28/20221028081701-7nn0gtaywj.jpg',
            name: 'Chinh phục chương 3 - Điện Xoay Chiều',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/11/02/20221102085001-_zmcci7ole.jpg',
            name: 'Luyện thi Đánh Giá Năng Lực',
        },
    ];
    const coursesJuniorSchool = [
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            name: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
        },
        {
            image: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/11/16/20221116074627-bff4oldypl.jpg',
            name: 'Tiền Giải Đề 2023 - Môn Vật Lý',
        },
    ];
    const videosFree = [
        {
            name: 'Mối quan hệ x - v - a',
            course: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
            avatar: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            link: 'https://www.youtube.com/embed/6JR8ZruHsoM',
        },
        {
            name: 'Luyện tập - Mối quan hệ x - v - a',
            course: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
            avatar: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            link: 'https://www.youtube.com/embed/8ZGs6lbrJd4',
        },
        {
            name: 'Luyện tập - Mối quan hệ x - v - a',
            course: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
            avatar: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            link: 'https://www.youtube.com/embed/8ZGs6lbrJd4',
        },
        {
            name: 'Luyện tập - Mối quan hệ x - v - a',
            course: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
            avatar: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            link: 'https://www.youtube.com/embed/8ZGs6lbrJd4',
        },
        {
            name: 'Luyện tập - Mối quan hệ x - v - a',
            course: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
            avatar: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            link: 'https://www.youtube.com/embed/8ZGs6lbrJd4',
        },
        {
            name: 'Luyện tập - Mối quan hệ x - v - a',
            course: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
            avatar: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            link: 'https://www.youtube.com/embed/8ZGs6lbrJd4',
        },
        {
            name: 'Luyện tập - Mối quan hệ x - v - a',
            course: 'Khoá Luyện Thi THPT Môn Vật Lý Năm 2023',
            avatar: 'https://cdn-mapstudy.cdn.vccloud.vn/classroom/2022/05/20/20220520070052-iqyqv0p1v4.png',
            link: 'https://www.youtube.com/embed/8ZGs6lbrJd4',
        },
    ];

    //setstate

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className={cx('col-75', 'gallery')}>
                    <ImageGallery items={images} autoPlay={true} showThumbnails={false} />
                </div>
                <div className={cx('col-25', 'info')}>
                    <div className={cx('info-header')}>
                        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
                        Tư vấn 24/7
                    </div>
                    <div className={cx('row', 'info-item')}>
                        <div className={cx('col-25', 'info-item-avatar')}>
                            <img src={logo} alt="logo"></img>
                        </div>
                        <div className={cx('col-75', 'info-item-content')}>
                            <div className={cx('title')}>Tư vấn chuyên môn</div>
                            <a href="tel:0978.739.566" className={cx('contact')}>
                                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                                0978.739.566
                            </a>
                            <a
                                href="https://www.messenger.com/t/1415260232108563"
                                className={cx('contact')}
                                target="blank"
                            >
                                <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} />
                                m.me/vungocanh
                            </a>
                        </div>
                    </div>
                    <div className={cx('row', 'info-item')}>
                        <div className={cx('col-25', 'info-item-avatar')}>
                            <img src={logo} alt="logo"></img>
                        </div>
                        <div className={cx('col-75', 'info-item-content')}>
                            <div className={cx('title')}>Tư vấn chuyên môn</div>
                            <a href="tel:0978.739.566" className={cx('contact')}>
                                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                                0978.739.566
                            </a>
                            <a
                                href="https://www.messenger.com/t/1415260232108563"
                                className={cx('contact')}
                                target="blank"
                            >
                                <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '5px' }} />
                                m.me/vungocanh
                            </a>
                        </div>
                    </div>
                    <div className={cx('row', 'hotline')}>Hotline: 0978.739.566</div>
                </div>
            </div>
            <div className={cx('group-title')}>TOÁN VÀ VẬT LÝ KHỐI THPT</div>
            <div className={cx('row', 'courses')}>
                {coursesHighSchool.map((course, index) => (
                    <div key={index} className={cx('col-25', 'course-item')}>
                        <Link to={'/course'}>
                            <img className={cx('course-image')} src={course.image} alt="ảnh"></img>
                            <div className={cx('course-name')}>{course.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={cx('group-title')}>VẬT LÝ TRUNG HỌC CƠ SỞ</div>
            <div className={cx('row', 'courses')}>
                {coursesJuniorSchool.map((course, index) => (
                    <div key={index} className={cx('col-25', 'course-item')}>
                        <Link to={'/course'}>
                            <img className={cx('course-image')} src={course.image} alt="ảnh"></img>
                            <div className={cx('course-name')}>{course.name}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className={cx('group-title')}>VIDEO MIỄN PHÍ</div>
            <VideosFree videosFree={videosFree} />
        </div>
    );
}

export default Home;
