import type { SectionId } from "@/lib/sections";

type ScrollableSectionProps = {
  id: SectionId;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
};

export default function ScrollableSection({
  id,
  className = "",
  innerClassName = "",
  children,
}: ScrollableSectionProps) {
  return (
    <section
      id={id}
      data-scrollable
      className={`snap-section overflow-x-hidden overflow-y-auto ${className}`}
    >
      <div
        className={`mx-auto flex min-h-full w-full max-w-7xl flex-col justify-center px-6 py-20 md:px-10 md:py-24 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
