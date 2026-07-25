import { Metadata } from 'next';
import AiClient from './AiClient';

export const metadata: Metadata = {
  title: 'AI Search Readiness & llms.txt Studio | Screw Wood Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AiAdminPage() {
  return <AiClient />;
}
