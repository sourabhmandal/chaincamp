import { Dialog, Transition } from '@headlessui/react';
import { SparklesIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { frontendRoute } from '../../constants/routes';

export default function QuitModal({ isOpen, setIsOpen }: any) {
  function closeModal() {
    setIsOpen(false);
  }

  const router = useRouter();

  return (
    <>
      <Transition
        appear
        show={isOpen}
        as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}>
          <div className="min-h-screen min-w-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-5xl p-4 my-8 overflow-hidden text-center justify-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <SparklesIcon className="h-12 m-4 mx-auto text-gray-300" />
                <Dialog.Title
                  as="h3"
                  className="text-4xl font-extrabold leading-6 text-gray-900">
                  Are you sure?
                </Dialog.Title>

                <div className="flex text-center w-full text-gray-600 items-center justify-center my-12">
                  Closing the quiz will remove all your current progress
                </div>

                <div className="mt-4 flex justify-center items-center">
                  <button
                    type="button"
                    className="mr-3 px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}>
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                    onClick={() => router.push(frontendRoute.LANDING)}>
                    Quit
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
