import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";

const StartFocusDialog = ({
  open,
  onConfirm,
  onClose,
}: {
  open: boolean;
  onConfirm: () => void;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-lg">🎯 Ready to Focus?</DialogTitle>
        </DialogHeader>
        <p className="text-gray-500 mb-4">
          Once started, you can't pause or stop midway. Stay focused. You got
          this!
        </p>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="cursor-pointer">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="cursor-pointer">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StartFocusDialog;
