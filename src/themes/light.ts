export default {
  hero: {
    background: {
      image: "/background/mv-light.webp",
      // Dims the logo behind the hero text on narrow screens
      overlay: "rgba(244,249,253,0.82)",
    }
  },
  color: {
    link: "#0670c8",
    text: "#0b1a2a",
    background: "linear-gradient(160deg, #f6fbff 0%, #e8f2fb 40%, #e3eef8 100%)",
    fallbackBackground: "#f4f9fd",
  },
  // Gradient for the "Meyer Visions" heading
  headingGradient: "linear-gradient(310deg, #0670c8 0%, #1a8fe8 50%, #38b6f0 100%)",
  card: {
    // background: "#f8f8f8",
    background: "radial-gradient(145% 145.46% at 0% 0%, #ffffff 0%, #f1f7fc 100%)",
    boxShadow: "2px 4px 10px rgba(6,112,200,0.08), inset 1px 1px 2px hsla(0,0%,100%,0.6)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 0.05)"
    },
    button: {
      text: "#0b1a2a",
      background:  "#f1f7fc",
      boxShadow: {
        primary: "2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.25)",
        secondary: "2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.5)",
        // Blue gradient light on hover
        hover: "linear-gradient(120deg, rgba(6,112,200,0.22) 0%, rgba(128,226,248,0.45) 100%)"
      },
      hoverBlend: "normal",
      // Original subtle hover, kept for the hero button
      plainHover: "linear-gradient(145deg, rgba(0,0,0,0.05), rgba(255,255,255,0.2))",
      hoverIntensity: 1
    }
  },
  screen: {
    width: {
      mobile: 360,
      tablet: 600,
      desktop: 980
    },
    padding: {
      mobile: 20,
      tablet: 20,
      desktop: 48
    }
  }
}
