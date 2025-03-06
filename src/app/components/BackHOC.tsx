'use client';
import { useRouter } from 'next/navigation';

export default function BackHOC({
  children,
}: React.PropsWithChildren) {
  const router = useRouter();
  return (
    <span className="cursor-pointer" onClick={() => router.back()}>
      {children}
    </span>
  );
}
