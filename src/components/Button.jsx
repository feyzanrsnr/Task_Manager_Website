import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  mode = "light",
  disabled = false,
  className,
  type = "button",
  icon: Icon,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "rounded-lg font-semibold transition-all duration-300 ease-in-out flex items-center justify-center",
        "focus:outline-none",

        // Hover / Active Animasyon
        !disabled && "hover:scale-[1.05] active:scale-[0.98] hover:shadow-lg",
        disabled && "opacity-60 cursor-not-allowed",

        // 🎨 Primary
        variant === "primary" &&
          mode === "light" &&
          "bg-amethyst text-light-text",
        variant === "primary" &&
          mode === "dark" &&
          "bg-sunrise text-light-text",

        // Outline
        variant === "outline" &&
        mode === "light" &&
        "border-2 border-light-text text-light-text bg-light-background hover:bg-light-text hover:text-light-background shadow-sm hover:shadow-md px-4 py-1.5 h-auto min-h-[36px] rounded-lg",

        variant === "outline" &&
        mode === "dark" &&
        "border-2 border-dark-text text-dark-text bg-dark-background hover:bg-dark-text hover:text-dark-background shadow-sm hover:shadow-md px-4 py-1.5 h-auto min-h-[36px] rounded-lg",

        // 🎨 Ghost
        variant === "ghost" &&
          mode === "light" &&
          "bg-light-text text-white",
        variant === "ghost" &&
          mode === "dark" &&
          "bg-dark-text text-light-text",
        // 📏 Size
        size === "sm" && "px-3 py-1 text-sm rounded-lg",
        size === "md" && "px-5 py-2 text-md",
        size === "lg" && "px-3 py-2 w-32 text-lg",
        size === "full" && "h-10 w-[250px] text-base",

        className
      )}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export default Button;

