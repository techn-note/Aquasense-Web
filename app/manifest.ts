import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AquaSense - Dashboard de Aquapônia",
    short_name: "AquaSense",
    description: "Monitore seu sistema de aquaponia em tempo real",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#003da5",
    icons: [
      {
        src: "/imgs/image-favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
