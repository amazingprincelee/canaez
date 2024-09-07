interface CardProps {
    title: string;
    subtitle?: string;
    image: string;
    action: {label: string; onClick?:()=> void};
    children?: React.ReactNode
}