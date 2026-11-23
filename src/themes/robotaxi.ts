import dark from './dark.ts'
import light from './light.ts'

// Black and champagne-gold themes used only on the /robotaxi page.
const GOLD = "#c9a45c"
const GOLD_LIGHT = "#dcc18a"

const robotaxiDark = {
  ...dark,
  accent: GOLD,
  color: {
    link: GOLD_LIGHT,
    text: "#f2efe8",
    background: "linear-gradient(160deg, #141310 0%, #070707 40%, #000 100%)",
    fallbackBackground: "#070707",
  },
  card: {
    ...dark.card,
    background: "linear-gradient(141.65deg,#171614 15.17%,#060606 86.5%)",
    boxShadow: "2px 4px 4px rgba(0,0,0,0.6), inset 1px 1px 2px rgba(220,193,138,0.16)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 1)"
    },
    button: {
      text: "#f2efe8",
      primaryText: "#0b0a08",
      background: "#171614",
      boxShadow: {
        primary: "2px 4px 4px rgba(0,0,0,0.6), inset 1px 1px 2px hsla(0,0%,100%,.35)",
        secondary: "2px 4px 4px rgba(0,0,0,0.6), inset 1px 1px 2px rgba(220,193,138,0.2)",
        hover: "linear-gradient(145deg, rgba(0,0,0,0.5), rgba(220,193,138,0.35))"
      },
      hoverIntensity: 0.25
    }
  },
}

// Light variant: warm ivory with deeper gold for contrast on a light background.
const robotaxiLight = {
  ...light,
  accent: "#b08a40",
  color: {
    link: "#8a6a2a",
    text: "#1a1712",
    background: "linear-gradient(160deg, #fbf8f2 0%, #f3ede2 40%, #efe7d8 100%)",
    fallbackBackground: "#f7f2e9",
  },
  card: {
    ...light.card,
    background: "radial-gradient(145% 145.46% at 0% 0%, #fffdf9 0%, #f6f0e5 100%)",
    boxShadow: "2px 4px 10px rgba(120,90,30,0.08), inset 1px 1px 2px hsla(0,0%,100%,0.6)",
    carousel: {
      opacity: 1,
      boxShadow: "-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(60, 45, 15, 0.18)"
    },
    button: {
      text: "#1a1712",
      primaryText: "#0b0a08",
      background: "#f6f0e5",
      boxShadow: {
        primary: "2px 4px 6px rgba(120,90,30,0.15), inset 1px 1px 2px hsla(0,0%,100%,0.45)",
        secondary: "2px 4px 6px rgba(120,90,30,0.08), inset 1px 1px 2px hsla(0,0%,100%,0.6)",
        hover: "linear-gradient(145deg, rgba(0,0,0,0.05), rgba(255,255,255,0.25))"
      },
      hoverIntensity: 1
    }
  },
}

export default { dark: robotaxiDark, light: robotaxiLight }
