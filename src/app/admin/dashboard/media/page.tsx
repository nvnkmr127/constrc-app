import { Metadata } from 'next';
import MediaClient from './MediaClient';

export const metadata: Metadata = {
  title: 'Image SEO & Dynamic OG Generator | Screw Wood Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MediaAdminPage() {
  return <MediaClient />;
}
