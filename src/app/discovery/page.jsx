import Footer from "../components/footer";
import NavbarSearch from "../components/navbar_search";

export default function discovery() {
  return (
    <div>
      <NavbarSearch />
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div className="container mx-auto pb-80">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Get in touch with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ever have a question that just begs to be asked? We're here for
              you!
              <br />
              Unleash your curiosity, let's embark on a journey of discovery!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-2xl rounded-xl">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="max-w-2xl lg:max-w-5xl mx-auto">
            <div class="text-center">
              <p class=" text-gray-600 dark:text-gray-400">
                We'd love to talk about how we can help you.
              </p>
            </div>

            <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
              <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                <h2 class="mb-8 text-xl font-semibold text-gray-800 ">
                  Fill in the form
                </h2>

                <form>
                  <div class="grid gap-4">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label for="hs-firstname-contacts-1" class="sr-only">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-contacts-1"
                          id="hs-firstname-contacts-1"
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="First Name"
                        />
                      </div>

                      <div>
                        <label for="hs-lastname-contacts-1" class="sr-only">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="hs-lastname-contacts-1"
                          id="hs-lastname-contacts-1"
                          class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="hs-email-contacts-1" class="sr-only">
                        Email
                      </label>
                      <input
                        type="email"
                        name="hs-email-contacts-1"
                        id="hs-email-contacts-1"
                        autocomplete="email"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Email"
                      />
                    </div>

                    <div>
                      <label for="hs-phone-number-1" class="sr-only">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="hs-phone-number-1"
                        id="hs-phone-number-1"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <label for="hs-about-contacts-1" class="sr-only">
                        Details
                      </label>
                      <textarea
                        id="hs-about-contacts-1"
                        name="hs-about-contacts-1"
                        rows="4"
                        class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Details"
                      ></textarea>
                    </div>
                  </div>

                  <div class="mt-4 grid">
                    <button
                      type="submit"
                      class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Send inquiry
                    </button>
                  </div>

                  <div class="mt-3 text-center">
                    <p class="text-sm text-gray-500">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
              </div>

              <div class="divide-y divide-gray-200 dark:divide-gray-800">
                <div class="flex gap-x-7 py-6">
                  <svg
                    class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div class="grow">
                    <h3 class="font-semibold text-gray-800 ">Knowledgebase</h3>
                    <p class="mt-1 text-sm text-gray-500">
                      We're here to help with any questions or code.
                    </p>
                    <a
                      class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Contact support
                      <svg
                        class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="flex gap-x-7 py-6">
                  <svg
                    class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                  <div class="grow">
                    <h3 class="font-semibold text-gray-800 ">FAQ</h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Search our FAQ for answers to anything you might ask.
                    </p>
                    <a
                      class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      Visit FAQ
                      <svg
                        class="flex-shrink-0 w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class=" flex gap-x-7 py-6">
                  <svg
                    class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                    <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                  </svg>
                  <div class="grow">
                    <h3 class="font-semibold text-gray-800 ">
                      Contact us by email
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      If you wish to write us an email instead please use
                    </p>
                    <a
                      class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      example@site.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-80 mt-40">
        <Footer />
      </div>
    </div>
  );
}
