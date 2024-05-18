import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('user module', () => {
  test('loadUser should call httpGet once with correct URL', () => {
    httpGet.mockReturnValue(JSON.stringify({}));
    const response = loadUser(1);
    expect(response).toEqual({});
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
  });

  test('saveUser should throw an "Unimplemented" error', () => {
    expect(() => saveUser({})).toThrow('Unimplemented');
  });
});
