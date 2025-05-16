import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'default' | 'sm' | 'lg';
	isLoading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'default',
			isLoading = false,
			leftIcon,
			rightIcon,
			children,
			disabled,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={cn(
					'btn',
					{
						'btn-primary': variant === 'primary',
						'btn-secondary': variant === 'secondary',
						'border border-input bg-transparent hover:bg-muted': variant === 'outline',
						'hover:bg-muted': variant === 'ghost',
						'btn-lg': size === 'lg',
						'h-9 px-3': size === 'sm',
						'opacity-70 pointer-events-none': isLoading,
					},
					className
				)}
				disabled={disabled || isLoading}
				{...props}
			>
				{isLoading && (
					<svg
						className="mr-2 h-4 w-4 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				)}
				{!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
				{children}
				{!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
			</button>
		);
	}
);

Button.displayName = 'Button';

export { Button };