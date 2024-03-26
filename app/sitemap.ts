import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

export default async function sitemap(
  prisma: any,
): Promise<MetadataRoute.Sitemap> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
    take: 1,
  });

  return [
    {
      url: "https://precedent.dev",
      lastModified: new Date(),
    },
    ...users.map((user: { id: any }) => ({
      url: `https://precedent.dev/${user.id}`,
      lastModified: new Date(),
    })),
  ];
}
