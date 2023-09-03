import { ElectronHandler, ToastifyHandler } from 'main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    toastify: ToastifyHandler;
  }
}

export {};
