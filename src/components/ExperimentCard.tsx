
interface ExperimentProps {
  num: string;
  title: string;
  description: string;
  bgColor?: string;
  children?: React.ReactNode;
}

export default function ExperimentCard({ num, title, description, bgColor = "#2d2d2d", children }: ExperimentProps) {
  return (
    <div className="flex flex-col min-w-75 md:min-w-75 group cursor-pointer">
      {/* The Circle Container */}
      <div className="relative aspect-square rounded-full overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:scale-[0.98]" 
           style={{ backgroundColor: bgColor }}>
        {children}
        
        {/* Subtle shadow overlay like the reference */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)] pointer-events-none" />
      </div>

      {/* Text Content Below */}
      <div className="mt-12 flex items-start gap-4">
        <div className="text-[10px] font-sans opacity-40 mt-1">— {num}</div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold font-sans mb-2">TITLE</h4>
          <p className="text-lg italic font-serif leading-tight opacity-80">{description}</p>
        </div>
      </div>
    </div>
  );
}