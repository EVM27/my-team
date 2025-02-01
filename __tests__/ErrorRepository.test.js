
import ErrorRepository from '../src/ErrorRepository';

test('should return description for a valid error code', () => {
    const repo = new ErrorRepository();
    repo.add(404, 'Not Found');
    expect(repo.translate(404)).toBe('Not Found');
});

test('should return "Unknown error" for unknown code', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(500)).toBe('Unknown error');
});