import styles from '@styles/sc-spinner.module.scss';

export const SpinnerLight = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinnerLight} />
  </div>
);

export const SpinnerDark = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinnerDark} />
  </div>
);
