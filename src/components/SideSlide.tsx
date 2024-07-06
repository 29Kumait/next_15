"use client";
import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import { globalTokens as K, spacing, text } from "../app/globalTokens.stylex";



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
                <h3 {...stylex.props(stylesSideSlide.title)}>{card.title}</h3>
                <p {...stylex.props(stylesSideSlide.content)}>{card.content}</p>
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




const sectionBackground = `rgb(${K.backgroundStartRGB}, ${K.backgroundEndRGB})`;
const sectionColor = `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`;
const cardBackground = `rgba(${K.cardR}, ${K.cardG}, ${K.cardB}, 0.1)`;
const cardColor = `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`;
const arrowButtonColorBorderColor = `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`;
const arrowButtonColor = `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`;
const arrowButtonHoverColor = `rgb(${K.foregroundR}, ${K.foregroundG}, ${K.foregroundB})`;





const stylesSideSlide = stylex.create({
  section: {
    backgroundColor: sectionBackground,
    padding: spacing.lg,
    color: sectionColor,
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
    backgroundColor: cardBackground,
    backdropFilter: "blur(10px)",
    borderRadius: K.borderRadius,
    padding: spacing.md,
    margin: spacing.xs,
    color: cardColor,
    flex: `0 0 calc(33.3333% - 2 * ${spacing.xs})`, // 3 cards per row
    boxSizing: "border-box",
    textAlign: "center",
    minHeight: "150px", // Minimum height for consistency
    outline: {
      ":hover": "4px auto -webkit-focus-ring-color",
    },
  },

  title: {
    fontSize: text.sm,
    opacity: 0.7,

    marginBottom: spacing.sm,
  },
  content: {
    fontSize: text.h4,
    fontWeight: 600,
  },
  arrowButton: {
    borderColor: arrowButtonColorBorderColor,
    borderWidth: "1px solid",
    color: arrowButtonColor,
    borderRadius: "19%",
    padding: spacing.sm,
    cursor: "pointer",
    margin: spacing.sm,
    outline: {
      ":hover": "4px auto -webkit-focus-ring-color",
    },
    backgroundColor: {
      default: "transparent",
      ":hover": arrowButtonHoverColor,
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
