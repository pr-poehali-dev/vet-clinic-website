import React from "react";
import { Calendar, PhoneCall } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AppointmentForm from "@/components/AppointmentForm";

interface AppointmentDialogProps {
  buttonText?: string;
  variant?: "default" | "secondary" | "outline" | "destructive" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  fullWidth?: boolean;
  icon?: boolean;
}

const AppointmentDialog: React.FC<AppointmentDialogProps> = ({
  buttonText = "Записаться на приём",
  variant = "default",
  size = "default",
  className = "",
  fullWidth = false,
  icon = true,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant={variant} 
          size={size} 
          className={`${fullWidth ? 'w-full' : ''} ${className}`}
        >
          {icon && <Calendar className="w-4 h-4" />}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Запись на приём</DialogTitle>
          <DialogDescription>
            Заполните форму ниже, чтобы записаться на консультацию к нашим специалистам.
            Или позвоните нам: <a href="tel:+74991234567" className="text-primary underline flex items-center gap-1 inline-flex mt-1"><PhoneCall className="h-3 w-3" /> +7 (499) 123-45-67</a>
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
