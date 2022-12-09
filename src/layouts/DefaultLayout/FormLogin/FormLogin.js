import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faKey, faUser, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FormLogin() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>Đăng nhập</div>
            <form method="post">
                <label htmlFor={cx('username')}>Tên đăng nhập:</label>
                <input type="text" id={cx('username')} name={cx('username')} placeholder="Enter your username"></input>
                <label htmlFor={cx('password')}>Mật khẩu:</label>
                <input
                    type="password"
                    id={cx('password')}
                    name={cx('password')}
                    placeholder="Enter your password"
                ></input>
                <div className={cx('signin')}>
                    <span>Bạn chưa có tài khoản? </span>
                    <a href="/signin">Đăng kí</a>
                </div>
                <input type="submit" value="Đăng nhập" className={cx('login-btn')}></input>
                <a className={cx('forget-password')} href="/signin">
                    Quên mật khẩu?
                </a>
            </form>
        </div>
    );
}

export default FormLogin;
