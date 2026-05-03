import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 group"
    >
      <span className="w-8 h-8 rounded-full border border-border group-hover:border-primary/50 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.2)] flex items-center justify-center transition-all duration-300">
        <ArrowLeft size={16} />
      </span>
      Back
    </button>
  );
};

export default BackButton;
