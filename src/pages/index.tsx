import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="DaisyUI Collections"
          description="DaisyUI Collections Homepage"
        />
      }
    >
      <div>Main Content</div>
    </Main>
  );
};

export default Index;
