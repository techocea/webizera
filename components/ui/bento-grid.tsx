import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  author,
  designation,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  author: string;
  designation: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 relative flex flex-col justify-between space-y-4 rounded-xl border border-[rgba(255,255,255,0.1)] shadow-lg shadow-primary/10 bg-accent p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote absolute -right-2 -top-2 w-16 h-16 text-[#22C55E]/20"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-muted dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-sm font-medium text-muted-foreground dark:text-neutral-300">
          {description}
        </div>
      </div>
      <div className="flex items-center jsutify-center gap-2">
        <span className="bg-gradient-to-br from-primary to-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">{author.slice(0, 1)}</span>
        <div className="flex flex-col gap-1">
          <h4 className="font-bold text-sm text-white">{author}</h4>
          <p className="text-xs text-muted-foreground">{designation}</p>
        </div>
      </div>
    </div>
  );
};
