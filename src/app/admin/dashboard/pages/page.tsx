import { Metadata } from 'next';
import PagesSeoClient from './PagesSeoClient';

export const metadata: Metadata = {
  title: 'Universal Page SEO Editor | Screw Wood Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UniversalPageSeoPage() {
  return <PagesSeoClient />;
}
