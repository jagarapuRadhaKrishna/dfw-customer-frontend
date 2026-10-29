import EnquiryClient from './EnquiryClient';
import { generateEnquiryMetadata } from '@/lib/metadata-generator';

export const metadata = generateEnquiryMetadata();

export default function EnquiryPage() {
  return <EnquiryClient />;
}
