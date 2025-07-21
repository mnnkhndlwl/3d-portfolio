'use client'

import { Button } from '@/components/ui/button' // if using shadcn
import { cn } from '@/lib/utils'

export function BlogTile({
  title,
  excerpt,
  onRead,
  className,
}: {
  title: string
  excerpt: string
  onRead?: () => void
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 rounded-none bg-white p-4 shadow-sm dark:bg-black',
        className,
      )}
    >
      <div>
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{excerpt}</p>
      </div>

      <Button onClick={onRead} variant="default" className="shrink-0 rounded-none">
        Read
      </Button>
    </div>
  )
}
