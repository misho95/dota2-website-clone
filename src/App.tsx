function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-red-500">
      <video autoPlay preload="auto" loop playsInline controls>
        <source type="video/webm" src={"src/assets/dota.webm"} />
      </video>
    </div>
  );
}

export default App;
