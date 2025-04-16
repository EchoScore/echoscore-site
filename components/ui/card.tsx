import * as React from "react";

export function Card({ children, className }: any) {
  return <div className={`border rounded-lg shadow-sm p-4 ${className}`}>{children}</div>;
}
export function CardContent({ children }: any) {
  return <div className="p-2">{children}</div>;
}
export function CardHeader({ children }: any) {
  return <div className="border-b pb-2 mb-2">{children}</div>;
}
export function CardTitle({ children }: any) {
  return <h3 className="text-xl font-bold">{children}</h3>;
}
export function CardDescription({ children }: any) {
  return <p className="text-gray-600">{children}</p>;
}
