import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import theme from "../mui-theme";
import NextNProgress from "nextjs-progressbar";
import HomePage from "@/components/HomePage/HomePage";



export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        options={{
          showSpinner: true,
        }}
        color="red"
      />
      <HomePage />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
