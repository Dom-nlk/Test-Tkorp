import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.iran.liara.run', // Pour mettre des images venant de ce domaine
        pathname: '/public/**', // Le chemin après le hostname. Le '/**' signifie "n'importe quel sous-chemin"
      },
    ],
  },
};

export default nextConfig;
