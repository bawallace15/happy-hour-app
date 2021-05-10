import '../styles/globals.css'

// This is the entry point for all pages. Component is the active page and
// pageprops are the inputs
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
