import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExplorePage from "./pages/ExplorePage";
import TopicPage from "./pages/TopicPage";
import QuizPage from "./pages/QuizPage";
import GamesPage from "./pages/GamesPage";
import GuessAnimalGame from "./pages/games/GuessAnimalGame";
import GuessPlantGame from "./pages/games/GuessPlantGame";
import WordScrambleGame from "./pages/games/WordScrambleGame";
import MemoryGame from "./pages/games/MemoryGame";
import HangmanGame from "./pages/games/HangmanGame";
import FactsPage from "./pages/FactsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/guess-animal" element={<GuessAnimalGame />} />
          <Route path="/games/guess-plant" element={<GuessPlantGame />} />
          <Route path="/games/word-scramble" element={<WordScrambleGame />} />
          <Route path="/games/memory" element={<MemoryGame />} />
          <Route path="/games/hangman" element={<HangmanGame />} />
          <Route path="/facts" element={<FactsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
