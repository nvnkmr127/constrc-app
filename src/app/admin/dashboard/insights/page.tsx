import { Metadata } from 'next';
import InsightsClient from './InsightsClient';

export const metadata: Metadata = {
  title: 'GSC & GA4 Search Insights | Screw Wood Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function InsightsAdminPage() {
  return <InsightsClient />;
}
