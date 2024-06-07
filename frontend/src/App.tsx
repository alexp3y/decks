import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import OverviewScreen from './components/OverviewScreen';
import DeckScreen from './components/DeckScreen';
import { DeckProvider } from './DeckDataContext';
import EditDeckScreen from './components/EditDeckScreen';
import HomeScreen from './components/HomeScreen';

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
            <Route index element={<HomeScreen />} />
            <Route path="/decks">
              <Route index element={<OverviewScreen />} />
              <Route path="/decks/:deckId" element={<DeckScreen />} />
              <Route path="/decks/:deckId/edit" element={<EditDeckScreen />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </DeckProvider>
  );
}
