import { Dialog, DialogTitle } from "@headlessui/react";

import { useWeb3 } from "../contexts/useWeb3";

export default function AddCashDeepLinkDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

  const goToDeepLink = async () => {
    const deepLink = 'https://minipay.opera.com/add_cash';
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
            No balance
          </DialogTitle>
          <div className="mt-2">
            <p className="text-sm text-gray-500">You have zero balance! Add some to your wallet.</p>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={async () => await goToDeepLink()}
            >
              Add Cash
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
