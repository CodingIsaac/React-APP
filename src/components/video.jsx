import ReactPlayer from "react-player";

function VideoPlayer () {
    const vidUrl = "https://www.youtube.com/watch?v=IomUbnnjm2c"
    return (
        <div className="App">
            <h1>React Player Example</h1>
            <ReactPlayer 
            url={vidurl}
            playing={true}
            volume={1}
            loop={true}
            
            />
        </div>
      );
}

export default VideoPlayer ;