export default function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="
      px-3 py-1 
      bg-blue-500/20 
      text-blue-300 
      text-xs 
      rounded-full 
      border border-blue-500/30
    ">
            {children}
        </span>
    );
}