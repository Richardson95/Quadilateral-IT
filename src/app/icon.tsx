import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg,#3563ff,#a855f7 55%,#22d3ee)",
        }}
      >
        <div
          style={{
            width: 26,
            height: 26,
            background: "#05060d",
            transform: "rotate(45deg)",
            borderRadius: 4,
          }}
        />
      </div>
    ),
    size,
  );
}
