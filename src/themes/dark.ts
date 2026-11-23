export default {
  hero: {
    background: {
      image: "/background/mv-dark.webp",
      // Dims the logo behind the hero text on narrow screens
      overlay: "rgba(7,13,24,0.8)",
    }
  },
  color: {
    link: "#4fd8f5",
    text: "#eaf4ff",
    background: "linear-gradient(160deg, #0c1626 0%, #070d18 40%, #05090f 100%)",
    fallbackBackground: "#070d18",
  },
  // Gradient for the "Meyer Visions" heading, from the logo's light blue
  headingGradient: "linear-gradient(120deg, #80e2f8 0%, #4cc3f5 45%, #2f8fff 100%)",
  card: {
    // background: "#141414",
    background: "linear-gradient(141.65deg,#0e1a2b 15.17%,#060b14 86.5%)",
    // background: "linear-gradient(135deg, #111 0%, #000 100%)",
    boxShadow: "2px 4px 4px rgba(0,0,0,0.5), inset 1px 1px 2px rgba(92,242,247,0.18)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 1)"
    },
    button: {
      // Every button in dark mode uses the logo gradient with dark text
      text: "#04121f",
      primaryText: "#04121f",
      // Original non-gradient style, kept for the hero button
      plainText: "#eaf4ff",
      plainBackground: "#0e1a2b",
      primaryBackground: "linear-gradient(120deg, #80e2f8 0%, #4cc3f5 50%, #2f8fff 100%)",
      background: "linear-gradient(120deg, #80e2f8 0%, #4cc3f5 50%, #2f8fff 100%)",
      boxShadow: {
        primary: "2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",
        secondary: "2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",
        hover: "linear-gradient(145deg, rgba(0,0,0,0.5), rgba(92,242,247,0.35))"
      },
      hoverIntensity: 0.25
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
