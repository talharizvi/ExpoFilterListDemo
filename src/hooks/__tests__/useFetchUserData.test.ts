import { renderHook, waitFor } from '@testing-library/react-native';
import { useFetchUserData } from '../useFetchUserData';

// Mock USERS_API_URL
jest.mock('../../constants/constant', () => ({
  USERS_API_URL: 'https://gist.githubusercontent.com/AshishKapoor/5defdc8ff44665248b04bfbbbaa60307/raw/dea9330f2cb84db7c781e67ea9b0d51ac4d0143e/users.json',
}));

describe('useFetchUserData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches data successfully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ users: [{ name: 'User1', type: 0 }, { name: 'User2', type: 1 }] }),
      })
    ) as jest.Mock;

    const { result } = renderHook(() => useFetchUserData());
    expect(result.current.listItems).toStrictEqual([]) 
    expect(result.current.isLoading).toBe(true)

    await waitFor(() => expect(result.current).toMatchObject({ listItems: [{ name: 'User1', type: 0 }, { name: 'User2', type: 1 }] }));
    
    expect(fetch).toHaveBeenCalledWith('https://gist.githubusercontent.com/AshishKapoor/5defdc8ff44665248b04bfbbbaa60307/raw/dea9330f2cb84db7c781e67ea9b0d51ac4d0143e/users.json');
  });
});