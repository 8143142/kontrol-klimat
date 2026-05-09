export function KKLogo() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="pulse absolute h-32 w-32 rounded-full bg-blue-200/50 blur-3xl sm:h-48 sm:w-48" />
      <div className="relative grid h-32 w-32 place-items-center rounded-[1.5rem] bg-gradient-to-br from-white to-blue-50 shadow-2xl ring-1 ring-blue-100 sm:h-44 sm:w-44 sm:rounded-[2rem]">
        <div className="spin absolute left-4 top-3 text-2xl sm:text-4xl">❄️</div>
        <div className="absolute bottom-4 right-4 text-3xl text-sky-500 sm:text-4xl">≋</div>
        <div className="flex items-center gap-1 font-black tracking-[-0.18em] text-blue-950">
          <span className="text-6xl leading-none sm:text-8xl">К</span>
          <span className="text-6xl leading-none text-sky-500 sm:text-8xl">К</span>
        </div>
      </div>
    </div>
  );
}
