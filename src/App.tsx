function App() {
  return (
    <div className="w-[100vw] h-full relative">
      <video autoPlay preload="auto" loop playsInline muted>
        <source type="video/webm" src={"src/assets/dota.webm"} />
        <source type="video/webm" src={"src/assets/dota.mp4"} />
      </video>
      <div className="w-[100vw] h-[200px] absolute bottom-0 left-0 bg-gradient-to-b from-transparent via-black-70 to-black" />
    </div>
  );
}

export default App;
