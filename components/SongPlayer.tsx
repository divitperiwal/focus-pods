"use client";

import React, { useState } from "react";
import LiveClock from "./LiveClock";
import ProgressLoader from "./ProgressLoader";
import { Button } from "./ui/button";
import { useMusicSetup } from "@/store/useMusicSetup";
import { TimeStringtoNumber } from "@/lib/utils";
import { useRouter } from "next/navigation";
import StartFocusDialog from "./StartFocusDialog";
import EndFocusDialog from "./EndFocusDialog";

const SongPlayer = () => {
  const router = useRouter();
  const { selectedDuration } = useMusicSetup();
  const duration = TimeStringtoNumber(selectedDuration || "1");

  const [isPlaying, setIsPlaying] = useState(false);
  const [showStartDialog, setShowStartDialog] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);

  const handleStartConfirmed = () => {
    setIsPlaying(true);
    setShowStartDialog(false);
  };

  const handleEndConfirmed = () => {
    setShowEndDialog(false);
    router.push("/");
  };

  return (
    <>
      <StartFocusDialog
        open={showStartDialog}
        onConfirm={handleStartConfirmed}
        onClose={() => setShowStartDialog(false)}
      />

      <EndFocusDialog
        open={showEndDialog}
        onConfirm={handleEndConfirmed}
        onClose={() => setShowEndDialog(false)}
      />

      <main className="flex flex-col items-center justify-between min-h-[calc(100vh-80px)] px-4 py-6">
        <section className="flex flex-col items-center justify-center w-[90%] h-[70vh] gap-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] rounded-xl">
          <LiveClock />
          {isPlaying && <ProgressLoader duration={duration * 60} />}
        </section>

        <div className="flex items-center justify-center w-full flex-grow">
          {!isPlaying ? (
            <Button
              className="h-12 w-44 rounded-full cursor-pointer"
              onClick={() => setShowStartDialog(true)}
            >
              ▶️ Start Focus
            </Button>
          ) : (
            <Button
              variant="destructive"
              className="h-12 w-44 rounded-full cursor-pointer"
              onClick={() => setShowEndDialog(true)}
            >
              ⏹️ End Focus
            </Button>
          )}
        </div>
      </main>
    </>
  );
};

export default SongPlayer;
