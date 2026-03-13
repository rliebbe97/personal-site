import * as React from 'react'

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
}

export const Separator: React.ForwardRefExoticComponent<SeparatorProps & React.RefAttributes<HTMLDivElement>>
export const Card: React.ForwardRefExoticComponent<ComponentProps & React.RefAttributes<HTMLDivElement>>
export const CardHeader: React.ForwardRefExoticComponent<ComponentProps & React.RefAttributes<HTMLDivElement>>
export const CardTitle: React.ForwardRefExoticComponent<ComponentProps & React.RefAttributes<HTMLDivElement>>
export const CardDescription: React.ForwardRefExoticComponent<ComponentProps & React.RefAttributes<HTMLDivElement>>
export const CardContent: React.ForwardRefExoticComponent<ComponentProps & React.RefAttributes<HTMLDivElement>>
export const CardFooter: React.ForwardRefExoticComponent<ComponentProps & React.RefAttributes<HTMLDivElement>>

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: 'default' | 'secondary' | 'destructive' | 'outline'
}

export const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
}

export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>
