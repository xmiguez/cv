"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrintToolbar() {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="hidden h-8 gap-1.5 shadow-sm print:hidden md:inline-flex"
      onClick={() => window.print()}
      aria-label="Abrir impresión o guardar como PDF"
    >
      <Printer className="h-3.5 w-3.5" aria-hidden />
      Imprimir / PDF
    </Button>
  );
}
