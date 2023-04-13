import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";
import { initializeGA } from "./components/TagManager/GoogleTagManager";

export default function App() {
  initializeGA();

  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
