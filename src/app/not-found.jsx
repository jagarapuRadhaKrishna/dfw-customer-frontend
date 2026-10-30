import NotFoundError from '@/components/error/NotFoundError';
import { generate404Metadata } from '@/lib/metadata-generator';

export const metadata = generate404Metadata();

export default function NotFound() {
  return <NotFoundError />;
}
