import "../../styles/spinner.css";
import Image from "next/image";
export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div className="spinner"></div>
      <div className="loading-logo">
        <Image
          src="dynamexLogo.svg"
          width={200}
          height={200}
          alt="Loading-image"
        />
      </div>
    </div>
  );
}
