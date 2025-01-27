import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        wave: "wave 3s linear infinite",
        wave2: "wave 5s linear infinite reverse",
        wave3: "wave 7s linear infinite",
        ball: "ball 1.5s ease-in-out infinite alternate",
        drop1: "drop 5s ease infinite normal",
        drop2: "drop 3s ease infinite normal 3s",
        drop3: "drop 3.4s ease infinite normal -2s",
      },
      keyframes: {
        wave: {
          to: { transform: "translateX(-100%)" },
        },
        ball: {
          to: { transform: "translateY(20%)" },
        },
        drop: {
          "0%": {
            transform: "translateY(80%)",
            opacity: 0.6,
          },
          "80%": {
            transform: "translateY(80%)",
            opacity: 0.6,
          },
          "90%": {
            transform: "translateY(10%)",
            opacity: 0.6,
          },
          "100%": {
            transform: "translateY(0%) scale(1.5)",
            "stroke-width": "0.2",
            opacity: 0,
          },
        },
      },
    },
  },
};
