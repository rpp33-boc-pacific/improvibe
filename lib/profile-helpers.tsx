import useSWR from 'swr';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

const useProfile = (userId: number, owner: boolean) => {
  const { data, error } = useSWR(`/api/profiles/${userId}?owner=${owner}`, fetcher);
  return {
    profile: data,
    isLoading: !error && !data,
    isError: error
  }
};

const useEditProfile = (userId: string) => {
  const { data, error } = useSWR(`/api/profileeditor/${userId}`, fetcher);
  return {
    editProfile: data,
    isLoading: !error && !data,
    isError: error
  }
};

export { useEditProfile };
export { useProfile };