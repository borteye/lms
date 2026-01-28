import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Montserrat } from "next/font/google";
import {format} from "date-fns"

export { NuqsAdapter, NextThemesProvider, format };

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
