import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";


export const SeparatorPage = ({className}:{className?:string}) => <Separator 
  className={cn("my-20 max-w-[250px] lg:max-w-6xl mx-auto", className)}
/>   