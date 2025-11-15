import { createRoot } from "react-dom/client";
import 'flag-icons/css/flag-icons.min.css';

import App from "./App.tsx";
import "./index.css";
import { registerServiceWorker } from "./utils/registerSW";

registerServiceWorker();

createRoot(document.getElementById("root")!).render(<App />);
