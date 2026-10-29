import LocationsClient from './LocationsClient';
import { generateLocationsHubMetadata } from '@/lib/metadata-generator';

export const metadata = generateLocationsHubMetadata();

export default function LocationsPage() {
  return <LocationsClient />;
}
