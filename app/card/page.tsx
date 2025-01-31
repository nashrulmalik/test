import { CardDemo } from "@/components/CardDemo";
import { CardWithForm } from "@/components/CardWithForm";

export default function CardPage() {
    return (
        <div className="flex justify-center h-dvh items-center gap-16">
            <CardWithForm />
            <CardDemo />
        </div>
        
    );
}
