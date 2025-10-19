const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
    const variants = {
      default: "bg-white text-gray-800 hover:bg-transparent hover:border hover:text-white",
      outline: "border border-gray-200 hover:bg-gray-100",
      ghost: "hover:bg-gray-100",
    }
  
    const sizes = {
      default: "h-10 py-2 px-4 text-sm",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-6 text-base",
    }
  
    const variantStyle = variants[variant] || variants.default
    const sizeStyle = sizes[size] || sizes.default
  
    return (
      <button className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`} {...props}>
        {children}
      </button>
    )
  }
  
  export default Button
  