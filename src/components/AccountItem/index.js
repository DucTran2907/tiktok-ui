import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/45213154960cadf62e0230972d58fb05~c5_100x100.jpeg?x-expires=1659240000&x-signature=fvsSyPsQ24luWLQeHaMq9KlEwd8%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Minh Duc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>tranminhduc</span>
            </div>
        </div>
    );
}

export default AccountItem;
