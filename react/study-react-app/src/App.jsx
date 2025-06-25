import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "100px" }}>
        <div style={{ height: "2000px", background: "linear-gradient(white, #f0f0f0)" }}>
          <p style={{ textAlign: "center", marginTop: "40px" }}>스크롤을 내려보세요 👇</p>
        </div>
      </div>
    </>
  );
}

export default App;
