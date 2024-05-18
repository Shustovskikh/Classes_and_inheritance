import { httpGet, httpPost } from '../http';

describe('http module', () => {
  test('httpGet should throw an error with the given URL', () => {
    const testUrl = 'http://test.com';
    expect(() => httpGet(testUrl)).toThrow(testUrl);
  });

  test('httpPost should throw an error with the given URL', () => {
    const testUrl = 'http://test.com';
    expect(() => httpPost(testUrl)).toThrow(testUrl);
  });
});
