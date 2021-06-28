import Link from 'next/link';

export default function News() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            Next JS is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something Else</Link>
        </li>
      </ul>
    </>
  );
}
