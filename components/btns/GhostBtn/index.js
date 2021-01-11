import styles from './styles.module.scss';

const CtaBtn = ({children, onClick}) => {
    return (
        <button
            className={styles.btn}
            onClick={onClick}>
            {children}
        </button>
    );
};

export default CtaBtn;
