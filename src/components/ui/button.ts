export const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors h-10 px-5 disabled:pointer-events-none disabled:opacity-50";

export const buttonVariants = {
  primary: `${buttonBase} bg-primary text-primary-foreground hover:opacity-90 shadow-sm`,
  outline: `${buttonBase} border border-border bg-card hover:bg-accent hover:text-accent-foreground`,
  ghost: `${buttonBase} hover:bg-accent hover:text-accent-foreground`,
};
