import { Icon } from "@/components/Elements/Icon/Icon";
import styles from "./Features.module.css";

const Features: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>ویژگی‌ها</span>
      </div>
      <div className={styles.cards}>
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
};

const FeatureCard: React.FC = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <Icon icon="book-open" prefix="sarv" />
        </div>
        <div className={styles.cardTitle}>
          <span>عنوان ویژگی</span>
        </div>
        <div className={styles.cardDescription}>
          <p>
            این یک توضیح نمونه برای ویژگی است که مزایا و کاربردهای آن را توضیح
            می‌دهد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
