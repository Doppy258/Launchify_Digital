import { Metadata } from "next"
import LaunchifyDigitalClientPage from "@/components/LaunchifyDigitalClientPage";

export const metadata: Metadata = {
  title: "Launchify Digital | Toronto's #1 Web Development & Digital Marketing Agency",
  description: 
    "Launchify Digital is Toronto's premier web development & digital marketing agency specializing in high-performance websites and results-driven digital strategies.",
  keywords: ['Launchify Digital', 'Launchified Digital', 'Toronto web agency', 'Toronto digital marketing'],
  alternates: {
    canonical: '/launchify-digital',
  },
}

export default function LaunchifyDigitalPage() {
  return <LaunchifyDigitalClientPage />;
} 