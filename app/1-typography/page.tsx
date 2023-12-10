import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Typography
      </h1>
      <p className="mt-3">
        Copy the classes from{" "}
        <Link
          className="text-green-400 underline"
          href="https://ui.shadcn.com/docs/components/typography"
          target="_blank"
        >
          Typography
        </Link>{" "}
      </p>
    </div>
  );
};

export default Page;
