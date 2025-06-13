export interface ClassValue {
    toString(): string;
}

export function cn(...classes: (ClassValue | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}