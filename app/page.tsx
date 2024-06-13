import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl">Welcome to Next.js</h1>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
