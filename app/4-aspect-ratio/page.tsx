import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Aspect Ratio
      </h1>

      <div className="w-[600px]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/aspect-ratio-bg.jpg"
            alt="Image"
            className="rounded-md object-cover"
            fill
          />
        </AspectRatio>
        <Link
          target="_blank"
          href="https://bard.google.com/chat/3f59a04f908074fb"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default Page;
