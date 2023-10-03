import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container fluid">
        {" "}
        <div className="contrastContainer" style={{ width: "50rem" }}>
          <section className="pageContent">
            <header className="App-header">
              <img src={logo} className="App-logo img-fluid" alt="logo" />
              <h1 className="text-center appName mt-5 mb-5">
                The Pink Dictionary{" "}
              </h1>
            </header>

            <main>
              <Dictionary defaultKeyword="Pink" />
            </main>

            <footer className="text-center">
              Coded by{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://uk.linkedin.com/in/nyasha-tavatya-534581204?challengeId=AQFMzbsFVlvN7AAAAYqqAKP3pzKay_2chmRrHnq1NeqJLlT8kIewtEI4k60mMAuumrameH9TxAJh7W3_ttPqDOyJ4NKyGH8uog&submissionId=eef22730-8818-8617-f995-f69c30444701&challengeSource=AgEQ-0ZEpbRkzAAAAYqqAOqnDEr4Wr6sChiP-cHOeKNRtd_o6rEB4VRCQE8EE6I&challegeType=AgEgoTUluUzbLQAAAYqqAOqq9Claav6ahVaWwIBaZbt7TLl1J_9wfHs&memberId=AgFG0E2JyN6SIQAAAYqqAOqunUHN9vP7qEBvSLASXjMZYzQ&recognizeDevice=AgHRcuSmekVUMQAAAYqqAOqxC6TX4JwTlX3nHqxAkXYflArwlRAp"
              >
                Nyasha Tavatya
              </a>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}
