import logo from "../assets/logo.png";

export const menu = [
  { key: "اتصل بنا", id: "contact" },
  { key: "لماذا نحن؟", id: "whyUs" },
  { key: "الخدمات", id: "services" },
  { key: "عن الشركة", id: "about" },
  { key: "الرئيسية", id: "main" },
];
export const Header = () => {
  return (
    <header
      dir="ltr"
      class="top-0 sticky z-10 bg-gray-100  border border-b border-gray-200 shadow-md "
    >
      <nav
        class="flex items-center justify-between lg:px-8 container mx-auto text-3xl max-w-7xl"
        aria-label="Global"
      >
        <div class="flex lg:flex-1 ">
          <span class="sr-only">Your Company</span>
          <img
            class="h-[5rem] w-auto mix-blend-multiply p-0"
            src={logo}
            alt=""
          />
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12 text-xl">
          {menu.map((item) => {
            return (
              <a
                href={"#" + item.id}
                class=" font-semibold leading-6 text-gray-800 hover:text-gray-500 hover:-translate-y-px "
              >
                {item.key}{" "}
              </a>
            );
          })}
        </div>
      </nav>
      <div class="lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 z-10"></div>
        <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              {/* <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> */}
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  href="service"
                  class="-mx-3 block rounded-lg px-3 py-2  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="feature"
                  class="-mx-3 block rounded-lg px-3 py-2  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5  font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
