import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logoData = readFileSync(join(process.cwd(), "public/logo-mark.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070d",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(77,127,255,0.35), transparent 50%), radial-gradient(circle at 80% 30%, rgba(155,107,255,0.3), transparent 50%), radial-gradient(circle at 50% 90%, rgba(47,230,216,0.25), transparent 50%)",
        }}
      >
        <img src={logoSrc} width={520} height={140} style={{ objectFit: "contain", marginBottom: 28 }} alt="" />
        <div style={{ display: "flex", fontSize: 30, color: "#a4adc4" }}>
          Flexible Streaming Plans &amp; Support
        </div>
      </div>
    ),
    { ...size }
  );
}
