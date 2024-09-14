'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// @project
import Movies from './movies';

// export const getServerSideProps = () => {
//   console.log('sndkasds', process.env.MY_API);
//   return {
//     props: {
//       some: '3434',
//     },
//   };
// };

const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Movies />
    </QueryClientProvider>
  );
}
