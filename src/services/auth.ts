import { useMutation, useQuery } from '@tanstack/react-query';

import { queryClient } from '@/services';

const fetchUser = async (number: number = 1) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const json: User = await response.json();
  return json;
};

/**
 * Returns a mutation function for logging in a user.
 * @returns The mutation function.
 */
const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (_data: { email: string; password: string }) => {
      const user = await fetchUser();
      return user;
    },
    onSuccess: data => {
      queryClient.setQueryData(['user'], data);
    }
  });
};

const useLogout = () => {
  return useMutation({
    mutationKey: ['logout'],
    mutationFn: async () => {
      const user = await fetchUser();
      return user;
    },
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
    }
  });
};

const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const user = await fetchUser();
      return user;
    }
  });
};

const useRegister = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: async (_data: { email: string; password: string }) => {
      const user = await fetchUser();
      return user;
    },
    onSuccess: data => {
      queryClient.setQueryData(['user'], data);
    }
  });
};

export { useLogin, useLogout, useRegister, useUser };
