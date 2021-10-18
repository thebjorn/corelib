import corelib from "../index";

test('jq-version', () => {
    expect(corelib.jq.fn.jquery).toBe('3.6.0');
});
