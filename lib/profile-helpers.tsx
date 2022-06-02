import useSWR from 'swr';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

const useProfile = (userId: number) => {
  const { data, error } = useSWR(`/api/profiles/${userId}`, fetcher);

  return {
    profile: data,
    isLoading: !error && !data,
    isError: error
  }
};

export { useProfile };