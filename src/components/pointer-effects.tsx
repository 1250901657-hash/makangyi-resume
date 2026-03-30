"use client";

import { useEffect, useEffectEvent } from "react";

export function PointerEffects() {
  const updatePointer = useEffectEvent((clientX: number, clientY: number) => {
    document.documentElement.style.setProperty("--pointer-x", `${clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${clientY}px`);
  });

  const tiltCard = useEffectEvent((element: HTMLElement, clientX: number, clientY: number) => {
    const rect = element.getBoundingClientRect();
    const px = (clientX - rect.left) / rect.width;
    const py = (clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;

    element.style.setProperty("--pointer-local-x", `${(px * 100).toFixed(2)}%`);
    element.style.setProperty("--pointer-local-y", `${(py * 100).toFixed(2)}%`);
    element.style.transform =
      `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let activeCard: HTMLElement | null = null;
    let raf = 0;
    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;

    const resetCard = (element: HTMLElement | null) => {
      if (!element) {
        return;
      }

      element.style.transform = "";
      element.style.setProperty("--pointer-local-x", "50%");
      element.style.setProperty("--pointer-local-y", "50%");
    };

    const flush = () => {
      raf = 0;
      updatePointer(lastX, lastY);

      const target = document.elementFromPoint(lastX, lastY);
      const nextCard =
        target instanceof HTMLElement ? target.closest<HTMLElement>("[data-tilt]") : null;

      if (activeCard && activeCard !== nextCard) {
        resetCard(activeCard);
      }

      if (nextCard) {
        tiltCard(nextCard, lastX, lastY);
      }

      activeCard = nextCard;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      lastX = event.clientX;
      lastY = event.clientY;

      if (!raf) {
        raf = window.requestAnimationFrame(flush);
      }
    };

    const resetAll = () => {
      document.documentElement.style.setProperty("--pointer-x", "50vw");
      document.documentElement.style.setProperty("--pointer-y", "24vh");
      resetCard(activeCard);
      activeCard = null;
    };

    document.documentElement.style.setProperty("--pointer-x", "50vw");
    document.documentElement.style.setProperty("--pointer-y", "24vh");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", resetAll);
    document.addEventListener("mouseleave", resetAll);

    return () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }

      resetAll();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", resetAll);
      document.removeEventListener("mouseleave", resetAll);
    };
  }, []);

  return <div className="pointer-aura" aria-hidden="true" />;
}
