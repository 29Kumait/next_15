"use client";
import React from "react";
import Image from "next/image";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as K, spacing, text } from "../app/globalTokens.stylex";

const DARK_MODE = "@media (prefers-color-scheme: dark)";
const MOBILE = "@media (max-width: 1024px)";

const fadeIn = stylex.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const styles = stylex.create({
  grid: {
    display: "grid",
    gap: spacing.md,
    gridTemplateColumns: {
      default: "repeat(3, 1fr)",
      [MOBILE]: "repeat(1, 1fr)",
    },
    padding: spacing.lg,
    boxShadow: {
      default:
        "0 6px 10px rgba(0, 0, 0, 0.2), inset 0 1px 3px rgba(255, 255, 255, 0.2)",
      [DARK_MODE]:
        "0 6px 10px rgba(0, 0, 0, 0.8), inset 0 1px 3px rgba(0, 0, 0, 0.4)",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    padding: spacing.lg,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: K.borderRadius,
    backdropFilter: "blur(10px)",
    backgroundColor: {
      default: "rgba(255, 255, 255, 0.1)",
      [DARK_MODE]: "rgba(0, 0, 0, 0.2)",
    },

    boxShadow: {
      default:
        "0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 3px rgba(255, 255, 255, 0.1)",
      [DARK_MODE]:
        "0 4px 6px rgba(0, 0, 0, 0.6), inset 0 1px 3px rgba(0, 0, 0, 0.2)",
    },
    color: {
      default: "rgba(0,0,0,0.72)",
      [DARK_MODE]: "rgba(255, 255, 255, 0.8)",
    },
    transition: "transform 0.3s, box-shadow 0.3s",

    transform: {
      ":active": "scale(0.9)",
      ":hover": "translateY(-5px)",
    },
    outline: {
      ":hover": "4px auto -webkit-focus-ring-color",
    },
    animationName: fadeIn,
    animationDuration: "1s",
  },
  icon: {
    fontSize: "2rem",
    marginBottom: spacing.sm,
    position: "relative",
    fontFamily: "sans-serif",
    top: {
      default: 0,
      [MOBILE]: spacing.xxxs,
    },
  },
  title: {
    fontSize: text.h4,
    fontWeight: 600,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: text.sm,
    opacity: 0.7,
  },
});

const CardGrid = () => (
  <div {...stylex.props(styles.grid)}>
    {gridCard.map((card, index) => (
      <div key={index} {...stylex.props(styles.card)}>
        <div {...stylex.props(styles.icon)}>{card.icon}</div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/beta.png"
          alt="  Logo"
          width={180}
          height={37}
          priority
        />
        <h3 {...stylex.props(styles.title)}>{card.title}</h3>
        <p {...stylex.props(styles.description)}>{card.description}</p>
      </div>
    ))}
  </div>
);

export default CardGrid;

const gridCard = [
  {
    icon: "",
    title: "A-Title",
    description: "a BODY box, TEXT description ...etc..",
  },
  {
    icon: "",
    title: "A-Title",
    description: "a BODY box, TEXT description ...etc..",
  },
  {
    icon: "",
    title: "A-Title",
    description: "a BODY box, TEXT description ...etc..",
  },
  {
    icon: "",
    title: "A-Title",
    description: "a BODY box, TEXT description ...etc..",
  },
  {
    icon: "",
    title: "A-Title",
    description: "a BODY box, TEXT description ...etc..",
  },
  {
    icon: "",
    title: "A-Title",
    description: "a BODY box, TEXT description ...etc..",
  },
];
