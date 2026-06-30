"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./ShapePlayground.module.css";

type Shape = "square" | "circle" | "triangle";

const SHAPES: Shape[] = ["square", "circle", "triangle"];
const SHAPE_LABELS: Record<Shape, string> = {
  square: "Квадрат",
  circle: "Круг",
  triangle: "Треугольник",
};

const COLORS = ["#4f46e5", "#ef4444", "#f59e0b", "#10b981"];
const INITIAL_POS = { x: 168, y: 112 };

export default function ShapePlayground() {
  const [shape, setShape] = useState<Shape>("square");
  const [color, setColor] = useState(COLORS[0]);
  const [pos, setPos] = useState(INITIAL_POS);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      setPos({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    const onMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    e.preventDefault();
  };

  return (
    <div className={styles.root}>
      <div className={styles.controls}>
        <div className={styles.group}>
          {SHAPES.map((s) => (
            <button
              key={s}
              className={`${styles.btn} ${shape === s ? styles.btnActive : ""}`}
              onClick={() => setShape(s)}
            >
              {SHAPE_LABELS[s]}
            </button>
          ))}
        </div>
        <div className={styles.group}>
          {COLORS.map((c) => (
            <button
              key={c}
              className={`${styles.colorBtn} ${color === c ? styles.colorBtnActive : ""}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
        <button className={styles.resetBtn} onClick={() => setPos(INITIAL_POS)}>
          ↺
        </button>
      </div>

      <div className={styles.canvas}>
        <div
          className={`${styles.shape} ${styles[shape]}`}
          style={{ background: color, left: pos.x, top: pos.y }}
          onMouseDown={onMouseDown}
        />
      </div>
    </div>
  );
}
