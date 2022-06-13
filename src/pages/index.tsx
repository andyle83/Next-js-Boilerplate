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
      {/* Carousel items */}
      <section className="relative">
        <div className="carousel h-80">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1628&q=80"
              className="w-full object-cover"
              alt="Work"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://images.unsplash.com/photo-1516646227334-6102731f3c25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              className="w-full object-cover"
              alt="Work"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://images.unsplash.com/photo-1550547660-5d719a574887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              className="w-full object-cover"
              alt="Work"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="badge badge-success badge-outline"></a>
          <a href="#item2" className="badge badge-warning badge-outline"></a>
          <a href="#item3" className="badge badge-outline badge-error"></a>
        </div>
      </section>
    </Main>
  );
};

export default Index;
