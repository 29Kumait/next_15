"use client";
import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as K, spacing, text } from "../app/globalTokens.stylex";

const stylesSideSlide = stylex.create({
  section: {
    backgroundColor: `rgb(${K.backgroundStartRGB}, ${K.backgroundEndRGB})`,
    padding: spacing.lg,
    color: `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`,
    width: "100%",
  },
  headline: {
    textAlign: "center",
    fontSize: text.h2,
    marginBottom: spacing.md,
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  cardContainer: {
    display: "flex",
    overflow: "hidden",
    width: "100%",
  },
  cards: {
    display: "flex",
    transition: "transform 0.5s ease",
    width: "100%",
  },
  card: {
    backgroundColor: `rgba(${K.cardR}, ${K.cardG}, ${K.cardB}, 0.1)`,
    backdropFilter: "blur(10px)",
    borderRadius: K.borderRadius,
    padding: spacing.md,
    margin: spacing.xs,
    color: `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`,
    flex: `0 0 calc(33.3333% - 2 * ${spacing.xs})`, // 3 cards per row
    boxSizing: "border-box",
    textAlign: "center",
    minHeight: "150px", // Minimum height for consistency
  },
  arrowButton: {
    borderStyle: `1px solid rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`,
    color: `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`,
    borderRadius: "50%",
    padding: spacing.sm,
    cursor: "pointer",
    margin: spacing.sm,
    backgroundColor: {
      default: "transparent",
      ":hover": `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`,
    },
  },
  counter: {
    textAlign: "center",
    marginTop: spacing.md,
  },
  transformDynamic: (currentIndex: number) => ({
    transform: `translateX(-${currentIndex * 100}%)`,
  }),
});

const cards = [
  {
    title: "A-Title",
    content: "a BODY box, TEXT description ...etc..",
  },
  {
    title: "A-Title",
    content: "a BODY box, TEXT description ...etc..",
  },
  {
    title: "A-Title",
    content: "a BODY box, TEXT description ...etc..",
  },
  {
    title: "A-Title",
    content: "a BODY box, TEXT description ...etc..",
  },
  {
    title: "A-Title",
    content: "a BODY box, TEXT description ...etc..",
  },
  {
    title: "A-Title",
    content: "a BODY box, TEXT description ...etc..",
  },
];

const SideSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : Math.ceil(cards.length / 3) - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < Math.ceil(cards.length / 3) - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <div {...stylex.props(stylesSideSlide.section)}>
      <div {...stylex.props(stylesSideSlide.headline)}>HEADLINE</div>
      <div {...stylex.props(stylesSideSlide.navigation)}>

        <div {...stylex.props(stylesSideSlide.cardContainer)}>
          <div
            {...stylex.props(
              stylesSideSlide.cards,
              stylesSideSlide.transformDynamic(currentIndex),
            )}
          >
            {cards.map((card, index) => (
              <div key={index} {...stylex.props(stylesSideSlide.card)}>
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div {...stylex.props(stylesSideSlide.counter)}>
        <button
          {...stylex.props(stylesSideSlide.arrowButton)}
          onClick={handlePrev}
        >
          ←
        </button>
        {currentIndex + 1}/{Math.ceil(cards.length / 3)}
        <button
          {...stylex.props(stylesSideSlide.arrowButton)}
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default SideSlide;
