// import clsx from "clsx";

// const Button = ({
//   children,
//   variant = "primary",
//   size = "md",
//   mode = "light",
//   disabled = false,
//   className,
//   type = "button",
//   icon: Icon, // opsiyonel icon prop
//   ...props
// }) => {
//   return (
//     <button
//       type={type}
//       disabled={disabled}
//       className={clsx(
//         "h-12 rounded-xl font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2",
//         "focus:outline-none focus:ring-2 focus:ring-offset-2",

//           // Hover / Active Animasyon
//           !disabled && "hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg",
//           disabled && "opacity-60 cursor-not-allowed",

//           // ✅ fullscreen override
//           variant === "primary" &&
//           mode === "fullscreen" &&
//           "bg-white text-black shadow-none hover:shadow-md hover:scale-[1.03]",

//           //primary
//           variant === "primary" &&
//           mode === "light" &&
//           "bg-gradient-to-br from-cosmos to-amethyst text-light-background focus:shadow-[0_0_15px_rgba(82,70,224,0.6)]",
//           variant === "primary" &&
//           mode === "dark" &&
//           "bg-gradient-to-br from-amethyst to-midnight text-light-background focus:shadow-[0_0_20px_rgba(47,189,213,0.6)]",
          
//           //outline
//           variant === "outline" &&
//           mode === "light" &&
//           "border-2 border-cosmos text-cosmos hover:bg-cosmos hover:text-light-background focus:ring-cosmos focus:shadow-[0_0_15px_rgba(82,70,224,0.6)]",
//           variant === "outline" &&
//           mode === "dark" &&
//           "border-2 border-midnight text-midnight hover:bg-midnight hover:text-light-background focus:ring-midnight focus:shadow-[0_0_20px_rgba(47,189,213,0.6)] bg-white",

//           //ghost
//           variant === "ghost" &&
//           mode === "light" &&
//           "bg-transparent text-cosmos hover:bg-cosmos hover:text-light-background focus:ring-cosmos focus:shadow-[0_0_12px_rgba(82,70,224,0.5)]",

//         // Size
//         size === "sm" && "h-9 w-20 py-1 text-sm rounded-lg",
//         size === "md" && "px-5 py-2 text-base",
//         size === "lg" && "px-6 py-3 text-lg",
//         size === "full" && "text-base w-[250px]",

//         className
//       )}
//       {...props}
//     >
//       {Icon && <Icon className="w-4 h-4" />}
//       {children}
//     </button>
//   );
// };

// export default Button;



// import clsx from "clsx";

// const Button = ({
//   children,
//   variant = "primary",
//   size = "md",
//   mode = "light",
//   disabled = false,
//   className,
//   type = "button",
//   icon: Icon,
//   ...props
// }) => {
//   return (
//     <button
//       type={type}
//       disabled={disabled}
//       className={clsx(
//         "relative h-12 rounded-xl font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2",
//         "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent",

//         // Hover / Active Animasyon
//         !disabled && "hover:scale-[1.05] active:scale-[0.98] hover:shadow-lg",
//         disabled && "opacity-60 cursor-not-allowed",

//         // 🎨 Primary
//         variant === "primary" &&
//           mode === "light" &&
//           "bg-gradient-to-br from-cosmos to-amethyst text-light-background shadow-[0_4px_15px_rgba(82,70,224,0.3)] hover:shadow-[0_8px_25px_rgba(82,70,224,0.5)]",
//         variant === "primary" &&
//           mode === "dark" &&
//           "bg-gradient-to-br from-amethyst to-midnight text-light-background shadow-[0_4px_15px_rgba(47,189,213,0.3)] hover:shadow-[0_8px_25px_rgba(47,189,213,0.5)]",

//         // 🎨 Outline
//         variant === "outline" &&
//           mode === "light" &&
//           "border border-cosmos text-cosmos bg-transparent hover:bg-cosmos hover:text-light-background shadow-sm hover:shadow-md",
//         variant === "outline" &&
//           mode === "dark" &&
//           "border border-midnight text-midnight bg-transparent hover:bg-midnight hover:text-light-background shadow-sm hover:shadow-md",

//         // 🎨 Ghost
//         variant === "ghost" &&
//           mode === "light" &&
//           "bg-transparent text-cosmos hover:bg-cosmos/10",
//         variant === "ghost" &&
//           mode === "dark" &&
//           "bg-transparent text-midnight hover:bg-midnight/10",

//         // 📏 Size
//         size === "sm" && "px-3 py-1 text-sm rounded-lg",
//         size === "md" && "px-5 py-2 text-base",
//         size === "lg" && "px-6 py-3 text-lg",
//         size === "full" && "w-[250px] text-base",

//         className
//       )}
//       {...props}
//     >
//       {Icon && <Icon className="w-4 h-4" />}
//       {children}
//     </button>
//   );
// };

// export default Button;


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
        "relative h-12 rounded-xl font-semibold transition-all duration-300 ease-in-out flex items-center justify-center gap-2",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent",

        // Hover / Active Animasyon
        !disabled && "hover:scale-[1.05] active:scale-[0.98] hover:shadow-lg",
        disabled && "opacity-60 cursor-not-allowed",

        // 🎨 Primary
        variant === "primary" &&
          mode === "light" &&
          "bg-gradient-to-br from-cosmos to-amethyst text-light-background shadow-[0_4px_15px_rgba(82,70,224,0.3)] hover:shadow-[0_8px_25px_rgba(82,70,224,0.5)]",
        variant === "primary" &&
          mode === "dark" &&
          "bg-gradient-to-br from-[#7B61FF] to-[#4BC9FF] text-white shadow-[0_4px_15px_rgba(123,97,255,0.3)] hover:shadow-[0_8px_25px_rgba(75,201,255,0.5)]",

        // Outline
        variant === "outline" &&
        mode === "light" &&
        "border-2 border-cosmos text-cosmos bg-white/90 hover:bg-cosmos hover:text-light-background shadow-sm hover:shadow-md px-4 py-1.5 h-auto min-h-[36px] rounded-lg",

        variant === "outline" &&
        mode === "dark" &&
        "border-2 border-[#4BC9FF] text-[#4BC9FF] bg-white/10 hover:bg-[#4BC9FF] hover:text-black shadow-sm hover:shadow-md px-4 py-1.5 h-auto min-h-[36px] rounded-lg",

        // 🎨 Ghost
        variant === "ghost" &&
          mode === "light" &&
          "bg-transparent text-cosmos hover:bg-cosmos/10",
        variant === "ghost" &&
          mode === "dark" &&
          "bg-transparent text-[#4BC9FF] hover:bg-[#4BC9FF]/10",

        // 📏 Size
        size === "sm" && "px-3 py-1 text-sm rounded-lg",
        size === "md" && "px-5 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        size === "full" && "w-[250px] text-base",

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

