import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  color: string;
};

export default function Card({ title, description, color }: CardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
