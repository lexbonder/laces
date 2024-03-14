import * as dice from './index';

test('assets/index.ts should export dice images', () => {
    expect(dice).toMatchSnapshot();
});
