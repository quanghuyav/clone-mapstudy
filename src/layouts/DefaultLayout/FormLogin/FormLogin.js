import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faKey, faUser, faUserAltSlash } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function FormLogin() {
    return (
        <div className={cx('overlay')}>
            <form>
                <div className={cx('con')}>
                    <header className={cx('head-form')}>
                        <h2>Log In</h2>
                        <p>login here using your username and password</p>
                    </header>
                    <br />
                    <div className={cx('field-set')}>
                        <span className={cx('input-item')}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </span>
                        <input
                            className={cx('form-input')}
                            id="txt-input"
                            type="text"
                            placeholder="UserName"
                            required
                        />
                        <br />
                        <span className={cx('input-item')}>
                            <FontAwesomeIcon icon={faKey} />
                        </span>
                        <input
                            className={cx('form-input')}
                            type="password"
                            placeholder="Password"
                            id="pwd"
                            name="password"
                            required
                        />
                        <span>
                            <i className={cx('fa fa-eye')} aria-hidden="true" type="button" id="eye" />
                        </span>
                        <br />
                        <button className={cx('log-in')}> Log In </button>
                    </div>
                    <div className={cx('other')}>
                        <button className={cx('btn submits frgt-pass')}>Forgot Password</button>
                        <button className={cx('btn submits sign-up')}>
                            Sign Up
                            <i className={cx('fa fa-user-plus')} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormLogin;
