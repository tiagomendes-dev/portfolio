import { MailIcon, PhoneIcon } from "lucide-react";

export default function TopInfo() {
  return (
    <div className="flex w-full items-center justify-center gap-4 bg-zinc-300 px-4 py-1 text-zinc-400 md:justify-end">
      <div className="flex items-center gap-2">
        <PhoneIcon className="size-3" />
        <span className="text-xs">+55 32 9 8827-5460</span>
      </div>
      <div className="flex items-center gap-2 border-l-2 border-l-zinc-400/50 pl-4">
        <MailIcon className="size-3" />
        <span className="text-xs">contato@tiagomendes.dev</span>
      </div>
    </div>
  );
}
