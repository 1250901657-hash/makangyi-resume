import { useId } from "react";

type BrandIpProps = {
  size?: "sm" | "md" | "lg";
  showSatellites?: boolean;
  className?: string;
};

const sizeClassMap: Record<NonNullable<BrandIpProps["size"]>, string> = {
  sm: "w-16 md:w-20",
  md: "w-28 md:w-36",
  lg: "w-[18rem] sm:w-[22rem] xl:w-[26rem]",
};

export function BrandIp({
  size = "md",
  showSatellites = true,
  className = "",
}: BrandIpProps) {
  const suffix = useId().replace(/:/g, "");
  const orbGradientId = `brand-orb-${suffix}`;
  const baseGradientId = `brand-base-${suffix}`;
  const lineGradientId = `brand-line-${suffix}`;
  const glowGradientId = `brand-glow-${suffix}`;
  const clipId = `brand-clip-${suffix}`;

  return (
    <div
      className={`relative aspect-square ${sizeClassMap[size]} ${className} [animation:float-wide_14s_ease-in-out_infinite]`}
    >
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(255,142,24,0.24),transparent_56%)] blur-3xl" />
      <svg viewBox="0 0 640 640" className="relative z-10 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id={orbGradientId} cx="42%" cy="28%">
            <stop offset="0%" stopColor="#ffe1a0" />
            <stop offset="36%" stopColor="#ffb03a" />
            <stop offset="72%" stopColor="#ff7a00" />
            <stop offset="100%" stopColor="#e33a00" />
          </radialGradient>
          <linearGradient id={baseGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e2caa" />
            <stop offset="58%" stopColor="#09196a" />
            <stop offset="100%" stopColor="#050e42" />
          </linearGradient>
          <linearGradient id={lineGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.16" />
          </linearGradient>
          <radialGradient id={glowGradientId} cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fff1cf" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff1cf" stopOpacity="0" />
          </radialGradient>
          <clipPath id={clipId}>
            <circle cx="320" cy="346" r="165" />
          </clipPath>
        </defs>

        {showSatellites ? (
          <g className="[animation:float-gentle_13s_ease-in-out_infinite]">
            <g transform="translate(132 138)" fill="#102a89">
              <circle cx="34" cy="34" r="34" fill="#18328f" />
              <circle cx="18" cy="25" r="6" fill="#ffb14f" />
              <circle cx="20" cy="48" r="5" fill="#ffb14f" />
              <circle cx="44" cy="18" r="6" fill="#fff8ef" />
              <circle cx="52" cy="48" r="8" fill="#ff9a2d" />
              <circle cx="24" cy="62" r="6" fill="#526fce" />
              <path
                d="M54 48l20-20c8-8 18-12 26-12l-10 20-20 20-16 4z"
                fill="#18328f"
              />
              <path d="M61 36l14 14" stroke="#fff8ef" strokeWidth="6" strokeLinecap="round" />
            </g>

            <g transform="translate(448 140)" fill="#18328f">
              <rect x="18" y="0" width="44" height="24" rx="4" />
              <rect x="28" y="44" width="24" height="24" rx="4" />
              <rect x="0" y="76" width="24" height="24" rx="4" />
              <rect x="56" y="76" width="24" height="24" rx="4" />
              <path d="M40 24v20M40 68v8M24 84H12M56 84h12" stroke="#18328f" strokeWidth="10" strokeLinecap="round" />
              <path d="M28 44L12 60M52 44l16 16" stroke="#18328f" strokeWidth="10" strokeLinecap="round" />
              <path d="M7 60l5 8 5-8M63 60l5 8 5-8" stroke="#18328f" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            <g transform="translate(138 464)" fill="#18328f">
              <path d="M36 0L0 40h18v42h36V40h18z" />
              <circle cx="60" cy="56" r="24" fill="#2745ad" />
              <circle cx="60" cy="56" r="17" fill="#fff8ef" />
              <path d="M52 56l5 5 12-14" stroke="#18328f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            <g transform="translate(480 488)" fill="#18328f">
              <path d="M22 0c-12 0-20 10-20 26s8 26 20 26" />
              <path d="M58 0c12 0 20 10 20 26s-8 26-20 26" />
              <path d="M22 0c-12 0-20 10-20 26s8 26 20 26" stroke="#18328f" strokeWidth="10" strokeLinecap="round" fill="none" />
              <path d="M58 0c12 0 20 10 20 26s-8 26-20 26" stroke="#18328f" strokeWidth="10" strokeLinecap="round" fill="none" />
            </g>
          </g>
        ) : null}

        <circle cx="320" cy="346" r="165" fill={`url(#${baseGradientId})`} />
        <g clipPath={`url(#${clipId})`} opacity="0.58" stroke="#8fb0ff" strokeWidth="5">
          <path d="M104 430h432" />
          <path d="M128 468h384" />
          <path d="M152 506h336" />
          <path d="M160 390c44 0 52-28 84-28s36 28 66 28 34-22 62-22 34 24 64 24 44-18 70-18" />
          <path d="M170 548c34 0 44-26 74-26 28 0 40 26 70 26s38-28 66-28 38 22 66 22 42-16 62-16" />
          <path d="M210 568c18-40 44-64 110-64s92 24 110 64" stroke="#ffd7a1" strokeOpacity="0.56" />
          {Array.from({ length: 10 }).map((_, index) => (
            <path
              key={index}
              d={`M${120 + index * 36} 352v180`}
              stroke="#6d8df4"
              strokeOpacity="0.3"
              strokeWidth="2"
            />
          ))}
          {Array.from({ length: 8 }).map((_, index) => (
            <path
              key={`h-${index}`}
              d={`M118 ${392 + index * 22}h404`}
              stroke="#6d8df4"
              strokeOpacity="0.24"
              strokeWidth="2"
            />
          ))}
        </g>

        <circle cx="320" cy="252" r="156" fill={`url(#${orbGradientId})`} />
        <circle cx="320" cy="252" r="156" fill={`url(#${glowGradientId})`} opacity="0.55" />
        <ellipse
          cx="320"
          cy="252"
          rx="170"
          ry="38"
          fill="none"
          stroke="#ffe6bf"
          strokeOpacity="0.48"
          strokeWidth="3"
        />

        <g fill="none" stroke="#fff4df" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" opacity="0.82">
          <polygon points="320,132 389,172 389,252 320,292 251,252 251,172" />
          <polygon points="320,184 365,210 365,262 320,288 275,262 275,210" />
          <polygon points="320,222 344,236 344,266 320,280 296,266 296,236" />
          <polygon points="408,176 438,194 438,230 408,248 378,230 378,194" />
          <polygon points="230,256 254,270 254,298 230,312 206,298 206,270" />
          <path d="M320 132v52M389 172l-69 38M251 172l69 38M320 184v38" />
        </g>

        <g fill="#ffe7bc" opacity="0.95">
          <circle cx="320" cy="252" r="12" />
          <circle cx="410" cy="194" r="10" />
          <circle cx="230" cy="282" r="10" />
        </g>

        <g opacity="0.58" fill="#ffe8bf">
          <rect x="444" y="226" width="14" height="14" rx="2" />
          <rect x="444" y="246" width="14" height="14" rx="2" />
          <rect x="464" y="206" width="14" height="14" rx="2" />
          <rect x="464" y="226" width="14" height="14" rx="2" />
          <rect x="484" y="226" width="14" height="14" rx="2" />
          <rect x="484" y="246" width="14" height="14" rx="2" />
        </g>

        <g
          fill="none"
          stroke={`url(#${lineGradientId})`}
          strokeWidth="4"
          className="[transform-origin:center] [animation:spin-slow_28s_linear_infinite]"
        >
          <ellipse cx="320" cy="254" rx="196" ry="58" />
          <ellipse cx="320" cy="262" rx="216" ry="78" transform="rotate(-11 320 262)" />
          <ellipse cx="320" cy="260" rx="222" ry="72" transform="rotate(13 320 260)" />
          <ellipse cx="320" cy="250" rx="182" ry="122" />
        </g>

        <g opacity="0.22" stroke="#ffe7bc" strokeWidth="2.5" fill="none">
          <path d="M146 254c48 12 84 22 348 18" />
          <path d="M168 220c70 18 112 28 292 24" />
          <path d="M184 306c56 12 94 18 262 12" />
        </g>
      </svg>
    </div>
  );
}
