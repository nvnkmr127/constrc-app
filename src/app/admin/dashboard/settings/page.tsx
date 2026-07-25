import { Metadata } from 'next';
import SettingsClientForm from './SettingsClientForm';

export const metadata: Metadata = {
  title: 'Global SEO Settings | Screw Wood Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminSettingsPage() {
  return <SettingsClientForm />;
}
