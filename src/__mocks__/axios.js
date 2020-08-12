/**
 * We need to have a default mock to get our tests running
 * that involves axios running perfectly
 */

export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
};
