import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import styles from './DefaultLayout.module.scss';
import logo from '../../assets/img/mainlogo.png';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            {/* Header */}
            <div className={cx('wrapper-mg')}>
                <div className={cx('header')}>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" height={70}></img>
                    </Link>
                </div>
            </div>
            {/* Menu */}
            <div className={cx('menu')}>
                <div className={cx('wrapper-mg')}>
                    <Link to={'/'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Trang chủ
                    </Link>
                    <Link to={'/course'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Khoá học
                    </Link>
                    <Link to={'/buybook'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Mua sách
                    </Link>
                    <Link to={'/testonline'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Thi online
                    </Link>
                    <Link to={'/rank'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Bảng xếp hạng
                    </Link>
                    <Link to={'/document'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Tài liệu
                    </Link>
                    <Link to={'/login'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Đăng nhập
                    </Link>
                    <Link to={'/signin'} className={cx('menu-item')}>
                        <FontAwesomeIcon icon={faHouse} className={cx('icon')} />
                        Đăng ký
                    </Link>
                </div>
            </div>

            <div className={cx('wrapper-mg')}>{children}</div>

            {/* Footer */}

            <div className={cx('footer')}>
                <svg
                    className={cx('footer-top')}
                    fill="#0c78da"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1920 148"
                >
                    <defs />
                    <path
                        className="cls-1"
                        d="M1920,148H0L71.8,29.4A90.2,90.2,0,0,1,203.7,28l8.3,8.7a90.2,90.2,0,0,0,133-2.7l.2-.2a90.2,90.2,0,0,1,134.4-1.3l2.5,2.7a90.2,90.2,0,0,0,133.2,0l3.8-4.2a90.2,90.2,0,0,1,133.2,0l3.9,4.3a90.2,90.2,0,0,0,133.1.1l4.2-4.6a90.2,90.2,0,0,1,133,0l4.1,4.5a90.2,90.2,0,0,0,133.2-.2l3.7-4a90.2,90.2,0,0,1,133.2-.2l4.1,4.5a90.2,90.2,0,0,0,133,0l2.8-3.1A90.2,90.2,0,0,1,1575,33.8h0a90.2,90.2,0,0,0,133.1,2.9l8.3-8.7a90.2,90.2,0,0,1,131.9,1.5Z"
                        transform="translate(0 0)"
                    />
                    <path
                        className="cls-2"
                        d="M1920,148H0L71.8,49.4A90.2,90.2,0,0,1,203.7,48l8.3,8.7a90.2,90.2,0,0,0,133-2.7l.2-.2a90.2,90.2,0,0,1,134.4-1.3l2.5,2.7a90.2,90.2,0,0,0,133.2,0l3.8-4.2a90.2,90.2,0,0,1,133.2,0l3.9,4.3a90.2,90.2,0,0,0,133.1.1l4.2-4.6a90.2,90.2,0,0,1,133,0l4.1,4.5a90.2,90.2,0,0,0,133.2-.2l3.7-4a90.2,90.2,0,0,1,133.2-.2l4.1,4.5a90.2,90.2,0,0,0,133,0l2.8-3.1A90.2,90.2,0,0,1,1575,53.8h0a90.2,90.2,0,0,0,133.1,2.9l8.3-8.7a90.2,90.2,0,0,1,131.9,1.5Z"
                        transform="translate(0 0)"
                    />
                    <path
                        className="cls-3"
                        d="M1920,148H0L71.8,69.4A90.2,90.2,0,0,1,203.7,68l8.3,8.7a90.2,90.2,0,0,0,133-2.7l.2-.2a90.2,90.2,0,0,1,134.4-1.3l2.5,2.7a90.2,90.2,0,0,0,133.2,0l3.8-4.2a90.2,90.2,0,0,1,133.2,0l3.9,4.3a90.2,90.2,0,0,0,133.1.1l4.2-4.6a90.2,90.2,0,0,1,133,0l4.1,4.5a90.2,90.2,0,0,0,133.2-.2l3.7-4a90.2,90.2,0,0,1,133.2-.2l4.1,4.5a90.2,90.2,0,0,0,133,0l2.8-3.1A90.2,90.2,0,0,1,1575,73.8h0a90.2,90.2,0,0,0,133.1,2.9l8.3-8.7a90.2,90.2,0,0,1,131.9,1.5Z"
                        transform="translate(0 0)"
                    />
                </svg>
                <div className={cx('footer-content')}>
                    <div className={cx('wrapper-mg')}>
                        <div className={cx('row')}>
                            <div className={cx('col-50')}>
                                <div className={cx('title')}>MAPSTUDY - ĐỊNH VỊ TRI THỨC - DẪN LỐI TƯ DUY</div>
                                <p>Địa chỉ: Số 24B/02/144 Quan Nhân, Thanh Xuân, Hà Nội</p>
                                <p>Chịu trách nhiệm nội dung : Vũ Ngọc Anh</p>
                                <p>Email: vna@gmail.com</p>
                                <p>Hotline : 0978.739.566</p>
                            </div>
                            <div className={cx('col-25')}>
                                <div className={cx('title')}>Về VNA</div>
                                <p>Giới thiệu</p>
                                <p>Học sinh tiêu biểu</p>
                                <p>Điều khoản chính sách</p>
                            </div>
                            <div className={cx('col-25')}>
                                <div className={cx('title')}>Dành cho học viên</div>
                                <p>Điều khoản chung</p>
                                <p>Chính sách bảo mật thông tin</p>
                                <p>Hình thức thanh toán</p>
                                <p>Chính sách hoàn tiền</p>
                                <p>Hướng dẫn sử dụng</p>
                            </div>
                        </div>
                        <div className={cx('row', 'icon')}>
                            <div>
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
