
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";




const backgroundVariants = cva(
    "rounded-full flex items-center justify-content",
    {
        variants:{
            variant:{ 
                default: "bg-sky-100",
                success: "bg-emerald-100",
            },
            iconVariants: {
                default: "text-sky-700",
                success: "text-emerald-700"
            },
            size: {
                default: "p-2",
                sm: "p-2",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

const iconVariants = cva(
    "",
    {
        variants:{
            variant: {
                default: "text-sky-700",
                success: "text-emerald-700",
            },
            size:{
                default: "h-8 w-8",
                sm: "h-4 w-4"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        }
    }
);

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps
{
  icon: LucideIcon
};


export const IconBadge = ({
    icon: Icon,
    variant,
    size,
}: IconBadgeProps) =>{
    <div className={cn(backgroundVariants({variant, size}))}>
        <Icon className={cn}/>
    </div>
}