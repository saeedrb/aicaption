import styles from "./HomePageBanner.module.css";

const HomePageBanner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>ایده های خود را به واقعیت تبدیل کنید.</span>
      </div>
      <div>
        <p>محتوای شگفت انگیز با هوش مصنوعی بسازید</p>
      </div>
      <div>
        <p>
          از قدرت هوش مصنوعی برای تولید محتوای با کیفیت در چند ثانیه استفاده
          کنید. از پست‌های وبلاگ تا کپشن‌های شبکه‌های اجتماعی، همه چیز را پوشش
          می‌دهیم.
        </p>
      </div>
    </div>
  );
};

export default HomePageBanner;
