import { createRoot } from "react-dom/client"
import { Fragment } from "react"
const root = createRoot(document.getElementById("root"))

root.render(
    <Fragment> //Same with <> </>
        <Header />
        <Main />
        <Footer />
    </Fragment>
)

function Header() {
    return(
        <header>
            <img src="react-logo.png" alt="React Logo Png" width="40px" />
        </header>
    )
}

function Main() {
    return(
        <main>
            <h1>Why im here?</h1>
            <ol>
                <li>Because i like React!</li>
                <li>Also i want to be a full-stack developer.</li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
    <footer>
        <small>2025 - Mem Robin Çen Development. All rights reserved.</small>
    </footer>
)}
