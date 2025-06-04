import Image from "next/image";

function LoadingPage() {
  return (
    <>
      <div className="loading-overlay">
        <div className="spinner-container">
          <div className="spinner"></div>
          <div className="loading-text">Yüklənir...</div>
          <Image
            src="/dynamexLogo.svg"
            alt="Dynamex Logo"
            width={200}
            height={50}
          />
        </div>
      </div>
    </>
  );
}

export default LoadingPage;
