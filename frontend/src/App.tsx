import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import OverviewScreen from './components/OverviewScreen';
import DeckScreen from './components/DeckScreen';
import { DeckProvider } from './DeckContext';
import EditDeckScreen from './components/EditDeckScreen';

export default function App() {
  return (
    <DeckProvider>
      <Routes>
        <Route
          element={
            // <ProtectedRoute>
            <Layout />
            // </ProtectedRoute>
            // <Navbar />
          }
        >
          <Route path="/">
            <Route index element={<OverviewScreen />} />
            <Route path="/:deckId" element={<DeckScreen />} />
            <Route path="/:deckId/edit" element={<EditDeckScreen />} />
          </Route>
        </Route>
      </Routes>
    </DeckProvider>
  );
}
