import Image from "next/image";

type BrandIpProps = {
  size?: "sm" | "md" | "lg";
  showSatellites?: boolean;
  className?: string;
};

const sizeClassMap: Record<NonNullable<BrandIpProps["size"]>, string> = {
  sm: "w-12 md:w-14",
  md: "w-[7.5rem] md:w-[9.5rem]",
  lg: "w-[18rem] sm:w-[22rem] xl:w-[27rem]",
};

export function BrandIp({
  size = "md",
  showSatellites = true,
  className = "",
}: BrandIpProps) {
  const isSmall = size === "sm";
  const frameClassName = isSmall
    ? "aspect-square rounded-full"
    : size === "md"
      ? "aspect-[4/5] rounded-[1.9rem]"
      : "aspect-[4/5] rounded-[2.45rem]";
  const imageClassName = isSmall
    ? "scale-[1.72] object-[76%_16%]"
    : size === "md"
      ? "scale-[1.18] object-[74%_30%]"
      : "scale-[1.12] object-[74%_30%]";
  const ornamentScaleClassName = size === "md" ? "scale-90" : "";

  return (
    <div
      className={`relative ${sizeClassMap[size]} ${className} ${isSmall ? "" : "[animation:float-wide_14s_ease-in-out_infinite]"}`}
    >
      {!isSmall ? (
        <div
          aria-hidden="true"
          className="absolute inset-[-10%] rounded-[2.6rem] bg-[radial-gradient(circle,rgba(236,189,126,0.22),transparent_54%)] blur-3xl"
        />
      ) : null}

      {showSatellites && !isSmall ? (
        <>
          <div
            aria-hidden="true"
            className={`absolute -left-5 top-[12%] z-20 h-16 w-16 rounded-full border border-white/16 bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.9),rgba(246,221,188,0.42)_34%,rgba(92,118,159,0.08)_72%,transparent_76%)] shadow-[0_18px_34px_rgba(8,10,20,0.24)] backdrop-blur-md [animation:float-gentle_11s_ease-in-out_infinite] ${ornamentScaleClassName}`}
          />
          <div
            aria-hidden="true"
            className={`absolute -right-3 top-[18%] z-20 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(127,152,189,0.56),rgba(127,152,189,0.08)_58%,transparent_72%)] blur-[2px] [animation:float-gentle_13s_ease-in-out_infinite] ${ornamentScaleClassName}`}
          />
          <div
            aria-hidden="true"
            className={`absolute -right-7 bottom-[20%] z-20 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(236,192,145,0.44),rgba(236,192,145,0.06)_58%,transparent_72%)] [animation:float-gentle_12s_ease-in-out_infinite] ${ornamentScaleClassName}`}
          />
          <div
            aria-hidden="true"
            className={`absolute -left-6 bottom-[16%] z-20 rounded-full border border-white/14 bg-[rgba(20,28,48,0.72)] px-4 py-2 shadow-[0_20px_34px_rgba(7,10,20,0.3)] backdrop-blur-md ${ornamentScaleClassName}`}
          >
            <p className="micro-label text-[#f5ddbb]">Portrait-led IP</p>
          </div>
        </>
      ) : null}

      <div
        className={`relative isolate overflow-hidden border border-white/12 bg-[linear-gradient(165deg,rgba(28,38,60,0.96),rgba(11,16,28,0.94))] shadow-[0_30px_70px_rgba(6,8,16,0.34)] ${frameClassName}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-[3%] rounded-[inherit] border border-[rgba(242,219,182,0.42)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(248,227,194,0.18),transparent_34%),linear-gradient(180deg,transparent_54%,rgba(5,7,14,0.26)_100%)]"
        />

        <Image
          src="/portrait-ip.jpg"
          alt="复古花园少女主视觉"
          fill
          priority={size === "lg" && showSatellites}
          sizes={
            size === "sm"
              ? "56px"
              : size === "md"
                ? "(max-width: 768px) 120px, 152px"
                : "(max-width: 768px) 320px, (max-width: 1280px) 420px, 520px"
          }
          className={`object-cover ${imageClassName}`}
        />

        {isSmall ? null : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-[7%] rounded-[inherit] border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-[14%] bottom-[6%] h-5 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.36),transparent_72%)] blur-md"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-[9%] bottom-[6%] rounded-full border border-[rgba(232,210,176,0.44)] bg-[linear-gradient(180deg,rgba(234,216,188,0.92),rgba(189,151,98,0.94))] px-4 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.22)]"
            >
              <p className="micro-label text-center text-[#473016]">Young Lady Elina</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
