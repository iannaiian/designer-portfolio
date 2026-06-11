import { useEffect, useRef } from "react";

function getWheelDelta(event: WheelEvent): number {
  const raw =
    Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;

  switch (event.deltaMode) {
    case WheelEvent.DOM_DELTA_LINE:
      return raw * 16;
    case WheelEvent.DOM_DELTA_PAGE:
      return raw * window.innerHeight;
    default:
      return raw;
  }
}

function canScrollVertically(element: HTMLElement, delta: number): boolean {
  const { scrollTop, scrollHeight, clientHeight } = element;
  const hasOverflow = scrollHeight > clientHeight + 1;

  if (!hasOverflow) return false;

  if (delta > 0) {
    return scrollTop + clientHeight < scrollHeight - 1;
  }

  return scrollTop > 1;
}

type UseHorizontalWheelScrollOptions = {
  onStep: (direction: 1 | -1) => void;
  getActiveSectionId: () => string;
  cooldownMs?: number;
  threshold?: number;
};

export function useHorizontalWheelScroll({
  onStep,
  getActiveSectionId,
  cooldownMs = 700,
  threshold = 30,
}: UseHorizontalWheelScrollOptions) {
  const onStepRef = useRef(onStep);
  const getActiveSectionIdRef = useRef(getActiveSectionId);
  const lockedRef = useRef(false);

  useEffect(() => {
    onStepRef.current = onStep;
    getActiveSectionIdRef.current = getActiveSectionId;
  }, [onStep, getActiveSectionId]);

  useEffect(() => {
    const unlock = () => {
      lockedRef.current = false;
    };

    const resolveSection = (target: EventTarget | null): HTMLElement | null => {
      if (target instanceof Element) {
        const fromTarget = target.closest<HTMLElement>("[data-scrollable]");
        if (fromTarget) return fromTarget;
      }

      return document.getElementById(getActiveSectionIdRef.current());
    };

    const handleWheel = (event: WheelEvent) => {
      const delta = getWheelDelta(event);
      if (Math.abs(delta) < threshold) return;

      const isHorizontalGesture =
        Math.abs(event.deltaX) > Math.abs(event.deltaY);

      const section = resolveSection(event.target);

      if (
        section &&
        !isHorizontalGesture &&
        canScrollVertically(section, delta)
      ) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (lockedRef.current) return;

      lockedRef.current = true;
      onStepRef.current(delta > 0 ? 1 : -1);
      window.setTimeout(unlock, cooldownMs);
    };

    document.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });

    return () => {
      document.removeEventListener("wheel", handleWheel, { capture: true });
    };
  }, [cooldownMs, threshold]);
}
