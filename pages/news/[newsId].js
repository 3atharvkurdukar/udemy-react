import { useRouter } from 'next/router';

export default function NewsDetails() {
  const router = useRouter();

  return (
    <>
      <h1>News Details Page</h1>
      <p>#{router.query.newsId}</p>
    </>
  );
}
