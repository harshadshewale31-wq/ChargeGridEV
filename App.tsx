import { useState, useEffect } from 'react';
import { ChargingSpot, SlotRequest } from './types';
import { getStoredSlotRequests } from './utils/storage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DiscoverySection } from './components/DiscoverySection';
import { SpotDetailsModal } from './components/SpotDetailsModal';
import { SlotRequestModal } from './components/SlotRequestModal';
import { MyRequestsModal } from './components/MyRequestsModal';
import { HowItWorks } from './components/HowItWorks';
import { ForDriversSection } from './components/ForDriversSection';
import { ForHostsSection } from './components/ForHostsSection';
import { EarlyAccessSection } from './components/EarlyAccessSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  // Modal states
  const [spotForDetails, setSpotForDetails] = useState<ChargingSpot | null>(null);
  const [spotForBooking, setSpotForBooking] = useState<ChargingSpot | null>(null);
  const [showMyRequests, setShowMyRequests] = useState(false);

  // Storage states
  const [myRequests, setMyRequests] = useState<SlotRequest[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load stored requests on mount
  useEffect(() => {
    setMyRequests(getStoredSlotRequests());
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleExploreSpots = () => {
    const el = document.getElementById('find-chargers');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBecomeHost = () => {
    const el = document.getElementById('for-hosts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenEarlyAccess = () => {
    const el = document.getElementById('early-access');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSlotRequestSubmitted = (created: SlotRequest) => {
    setMyRequests(getStoredSlotRequests());
    showToast(`Slot request demo submitted (${created.id})`);
  };

  const handleSimulateApprove = (id: string) => {
    try {
      const stored = getStoredSlotRequests();
      const updated = stored.map((r) =>
        r.id === id ? { ...r, status: 'Confirmed (Demo)' as const } : r
      );
      localStorage.setItem('evspot_slot_requests', JSON.stringify(updated));
      setMyRequests(updated);
      showToast(`Host approved demo request ${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearAllRequests = () => {
    localStorage.removeItem('evspot_slot_requests');
    setMyRequests([]);
    showToast('Cleared all demo requests');
  };

  return (
    <div className="min-h-screen bg-forest-950 text-slate-100 flex flex-col font-sans selection:bg-electric-500 selection:text-forest-950">
      {/* Sticky Navigation */}
      <Navbar
        onOpenEarlyAccess={handleOpenEarlyAccess}
        onOpenMyRequests={() => setShowMyRequests(true)}
        myRequestsCount={myRequests.length}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreSpots={handleExploreSpots}
          onBecomeHost={handleBecomeHost}
        />

        {/* Discovery & Search Section */}
        <DiscoverySection
          onViewSpotDetails={(spot) => setSpotForDetails(spot)}
          onRequestSlot={(spot) => setSpotForBooking(spot)}
        />

        {/* How It Works */}
        <HowItWorks />

        {/* For EV Drivers Section */}
        <ForDriversSection
          onFindSpotClick={handleExploreSpots}
        />

        {/* For Charging Hosts Section */}
        <ForHostsSection />

        {/* Early Access Registration Section */}
        <EarlyAccessSection
          onSuccessToast={(msg) => showToast(msg)}
        />

        {/* About & Mission Section */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <SpotDetailsModal
        spot={spotForDetails}
        onClose={() => setSpotForDetails(null)}
        onRequestSlot={(spot) => {
          setSpotForDetails(null);
          setSpotForBooking(spot);
        }}
      />

      <SlotRequestModal
        spot={spotForBooking}
        onClose={() => setSpotForBooking(null)}
        onRequestSubmitted={handleSlotRequestSubmitted}
      />

      {showMyRequests && (
        <MyRequestsModal
          requests={myRequests}
          onClose={() => setShowMyRequests(false)}
          onClearAll={handleClearAllRequests}
          onSimulateApprove={handleSimulateApprove}
        />
      )}

      {/* Toast Feedback */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
