import React from "react";
import YoutubeData from "../data/youtubeSectionData";
import "../styles/modalYoutubeCard.css";

function ModalYoutubeCard({ videoId, onClose }) {
  const selectedVideo = YoutubeData.find((card) => card.id === videoId);

  if (!selectedVideo) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        className="modal-content"
        style={{
          position: "relative",
          width: "80%",
          maxWidth: "800px",
          backgroundColor: "white",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            zIndex: 1001,
            fontSize: "18px",
          }}
        >
          ×
        </button>
        <div style={{ padding: "15px" }}>
          <h3 style={{ margin: 0, fontSize: "28px", fontWeight: "600" }}>
            {selectedVideo.title}
          </h3>
        </div>

        <div
          style={{ position: "relative", paddingBottom: "50.25%", height: 0 }}
        >
          <iframe
            style={{
              zIndex: 1000,
              position: "absolute",
              bottom: 40,
              left: 70,
              width: "80%",
              height: "90%  ",
            }}
            src={selectedVideo.link}
            title={selectedVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video title */}
      </div>
    </div>
  );
}

export default ModalYoutubeCard;
