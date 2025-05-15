import { Separator } from "@/components/ui/separator";
import {
  BicepsFlexed,
  BriefcaseBusiness,
  FileBadge2,
  Globe,
  GraduationCap,
  Languages,
  LucideIcon,
  Share2,
} from "lucide-react";
import { Fragment } from "react";
import { MultipleDragList, ResumeArrayKeys } from "../multiple-drag-list";

type SectionKey = {
  formKey: ResumeArrayKeys;
  title: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
};

export const MultiplesSections = () => {
  const sectionsKeys: SectionKey[] = [
    {
      formKey: "socialMedias",
      title: "Redes Sociais",
      icon: Share2,
      titleKey: "name",
      descriptionKey: "username",
    },
    {
      formKey: "experiences",
      title: "Experiências",
      icon: BriefcaseBusiness,
      titleKey: "company",
      descriptionKey: "position",
    },
    {
      formKey: "educations",
      title: "Educação",
      icon: GraduationCap,
      titleKey: "institution",
      descriptionKey: "degree",
    },
    {
      formKey: "skills",
      title: "Habilidades",
      icon: BicepsFlexed,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "languages",
      title: "Idiomas",
      icon: Languages,
      titleKey: "name",
      descriptionKey: "description",
    },
    {
      formKey: "certifications",
      title: "Certificações",
      icon: FileBadge2,
      titleKey: "name",
      descriptionKey: "institution",
    },
    {
      formKey: "projects",
      title: "Projetos",
      icon: Globe,
      titleKey: "name",
      descriptionKey: "description",
    },
  ];

  return (
    <div>
      {sectionsKeys.map((section) => (
        <Fragment key={`multiples-section=${section.title}`}>
          <Separator className="my-5" />
          <MultipleDragList
            data={section}
            onAdd={() => {}}
            onEdit={(index) => {}}
          />
        </Fragment>
      ))}
    </div>
  );
};