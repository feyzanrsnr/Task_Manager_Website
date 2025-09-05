import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  mode = "light",
  disabled = false,
  className,
  type = "button",
  icon: Icon, // opsiyonel icon prop
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "h-12 rounded-xl font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",

        // Hover / Active Animasyon
        !disabled && "hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg",
        disabled && "opacity-60 cursor-not-allowed",


        //primary
        variant === "primary" &&
          mode === "light" &&
          "bg-gradient-to-br from-cosmos to-amethyst text-light-background focus:shadow-[0_0_15px_rgba(82,70,224,0.6)]",
        variant === "primary" &&
          mode === "dark" &&
          "bg-gradient-to-br from-amethyst to-midnight text-light-background focus:shadow-[0_0_20px_rgba(47,189,213,0.6)]",
          
          //outline
        variant === "outline" &&
          mode === "light" &&
          "border-2 border-cosmos text-cosmos hover:bg-cosmos hover:text-light-background focus:ring-cosmos focus:shadow-[0_0_15px_rgba(82,70,224,0.6)]",
        variant === "outline" &&
          mode === "dark" &&
          "border-2 border-midnight text-midnight hover:bg-midnight hover:text-light-background focus:ring-midnight focus:shadow-[0_0_20px_rgba(47,189,213,0.6)]",

          //ghost
        variant === "ghost" &&
          mode === "light" &&
          "bg-transparent text-cosmos hover:bg-cosmos hover:text-light-background focus:ring-cosmos focus:shadow-[0_0_12px_rgba(82,70,224,0.5)]",

        // Size
        size === "sm" && "px-3 py-1 text-sm",
        size === "md" && "px-5 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        size === "full" && "text-base w-[250px]",

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
