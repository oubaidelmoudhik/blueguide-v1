import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import { lime, purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2f81ed",
        },
        secondary: {
            main: "#fafafa",
        },
    },
    typography: {
        body1: {
            fontFamily: '"Poppins", "sans-serif"',
        },
        body2: {
            fontFamily: '"Poppins", "sans-serif"',
        },
        h1: {
            fontSize: "3.5rem",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
        },
        fontWeightLight: 300,
        fontSize: 14,
        h2: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.3rem",
            fontWeight: 700,
            letterSpacing: "0em",
        },
        h3: {
            fontSize: "1.25rem",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            textTransform: "uppercase",
        },
        h4: {
            fontFamily: "'Poppins', sans-serif",
        },
        fontFamily: "'Poppins', sans-serif",
        button: {
            fontWeight: 600,
            textTransform: "capitalize",
        },
    },

    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    width: "90%",
                    borderRadius: 50,
                    padding: "0.1rem 2.2rem",
                },
            },
        },
        // MuiCard: {
        //   styleOverrides: {
        //     root: {
        //       padding: '1rem',
        //     },
        //   },
        // },
    },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Hero />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
