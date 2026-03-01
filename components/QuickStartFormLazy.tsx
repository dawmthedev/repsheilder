import dynamic from 'next/dynamic'

export const QuickStartFormLazy = dynamic(() => import('@/components/QuickStartForm').then((m) => m.QuickStartForm), {
  ssr: false,
  loading: () => (
    <div className="mt-6 flex flex-col items-stretch gap-3 pb-6 sm:flex-row sm:items-center">
      <div className="h-11 w-full rounded-full border border-black/10 bg-white/70 px-4 shadow-sm sm:w-[320px]" />
      <div className="h-11 w-full rounded-full bg-brand-600/60 px-6 shadow-sm sm:w-[120px]" />
    </div>
  ),
})
