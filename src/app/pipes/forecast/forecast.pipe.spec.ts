import { ForecastPipe } from './forecast.pipe';

describe('ForecastPipe', () => {
  it('create an instance', () => {
    const pipe = new ForecastPipe();
    expect(pipe).toBeTruthy();
  });
});
