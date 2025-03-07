
import localFont from "next/font/local";

export const pushPenny = localFont({
  src: [
    {
      path: "../public/fonts/PushPenny-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/PushPenny-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PushPenny-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PushPenny-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/PushPenny-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pushPenny",
  display: "swap",
});
