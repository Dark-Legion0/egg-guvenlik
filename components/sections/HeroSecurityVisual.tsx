"use client";
import { useEffect, useRef } from "react";

export default function HeroSecurityVisual() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  return (
    /* Tam ekranı kapla — section'ın arkasında */
    <div style={{
      position: "absolute",
      inset: 0,
      zIndex: 1,
      overflow: "hidden",
    }}>
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/security-guard.png"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
          zIndex: 1,
        }}
      >
        <source src="/videos/Anasayfa.mp4" type="video/mp4"/>
      </video>

      {/* Koyu overlay — yazıları okunur kılar */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(105deg, rgba(1,5,30,.92) 0%, rgba(1,5,30,.75) 40%, rgba(1,5,30,.45) 65%, rgba(1,5,30,.25) 100%)",
      }}/>

      {/* Alt vignette */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "40%", zIndex: 2,
        background: "linear-gradient(to top, rgba(1,5,30,.95) 0%, transparent 100%)",
        pointerEvents: "none",
      }}/>

      {/* Üst vignette — header altı */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "20%", zIndex: 2,
        background: "linear-gradient(to bottom, rgba(1,5,30,.6) 0%, transparent 100%)",
        pointerEvents: "none",
      }}/>
    </div>
  );
}
