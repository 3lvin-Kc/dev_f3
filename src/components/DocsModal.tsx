import { Modal } from "@/components/ui/modal";

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsModal = ({ isOpen, onClose }: DocsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Documentation" size="md">
      <div className="space-y-6 font-mono">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">F3 - Flutter Frontend Generator</h1>
        </div>

        {/* About Project Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">About Project</h2>
          
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Hello! We are building something amazing for Flutter developers. This is platform where you can give prompt in any language you want, and it will make beautiful Flutter UI for you. Like magic but real!
            </p>
            
            <p>
              Our team is working hard on this idea. You just tell what you want in simple words, and boom - Flutter code appears. No need to write boring UI code anymore.
            </p>
          </div>
        </div>

        {/* Team Note */}
        <div className="pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Building with ❤️ by the F3 team
          </p>
        </div>
      </div>
    </Modal>
  );
};
