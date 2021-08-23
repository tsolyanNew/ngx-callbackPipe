import { NgxCallbackPipe } from './ngx-callback.pipe';

describe('PureCallbackPipe', () => {
  it('create an instance', () => {
    const pipe = new NgxCallbackPipe();
    expect(pipe).toBeTruthy();
  });
});
