'use client'; import * as TabsPrimitive from '@radix-ui/react-tabs'; import { cn } from '@/lib/utils'
export const Tabs=TabsPrimitive.Root
export const TabsList=({className,...p}:React.ComponentProps<typeof TabsPrimitive.List>)=><TabsPrimitive.List className={cn('inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',className)} {...p}/>
export const TabsTrigger=({className,...p}:React.ComponentProps<typeof TabsPrimitive.Trigger>)=><TabsPrimitive.Trigger className={cn('inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-semibold transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',className)} {...p}/>
export const TabsContent=({className,...p}:React.ComponentProps<typeof TabsPrimitive.Content>)=><TabsPrimitive.Content className={cn('mt-4 focus-visible:outline-none',className)} {...p}/>
