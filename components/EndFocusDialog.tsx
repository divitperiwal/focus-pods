"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";

interface EndFocusDialogProps {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const moods = [
  { emoji: "😞", label: "Very Unproductive" },
  { emoji: "😐", label: "Could Be Better" },
  { emoji: "🙂", label: "Neutral" },
  { emoji: "😊", label: "Satisfied" },
  { emoji: "😄", label: "Highly Focused" },
];

const EndFocusDialog = ({ open, onConfirm, onClose } : EndFocusDialogProps) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <DialogTitle className="text-lg font-bold">
            🧘‍♂️ How was your session?
          </DialogTitle>
        </div>

        <div className="flex items-center justify-between gap-3 py-4">
          {moods.map((mood, index) => (
            <button
              key={index}
              onClick={() => setSelectedMood(index)}
              className={`text-3xl transition transform hover:scale-125 ${
                selectedMood === index ? "scale-125" : "opacity-60"
              }`}
              title={mood.label}
            >
              {mood.emoji}
            </button>
          ))}
        </div>

        <DialogFooter className="mt-4 flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={selectedMood === null}
            className="cursor-pointer"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EndFocusDialog;
