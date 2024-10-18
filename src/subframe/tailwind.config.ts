const subframeConfig = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(250, 250, 250)",
          100: "rgb(237, 237, 237)",
          200: "rgb(232, 232, 232)",
          300: "rgb(221, 222, 223)",
          400: "rgb(186, 186, 186)",
          500: "rgb(173, 173, 173)",
          600: "rgb(161, 161, 161)",
          700: "rgb(133, 133, 133)",
          800: "rgb(106, 107, 108)",
          900: "rgb(25, 25, 26)",
        },
        neutral: {
          0: "rgb(255, 255, 255)",
          50: "rgb(250, 250, 250)",
          100: "rgb(245, 245, 245)",
          200: "rgb(239, 240, 241)",
          300: "rgb(225, 227, 229)",
          400: "rgb(203, 204, 205)",
          500: "rgb(153, 155, 159)",
          600: "rgb(114, 115, 116)",
          700: "rgb(82, 84, 86)",
          800: "rgb(74, 76, 79)",
          900: "rgb(56, 58, 62)",
          950: "rgb(45, 46, 52)",
        },
        error: {
          50: "rgb(254, 246, 241)",
          100: "rgb(254, 237, 225)",
          200: "rgb(254, 212, 205)",
          300: "rgb(252, 179, 166)",
          400: "rgb(248, 134, 114)",
          500: "rgb(255, 60, 60)",
          600: "rgb(221, 44, 44)",
          700: "rgb(186, 28, 28)",
          800: "rgb(152, 27, 27)",
          900: "rgb(130, 13, 13)",
        },
        warning: {
          50: "rgb(254, 252, 232)",
          100: "rgb(254, 249, 195)",
          200: "rgb(254, 240, 138)",
          300: "rgb(253, 224, 71)",
          400: "rgb(250, 204, 21)",
          500: "rgb(234, 179, 8)",
          600: "rgb(202, 138, 4)",
          700: "rgb(161, 98, 7)",
          800: "rgb(133, 77, 14)",
          900: "rgb(113, 63, 18)",
        },
        success: {
          50: "rgb(236, 253, 245)",
          100: "rgb(209, 250, 229)",
          200: "rgb(167, 243, 208)",
          300: "rgb(110, 231, 183)",
          400: "rgb(52, 211, 153)",
          500: "rgb(16, 185, 129)",
          600: "rgb(5, 150, 105)",
          700: "rgb(4, 120, 87)",
          800: "rgb(6, 95, 70)",
          900: "rgb(6, 78, 59)",
        },
        "brand-primary": "rgb(95, 39, 252)",
        "default-font": "rgb(25, 25, 26)",
        "subtext-color": "rgb(153, 155, 159)",
        "neutral-border": "rgb(255, 255, 255)",
        white: "rgb(255, 255, 255)",
        "default-background": "rgb(255, 255, 255)",
        prime: "rgb(95, 39, 252)",
        cyan: "rgb(229, 226, 238)",
        "lavender-gray": "rgb(64, 28, 160)",
      },
      fontSize: {
        caption: [
          "10px",
          {
            lineHeight: "14px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        body: [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "12px",
          {
            lineHeight: "20px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "14px",
          {
            lineHeight: "18px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "18px",
          {
            lineHeight: "24px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Inter",
        "caption-bold": "Inter",
        body: "Inter",
        "body-bold": "Inter",
        "heading-3": "Inter",
        "heading-2": "Inter",
        "heading-1": "Inter",
        "monospace-body": "Inter",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        default: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        md: "0px 4px 16px -2px rgba(0, 0, 0, 0.08), 0px 2px 4px -1px rgba(0, 0, 0, 0.08)",
        lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
        overlay:
          "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        DEFAULT: "6px",
        lg: "12px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};

export default subframeConfig;
