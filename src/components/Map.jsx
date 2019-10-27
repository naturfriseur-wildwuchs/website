import React from "react";

function Map() {
  return (
    <div style={{ height: `500px`, margin: `1em 0`, borderRadius: `0.5em` }}>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJqzivXqGopkcR_xWXtPmEUKI&key=AIzaSyAEosr_hPbD8NeCiYcBxeHUHtNo-fdVVl4"
        allowFullScreen
      />
    </div>
  );
}

export default Map;
