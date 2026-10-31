import { PHONES, wa } from "../data/siteData";

const CARD_IMAGES = {
  "web development": "photo-1498050108023-c5249f4df085",
  "database design and development": "photo-1555949963-ff9fe0c870eb",
  "data analysis": "photo-1551288049-bebda4e38f71",
  "programming with python and javascript": "photo-1515879218367-8466d910aaa4",
  "graphic designing": "photo-1541701494587-cb58502866ab",
  "microsoft office applications": "photo-1633412802994-5c058f151b66",
  "windows server administration": "photo-1558494949-ef010cbdcc31",
  "os installation": "photo-1633412802994-5c058f151b66",
  "software maintenance and troubleshooting":
    "photo-1581092918056-0c4c3acd3789",
  networking: "photo-1558494949-ef010cbdcc31",
};

const CATEGORY_IMAGES = {
  course: "photo-1516321318423-f06f85e504b3",
  service: "photo-1581092918056-0c4c3acd3789",
};

export default function Card({ item }) {
  const isWebDevelopmentCard = item.title.toLowerCase() === "web development";
  const isOfficeCard =
    item.title.toLowerCase() === "microsoft office applications";
  const isGraphicDesignCard = item.title.toLowerCase() === "graphic designing";
  const isDatabaseCard =
    item.title.toLowerCase() === "database design and development";
  const isOsInstallationCard = item.title.toLowerCase() === "os installation";
  const isWindowsServerCard =
    item.title.toLowerCase() === "windows server administration";
  const isSoftwareMaintenanceCard =
    item.title.toLowerCase() === "software maintenance and troubleshooting";
  const isNetworkingCard = item.title.toLowerCase() === "networking";
  const image =
    CARD_IMAGES[item.title.toLowerCase()] ||
    CATEGORY_IMAGES[item.category] ||
    CATEGORY_IMAGES.service;
  const localImage = isWebDevelopmentCard
    ? "/Webdevelopment.jpeg"
    : isOfficeCard
      ? "/Microsoft OfficeApplication.jpeg"
      : isGraphicDesignCard
        ? "/GraphicDesign.jpeg"
        : isDatabaseCard
          ? "/Database Design andApplications.jpeg"
          : isOsInstallationCard
            ? "/OperatingSystemsInstallation.jpg"
            : isWindowsServerCard
              ? "/Windows serveradministration.jpg"
              : isSoftwareMaintenanceCard
                ? "/software maintenance andtroublshooting.webp"
                : isNetworkingCard
                  ? "/Networking.jpg"
                  : null;
  const imageUrl = localImage ||
    `https://images.unsplash.com/${image}?auto=format&fit=crop&w=640&q=65`;

  return (
    <article className="card">
      <img
        className="card-image"
        src={imageUrl}
        srcSet={
          localImage
            ? undefined
            : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=480&q=65 480w, https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=65 900w`
        }
        sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="card-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a
          href={wa(PHONES[0], `Hello, I am interested in: ${item.title}`)}
          target="_blank"
          rel="noreferrer"
        >
          Ask on WhatsApp
        </a>
      </div>
    </article>
  );
}
