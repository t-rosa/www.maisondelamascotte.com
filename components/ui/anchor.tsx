import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import * as React from "react"

const anchorVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 disabled:opacity-50 dark:focus:ring-zinc-400 disabled:pointer-events-none dark:focus:ring-offset-zinc-900 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800",
  {
    variants: {
      variant: {
        default:
          "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100",
        subtle:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100",
        ghost:
          "bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100 hover:bg-transparent dark:hover:bg-transparent",
        transparent:
          "backdrop-blur border-2 hover:bg-zinc-700 hover:text-white text-zinc-900 border-indigo-400",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 rounded-md",
        lg: "h-11 rounded-md",
        xl: "h-14 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof anchorVariants> { }

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <a
        className={cn(anchorVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Anchor.displayName = "Anchor"

export { Anchor, anchorVariants }
