import { Dialog, Transition } from '@headlessui/react';
import { SparklesIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { frontendRoute } from '../../constants/routes';
import { saveResultToDB } from '../../data/calculateResult';
import toast, { Toaster } from 'react-hot-toast';

export default function ResultModal({
  isOpen,
  setIsOpen,
  correct,
  wrong,
  unattempted
}: any) {
  const router = useRouter();
  function closeModal() {
    setIsOpen(false);
    router.push(frontendRoute.QUIZ);
  }

  const session = useSession();

  useEffect(() => {
    if (isOpen) {
      (async () => {
        if (correct !== 0) {
          await saveResultToDB(
            correct,
            wrong,
            unattempted,
            session.data?.user?.email!
          );
          toast.success('saved result');
        } else {
          toast.error('unable to save result. please login');
        }
      })();
    }

    return () => {};
  }, [isOpen, correct, wrong, session, unattempted]);

  return (
    <>
      <Toaster />
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
                  className="text-lg font-medium leading-6 text-gray-900">
                  Your Quiz Score
                </Dialog.Title>
                <div className="justify-center my-8 w-full grid grid-cols-5 gap-3">
                  <p></p>
                  <p className="bg-green-600 rounded-full w-40 h-40 text-center flex flex-col items-center justify-center text-white ring-8 ring-inset ring-white border-2 border-green-500">
                    <span className="font-bold text-3xl">{correct}</span>
                    <hr className="text-white w-14 border bg-white font-bold" />
                    <span className="font-bold">100</span>
                  </p>
                  <p className="bg-red-500 rounded-full w-40 h-40 text-center flex flex-col items-center justify-center text-white ring-8 ring-inset ring-white border-2 border-red-500">
                    <span className="font-bold text-3xl">{wrong}</span>
                    <hr className="text-white w-14 border bg-white font-bold" />
                    <span className="font-bold">100</span>
                  </p>
                  <p className="bg-yellow-400 rounded-full w-40 h-40 text-center flex flex-col items-center justify-center text-white ring-8 ring-inset ring-white border-2 border-yellow-400">
                    <span className="font-bold text-3xl">{unattempted}</span>
                    <hr className="text-white w-14 border bg-white font-bold" />
                    <span className="font-bold">100</span>
                  </p>
                </div>

                <div className="mt-4 flex justify-center items-center">
                  <button
                    type="button"
                    className="mr-3 px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}>
                    Close
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
