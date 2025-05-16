import { cn } from "@/utils/cn";
import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

interface ContainerProps<T extends ElementType = "div"> {
	children: ReactNode;
	className?: string;
	as?: T;
	tight?: boolean;
}

// ジェネリックを使ってasプロパティでComponentの型を制御
export function Container<T extends ElementType = "div">({
	children,
	className,
	as,
	tight = false,
	...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
	const Component = as || "div"; // undefined の場合のフォールバック

	return (
		<Component
			className={cn(
				"mx-auto px-4 sm:px-6 lg:px-8",
				{
					"max-w-screen-xl": !tight,
					"max-w-screen-lg": tight,
				},
				className
			)}
			{...props}
		>
			{children}
		</Component>
	);
}