export default function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.5 19.79 19.79 0 01.84 4.86 2 2 0 012.83 2.68h3a2 2 0 012 1.72c.13.97.37 1.91.7 2.81a2 2 0 01-.45 2.11L7.09 10.1a16 16 0 006.77 6.77l1.5-.96a2 2 0 012.11-.45c.9.33 1.84.57 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}
