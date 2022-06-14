import Link from 'next/link';

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
      <section id="carousel" className="relative">
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

      {/* Product Categories */}
      <section className="grow">
        <div className="tabs flex justify-around rounded-none bg-base-200 p-3">
          <a className="tab tab-bordered border-secondary text-white">Drink</a>
          <a className="tab">Books</a>
          <a className="tab">Accessories</a>
          <a className="tab">Digital</a>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div id="featureProduct" className="px-4">
            <div className="card my-3 w-full shadow-2xl">
              <div className="relative">
                <Link href="/purchase">
                  <img
                    src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                    className="h-80 w-full object-cover"
                    alt="Fashion"
                  />
                </Link>
                <svg
                  className="absolute top-0 right-0 m-3 h-8 w-8 fill-transparent stroke-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="card-body px-3">
                <h2 className="card-title">Black Coffee</h2>
                <p>
                  To cut calories, save money, or enjoy the true taste of coffee
                  !
                </p>
                <div className="grid justify-items-end">
                  <div className="badge w-24">$20 cUSD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div
                  className="m-3 flex h-36 items-center justify-center rounded-lg bg-primary bg-cover"
                  style={{
                    backgroundImage: `url('https://www.bigc.co.th/blog/wp-content/uploads/2021/02/coffee-cup-coffee-beans-JDGKZJ2.jpg')`,
                  }}
                ></div>
                <div className="m-3 flex justify-between">
                  Espresso
                  <div className="badge w-24">$5 cUSD</div>
                </div>
              </div>
              <div>
                <div
                  className="m-3 flex h-36 items-center justify-center rounded-lg bg-primary bg-cover"
                  style={{
                    backgroundImage: `url('https://www.lindt.com.au/media/wysiwyg/Sea-Salt-and-espresso-464x356.jpg')`,
                  }}
                ></div>
                <div className="m-3 flex justify-between">
                  Mocha
                  <div className="badge w-24">$6 cUSD</div>
                </div>
              </div>
              <div>
                <div
                  className="m-3 flex h-36 items-center justify-center rounded-lg bg-primary bg-cover"
                  style={{
                    backgroundImage: `url('https://5.imimg.com/data5/SELLER/Default/2021/2/KT/IT/DK/27175478/rs-07501-jpg-500x500.jpg')`,
                  }}
                ></div>
                <div className="m-3 flex justify-between">
                  Macchiato
                  <div className="badge w-24">$7 cUSD</div>
                </div>
              </div>
              <div>
                <div
                  className="m-3 flex h-36 items-center justify-center rounded-lg bg-primary bg-cover"
                  style={{
                    backgroundImage: `url('https://cdn.hiconsumption.com/wp-content/uploads/2017/05/Best-Coffee-Shops-In-America-1.jpg')`,
                  }}
                ></div>
                <div className="m-3 flex justify-between">
                  Ristretto
                  <div className="badge w-24">$4 cUSD</div>
                </div>
              </div>
            </div>
            <div className="btn-group m-3 justify-center">
              <input
                type="radio"
                name="options"
                data-title="1"
                className="btn"
                checked
              />
              <input
                type="radio"
                name="options"
                data-title="2"
                className="btn"
              />
              <input
                type="radio"
                name="options"
                data-title=".."
                className="btn"
              />
              <input
                type="radio"
                name="options"
                data-title="9"
                className="btn"
              />
              <input
                type="radio"
                name="options"
                data-title="10"
                className="btn"
              />
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
