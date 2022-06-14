import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Purchase = () => {
  return (
    <Main
      meta={
        <Meta
          title="DaisyUI Collections"
          description="DaisyUI Collections Purchase"
        />
      }
    >
      <div>This is purchase page</div>
    </Main>
  );
};

export default Purchase;
