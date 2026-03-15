import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ChatBot from "@/components/ChatBot";
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
import LoginPage from "./pages/LoginPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import ScientistsPage from "./pages/ScientistsPage";
import TrueFalseGame from "./pages/games/TrueFalseGame";
import MatchingGame from "./pages/games/MatchingGame";
import MindMapsPage from "./pages/MindMapsPage";
import FlowchartsPage from "./pages/FlowchartsPage";
import SpeciesExplorer from "./pages/SpeciesExplorer";
import ExamPrepPage from "./pages/ExamPrepPage";
import GlossaryPage from "./pages/GlossaryPage";
import EcosystemExplorer from "./pages/EcosystemExplorer";
import DownloadCenter from "./pages/DownloadCenter";
import BiologyChallenges from "./pages/BiologyChallenges";
import DashboardPage from "./pages/DashboardPage";
import AnimalSoundLibrary from "./pages/AnimalSoundLibrary";
import PuzzleZone from "./pages/PuzzleZone";
import FoodChainBuilder from "./pages/puzzles/FoodChainBuilder";
import OrganMatching from "./pages/puzzles/OrganMatching";
import BiologyCrossword from "./pages/puzzles/BiologyCrossword";
import CellStructureMatching from "./pages/puzzles/CellStructureMatching";
import AIStudyAssistant from "./pages/AIStudyAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/topic/:id" element={<TopicPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/guess-animal" element={<GuessAnimalGame />} />
            <Route path="/games/guess-plant" element={<GuessPlantGame />} />
            <Route path="/games/word-scramble" element={<WordScrambleGame />} />
            <Route path="/games/memory" element={<MemoryGame />} />
            <Route path="/games/hangman" element={<HangmanGame />} />
            <Route path="/games/true-false" element={<TrueFalseGame />} />
            <Route path="/games/matching" element={<MatchingGame />} />
            <Route path="/facts" element={<FactsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/scientists" element={<ScientistsPage />} />
            <Route path="/mind-maps" element={<MindMapsPage />} />
            <Route path="/flowcharts" element={<FlowchartsPage />} />
            <Route path="/species-explorer" element={<SpeciesExplorer />} />
            <Route path="/exam-prep" element={<ExamPrepPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/ecosystem-explorer" element={<EcosystemExplorer />} />
            <Route path="/download-center" element={<DownloadCenter />} />
            <Route path="/challenges" element={<BiologyChallenges />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/animal-sounds" element={<AnimalSoundLibrary />} />
            <Route path="/puzzle-zone" element={<PuzzleZone />} />
            <Route path="/puzzle-zone/food-chain" element={<FoodChainBuilder />} />
            <Route path="/puzzle-zone/organ-matching" element={<OrganMatching />} />
            <Route path="/puzzle-zone/crossword" element={<BiologyCrossword />} />
            <Route path="/puzzle-zone/cell-structure" element={<CellStructureMatching />} />
            <Route path="/ai-assistant" element={<AIStudyAssistant />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
