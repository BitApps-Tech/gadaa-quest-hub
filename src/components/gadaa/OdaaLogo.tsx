export function OdaaLogo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <img
      src="/odaa-logo.png"
      alt="Oromia Culture and Tourism Bureau"
      className={`object-cover ${className}`}
    />
  );
}
