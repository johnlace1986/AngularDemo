import { CatsModule } from './cats.module';

describe('CatsModule', () => {
  let catsModule: CatsModule;

  beforeEach(() => {
    catsModule = new CatsModule();
  });

  it('should create an instance', () => {
    expect(catsModule).toBeTruthy();
  });
});
