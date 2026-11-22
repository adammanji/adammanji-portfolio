import Link from "next/link";
import { Page } from "@/components/ui";

export default function NotFound() {
  return (
    <Page>
      <h1 className="pt-16 text-4xl md:text-6xl">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-prose">
        The link may be broken, or the page may have moved.
      </p>
      <p className="mt-8 pb-16">
        <Link href="/" className="btn btn-solid">
          Go to the home page
        </Link>
      </p>
    </Page>
  );
}
