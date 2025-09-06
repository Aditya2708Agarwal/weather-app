function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-20 h-20 border-4 border-white/20 rounded-full animate-spin border-t-white/80 shadow-lg"></div>

        {/* Inner ring */}
        <div className="absolute inset-3 w-14 h-14 border-2 border-blue-200/30 rounded-full animate-spin border-t-blue-200/80 animation-delay-150"></div>

        {/* Center pulse dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSpinner;

