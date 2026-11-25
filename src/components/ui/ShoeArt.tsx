interface ShoeArtProps {
  upper: string;
  sole: string;
  accent: string;
  className?: string;
}

/** Illustrated placeholder — swap for real photography via `Product.image`. */
export function ShoeArt({ upper, sole, accent, className }: ShoeArtProps) {
  return (
    <svg className={className} viewBox="0 0 200 100" role="img" aria-label="Sneaker illustration">
      <path d="M8 72q0-10 14-10h148q22 0 22 14 0 10-12 10H24Q8 86 8 72Z" fill={sole} />
      <path d="M22 62 30 30q10-14 32-6l28 14q30 8 60 14 28 6 36 16l-8 4Z" fill={upper} />
      <path d="M58 56q44-22 96 2" stroke={accent} strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M70 34l12 6m-8-12 12 6" stroke={sole} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
