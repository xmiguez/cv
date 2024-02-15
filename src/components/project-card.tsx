import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image from "next/image";

import strabag from "@/images/Strabag.jpg";
import solvay1 from "@/images/Solvay1.jpg";
import solvay from "@/images/Solvay.jpg";
import sk from "@/images/Sk.jpeg";
import sk1 from "@/images/Sk1.jpeg";
import mapa from "@/images/Mapa.jpeg";
import mapa1 from "@/images/Mapa1.jpeg";
import aeros from "@/images/Aeros.jpeg";

export function ProjectCard() {
  return (
    <>
      <Card className="flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              STRABAG{" "}
              <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                2023
              </Badge>
            </CardTitle>
            <CardDescription className="font-mono text-xs">
              Masaryčka Building B - 5th Floor
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            <Image src={strabag} height={420} alt="logo" />
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              Sigdo Koppers{" "}
              <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                2023
              </Badge>
            </CardTitle>
            <CardDescription className="font-mono text-xs">
              Contrato Vertical Electromecánico 5to Molino
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            <Image src={sk} alt="logo" />
            <Image src={sk1} alt="logo" />
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              CAVCO{" "}
              <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                2022
              </Badge>
            </CardTitle>
            <CardDescription className="font-mono text-xs">
              Montaje Mecánico de Planta de Oxigeno V-80
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            <Image src={solvay1} alt="logo" />
            <Image src={solvay} alt="logo" />
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              CAVCO{" "}
              <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                2021
              </Badge>
            </CardTitle>
            <CardDescription className="font-mono text-xs">
              Obras Civiles, Montaje de nuevos aeroenfriadores E-1411 E/F y
              trabajos menores
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            <Image src={aeros} alt="logo" />
          </div>
        </CardContent>
      </Card>
      <Card className="flex flex-col overflow-hidden border border-muted p-3">
        <CardHeader className="">
          <div className="space-y-1">
            <CardTitle className="text-base">
              CAVCO{" "}
              <Badge className="px-1 py-0 text-[10px]" variant="secondary">
                2020
              </Badge>
            </CardTitle>
            <CardDescription className="font-mono text-xs">
              Montaje Electromecánico de una Planta De Oxígeno
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            <Image src={mapa} alt="logo" />
            <Image src={mapa1} alt="logo" />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
