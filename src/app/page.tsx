import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { ModeToggle } from "@/components/switch";
import { PrintToolbar } from "@/components/print-toolbar";
import Image from "next/image";

import cv from "@/images/cv.jpg";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto min-h-0 scroll-my-12 overflow-auto p-4 print:overflow-visible print:p-0 print:shadow-none md:p-8">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:max-w-none print:space-y-6 print:px-0">
        <div className="flex items-center justify-between gap-4 border-b border-transparent pb-6 print:border-border print:pb-5">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className=" text-pretty pr-4 font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              34 años, Soltero.
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <a key={social.name} href={social.url} className="underline">
                  {social.name}: {social.url}
                </a>
              ))}
            </div>
          </div>

          <Avatar className="h-32 w-[100px]">
            <Image src={cv} alt="logo" />
          </Avatar>
        </div>
        <Section>
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Sobre mi
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Experiencia
          </h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Educación
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Cursos y prácticas
          </h2>
          {RESUME_DATA.cursos.map((cursos) => {
            return (
              <Card key={cursos.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {cursos.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {cursos.start}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{cursos.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Software
          </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Idiomas
          </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.idiomas.map((idiomas) => {
              return <Badge key={idiomas}>{idiomas}</Badge>;
            })}
          </div>
        </Section>
        <Section>
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Otros
          </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.otros.map((otros) => {
              return <Badge key={otros}>{otros}</Badge>;
            })}
          </div>
        </Section>
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="border-b border-transparent pb-1 text-xl font-bold print:border-border print:pb-2">
            Galería
          </h2>
          <div className="print-gallery -mx-3 grid grid-cols-1 gap-3 print:grid-cols-2 print:gap-3 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard />
          </div>
        </Section>
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 print:hidden md:right-10">
          <PrintToolbar />
          <ModeToggle />
        </div>
      </section>
    </main>
  );
}
