import * as React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputSearchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputClassName?: string;
};

const InputSearch = React.forwardRef<HTMLInputElement, InputSearchProps>(
  ({ className, inputClassName, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState<boolean>(false);

    return (
      <div
        className={cn(
          "relative flex w-fit items-center h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground",
          isFocused ? "ring-1 ring-ring" : "ring-1 ring-transparent",
          props.disabled && "cursor-not-allowed border-muted text-muted",
          className
        )}
      >
        <div className="absolute right-3 flex items-center justify-center text-muted-foreground h-10">
          <SearchIcon
            className={cn(
              "focus-visible:outline-none rounded-[4px] h-5 w-5",
              props.disabled && "text-muted cursor-not-allowed"
            )}
          />
        </div>
        <Input
          type={"text"}
          className={cn(
            "mr-4 border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent disabled:cursor-not-allowed",
            inputClassName
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
    );
  }
);
InputSearch.displayName = "InputSearch";

export { type InputSearchProps, InputSearch };
