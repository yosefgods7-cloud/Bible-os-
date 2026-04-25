/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Reader } from '@/pages/Reader';
import { Roadmap } from '@/pages/Roadmap';
import { Habits } from '@/pages/Habits';
import { More } from '@/pages/More';
import { Journal } from '@/pages/Journal';
import { OfflineDictionary } from '@/pages/OfflineDictionary';
import { AiDeepDive } from '@/pages/AiDeepDive';
import { Memorize } from '@/pages/Memorize';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="habits" element={<Habits />} />
          <Route path="more" element={<More />} />
          <Route path="journal" element={<Journal />} />
          <Route path="dictionary" element={<OfflineDictionary />} />
          <Route path="ai-deep-dive" element={<AiDeepDive />} />
          <Route path="memorize" element={<Memorize />} />
        </Route>
        {/* Fullscreen pages like Reader */}
        <Route path="/read" element={<Reader />} />
      </Routes>
    </Router>
  );
}
