import { ReactNode } from "react";

export interface HomepageCardProps {
  title: string;
  description: ReactNode;
  body: ReactNode;
}

function HomepageCard({ title, body, description }: HomepageCardProps) {
  return (
    <div className="bg-white p-4 flex flex-col justify-between">
      <div className="font-semibold text-xl">{title}</div>
      <div className="py-4">{body}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}

export default HomepageCard;
